// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import BugReport from "@material-ui/icons/BugReport";
import Language from "@material-ui/icons/Language";
import Person from "@material-ui/icons/Person";

import Maps from "views/Maps/Maps.jsx";
import Icons from "views/Icons/Icons.jsx";
import  Grades from 'views/Grades/Grades.jsx';
import RTLPage from "views/RTLPage/RTLPage.jsx";
import TableList from "views/TableList/TableList.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Typography from "views/Typography/Typography.jsx";
import Attendance from 'views/Attendance/Attendance.jsx';
import UserProfile from "views/UserProfile/UserProfile.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
   
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/Students",
    name: "Students",
    
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
 {
    path: "/Grades",
    name: "Grades",
 
    icon: LibraryBooks,
    component: Grades,
    layout: "/admin"
  },
  {
    path: "/Classes",
    name: "Classes",
   
    icon:  BugReport,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/Attendance",
    name: "Attendance",
   
    icon:  Person,
    component: Attendance,
    layout: "/admin"
  },
  {
    path: "/Activities",
    name: "Activities",
   
    icon: BubbleChart,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Messages",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  /*{
    path: "/rtl-page",
    name: "RTL Support",
   
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  }*/
];

export default dashboardRoutes;
