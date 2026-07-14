import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBoarding from "./components/AddBoarding"
import ViewBoarding from "./components/ViewBoarding"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-boarding" element={<AddBoarding/>}/>
      <Route path="/view-boarding" element={<ViewBoarding/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
