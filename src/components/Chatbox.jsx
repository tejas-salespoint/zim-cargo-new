import { useState } from "react";
import InputField from "./InputField";
import QuestionCard from "./QuestionCard";
import ToggleButton from "./ToggleButton";
import secondaryLogo from "/src/assets/secondary_logo.png";
import axios from "axios";
import { SuggestedQuestions } from "../data/SuggestedQuestion";
import PdfResponseTab from "./PdfResponseTab";
import FileUploader from "./FileUploader";
import {
  ContentCopy,
  DocumentScannerOutlined,
  LightbulbOutlined,
  RestartAlt,
} from "@mui/icons-material";

// const apiUrl = https://func-openai-search-002.azurewebsites.net/api/chat
const apiUrl =
  "https://raw.githubusercontent.com/tejasghlade/json_data_api_test/main/zim_demo_get_api";

const Chatbot = () => {
  const [AiChating, setAiChating] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [pdfUploadActive, setPdfUploadActive] = useState(false);
  const [activePdfViewCitationName, setActivePdfViewCitationName] =
    useState(null);
  const [PdfResponseTabActiveId, setPdfResponseTabActiveId] = useState(null);

  const addValueToAiChating = async () => {
    console.log("run run");

    // todo :: extract pdf files
    function extractPDFFilesFromDataPoints(dataPoints) {
      const pdfFiles = [];
      const regex = /[^ ]+\.(pdf)/g; // Regular expression to match PDF file names

      dataPoints.forEach((dataPoint) => {
        const matches = dataPoint.match(regex);

        if (matches) {
          pdfFiles.push(...matches);
        }
      });

      return pdfFiles;
    }

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
      .then(async (response) => {
        // Handle the response data
        console.log("Response data:", response.data);

        const newId = AiChating.length + 1;

        // Log the contents of data_points
        console.log("Data Points:", response?.data?.data_points);

        // Extract and log the PDF files
        const pdfFiles = extractPDFFilesFromDataPoints(
          response?.data?.data_points
        );
        console.log("PDF Files:", pdfFiles);

        const newEntry = {
          id: newId,
          prompt: textFieldValue,
          response: response?.data,
        };

        (newEntry["pdfFiles"] = await extractPDFFilesFromDataPoints(
          response?.data?.data_points
        )),
          console.log(newEntry?.pdfFiles);
        // Update AiChating with the newEntry
        setAiChating([...AiChating, newEntry]);
        setTextFieldValue(""); // Clear the text field after adding the value
      })
      .catch((error) => {
        // Handle errors
        console.error("An error occurred:", error);
      });
  };

  console.log(AiChating);

  function onPdfActiveResponse(id, tabId) {
    const idObject = {
      id: id,
      tabId: tabId,
    };

    console.log();
    setPdfResponseTabActiveId(idObject);
  }

  // function onCopy() {}
  // function onRefetch() {}
  // function onShowThoughtProcess() {}
  // function onShowSupportingContent() {}
  // function onShowCitationPdf() {}
  // function onClearChat() {}

  // const pdfLinks = text.match(/\[.*?\.pdf\]/g);
  return (
    <div className="flex gap-5">
      <div className=" w-[70%] bg-opacity-80 bg-slate-900 rounded-2xl shadow border-[2px] border-white  ">
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
              <div className="bg-neutral-200 rounded-lg self-end p-3">
                <div className="flex justify-end gap-2">
                  <ContentCopy className="cursor-pointer" fontSize="small" />
                  <RestartAlt className="cursor-pointer" fontSize="small" />
                </div>
                <div className=" text-black p-3 text-md font-normal ">
                  {chat?.prompt}
                </div>
              </div>
              <div className="bg-neutral-200 rounded-lg self-start p-3">
                <div className="flex justify-end gap-2">
                  <LightbulbOutlined
                    onClick={() => onPdfActiveResponse(chat?.id, 0)}
                    className="cursor-pointer"
                    fontSize="small"
                  />
                  <DocumentScannerOutlined
                    onClick={() => onPdfActiveResponse(chat?.id, 1)}
                    className="cursor-pointer"
                    fontSize="small"
                  />
                </div>
                <div className=" text-black p-3 text-md font-normal ">
                  {/* <DotLoader /> */}
                  {chat?.response?.answer}
                </div>
                <div className="flex gap-2 px-3 flex-wrap">
                  <span className="font-bold text-sm">Citations :</span>

                  {chat?.pdfFiles?.map((item, index) => (
                    <div
                      onClick={() => {
                        setActivePdfViewCitationName(item);
                        onPdfActiveResponse(chat?.id, 2);
                      }}
                      key={index}
                      className="bg-blue-200 px-3 rounded hover:underline"
                    >
                      {item}
                    </div>
                  ))}
                  {/* <div className="bg-blue-200 px-3 rounded hover:underline">
                    1. English Leaflet - Farm pond-3.pdf
                  </div>
                  <div className="bg-blue-200 px-3 rounded hover:underline">
                    1. English Leaflet - Farm pond-3.pdf
                  </div> */}
                </div>
              </div>
            </>
          ))}

          {/* FIle uploader  */}

          {/* <div className="flex items-center justify-center w-full">
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
          </div> */}

          {/* Second file uploader */}
          <FileUploader />

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
        <PdfResponseTab
          activeIds={PdfResponseTabActiveId}
          activePdf={activePdfViewCitationName}
          response={AiChating}
        />
      </div>
    </div>
  );
};

export default Chatbot;
