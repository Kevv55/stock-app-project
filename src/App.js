import { Dashboard, ThreeMp } from "@mui/icons-material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Topbar from "./components/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  const [symbol, setSymbol] = useState("IBM");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar setSymbol={setSymbol} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
