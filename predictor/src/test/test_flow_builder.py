import unittest

import matplotlib.pyplot as plt
import numpy as np

from core.predictors.constant_predictor import ConstantPredictor
from core.flow_builder import FlowBuilder
from core.single_edge_distributor import SingleEdgeDistributor
from test.sample_network import build_sample_network


class TestFlowBuilder(unittest.TestCase):
    """
    Interesting observations:

    If we take SingleEdgeDistributor together with LinearPredictor (with .005 precision),
    the resulting flow is weirdly glitching away from the expected IDE equilbrium.
    With .0025 precision, the WaterfillingDistribution behaves the same.

    With .003 precision, results are different again for SingleEdgeDistributor...

    LinearPredictor without any regularization seems quite unstable.
    """

    def test_flow_builder(self):
        network = build_sample_network()
        network.add_commodity(0, 2, 3.8, 0)

        predictor = ConstantPredictor(network)
        distributor = SingleEdgeDistributor(network)
        max_extension_length = 1.
        horizon = 35
        flow_builder = FlowBuilder(
            network,
            predictor,
            distributor,
            max_extension_length
        )
        generator = flow_builder.build_flow()
        flow = None
        while flow is None or flow.times[-1] < horizon:
            flow = next(generator)
        queues = np.asarray(flow.queues)
        for e in range(len(network.graph.edges)):
            plt.plot(flow.times[:], queues[:, e], label=str(e))
        plt.legend()
        plt.grid(which='both')
        plt.title(f"{predictor.type()}, {distributor.type()}, α={max_extension_length}")
        plt.show()
