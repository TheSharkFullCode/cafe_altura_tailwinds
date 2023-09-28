import {BrowserRouter,Route, Routes  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navbar } from "./Navbar";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>

    {/* <HeroPage/> */}
    </BrowserRouter>
      
    </>
  )
}

export default App
