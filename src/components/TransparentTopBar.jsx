import { LockReset } from "@mui/icons-material";
import { Button } from "flowbite-react";

const TransparentTopBar = ({ text, link }) => {
  return (
    <div className="h-14  opacity-40 bg-black flex justify-between items-center px-4">
      <div className="text-white text-lg ">
        {/* Azure OpenAi + Congnitive Search */}
        {text}
      </div>
      <div className="flex gap-4 justify-center items-center">
        {/* {!link && (
          <div className="text-white text-lg flex justify-between items-center gap-1 cursor-pointer">
            <LockReset />
            Reset Demo
          </div>
        )} */}

        {link && (
          <Button target="_blank" href={link}>
            Live Preview
          </Button>
        )}
        {/* <div className="text-white text-lg flex justify-between items-center gap-1 cursor-pointer">
          <ChatOutlined />
          Chat
        </div>
        <div className="text-white text-lg flex justify-between items-center gap-1 cursor-pointer">
          <SettingsOutlined />
          Developer Settings
        </div> */}
      </div>
    </div>
  );
};

export default TransparentTopBar;
