import os

from core.predictors.constant_predictor import ConstantPredictor
from core.predictors.expanded_linear_regression_predictor import ExpandedLinearRegressionPredictor
from core.predictors.linear_predictor import LinearPredictor
from core.predictors.predictor_type import PredictorType
from core.predictors.reg_linear_predictor import RegularizedLinearPredictor
from core.predictors.zero_predictor import ZeroPredictor
from eval.evaluate_network import eval_network
from importer.csv_importer import network_from_csv, add_demands_to_network
from importer.sioux_falls_importer import DemandsRangeBuilder
from ml.SKLearnLinRegExpandedModel import train_expanded_model
from ml.build_test_flows import build_flows
from ml.generate_queues import expanded_queues_from_flows

scenario_dir = "../../out/tokyo-scenario"
network_path = os.path.join(scenario_dir, "network.pickle")
flows_dir = os.path.join(scenario_dir, "flows")
weka_models_dir = os.path.join(scenario_dir, "weka/models")
expanded_per_edge_dir = os.path.join(scenario_dir, "expanded-queues-per-edge")
models_per_edge_dir = os.path.join(scenario_dir, "models-per-edge")
queues_dir = os.path.join(scenario_dir, "queues")
eval_dir = os.path.join(scenario_dir, "eval")
sklearn_full_net_model = os.path.join(scenario_dir, "sklearn-full-net-model.pickle")

demands_range_builder: DemandsRangeBuilder = lambda net: (min(net.capacity), max(net.capacity))
reroute_interval = 2.5
inflow_horizon = 25.
horizon = 100
past_timesteps = 20
future_timesteps = 20
pred_horizon = 20.


def prepare_scenario():
    os.makedirs(scenario_dir, exist_ok=True)
    network = network_from_csv(
        "/home/michael/Nextcloud/Universität/2021/softwareproject/data/from-kostas/tokyo_tiny.arcs"
    )
    add_demands_to_network(
        network,
        "/home/michael/Nextcloud/Universität/2021/softwareproject/data/from-kostas/tokyo_tiny.demands",
        inflow_horizon=inflow_horizon,
        use_default_demands=True
    )
    network.to_file(network_path)
    demands_range = demands_range_builder(network)
    build_flows(network_path, flows_dir, number_flows=50, horizon=horizon, reroute_interval=reroute_interval,
                demands_range=demands_range)

    expanded_queues_from_flows(network_path, past_timesteps, 1., future_timesteps, flows_dir, scenario_dir, horizon,
                               sample_step=10)
    train_expanded_model(os.path.join(scenario_dir, "expanded_queues.csv.gz"), scenario_dir, past_timesteps,
                         future_timesteps)
    # expanded_queues_from_flows_per_edge(network_path, past_timesteps, 1., future_timesteps, flows_dir,
    #                                    expanded_per_edge_dir, horizon, average=False, sample_step=1)
    # train_per_edge_model(network_path, expanded_per_edge_dir, models_per_edge_dir, past_timesteps, future_timesteps)


def eval_scenario():
    eval_network(
        network_path,
        eval_dir,
        inflow_horizon,
        reroute_interval,
        horizon,
        random_commodities=True,
        build_predictors=lambda network: {
            PredictorType.ZERO: ZeroPredictor(network),
            PredictorType.CONSTANT: ConstantPredictor(network),
            PredictorType.LINEAR: LinearPredictor(network, pred_horizon),
            PredictorType.REGULARIZED_LINEAR: RegularizedLinearPredictor(network, pred_horizon, delta=1.),
            PredictorType.MACHINE_LEARNING: ExpandedLinearRegressionPredictor.from_scikit_model(
                network,
                os.path.join(scenario_dir, "expanded-model.pickle"),
                past_timesteps,
                future_timesteps
            )
        },
        check_for_optimizations=False)


if __name__ == "__main__":
    prepare_scenario()
    eval_scenario()