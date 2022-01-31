/*! For license information please see deck.js.LICENSE.txt */
              \begin{cases}
              = u_i(\theta), & \text{if $v = s_i$}, \\
              = 0, & \text{if $v \notin \{s_i, t_i \}$}, \\
              \leq 0, & \text{if $v = t_i$}.
              \end{cases}`}),t.createElement(Km,{text:"Queues operate at capacity:",formula:cm`f_e^-(\theta) = \begin{cases}
            \nu_e,&\text{if $q_e(\theta - \tau_e) > 0$,} \\
            \min\{ f_e^+(\theta- \tau_e), \nu_e \}, &\text{otherwise.}
          \end{cases}`}),t.createElement(Km,{text:"Capacity is split fairly:",formula:cm`
                f_{i,e}^-(\theta) = f_e^-(\theta) \cdot \frac{f_{i,e}^+(\xi)}{f_e^+(\xi)}
                \quad\text{for $\xi\coloneqq \min\{\xi\leq\theta \mid \xi + \tau_e + \frac{q_e(\xi)}{\nu_e} = \theta \}$ with $f_e^+(\xi) > 0$}`}))))))),t.createElement(Um,{section:"I. The Flow Model"},t.createElement(Dm,{textAlign:"left"},"The Behavioral Model"),t.createElement(Ba,null,t.createElement(Ns,{margin:"0 32px"},t.createElement($o,null,t.createElement(Lm,null,"The ",t.createElement("i",null,"exit time")," when entering edge ",lm`e`," at time ",lm`\theta`," is given by ",lm`T_e(\theta)\coloneqq \theta + \tau_e + \frac{q_e(\theta)}{\nu_e}`)),t.createElement($o,null,t.createElement(Lm,null,"Each commodity ",lm`i\in I`," is equipped with a set of ",t.createElement("i",null,"predictors")," ",cm`
          \hat q_{i,e} : \mathbb R_{\geq0} \times \mathbb R_{\geq 0} \times C(\mathbb R_{\geq0}, \mathbb R_{\geq0})^{E} \to \mathbb R_{\geq 0},
          \quad
          (\theta, \bar\theta, q)\mapsto\hat q_{i,e}(\theta; \bar\theta; q),`,"where ",lm`\hat q_{i,e}(\theta; \bar\theta; q)`," describes the ",t.createElement("i",null,"predicted queue length "),"of edge ",lm`e`," at time ",lm`\theta`," as predicted at time ",lm`\bar\theta`," using the historical queue functions ",lm`q`,".")),t.createElement($o,null,t.createElement(Lm,null,"The ",t.createElement("i",null,"predicted exit time")," when entering an edge ",lm`e`," at time ",lm`\theta`," is given by ",lm`\hat T_{i,e}(\theta; \bar\theta; q)\coloneqq \theta + \tau_e + \frac{\hat q_{i,e}(\theta; \bar\theta, q)}{\nu_e}`,".")),t.createElement($o,null,t.createElement(Lm,null,"The ",t.createElement("i",null,"predicted exit time")," when entering a path ",lm`P=(e_1, \dots, e_k)`," at time ",lm`\theta`," is given by",cm`\hat T_{i,P}(\theta; \bar\theta; q)
            \coloneqq \left(\hat T_{e_k}(\,\boldsymbol{\cdot}\,;\bar\theta;q) \circ \cdots \circ \hat T_{e_1}(\,\boldsymbol{\cdot}\,;\bar\theta;q)\right)(\theta).
            `)),t.createElement($o,null,t.createElement(Lm,null,"The ",t.createElement("i",null,"predicted earliest arrival")," at ",lm`t_i`," when starting at time ",lm`\theta`," at ",lm`v`," is given by",cm`\hat l_{i,v}(\theta; \bar\theta; q)
            \coloneqq \min_{P\text{ simple } v\text{-}t_i\text{-path}} \hat T_{i,P}(\theta;\bar\theta;q).
            `))),t.createElement($o,null,t.createElement(Ym,null,"A pair ",lm`(\hat q, f)`," of predictors ",lm`\hat q = (\hat q_{i,e})_{i\in I, e\in E}`," and a dynamic flow ",lm`f`," is a ",t.createElement("i",null,"dynamic prediction equilibrium (DPE)"),", if for all edges ",lm`e=vw`," and all ",lm`\theta \geq 0`," it holds that",cm`
              f^+_{i,e}(\theta) > 0 \implies \hat l_{i,v}(\theta;\theta; q) = \hat l_{i,w}(\hat T_{i,e}( \theta;\theta; q ); \theta; q).
          `)))),t.createElement(Um,{section:"I. The Flow Model"},t.createElement(Xm,null,"A dynamic prediction equilibrium.",t.createElement(Ns,null,t.createElement($o,null,t.createElement(Lm,null,"We are given a single commodity with network inflow rate ",lm`u\equiv 2`," and predictor ",lm`\hat q_{e}(\theta;\bar\theta; q) \coloneqq q_e(\bar\theta) + \partial_- q_e(\bar\theta)\cdot (\theta - \bar\theta)`,".")),t.createElement($o,null,t.createElement(Lm,null,"Only edge ",lm`ut`," can build a queue. For other edges ",lm`e\neq uv`," we have ",lm`\hat q_{i,e}(\theta;\bar\theta;q) = 0`)),t.createElement($o,null,t.createElement(Lm,null,"Particles starting at ",lm`s`," need to decide between paths ",lm`sut`," and ",lm`svwt`,".")),t.createElement($o,null,t.createElement(Lm,null,"We have ",lm`\hat T_{svwt}(\theta;\bar\theta; q) = \theta + 4`," and ",lm`\hat T_{sut}(\theta;\bar\theta; q) = \theta + 2 + \hat q_{i,ut}(\theta + 1;\bar\theta; q)`,".")))),t.createElement(Im,null)),t.createElement(Um,{intro:!0,section:"II. Existence of DPE"},t.createElement(Dm,{textAlign:"left"},"Example for Nonexistence"),t.createElement(Xm,null,"We are given",t.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},t.createElement("div",null,t.createElement(Ns,null,t.createElement($o,null,t.createElement(Lm,null,"a single commodity with network inflow rate ",lm`u \equiv 2`," with predictor")),t.createElement($o,null,t.createElement(Lm,null,lm`
            \hat q_e(\theta;\bar\theta; q) \coloneqq \begin{cases}
                q_e(\bar\theta),& \text{if $q_e(\bar\theta) < 1$}, \\
                2,              & \text{otherwise.}
            \end{cases}
        `)))),t.createElement("div",{style:{height:"200px"}},t.createElement(sm,null))),t.createElement($o,null,"Starting from time ",lm`\theta = 1`,", there is no possible equilibrium flow split.")),t.createElement($o,null,t.createElement(Wm,null,"When do dynamic prediction equilibria exist?"))),t.createElement(Um,{section:"II. Existence of DPE"},t.createElement(Dm,{textAlign:"left"},"Sufficient Conditions for the Existence of DPEs"),t.createElement($o,null,t.createElement(Ym,null,"A predictor ",lm`\hat q_{i,e}`," is ",t.createElement("i",null,"continuous"),", if ",cm`
      \hat q_{i,e} : \mathbb R_{\geq0} \times \mathbb R_{\geq 0} \times C(\mathbb R_{\geq0}, \mathbb R_{\geq0})^{E} \to \mathbb R_{\geq 0},
      `," is continuous from the product topology, where all ",lm` C(\mathbb R_{\geq0}, \mathbb R_{\geq0})`," are equipped with the topology induced by the uniform norm, to ",lm`\R_{\geq 0}`,".")),t.createElement($o,null,t.createElement(Ym,null,"A predictor ",lm`\hat q_{i,e}`," is ",t.createElement("i",null,"oblivious"),", if for all ",lm`\bar\theta \in\mathbb R_{\geq0}`," it holds ",lm`
        \quad\forall q,q'\colon\quad
    q_{\hspace{.07em}\vert\hspace{.07em}[0, \bar\theta]^E} = q'_{\hspace{.07em}\vert\hspace{.07em}[0, \bar\theta]^E}
    \implies
    \hat q_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta;q)=\hat q_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta;q').
        `)),t.createElement($o,null,t.createElement(Ym,null,"A predictor ",lm`\hat q_{i,e}`," ",t.createElement("i",null,"respects FIFO"),", if ",lm`\hat T_{i,e}(\,\boldsymbol{\cdot}\,;\bar\theta, q)`," is non-decreasing for all ",lm`\bar\theta\in \R_{\geq0}`," and ",lm` q\in C(\mathbb R_{\geq0},\mathbb R_{\geq0})^{E}`,".")),t.createElement($o,null,t.createElement(Zm,null,"If all network inflow rates ",lm`u_i`," are bounded and all predictors ",lm`\hat q_{i, e}`," are continuous, oblivious, and respect FIFO, then there exists a dynamic prediction equilibrium ",lm`(\hat q, f)`,"."))),t.createElement(Um,{intro:!0,section:"III. Applied Predictors"},t.createElement(Dm,{textAlign:"left"},"Applied Predictors"),t.createElement("div",{style:{position:"relative",top:"-50px",marginLeft:"1050px",width:"200px",textAlign:"center",fontFamily:"'Open Sans'",fontSize:Mm.fontSizes.text}},"Compatible with Existence-Theorem"),t.createElement(Ns,{style:{position:"relative",top:"-50px"}},t.createElement(qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The Zero-Predictor "),lm`\hat q^{\text{Z}}_{i,e}(\theta;\bar\theta;q) \coloneqq 0`,".",t.createElement("br",null),t.createElement($o,null,t.createElement("p",null,"Predicted shortest paths always remain the same."))),figure:e=>t.createElement(Em,{minimize:e}),compatible:!0}),t.createElement(qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The constant predictor "),lm`\hat q^{\text{C}}_{i,e}(\theta;\bar\theta;q) \coloneqq q_e(\bar\theta)`,".",t.createElement("br",null),t.createElement($o,null,t.createElement("p",null,"Assumes the current conditions for the future."))),figure:e=>t.createElement(bm,{minimize:e}),compatible:!0}),t.createElement(qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The linear predictor "),lm`\hat q^{\text{L}}_{i,e}(\theta;\bar\theta;q) \coloneqq 
          \left( q_e(\bar \theta)+\partial_-q_e(\bar \theta)\cdot \min\{ \theta-\bar\theta, H \} \right)^+
          `,".",t.createElement($o,null,t.createElement("p",null,"Not continuous in ",lm`\bar\theta`," whenever ",lm`\partial_-q_e`," jumps."))),figure:e=>t.createElement(Tm,{minimize:e}),compatible:!1}),t.createElement(qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The regularized linear predictor "),t.createElement("br",null),t.createElement("div",{style:{textAlign:"center"}},lm`\hat q_{i,e}^{\text{RL}}(\theta;\bar\theta; q) \coloneqq
