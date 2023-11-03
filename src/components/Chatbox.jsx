import { useState } from "react";
import InputField from "./InputField";
import QuestionCard from "./QuestionCard";
import ToggleButton from "./ToggleButton";
import secondaryLogo from "/src/assets/secondary_logo.png";
import axios from "axios";

const Chatbot = () => {
  const [AiChating, setAiChating] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  const addValueToAiChating = async () => {
    console.log("run run");
  
    if (textFieldValue.trim() === "") {
      return; // Don't add empty values
    }
  
    // Define the POST data
    const postData = {
      history: [
        {
          user: textFieldValue,
        },
      ],
      approach: "rrr",
      overrides: {},
      index: "zim-index",
      industry: "default",
      container: "zim-container",
      enableExternalDomain: false,
    };
  
    // Define the API endpoint
    const apiUrl = "https://func-openai-search-002.azurewebsites.net/api/chat";
  
    // Send a POST request
   await  axios
      .post(apiUrl, postData)
      .then((response) => {
        // Handle the response data
        console.log("Response data:", response.data);
  
        const newId = AiChating.length + 1;
        const newEntry = {
          id: newId,
          prompt: textFieldValue,
          response: {
            data_points: [],
            answer: "getting fetch ...", // You can set a loading message here
            thoughts: [],
  
            // Store the API response data in a specific property
            responseData: response.data
          },
        };
  
        // Update AiChating with the newEntry
        setAiChating([...AiChating, newEntry]);
        setTextFieldValue(""); // Clear the text field after adding the value
      })
      .catch((error) => {
        // Handle errors
        console.error("An error occurred:", error);
      });
  };

  // const pdfLinks = text.match(/\[.*?\.pdf\]/g);
  return (
    <div className="w-[65rem]  opacity-80 bg-slate-900 rounded-2xl shadow border border-white backdrop-blur-2xl">
      <div className="flex justify-center flex-col items-center gap-5 p-5">
        <div className="flex  justify-center flex-col items-center gap-5 ">
          <img className="h-16 w-16" src={secondaryLogo} alt="secondary logo" />
          <div className="w-96 h-10 text-center text-white text-4xl font-normal font-['MagistralBlack']">
            Shipping Companion
          </div>
          <div className="w-52 h-5 text-center text-white text-2xl font-normal ">
            Ask me something
          </div>

          {/* suggesting qustions  */}
          <div className="flex gap-4">
            {/* todo :: 1st question */}
            <QuestionCard />
            {/* todo :: 2nd question */}
            <QuestionCard />
            {/* todo :: 3rd question */}
            <QuestionCard />
          </div>
        </div>

        {/* suggesting qustions  */}

        {/* todo :: 1st question */}

        {/* chatting */}
        {AiChating.map((chat) => (
          <>
            <div className="   bg-neutral-200 rounded-lg self-end">
              <div className=" text-black p-3 text-md font-normal ">
                {chat?.prompt}
              </div>
            </div>
            <div className="   bg-neutral-200 rounded-lg self-start">
              <div className=" text-black p-3 text-md font-normal ">
                {chat?.response?.answer}
              </div>
            </div>
          </>
        ))}

        {/* inputs */}
        <span>{textFieldValue}</span>
        <InputField
          value={textFieldValue}
          setValue={setTextFieldValue}
          submitFunction={addValueToAiChating}
        />
        <button
          className="text-white bg-red-500 p-5"
          onClick={addValueToAiChating}
        >
          Add Value
        </button>
        {/* toggle */}
        <div className="self-start">
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
