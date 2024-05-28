// import { Dashboard, ThreeMp } from "@mui/icons-material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Topbar from "./components/global/Topbar";
import Dashboard from "./scenes/dashboard";
import SideBar from "./components/global/Sidebar";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [theme, colorMode] = useMode();
  const [symbol, setSymbol] = useState("IBM");
  const isAboveMediumScreens = useMediaQuery("(min-width:720px)");
  console.log(isAboveMediumScreens);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAboveMediumScreens ? <SideBar /> : <></>}
          <main className="content">
            <Topbar setSymbol={setSymbol} />
            <Routes>
              <Route path="/" element={<Dashboard symbol={symbol} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
