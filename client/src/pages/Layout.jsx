import { Box, useMediaQuery } from "@mui/material";
import { useGetUserQuery } from "reduxToolkit/api";
import { Sidebar, Navbar } from "components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Layout = () => {

  const userId = useSelector(state => state?.theme?.userId);
  const { data } = useGetUserQuery(userId); // ✅ REST API Call By RTK Query

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      // width="100%"
      // height="100%"
      display={isNonMobile ? "flex" : "block"}
    >

      {/* 🟡🟡🟡 Left Side 🟡🟡🟡  */}
      {/* 🟠🟠🟠 SideBar Component 🟠🟠🟠 */}
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* #################################################################### */}

      {/* 🟡🟡🟡 Right Side 🟡🟡🟡  */}
      <Box flexGrow={1}>

        {/* 🟠🟠🟠 Top-NavBar Component 🟠🟠🟠 */}
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* 🟠🟠🟠 All Child Component's 🟠🟠🟠 */}
        <Outlet />

      </Box>

    </Box>
  );
};

export default Layout;
