import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./components/MainLayout";

function App() {
    return (
        <>
            <Router>
                <ThemeProvider theme={Theme}>
                    <CssBaseline />
                    <MainLayout />
                </ThemeProvider>
            </Router>
        </>
    );
}

export default App;
