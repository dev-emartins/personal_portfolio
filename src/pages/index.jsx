import { Outlet } from "react-router-dom"

import Header from "@/components/header"

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      {/* Footer */}
    </>
  )
}

export default App
