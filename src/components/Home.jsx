const Home =()=>{
    return(
        <>
        <div className=" bg-[#191919] w-full h-[38rem]">
         <div className="flex justify-center items-center gap-16 text-white bg-[#191919] font-Manrope">

            <div>
             <h1 className="pb-2 font-bold">NEW PRODUCT</h1>
             <h1 className="font-bold text-6xl mb-1">XX99 MARK II</h1>
             <h1 className="font-bold text-6xl">HEADPHONES</h1> 

                <p className="w-96 pt-6 text-[#7a737e] font-semibold leading-6">Experience natural, life like audio and
                 exceptional build quality made for the
                 passionate music enthusiast.</p>

                <button className="text-white bg-[#d87d4a] font-bold text-sm  py-3 px-10 mt-12">SEE PRODUCT</button>

            </div>

            <div>
             <img src="/images/home-img.jpg" alt="home-image"  className="w-[600px] h-[600px]"/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home