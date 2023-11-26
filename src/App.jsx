
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import User from "./pages/User"
import { Navbar } from "./components/Navbar"
import context from "./context/Authcontext"
import { useState } from "react"


function App() {
  const [isAuth,setIsAuth] =useState(false)
  const [user,setUser] =useState({})

  return (
    <context.Provider value={{isAuth,setIsAuth,user,setUser}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