\Big( q_e(\bar\theta) + \frac{q_e(\bar\theta) - q_e(\bar\theta - \delta)}{\delta} \cdot \min\{ \theta - \bar\theta, H \} \Big)^+
      .`)),figure:e=>t.createElement(Sm,{minimize:e}),compatible:!0}),t.createElement(qm,{text:t.createElement(t.Fragment,null,t.createElement("i",null,"The linear regression predictor ")," ",lm`\hat q_{i,e}^{\text{ML}}`," linearly interpolates the points ",t.createElement("br",null),t.createElement("div",{style:{textAlign:"center"}},t.createElement(jm,null))),figure:e=>t.createElement(_m,{minimize:e}),compatible:!0}))),t.createElement(Um,{section:"III. Applied Predictors"},t.createElement(Dm,{textAlign:"left"},"A generalization of popular models"),t.createElement(_s,{style:{marginBottom:0}},"We are given a dynamic prediction equilibrium ",lm`(\hat q, f)`,"."),t.createElement($o,null,t.createElement(_s,{style:{marginBottom:0,marginTop:0}},"If all commodites use")),t.createElement(Ns,{style:{marginTop:0}},t.createElement($o,null,t.createElement(Lm,{style:{marginTop:16}},"the ",t.createElement("i",null,"constant predictor")," ",lm`\hat q_{i,e}(\theta;\bar\theta;q)\coloneqq q_e(\bar\theta)`,", then ",lm`f`," is an ",t.createElement("i",null,"instantaneous dynamic equilibrium (IDE)"),".")),t.createElement($o,null,t.createElement(Lm,{style:{marginTop:32}},"the ",t.createElement("i",null,"perfect predictor")," ",lm`\hat q_{i,e}(\theta;\bar\theta;q)\coloneqq q_e(\theta)`,", then ",lm`f`," is a ",t.createElement("i",null,"dynamic (Nash) equilibrium (DE)"),"."))),t.createElement($o,null,t.createElement(_s,null,"IDE and especially DE have been studied quite extensively in the past.")),t.createElement($o,null,t.createElement(_s,{style:{marginTop:0}},"DPE generalize both concepts with a more realistic scenario."))),t.createElement(Um,{intro:!0,section:"IV. Computational Study"},t.createElement(Dm,{textAlign:"left"},"Extension-based Simulation"),t.createElement(Ns,null,t.createElement($o,null,t.createElement(Lm,null,"Approximate a DPE by rerouting agents in discrete time intervals ",lm`\bar\theta_k = k\cdot \varepsilon`,".")),t.createElement($o,null,t.createElement(Lm,null,"We assume that the network inflow rates are piecewise constant with finite jumps")),t.createElement($o,null,t.createElement(Lm,null,"The extension procedure for one routing interval ",lm`(\bar\theta_k,\bar\theta_{k+1})`," given an equilibrium flow up to time ",lm`H = \bar\theta_k`,":",t.createElement("div",{style:{width:"1200px"}},t.createElement(it,{theme:{size:{width:"1200px"}}},t.createElement(xs,{style:{backgroundColor:"white",border:"1px solid lightgray",fontFamily:""}},t.createElement($o,null,t.createElement(Lm,null,"Gather predictions ",lm`(\hat q_{i,e}(\,\boldsymbol\cdot\,;\bar\theta_k; q))_{i,e}`," for ",lm`\bar\theta_k`)),t.createElement($o,null,t.createElement(Lm,null,"Compute all shortest ",lm`v`,"-",lm`t_i`,"-paths at time ",lm`\bar\theta_k`," predicted at time ",lm`\bar\theta_k`)),t.createElement($o,null,t.createElement(Lm,null,t.createElement(Gm,null,"while "),lm`H < \bar\theta_{k+1}`,t.createElement(Gm,null," do:"))),t.createElement($o,null,t.createElement(Lm,null,t.createElement(Gm,null,"    "),"Compute maximal ",lm`H'\leq\bar\theta_{k+1}`," such that ",lm`b_{i,v}^-(\theta)\coloneqq \sum_{e\in\delta_{v}^-} f_{i,e}^-(\theta) + u_i(\theta)\cdot\mathbf{1}_{v=s_i}`," is constant on ",lm`(H, H')`," for all ",lm`v\in V, i\in I`)),t.createElement($o,null,t.createElement(Lm,null,t.createElement(Gm,null,"    "),"Equally distribute ",lm`b_{i,v}^-(\theta)`," to the outgoing edges lying on shortest paths during ",lm`(H, H')`)),t.createElement($o,null,t.createElement(Lm,null,t.createElement(Gm,null,"    "),lm`H \leftarrow H'`))))))))),t.createElement(Um,{section:"IV. Computational Study"},t.createElement(Dm,{textAlign:"left"},"Comparing the Performance of Predictors"),t.createElement(Ns,null,t.createElement($o,null,t.createElement(Lm,null,"We monitor the average travel time of particles over multiple DPE simulations with varying inflow rates.")),t.createElement($o,null,t.createElement(Lm,null,"For a sample network, the linear regression already performs best:",t.createElement(Vm,null,(e=>t.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"20px"}},t.createElement("div",{style:{transition:"transform 0.2s",transform:e?"translateY(0)":"translateY(80px) scale(1.2)",textAlign:"center"}},t.createElement("img",{src:Ks,width:"200px"}),t.createElement(_s,{style:{margin:0}},"Edges are labeled with ",lm`(\tau_e, \nu_e)`)),t.createElement("div",null,t.createElement("img",{style:{transition:"transform 0.2s",transform:e?"scale(1)":"scale(1.8)",transformOrigin:"top",width:"280px"},src:Vs}))))))),t.createElement($o,null,t.createElement(Lm,null,"Simulations in real-world road traffic networks (centre of Tokyo, Sioux Falls) show",t.createElement(Ns,null,t.createElement(Lm,null,"the linear regression predictor is amongst the best predictors analyzed,"),t.createElement($o,null,t.createElement(Lm,null,"the Zero-Predictor performs worst most of the time,")),t.createElement($o,null,t.createElement(Lm,null,"the simulation is capable of computing DPEs in large-scale networks."))))))),t.createElement(Um,{intro:!0,section:"V. Conclusion"},t.createElement(Hm,{style:{margin:"100px auto",textAlign:"center"},width:.8},t.createElement(Os,{textAlign:"center"},t.createElement("th",null,"Contributions"),t.createElement("th",null,"Future Work")),t.createElement("colgroup",null,t.createElement("col",{style:{width:"50%"}}),t.createElement("col",{style:{width:"50%"}})),t.createElement("tr",null,t.createElement("td",null,t.createElement(Ns,{style:{display:"inline-block"}},t.createElement($o,null,t.createElement(Lm,null,"We formulated a mathematically concise model that generalizes existing rather unrealistic models.")),t.createElement($o,null,t.createElement(Lm,null,"In this model, we proved the existence of equilibria under mild assumptions on the predictors.")),t.createElement($o,null,t.createElement(Lm,null,"The framework allows the integration of arbitrary ML methods as predictors.")))),t.createElement("td",null,t.createElement(Ns,{style:{display:"inline-block"}},t.createElement($o,null,t.createElement(Lm,null,"Generalize the predictor's input to allow for other flow related data than past queues.")),t.createElement($o,null,t.createElement(Lm,null,"Embed more advanced ML methods for traffic forecast into the simulation.")))))))),Hm=ft(Is)`
  border-collapse: collapse;
& td {
  border: 2px solid ${Mm.colors.secondary}; 
}
& tr:first-child td {
  border-top: 0;
}
& tr td, th {
  border-left: 0;
}
& tr:last-child td {
  border-bottom: 0;
}
& tr td, th {
  border-right: 0;
}

& li {
  padding: 20px;
}
`,Gm=e=>t.createElement("span",Rm({style:{whiteSpace:"pre"}},e)),jm=()=>t.createElement(Wo,{values:[1,2],alwaysVisible:!0},((e,t,n)=>e?1==e?lm`
          \left(
            \bar\theta + j\delta,
            {\color{transparent} \left(
              {\color{black}
              \sum_{e' \in N(e)} 
                 \sum_{i=0}^k a_{i,j}^{e'}\cdot q_{e'}(\bar\theta-i\delta) }
              \right)^+ } 
          \right)
      .`:lm`
          \left(
            \bar\theta + j\delta,
             \left(  
              \sum_{e' \in N(e)} 
                 \sum_{i=0}^k a_{i,j}^{e'}\cdot q_{e'}(\bar\theta-i\delta)
              \right)^+
          \right)
      .`:lm`
          \left(
            \bar\theta + j\delta,
            {\color{transparent} \left(
              \sum_{e' \in N(e)} 
                {\color{black} \sum_{i=0}^k a_{i,j}^{\color{transparent}e'}\cdot q_{e{\color{transparent}'}}(\bar\theta-i\delta) }
              \right)^+ } 
          \right)
      .`)),qm=({text:e,figure:n,compatible:r})=>t.createElement($o,null,t.createElement(Lm,null,t.createElement("div",{style:{display:"flex",flexDirection:"row"}},t.createElement("div",{style:{width:"700px",height:"100px"}},e),t.createElement("div",{style:{height:"90px"}},t.createElement(Vm,null,n)),t.createElement("div",{style:{height:"100px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"160px"}},t.createElement($o,null,r?"✔️":"❌"))))),Vm=({children:e})=>t.createElement(Wo,{values:[!0],alwaysVisible:!0},((t,n,r)=>e(t||!1))),Km=({formula:e,text:n})=>t.createElement(Wo,{values:[!0,!1]},((r,a,i)=>t.createElement(Lm,{style:{display:!1===r?"list-item":"block"}},t.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",height:"30px",transition:"transform 0.2s",transform:!1===r?"translateY(0px)":"translateY(20px)"}},t.createElement("div",null,n),t.createElement("div",{style:{paddingLeft:"15px",transition:"transform 0.2s",transform:!1===r?"scale(.5)":"scale(1)",transformOrigin:"left"}},e))))),$m=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:Mm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",null,t.createElement("i",null,"Notation. ")),e),Wm=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:Mm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:Mm.colors.secondary}},t.createElement("b",null,"Question. ")),e),Ym=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:Mm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:Mm.colors.secondary}},t.createElement("b",null,"Definition. ")),e),Xm=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:Mm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:Mm.colors.secondary}},t.createElement("b",null,"Example. ")),e),Zm=({children:e})=>t.createElement(Ba,{margin:"32px",style:{fontSize:Mm.fontSizes.text,fontFamily:"Open Sans"}},t.createElement("span",{style:{color:Mm.colors.secondary}},t.createElement("b",null,"Theorem. ")),t.createElement("i",null,e));r.render(t.createElement(zm,null),document.getElementById("root"))})()})();
//# sourceMappingURL=deck.js.map