import {
  ArrowCircleRight,
  ArrowForwardIosRounded,
  ArrowRight,
  ArrowRightAltSharp,
  ChevronRight,
  Delete,
} from "@mui/icons-material";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/chatbot",
    name: "Chatbot",
  },

  {
    id: 3,
    name: "Cargo Shipments Report",
    path: "/cargo_shipments_report",
  },
  {
    id: 4,
    name: "Cargo Global Network Report",
    path: "/cargo_global_network_report",
  },
  {
    id: 5,
    name: "Freight Forwarding Report",
    path: "/freight_forwarding_report",
  },
  {
    id: 6,
    name: "Competitor Analysis Report",
    path: "/competitor_analysis_report",
  },

  {
    id: 7,
    path: "/video",
    name: "Video",
  },
];

const NavigateChip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const index = links.findIndex((link) => link.path === location.pathname);
    if (index !== -1) {
      setCurrentIndex(index + 1);
    }
  }, [location.pathname]);

  const handleNextButtonClick = () => {
    if (currentIndex < links.length) {
      navigate(links[currentIndex].path);
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(links[0].path);
      setCurrentIndex(1);
    }
  };
  return (
    <Chip
      className="!fixed  !bg-blue-600 z-50 right-5 top-5 !text-lg !text-white font-bold  "
      label={currentIndex}
      onClick={handleNextButtonClick}
      onDelete={handleNextButtonClick}
      deleteIcon={
        <ArrowForwardIosRounded
          fontSize="small"
          className="p-[2px]  !fill-white"
        />
      }
      //   icon={<ArrowRightAltSharp className="!fill-white" />}
      variant="filled"
    />
  );
};

export default NavigateChip;
