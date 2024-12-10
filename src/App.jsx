import { BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import HeadPhones from "./pages/HeadPhones"
import Speakers from "./pages/Speaker"
import Earphones from "./pages/EarPhones"
const App  =()=>{


 return(
  <BrowserRouter>
     <>
    <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/headphones" element={<HeadPhones/>}/>
     <Route path="/speakers" element={<Speakers/>}/>
     <Route path="/earphones" element={<Earphones/>}/>
    </Routes>
     </>
  </BrowserRouter>
    )
}
   
export default App
