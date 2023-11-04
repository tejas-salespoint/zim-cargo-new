import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ChatBot from "./pages/ChatBot/ChatBot";
import Test from "./pages/Test/Test";
import PowerBi from "./pages/PowerBi/PowerBi";
import DemoVideo from "./pages/DemoVideo/DemoVideo";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/powerbi" element={<PowerBi />} />
        <Route path="/video" element={<DemoVideo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
