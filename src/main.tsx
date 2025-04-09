import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { AuthProvider } from "@/contexts/auth-context.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="devjob-theme">
      <AuthProvider><App /></AuthProvider>
        {/* <App /> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
