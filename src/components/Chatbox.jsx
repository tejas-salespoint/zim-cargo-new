import { useState } from "react";
import InputField from "./InputField";
import QuestionCard from "./QuestionCard";
import ToggleButton from "./ToggleButton";
import secondaryLogo from "/src/assets/secondary_logo.png";
import axios from "axios";
import { SuggestedQuestions } from "../data/SuggestedQuestion";
import PdfResponseTab from "./PdfResponseTab";

// const apiUrl = https://func-openai-search-002.azurewebsites.net/api/chat
const apiUrl =
  "https://raw.githubusercontent.com/tejasghlade/json_data_api_test/main/zim_demo_get_api";

const Chatbot = () => {
  const [AiChating, setAiChating] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [pdfUploadActive, setPdfUploadActive] = useState(false);

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
    // const apiUrl = "https://func-openai-search-002.azurewebsites.net/api/chat";

    // Send a POST request
    await axios
      .get(apiUrl, postData)
      .then((response) => {
        // Handle the response data
        console.log("Response data:", response.data);

        const newId = AiChating.length + 1;
        const newEntry = {
          id: newId,
          prompt: textFieldValue,
          response: response?.data,
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
    <div className="flex gap-5">
      <div className=" bg-opacity-80 bg-slate-900 rounded-2xl shadow border-[2px] border-white  ">
        <div className="flex justify-center flex-col items-center gap-5 p-5">
          <div className="flex   justify-center flex-col items-center gap-5 ">
            <img
              className="h-16 w-16"
              src={secondaryLogo}
              alt="secondary logo"
            />
            <div className="w-96 h-10 text-center text-white text-4xl font-normal font-['MagistralBlack']">
              Shipping Companion
            </div>
            <div className="w-52 h-5 text-center text-white text-2xl font-normal ">
              Ask me something
            </div>

            {/* todo :: suggesting qustions  */}

            {AiChating.length === 0 && (
              <div className="flex gap-4">
                {SuggestedQuestions.map((ques) => (
                  <QuestionCard
                    key={ques.id}
                    question={ques.question}
                    value={textFieldValue}
                    setValue={setTextFieldValue}
                    submitFunction={addValueToAiChating}
                  />
                ))}
              </div>
            )}
          </div>

          {/*  todo :: chatting responses */}

          {/* chatting */}
          {AiChating.map((chat) => (
            <>
              <div className="bg-neutral-200 rounded-lg self-end">
                <div className=" text-black p-3 text-md font-normal ">
                  {chat?.prompt}
                </div>
              </div>
              <div className="bg-neutral-200 rounded-lg self-start">
                <div className=" text-black p-3 text-md font-normal ">
                  {chat?.response?.answer}
                </div>
              </div>
            </>
          ))}

          {/* FIle uploader  */}

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                accept="[.pdf]"
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>

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
            <ToggleButton
              value={pdfUploadActive}
              setValue={setPdfUploadActive}
            />
            {/* <ToggleSwitch checked={pdfUploadActive} label="Toggle me" onChange={setPdfUploadActive} /> */}
          </div>
        </div>
      </div>
      <div className="w-96    bg-opacity-80 bg-slate-900 rounded-2xl shadow border-[2px]  border-white ">
       <PdfResponseTab />
      </div>
    </div>
  );
};

export default Chatbot;
