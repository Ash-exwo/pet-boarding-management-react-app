import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBoarding from "./components/AddBoarding"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-boarding" element={<AddBoarding/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
