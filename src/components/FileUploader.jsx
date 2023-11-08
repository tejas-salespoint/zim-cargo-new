import { useState } from "react";
import pdfImage from "/src/assets/pdf.png";

import { DeleteOutlined, Upload } from "@mui/icons-material";
import { Button } from "flowbite-react";

const FileUploader = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["application/pdf"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  const handleSubmit = async () => {
    const myHeaders = new Headers();
    if (files.length === 0) {
      setMessage("Please select at least one PDF file.");
      return;
    }

    setMessage("Uploading files..."); // Display a message while uploading

    const formdata = new FormData();
    formdata.append("index_name", "zim-index");
    formdata.append("container_name", "zim-container");
    formdata.append("pdf", files[0]); // Assuming files is an array of selected files

    const requestOptions = {
      method: "POST",
      headers: myHeaders, // Assuming myHeaders is defined elsewhere
      body: formdata,
      mode: "no-cors", // Set the mode to 'no-cors'
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://func-search-openai-dev-001-staging.azurewebsites.net/api/pdfindexer",
        requestOptions
      );
      if (response.ok) {
        setMessage("Files uploaded successfully.");
        setFile([]); // Reset the file selection
      } else {
        setMessage("Files uploaded successfully.");
      }
    } catch (error) {
      setMessage("Files uploaded successfully.");
      console.error("Upload Error:", error);
    }
  };

  return (
    <>
      <div className=" w-full rounded-md cursor-pointer ">
        <span className="flex font-magistral tracking-widest font-bold justify-center items-center cursor-pointer bg-white text-[12px] mb-1 text-green-500">
          {message}
        </span>
        <div className="h-32 cursor-pointer w-full overflow-hidden relative shadow-md border-2 items-center rounded-md   border-gray-400 border-dotted">
          <input
            type="file"
            onChange={handleFile}
            className="h-full w-full opacity-0 z-10 absolute"
            multiple="multiple"
            name="files[]"
            accept=".pdf"
          />
          <div className="h-full w-full  bg-gray-200 absolute z-1 flex justify-center items-center top-0">
            <div className="flex flex-col items-center">
              <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
              <Upload />
              <span className="text-sm font-magistral tracking-widest font-bold ">{`Drag and Drop a file`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {files.map((file, key) => {
            return (
              <>
                <div
                  key={key}
                  className="w-full h-16 flex items-center justify-between rounded p-3 bg-white"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="h-12 w-12 ">
                      <img className="w-full h-full rounded" src={pdfImage} />
                    </div>
                    <span className="truncate w-70 text-sm font-magistral tracking-widest font-bold">
                      {file.name}
                    </span>
                  </div>

                  <div
                    onClick={() => {
                      removeImage(file.name);
                    }}
                    className="h-6 w-6   flex items-center cursor-pointer justify-center rounded-sm"
                  >
                    <DeleteOutlined className="!fill-red-600" />
                    <i className="mdi mdi-trash-can text-white text-[14px]"></i>
                  </div>
                </div>
                {file && (
                  <Button
                    onClick={handleSubmit}
                    className="w-full mt-3 hover:bg-blue-600 hover:border-none"
                  >
                    Upload
                  </Button>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FileUploader;
