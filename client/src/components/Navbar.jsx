import { AppBar, Button, Box, Typography, IconButton, InputBase, Toolbar, Menu, MenuItem, useTheme } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { setMode } from "reduxToolkit/themeSlice";
import { useDispatch } from "react-redux";
import { FlexBetween } from "components";
import { useState } from "react";
import profileImage from "assets/profile.jpeg";


const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {

  const theme = useTheme();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* 🟠🟠🟠 TOP LEFT SIDE 🟠🟠🟠 */}
        <FlexBetween>

          {/* Sidebar toggle button */}
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>

          <FlexBetween
            gap="3rem"
            p="0.1rem 1.5rem"
            marginLeft='8px'
            borderRadius="5px"
            backgroundColor={theme.palette.background.alt}
          >
            <InputBase placeholder="Search..." />

            <IconButton>
              <Search />
            </IconButton>

          </FlexBetween>

        </FlexBetween>


        {/* 🟠🟠🟠 TOP RIGHT SIDE 🟠🟠🟠 */}
        <FlexBetween gap="1.5rem">

          {/* Theme toggle button */}
          <IconButton onClick={() => dispatch(setMode())}>
            {
              theme.palette.mode === "dark"
                ? <DarkModeOutlined sx={{ fontSize: "25px" }} />
                : <LightModeOutlined sx={{ fontSize: "25px" }} />
            }
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                alt="profile"
                height="32px"
                width="32px"
                component="img"
                borderRadius="50%"
                src={profileImage}
                sx={{ objectFit: "cover" }}
              />

              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>

                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>

              </Box>

              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>

            <Menu
              open={isOpen}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
