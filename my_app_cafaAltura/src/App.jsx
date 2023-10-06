import {BrowserRouter,Route, Routes  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Navbar } from "./Navbar";
import { ProductFect } from "./ProductFect";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tienda" element={<ProductFect/>} />

      </Routes>
      

    {/* <HeroPage/> */}
    </BrowserRouter>
      
    </>
  )
}

export default App
