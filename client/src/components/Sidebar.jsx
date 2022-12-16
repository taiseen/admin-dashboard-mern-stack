import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FlexBetween } from ".";
import sideBarNavData from "constants/sideBarNavData";
import profileImage from "assets/profile.jpeg";


const Sidebar = ({
  user,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");


  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);


  return (
    <Box component="nav">
      {
        isSidebarOpen && (
          <Drawer
            anchor="left"
            variant="persistent"
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            sx={{
              width: '250px',
              "& .MuiDrawer-paper": {
                width: '250px',
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
              },
            }}
          >
            <Box width="100%">
              <Box m="1.5rem 2rem 2rem 3rem">

                <FlexBetween color={theme.palette.secondary.main}>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold">
                      ECOMVISION
                    </Typography>
                  </Box>

                  {
                    !isNonMobile && (
                      <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <ChevronLeft />
                      </IconButton>
                    )
                  }
                </FlexBetween>
              </Box>

              {/* 
                Sidebar Navigation Links for going to different components 
                by react router <Outlet /> component
              */}
              <List>
                {
                  sideBarNavData.map(sideBar => {
                    if (!sideBar.icon) {
                      return (
                        <Typography key={sideBar.text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                          {sideBar.text}
                        </Typography>
                      );
                    }

                    const lcText = sideBar.text.toLowerCase();

                    return (
                      <ListItem key={sideBar.text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            // 🟠🟠🟠 by user click at side bar menu, UI color change...
                            backgroundColor:
                              active === lcText
                                ? theme.palette.secondary[300]
                                : "transparent",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[200],
                            }}
                          >
                            {<sideBar.icon />}
                          </ListItemIcon>

                          <ListItemText primary={sideBar.text} />

                          {
                            active === lcText && <ChevronRightOutlined sx={{ ml: "auto" }} />
                          }
                        </ListItemButton>
                      </ListItem>
                    );
                  })
                }
              </List>
            </Box>

            <Box position="absolute" bottom="2rem" width="100%">
              <Divider />

              <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">

                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px ",
                  }}
                />
              </FlexBetween>
            </Box>
          </Drawer>
        )
      }
    </Box>
  );
};

export default Sidebar;
