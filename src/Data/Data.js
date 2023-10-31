// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilSignInAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path : "/dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Sales",
    path : "/sales",
  },
  {
    icon: UilUsersAlt,
    heading: "Technical Status",
    path : "/technicalstatus",
  },
  {
    icon: UilPackage,
    heading: 'Account Status',
    path: "/accountstatus",
  },
  {
    icon: UilSignOutAlt,
    heading: 'SignIn',
    path: "/signin",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Leads",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 100,
    value: "100",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Leads",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Approved Leads",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "50",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Approved Leads",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Pending Leads",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    value: "50",
    png: UilClipboardAlt,
    series: [
      {
        name: "Pending Leads",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Cyllian Murphy",
    noti: "lorenipsum dolor sit amet, consectetur adipiscing elit.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Micheal Scofield",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "John Doe",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hours ago",
  },
  {
    img: img3,
    name: "John Doe",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hours ago",
  },
  {
    img: img3,
    name: "John Doe",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hours ago",
  },
  {
    img: img3,
    name: "John Doe",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hours ago",
  },
  {
    img: img3,
    name: "John Doe",
    noti: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hours ago",
  },
];
// cardsData[0].value = cardsData[0].value.replace('$', '');
cardsData.forEach(card => {
  card.value = card.value.replace('$', '');
});