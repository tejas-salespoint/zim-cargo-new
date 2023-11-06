import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ChatBot from "./pages/ChatBot/ChatBot";
import Test from "./pages/Test/Test";
import PowerBi from "./pages/PowerBi/PowerBi";
import DemoVideo from "./pages/DemoVideo/DemoVideo";
import CargoShipmentsReport from "./pages/PowerBi/CargoShipmentsReport";
import CargoGlobalNetworkReport from "./pages/PowerBi/CargoGlobalNetworkReport";
import FreightForwardingReport from "./pages/PowerBi/FreightForwardingReport";
import NavigateChip from "./components/NavigateChip";
import CompetitorAnalysisReport from "./pages/PowerBi/CompetitorAnalysisReport";

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/powerbi" element={<PowerBi />} />
          <Route path="/cargo_shipments_report" element={<CargoShipmentsReport />} />
          <Route path="/cargo_global_network_report" element={<CargoGlobalNetworkReport />} />
          <Route path="/freight_forwarding_report" element={<FreightForwardingReport />} />
          <Route path="/competitor_analysis_report" element={<CompetitorAnalysisReport />} />
          <Route path="/video" element={<DemoVideo />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <NavigateChip />
    </div>
  </BrowserRouter>
  );
}

export default App;
