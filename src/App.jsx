import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ChatBot from "./pages/ChatBot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
