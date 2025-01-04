import { BrowserRouter, Routes, Route,} from "react-router-dom"
 import Homepage from "./pages/Homepage"
 import Speakers from "./pages/Speaker"
import HeadPhones from "./pages/HeadPhones"
import EarPhones from "./pages/EarPhones"
 

 
const App  =()=>{

return(

    <BrowserRouter>
    <>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/speakers"  element={<Speakers/>}/>
      <Route path="/headphones" element={<HeadPhones/>}/>
      <Route path="/earphones"  element={<EarPhones/>}/>
       </Routes>
    </>
    </BrowserRouter>

    )
}
   
export default App
