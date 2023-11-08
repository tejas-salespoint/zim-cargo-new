import { useEffect, useRef, useState } from "react";
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
  DeleteOutlined,
  DocumentScannerOutlined,
  LightbulbOutlined,
  RestartAlt,
} from "@mui/icons-material";
import { openAiData } from "../data/fileData";

const apiUrl = "https://func-openai-search-002.azurewebsites.net/api/chat";
// const apiUrl =
//   "https://raw.githubusercontent.com/tejasghlade/json_data_api_test/main/zim_demo_get_api";

const Chatbot = () => {
  const [AiChating, setAiChating] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [pdfUploadActive, setPdfUploadActive] = useState(false);
  const [activePdfViewCitationName, setActivePdfViewCitationName] =
    useState(null);
  const [PdfResponseTabActiveId, setPdfResponseTabActiveId] = useState(null);
  const [pdfResponseActive, setPdfResponseActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const addValueToAiChating = async () => {
    const myHeaders = new Headers();

    // simulateLoading();
    console.log("run run");
    console.log(textFieldValue);
    console.log(typeof textFieldValue);
    // todo :: extract pdf files
    function extractPDFFilesFromDataPoints(dataPoints) {
      const pdfFiles = [];
      const regex = /[^ ]+\.(pdf)/g; // Regular expression to match PDF file names

      dataPoints?.forEach((dataPoint) => {
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
    // const postData = {
    //   history: [
    //     {
    //       user: textFieldValue,
    //     },
    //   ],
    //   approach: "rrr",
    //   overrides: {},
    //   index: "zim-index",
    //   industry: "default",
    //   container: "zim-container",
    //   enableExternalDomain: false,
    // };

    const raw = JSON.stringify({
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
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // mode: 'no-cors', // Set the mode to 'no-cors'
      redirect: "follow",
    };

    // Define the API endpoint
    // const apiUrl = "https://func-openai-search-002.azurewebsites.net/api/chat";

    // Send a POST request
    await axios
      .get(apiUrl, requestOptions)
      .then(async (response) => {
        // Handle the response data
        // console.log("Response data:", response.data);

        const newId = response ? AiChating.length + 1 : 100;

        // Log the contents of data_points
        // console.log("Data Points:", response?.data?.data_points);

        // Extract and log the PDF files

        // console.log("PDF Files:", pdfFiles);

        const newEntry = {
          id: newId,
          prompt: textFieldValue,
          response: await response?.json(),
          // response: openAiData?.questions
          //   ?.filter((file) => file.question == textFieldValue)
          //   .map((item) => item.response)[0],
        };

        // if (!newEntry.response) {
        //   newEntry[response] = {
        //     data_points: [
        //       "zim_2022_annual_report_on_form_20f-accessible-15.pdf:  Our business and operating results have been, and will continue to be, affected by worldwide and regional economic and geopolitical challenges, including global economic downturns. In particular, the outbreak of the military conflict between Russia and Ukraine has caused an immediate sharp decline in the financial markets and a sharp increase in energy prices. The continued conflict impedes the global flow of goods, results in product and food shortage, harms economic growth and places more pressure on already rising inflation. Furthermore, freight movement and supply chains in Ukraine and neighboring countries have been, and may continue to be, significantly disrupted. Economic sanctions levied on Russia, its leaders and on Russian oil and oil products may cause further global economic downturns, including additional increases in bunker costs. A further deterioration of the current conflict or other geopolitical instabilities may cause global markets to plummet, affect global trade, increase bunker prices and may have a material adverse effect on our business a financial condition, results of operations and liquidity.",
        //       "zim_2022_annual_report_on_form_20f-accessible-12.pdf: and adversely from those anticipated in these forward-looking statements as a result of certain factors. Summary of Risk Factors The following is a summary of some of the principal risks we face. The list below is not exhaustive, and investors should read this “Risk factors” section in full. • The container shipping industry is dynamic and volatile and has been marked in recent years by instability and uncertainties as a result of global economic conditions and the many factors that affect supply and demand in the shipping industry, including geopolitical trends, US-China related trade restrictions, regulatory developments, relocation of manufacturing, logistical bottlenecks in certain location along the cargo carriage chain, and, recently, the impact of the COVID-19 pandemic, rising inflation and climbing interest rates and fluctuations in demand for containerized shipping services which could significantly impact freight rates. • The military conflict between Russia and Ukraine or other geopolitical instabilities may cause financial markets to plummet, reduce global trade, increase bunker prices and may have a material adverse effect on our business, financial condition, ",
        //       "zim_2022_annual_report_on_form_20f-accessible-12.pdf:  • The military conflict between Russia and Ukraine or other geopolitical instabilities may cause financial markets to plummet, reduce global trade, increase bunker prices and may have a material adverse effect on our business, financial condition, results of operations and liquidity. 8 • We charter-in most of our fleet, which makes us more sensitive to fluctuations in the charter market, and as a result of our dependency on the vessel charter market, our costs associated with chartering vessels are unpredictable and could be, in certain circumstances, high even when the freight market is in a downward trend. • Future imbalance between supply of global container ship capacity and demand may limit our ability to operate our vessels profitably. • Limited or unavailable access to ports and means of land transportation, including due to congestion. • Changing trading patterns, trade flows and sharpening trade imbalances, regulatory measures, variable operational costs, such as container storage costs, terminal costs and land transportation costs, including due to the impact of the COVID-19 pandemic, may increase our container repositioning costs.",
        //     ],
        //     answer: "Delete file",
        //     thoughts:
        //       "Searched for:<br>military conflict between Russia and Ukraine shipping industry company<br><br>Prompt:<br><|im_start|>system<br>Assistant helps the employees with their organisation data which is present in the knowledge base. Be brief in your answers.<br>Answer ONLY with the facts listed in the list of sources below. If there isn't enough information below, say you don't know. Do not generate answers that don't use the sources below. If asking a clarifying question to the user would help, ask the question.<br>For tabular information return it as an html table. Do not return markdown format.<br>If the question is not in English, translate the question to English before generating the search query and reply in the same language as the question.<br>Each source has a name followed by colon and the actual information, always include the source name for each fact you use in the response. Use square brakets to reference the source, e.g. [info1.txt]. Don't combine sources, list each source separately, e.g. [info1.txt][info2.pdf].<br><br><br>Sources:<br>zim_2022_annual_report_on_form_20f-accessible-15.pdf:  Our business and operating results have been, and will continue to be, affected by worldwide and regional economic and geopolitical challenges, including global economic downturns. In particular, the outbreak of the military conflict between Russia and Ukraine has caused an immediate sharp decline in the financial markets and a sharp increase in energy prices. The continued conflict impedes the global flow of goods, results in product and food shortage, harms economic growth and places more pressure on already rising inflation. Furthermore, freight movement and supply chains in Ukraine and neighboring countries have been, and may continue to be, significantly disrupted. Economic sanctions levied on Russia, its leaders and on Russian oil and oil products may cause further global economic downturns, including additional increases in bunker costs. A further deterioration of the current conflict or other geopolitical instabilities may cause global markets to plummet, affect global trade, increase bunker prices and may have a material adverse effect on our business a financial condition, results of operations and liquidity.<br>zim_2022_annual_report_on_form_20f-accessible-12.pdf: and adversely from those anticipated in these forward-looking statements as a result of certain factors. Summary of Risk Factors The following is a summary of some of the principal risks we face. The list below is not exhaustive, and investors should read this “Risk factors” section in full. • The container shipping industry is dynamic and volatile and has been marked in recent years by instability and uncertainties as a result of global economic conditions and the many factors that affect supply and demand in the shipping industry, including geopolitical trends, US-China related trade restrictions, regulatory developments, relocation of manufacturing, logistical bottlenecks in certain location along the cargo carriage chain, and, recently, the impact of the COVID-19 pandemic, rising inflation and climbing interest rates and fluctuations in demand for containerized shipping services which could significantly impact freight rates. • The military conflict between Russia and Ukraine or other geopolitical instabilities may cause financial markets to plummet, reduce global trade, increase bunker prices and may have a material adverse effect on our business, financial condition, <br>zim_2022_annual_report_on_form_20f-accessible-12.pdf:  • The military conflict between Russia and Ukraine or other geopolitical instabilities may cause financial markets to plummet, reduce global trade, increase bunker prices and may have a material adverse effect on our business, financial condition, results of operations and liquidity. 8 • We charter-in most of our fleet, which makes us more sensitive to fluctuations in the charter market, and as a result of our dependency on the vessel charter market, our costs associated with chartering vessels are unpredictable and could be, in certain circumstances, high even when the freight market is in a downward trend. • Future imbalance between supply of global container ship capacity and demand may limit our ability to operate our vessels profitably. • Limited or unavailable access to ports and means of land transportation, including due to congestion. • Changing trading patterns, trade flows and sharpening trade imbalances, regulatory measures, variable operational costs, such as container storage costs, terminal costs and land transportation costs, including due to the impact of the COVID-19 pandemic, may increase our container repositioning costs.<br><|im_end|><br><|im_start|>user<br>How does the military conflict between Russia and Ukraine impact the shipping industry and the company?<br><|im_end|><br><|im_start|>assistant<br><br><br>",
        //   };
        // }

        // const pdfFiles = extractPDFFilesFromDataPoints(newEntry?.response?.data_points);

        (newEntry["pdfFiles"] = await extractPDFFilesFromDataPoints(
          newEntry?.response?.data_points
        )),
          // console.log(newEntry?.pdfFiles);
          // Update AiChating with the newEntry
          setAiChating([...AiChating, newEntry]);
        setTextFieldValue(""); // Clear the text field after adding the value
      })
      .catch((error) => {
        // Handle errors
        console.error("An error occurred:", error);
      });
  };

  openAiData.questions.filter((file) => file.question === textFieldValue);

  // todo ::  fetch from local

  console.log(AiChating);

  function onPdfActiveResponse(id, tabId) {
    const idObject = {
      id: id,
      tabId: tabId,
    };

    console.log();
    setPdfResponseTabActiveId(idObject);
    onPdfReferenceOpen();
  }

  function onCopy(prompt) {
    setTextFieldValue(prompt);
  }

  function onRepeat(prompt) {
    setTextFieldValue(prompt);
    addValueToAiChating();
  }

  function onClearChat() {
    setAiChating([]);
    setPdfResponseTabActiveId(null);
    setPdfUploadActive(false);
    setPdfResponseActive(false);
  }

  function onPdfReferenceOpen() {
    setPdfResponseActive(true);
  }

  function simulateLoading(callback) {
    // Simulate a loading delay for 2 seconds (you can adjust the time as needed)
    setTimeout(function () {
      callback(); // This will be executed after the delay
    }, 4000); // 2000 milliseconds = 2 seconds
  }

  // Example usage:

  // function onCopy() {}
  // function onRefetch() {}
  // function onShowThoughtProcess() {}
  // function onShowSupportingContent() {}
  // function onShowCitationPdf() {}
  // function onClearChat() {}

  // const pdfLinks = text.match(/\[.*?\.pdf\]/g);

  // todo :: extract pdf files
  function extractPDFFilesFromDataPoints(dataPoints) {
    const pdfFiles = [];
    const regex = /[^ ]+\.(pdf)/g; // Regular expression to match PDF file names

    dataPoints?.forEach((dataPoint) => {
      const matches = dataPoint.match(regex);

      if (matches) {
        pdfFiles.push(...matches);
      }
    });

    return pdfFiles;
  }
  const handleClick = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
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
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        // mode: 'no-cors', // Set the mode to 'no-cors'
        redirect: "follow",
      };

      const response = await fetch(apiUrl, requestOptions).then((response) =>
        response.json()
      );
      const newId = response ? AiChating.length + 1 : 100;
      const newEntry = {
        id: newId,
        prompt: textFieldValue,
        response: await response,
        // response: openAiData?.questions
        //   ?.filter((file) => file.question == textFieldValue)
        //   .map((item) => item.response)[0],
      };

      newEntry["pdfFiles"] = extractPDFFilesFromDataPoints(
        newEntry?.response?.data_points
      );

      setAiChating([...AiChating, newEntry]);
      setTextFieldValue("");
      // const text = await response.json(); // convert the response to text
      // console.log("Response:", text); // print the response text
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const firstElementRef = useRef();
  const secondElementRef = useRef();

  useEffect(() => {
    const firstElement = firstElementRef.current;
    const secondElement = secondElementRef.current;

    const handleResize = () => {
      if (firstElement && secondElement) {
        const firstElementHeight = firstElement.clientHeight;
        secondElement.style.height = `${firstElementHeight}px`;
      }
    };

    handleResize(); // Set initial height on mount

    // Listen for changes in the first element's height
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex  w-full justify-center flex-row  gap-5 ps-3">
      <div
        ref={firstElementRef}
        className="!min-w-[70%] !max-w-[70%]  bg-opacity-80 bg-slate-900 rounded-2xl shadow border-[2px] border-white  "
      >
        <div className="flex  justify-center flex-col items-center gap-5 p-5">
          {AiChating.length === 0 && (
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

              {!pdfUploadActive && AiChating.length === 0 && (
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
          )}

          {/*  todo :: chatting responses */}

          {/* chatting */}
          {AiChating?.map((chat) => (
            <>
              <div className="bg-neutral-200 rounded-lg self-end p-3">
                <div className="flex justify-end gap-2">
                  <ContentCopy
                    onClick={() => onCopy(chat?.prompt)}
                    className="cursor-pointer"
                    fontSize="small"
                  />
                  <RestartAlt
                    type="submit"
                    onClick={() => onRepeat(chat?.prompt)}
                    className="cursor-pointer"
                    fontSize="small"
                  />
                </div>
                <div className=" text-black p-3 text-md font-normal ">
                  {chat?.prompt}
                </div>
              </div>
              <div className="bg-neutral-200 rounded-lg self-start p-3">
                {/* Generating answer */}
                <div className="flex justify-end gap-2 ">
                  <LightbulbOutlined
                    onClick={() => onPdfActiveResponse(chat?.id, 0)}
                    className="cursor-pointer "
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
                  {chat?.response?.answer
                    ? chat?.response?.answer
                    : "Generate response ..."}
                  {/* {chat?.response?.answer} */}
                  {/* {chat?.answer} */}
                  {/* {JSON.stringify(chat)} */}

                  {/* {!loading && chat?.response?.answer} */}
                  {/* {!loading &&
                    !chat?.response?.answer &&
                    "I'm sorry, but I can't answer the questions which are not related to the document. As an AI language model, I don't have access to information unless you provide it to me. How may I assist you with enterprise documents?"} */}
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
                      className="bg-blue-200 px-3 rounded hover:underline cursor-pointer"
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
          {pdfUploadActive && <FileUploader />}

          {/* inputs */}
          {/* <span>{textFieldValue}</span> */}
          <InputField
            value={textFieldValue}
            setValue={setTextFieldValue}
            submitFunction={handleClick}
          />

          {/* <button className="text-white bg-red-500 p-5" onClick={handleClick}>
            Add Value
          </button> */}
          {/* toggle */}
          <div className="w-full flex justify-between items-center">
            <ToggleButton
              value={pdfUploadActive}
              setValue={setPdfUploadActive}
            />

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={onClearChat}
            >
              <DeleteOutlined fontSize="medium" className="!fill-white" />
              <span className="text-white font-medium">Clear Chat</span>
            </div>
            {/* <ToggleSwitch checked={pdfUploadActive} label="Toggle me" onChange={setPdfUploadActive} /> */}
          </div>
        </div>
      </div>

      {pdfResponseActive && (
        <div
          ref={secondElementRef}
          className="!w-[30%]     bg-opacity-80 bg-slate-900 rounded-2xl shadow border-[2px]  border-white "
        >
          <PdfResponseTab
            activeIds={PdfResponseTabActiveId}
            activePdf={activePdfViewCitationName}
            response={AiChating}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
