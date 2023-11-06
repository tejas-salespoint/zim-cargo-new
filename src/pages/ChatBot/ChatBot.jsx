import ChatResponseBox from "../../components/ChatResponseBox";
import Chatbot from "../../components/Chatbox";
import Layout from "../../components/Layout";

import TransparentTopBar from "../../components/TransparentTopBar";

const ChatBot = () => {
  return (
    <Layout>
      <TransparentTopBar />
      <div className="flex justify-center  items-center my-20">
        <Chatbot />
      </div>
        <ChatResponseBox />
    </Layout>
  );
};

export default ChatBot;
