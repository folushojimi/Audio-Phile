import { BrowserRouter, Routes, Route,} from "react-router-dom"
import Homepage from "./pages/Homepage"
 
// import {HomePage} from "./pages/Homepage"
// import {HeadPhones} from "./pages/HeadPhones"
// import {Speakers} from "./pages/Speaker"
// import {EarPhones} from "./pages/EarPhones"

 
const App  =()=>{

return(

    <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/" element={<HeadPhones/>}/>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/> */}

      </Routes>
    </>
    </BrowserRouter>

    )
}
   
export default App
