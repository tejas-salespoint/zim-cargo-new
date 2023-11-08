import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PdfResponseTab({ activeIds, activePdf, response }) {
  // todo :: practice

  console.log(activeIds);
  console.log(response);

  const [value, setValue] = React.useState(activeIds?.tabId || 1);

  React.useEffect(() => {
    setValue(activeIds?.tabId);
  }, [activeIds]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="!p-0 ">
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab
            className={`!text-white !font-sans !font-semibold !text-md !normal-case ${
              value === 0 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30  !rounded-tl-2xl  rounded-md `}
            label="Thought process"
            {...a11yProps(0)}
          />
          <Tab
            className={`!text-white !font-sans !font-semibold !text-md !normal-case ${
              value === 1 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30     `}
            label="Supporting content"
            {...a11yProps(1)}
          />
          <Tab
            className={`!text-white !font-sans !font-semibold !text-md !normal-case ${
              value === 2 ? "!bg-opacity-30 !bg-black" : ""
            } !bg-opacity-30  !rounded-tr-2xl  rounded-md `}
            label="Citation"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel className="!h-[70vh] m-3" value={value} index={0}>
        {/* {response[0].response?.thoughts.map((data, index) => (
          <div key={index} className="bg-white p-3 m-3 rounded">
            {data}
          </div>
        ))} */}

        {
          // eslint-disable-next-line react/prop-types
          response
            ?.filter((filterId) => filterId?.id === activeIds?.id)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white  rounded p-3 scroll !h-[70vh] overflow-y-scroll"
                dangerouslySetInnerHTML={{ __html: item?.response?.thoughts }}
              ></div>
            ))
        }

        {/* {response[0].response?.thoughts} */}
      </CustomTabPanel>
      <CustomTabPanel className="!h-[70vh] m-3" value={value} index={1}>
        <div className="!h-[70vh] overflow-y-scroll">
          {
            // eslint-disable-next-line react/prop-types
            response
              ?.filter((filterId) => filterId?.id === activeIds?.id)
              .map((item) => (
                <>
                  {item?.response?.data_points?.map((data, index) => (
                    <div key={index} className="bg-white p-3 rounded mb-3">
                      <div className="text-lg font-bold ">
                        {data?.split(".pdf:")[0]}
                      </div>
                      {data?.split(".pdf:")[1]}
                    </div>
                  ))}
                </>
              ))
          }
        </div>
      </CustomTabPanel>
      <CustomTabPanel
        className="!h-[70vh] m-3"
        // className="!m-0  max-h-[500px] overflow-y-auto "
        value={value}
        index={2}
      >
        {/* <span>{activePdf}</span> */}
        <div className="!h-[70vh] overflow-y-scroll">
          <iframe
            className=" rounded  "
            title="Citation"
            src={` https://func-openai-search-002.azurewebsites.net/api/content/${activePdf}?container=zim-container`}
            width="100%"
            height="810px"
            style={{ marginTop: "12px" }}
          />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
