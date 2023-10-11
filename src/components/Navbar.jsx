import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">HAITHAM DIHAJI.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-[#00df9a] cursor-pointer font-bold">About</li>
                <li className="p-4 hover:text-[#00df9a] cursor-pointer font-bold">Skills</li>
                <li className="p-4 hover:text-[#00df9a] cursor-pointer font-bold">Home</li>
                <li className="p-4 hover:text-[#00df9a] cursor-pointer font-bold">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden" >
                {!nav ? <AiOutlineMenu size={25}  /> : <AiOutlineClose size={25} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">HAITHAM DIHAJI.</h1>
                <ul className="uppercase p-4 bodrer-b border-grey-600">
                    <li className="p-4  border-b border-grey-600">About</li>
                    <li className="p-4  border-b border-grey-600">Skills</li>
                    <li className="p-4  border-b border-grey-600">Home</li>
                    <li className="p-4 font-bold">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar