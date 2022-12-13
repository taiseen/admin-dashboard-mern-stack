import { Box, useMediaQuery } from "@mui/material";
import { useGetUserQuery } from "reduxToolkit/api";
import { Sidebar, Navbar } from "components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Layout = () => {

  const userId = useSelector((state) => state?.global?.userId);
  const { data } = useGetUserQuery(userId);
  console.log("🚀 ~ file: Layout.jsx:14 ~ Layout ~ data", data)

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
