import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "@/style/index.css"

import App from "@/pages"
import Home from "@/pages/home"
import About from "@/pages/about"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          {/* Add more routes here as needed */ }
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
