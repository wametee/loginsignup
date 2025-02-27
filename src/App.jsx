import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"

function App() {

  return (
     <Routes>
       <Route path="/" element={<Login />}  />
       <Route path="/signup" element={<Signup />}  />
     </Routes>
  )
}

export default App
