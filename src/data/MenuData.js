import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PowerBiIcon from '@mui/icons-material/BarChart';
import VideoIcon from '@mui/icons-material/VideoLibrary';
import TestIcon from '@mui/icons-material/Extension';




export const MenuListing = [
    {
        id: 1,
        path: '/',
        name: 'Home',
        icon: HomeIcon,
    },
    {
        id: 2,
        path: '/chatbot',
        name: 'Chatbot',
        icon: SmartToyRoundedIcon,
    },
    {
        id: 3,
        path: '/powerbi',
        name: 'Power Bi',
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
        ],

    },
    {
        id: 4,
        path: '/video',
        name: 'Video',
        icon: VideoIcon,
    },
    {
        id: 5,
        path: '/test',
        name: 'Test',
        icon: TestIcon,
    },
]