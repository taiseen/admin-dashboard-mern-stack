import { Layout, Dashboard, Products, Customers, Transactions, Geography, Overview, Daily, Monthly, Breakdown, Admin, Performance } from "pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "styles/theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";


const App = () => {

  const mode = useSelector(state => state?.theme?.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            {/* 
              any Route present under this "<Layout />" component have "Sidebar" & "Top-Navbar" 
              "Sidebar" & "Top-Navbar" are present every single page or components...
              So "<Layout />" is a parent for these child components... 
            */}
            <Route element={<Layout />}>

              {/* all these child components are render inside <Outlet /> component */}

              {/* when user go into '/' then replace this by '/dashboard' */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />

            </Route>

          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App