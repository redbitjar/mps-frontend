import React from "react";
import Header from "./components/gnb/Header";
import { Route, Routes } from "react-router";
import Layout from "./components/gnb/Layout";
import Home from "./components/gnb/routes/Home";
import CaseMgtMain from "./pages/mdm/CaseMgtMain";
import MdmMain from "./pages/mdm/MdmMain";
import SelectionPlanMain from "./pages/mdm/SelectionPlanMain";
import MountedNetworkMain from "./pages/beforePlan/MountedNetworkMain";
import MountedConnectionMain from "./pages/beforePlan/MountedConnectionMain";
import BeforeApsMain from "./pages/beforePlan/BeforeApsMain";
import BeforeActMain from "./pages/beforePlan/BeforeActMain";
import AfterActMain from "./pages/afterPlan/AfterActMain";
import OpPlanMain from "./pages/productionPlan/OpPlanMain";
import SisubuhaCalcMain from "./pages/productionPlan/SisubuhaCalcMain";
import ActivityPtoPMain from "./pages/productionPlan/ActivityPtoPMain";

// import AppMenu from "./AppMenu";

function App2() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="caseMgt" element={<CaseMgtMain />} />
          <Route path="mdm" element={<MdmMain />} />
          <Route path="selectionPlan" element={<SelectionPlanMain />} />
          <Route path="mountedNetwork" element={<MountedNetworkMain />} />
          <Route path="mountedConnection" element={<MountedConnectionMain />} />
          <Route path="beforeAps" element={<BeforeApsMain />} />
          <Route path="beforeAct" element={<BeforeActMain />} />
          <Route path="afterAct" element={<AfterActMain />} />
          <Route path="opPlan" element={<OpPlanMain />} />
          <Route path="sisubuhaCalc" element={<SisubuhaCalcMain />} />
          <Route path="activityPtoP" element={<ActivityPtoPMain />} />
          {/* <Route path="about" element={<About />} />
          <Route path="mdm" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} /> */}
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App2;
