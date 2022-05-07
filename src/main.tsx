import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const defaultTheme = createTheme();


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
