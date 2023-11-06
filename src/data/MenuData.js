import HomeIcon from '@mui/icons-material/Home';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PowerBiIcon from '@mui/icons-material/BarChart';
import VideoIcon from '@mui/icons-material/VideoLibrary';
import TestIcon from '@mui/icons-material/Extension';




export const MenuListing = [
    {
        id: 1,
        path: '/',
        name: 'Landing Screen',
        icon: HomeIcon,
    },
    {
        id: 2,
        path: '/chatbot',
        name: 'Azure OpenAI Chatbot for Enterprise Data',
        icon: SmartToyRoundedIcon,
    },
    {
        id: 3,
        path: '/powerbi',
        name: 'Analytics with Power BI',
        icon: PowerBiIcon,
        submenu: [
            {
                id: 11,
                name: "Cargo Shipments Report",
                path: '/cargo_shipments_report',
            },
            {
                id: 22,
                name: "Cargo Global Network Report",
                path: '/cargo_global_network_report',
            },
            {
                id: 33,
                name: "Freight Forwarding Report",
                path: '/freight_forwarding_report',
            },
            {
                id: 34,
                name: "Competitor Analysis Report",
                path: '/competitor_analysis_report',
            },
        ],

    },
    {
        id: 4,
        path: '/video',
        name: 'Microsoft Fabric Copilot for Power BI',
        icon: VideoIcon,
    },
    // {
    //     id: 5,
    //     path: '/test',
    //     name: 'Test',
    //     icon: TestIcon,
    // },
]