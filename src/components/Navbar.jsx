import {Link} from "react-router-dom"

  
// import audiophile from "../assets/audiophile-logo.png"
 
const Navbar =()=>{
    return(
      <>
{/* NavBar Container */}
      <div className="bg-[#191919] flex justify-center items-center  ">
      <div className="py-8 flex justify-center gap-[250px] items-center border-b-[1px] border-[#303030] ">

{/* logo */}
     {/* <div>
     <img src="/images/logo.svg" alt="audiophile" className="cursor-pointer"/>
     </div> */}

<div>
<Link to={"/"}><img src="/images/logo.svg" alt="audiophile" className="cursor-pointer"/></Link>
</div>


{/* pages */}
     <div className="flex gap-9 font-semibold text-white">
 <Link to={"/"} className=" hover:text-[#e07c4c]">HOME</Link>
 <Link to={"/headphones"} className="hover:text-[#e07c4c]">HEADPHONES</Link>
 <Link to={"/speakers"} className="hover:text-[#e07c4c]">SPEAKERS</Link>
 <Link to={"/earphones"} className="hover:text-[#e07c4c]">EARPHONES</Link>
     </div>

{/* cart */}
     <div>
    <img src="/images/Cart.svg" alt="Cart" className="cursor-pointer"/>
     </div>
           
     </div>
      </div>

     </>
    )
}
export default Navbar