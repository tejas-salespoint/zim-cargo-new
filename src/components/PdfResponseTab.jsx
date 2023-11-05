import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PdfResponseTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='!p-0 ' sx={{ width: '100%' , padding : '0'  }}>
      <Box  sx={{ borderBottom: 1, borderColor: 'divider' ,padding : 0 }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
          <Tab className={`!text-white !font-sans !font-semibold !text-md !normal-case ${value === 0 ? '!bg-opacity-30 !bg-black' : ''} !bg-opacity-30  !rounded-tl-2xl  rounded-md `}  label="Item One" {...a11yProps(0)} />
          <Tab className={`!text-white !font-sans !font-semibold !text-md !normal-case ${value === 1 ? '!bg-opacity-30 !bg-black' : ''} !bg-opacity-30     `}  label="Item Two" {...a11yProps(1)} />
          <Tab className={`!text-white !font-sans !font-semibold !text-md !normal-case ${value === 2 ? '!bg-opacity-30 !bg-black' : ''} !bg-opacity-30  !rounded-tr-2xl  rounded-md `} label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel  className="!m-0 max-h-[500px] overflow-y-auto " value={value} index={2}>
      <iframe
      title="Citation"
      src="https://enterprise-chatbot-001.azurewebsites.net/api/content/2452Annual_Master_Circular_Hindi-2021-22_6Jan-15.pdf?container=9e2a2410"
      width="100%"
      height="810px"
      style={{ marginTop: '12px' }}
    />
      </CustomTabPanel>
    </Box>
  );
}
