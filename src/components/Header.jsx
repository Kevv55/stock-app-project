import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      <Typography>
        Be sure to select the ticker of a valid publicly traded company.
      </Typography>
      <Typography>
        For example, try "MSFT", "NVDA", or "AAPL" and don't select invalid
        variants of the tickers.
      </Typography>
    </Box>
  );
};

export default Header;
