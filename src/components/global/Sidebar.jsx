import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import avatar from "./../media/user.png";
// import { WatchListCard } from "@watchlist/card/src";
import { Data, gainLoss } from "./WatchListData";
import React from "react";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`, //overides background
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        zIndex: "0",
      }}
      display="flex"
      //   width={collapsed ? "10%" : "100%"}
    >
      <Sidebar
        backgroundColor={colors.primary[400]}
        style={{ height: "255vh" }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            // onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={avatar}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Kelvin Fumo
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Developer
                </Typography>
              </Box>
            </Box>
          )}

          {!collapsed && (
            <Box paddingLeft={collapsed ? undefined : "10%"}>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "50px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
            </Box>
          )}

          {collapsed ? (
            <></>
          ) : (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              paddingLeft={collapsed ? undefined : "10%"}
            >
              My Watchlist
            </Typography>
          )}

          <Box>
            {/* {collapsed ? (
                <></>
              ) : (
                <WatchListCard
                  companyName="Amazon Inc."
                  Ticker="AMZN"
                  price="$180.75"
                  upside="20%"
                  exchange="NYSE"
                  stockData={Data.Amazon.stockData}
                  passedData={true}
                  lossgain={gainLoss}
                />
              )} */}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default SideBar;
