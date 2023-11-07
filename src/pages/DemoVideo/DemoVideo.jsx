import React from "react";
import Layout from "../../components/Layout";
import videojs from "video.js";

import "video.js/dist/video-js.css";
import VideoJS from "../../components/VideoJs";
import TransparentTopBar from "../../components/TransparentTopBar";

const DemoVideo = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://daiindustry.blob.core.windows.net/daistrapi/v2_with audio final (1).mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <Layout>
      <TransparentTopBar
        text={"Auto report creation using Copilot in Power BI"}
        link={
          "https://dxt.fabric.microsoft.com/groups/9126fce8-a0c1-4eb7-96cb-305955005a35/list?experience=power-bi&subfolderId=63"
        }
      />
      <div className="min-h-[86vh] max-h-[90vh] align-middle ">
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </Layout>
  );
};

export default DemoVideo;
