import { Outlet } from "react-router-dom"

import Header from "@/components/header"
import Footer from "@/components/footer"

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
