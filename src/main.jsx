import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalCss from "./globals.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
)
