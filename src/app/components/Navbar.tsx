import Link from "next/link";

export default function Navbar() {
  return (

   <div className="flex-col items-center bg-[#1d1e2c]  ">
            <nav className=" max-w-full flex justify-between items-center py-6 px-12">
      {/* Navbar Brand */}
     
      <div className="left">
      <h1 className="text-white font-montserrat font-bold text-2xl">BrandName</h1>
      </div>
        {/* Navbar Links */}
        <div className="mid">
        <div className="text-white flex space-x-8">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/"className="hover:text-gray-400">Product</Link>
          <Link href="/"className="hover:text-gray-400">Pricing</Link>
          <Link href="/"className="hover:text-gray-400">contact</Link>
          
        </div></div>

        {/* Login and Join Us Buttons */}
        <div className="right"></div>
        <div className="flex space-x-6  ">
          <Link href="/"className="text-white py-2 ">Login</Link>
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4">JOIN US</button>
        
        </div>
        <div>
          </div> 
          </nav>
    

    </div>
    
  )
}
    