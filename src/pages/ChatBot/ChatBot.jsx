import ChatResponseBox from "../../components/ChatResponseBox";
import Chatbot from "../../components/Chatbox";
import Layout from "../../components/Layout";

import TransparentTopBar from "../../components/TransparentTopBar";

const ChatBot = () => {
  return (
    <Layout>
      <TransparentTopBar text={" Azure OpenAi + Congnitive Search "} />
      <div className="flex justify-center  items-center my-20">
        <Chatbot />
      </div>
   
    </Layout>
  );
};

export default ChatBot;
