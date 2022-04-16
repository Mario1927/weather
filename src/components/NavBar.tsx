import Logo from "../assets/Logo.png"
import SearchBar from "./SearchBar"

export default function NavBar() {
  return (
    <div className='w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className="w-[100px]">
          <img src={Logo} alt="Logo" style={{height: '50px'}} />
        </div>
        <SearchBar />
        <div className="hidden w-[100px] sm:flex">
          <h2 className='font-bold'>Weather APP</h2>
        </div>
    </div>
  )
}
