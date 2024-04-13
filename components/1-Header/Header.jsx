"use-client";

import Link from "next/link"
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Login from "../Modals/Login";
import Cookies from "universal-cookie";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Why Choose us", path: "#Choose" },
    { name: "Contact", path: "#Contact" },
]

export default function Header() {
    const [isClient, setIsClient] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    const token = new Cookies().get("jwt-authorization")
    const authState = useSelector((state) => state.auth.authState);


    const handleOpenMenu = () => {
        setIsActive((current) => !current)
    }
    const handleOpenProfileMenu = () => {
        setProfileMenu((current) => !current)
    }
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="w-full">
            {loginModal && <Login setLoginModal={setLoginModal}/>}
            <div className="container flex items-center justify-between h-24">
                <Link href="/" className="font-bold">Themepen</Link>
                <nav className="hidden md:flex items-center gap-12">
                    <ul className="flex gap-5">
                        {navLinks.map((item, index) => (
                            <li key={index}><Link className="a text-zinc-500 hover:text-zinc-800 text-sm font-normal transition-colors" href={`/${item.path}`}>{item.name}</Link></li>
                        ))}
                    </ul>
                    {token && 
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                        <p onClick={handleOpenProfileMenu} className="text-zinc-600 hover:text-zinc-800 transition-colors text-sm cursor-pointer">
                            Account <i className={`ml-3 fa-solid fa-caret-${profileMenu ? "up" : "down"}`}></i>
                        </p>
                    </div>
                    }
                    {!token? <div className="flex items-center gap-3">
                        <Link className="bg-indigo-500 text-white font-bold text-sm border-b-4 border-indigo-700 rounded-md px-4 py-2" href="#register">Sign in</Link>
                        <button onClick={() => setLoginModal(true)} className="bg-indigo-500 text-white font-bold text-sm border-b-4 border-indigo-700 rounded-md px-4 py-2">Login in</button>
                    </div> : null}
                </nav>
                <button onClick={handleOpenMenu} className="blcok md:hidden"><i className="fa-solid fa-bars hover:text-indigo-500"></i></button>
            </div>
            <div className="container relative">
                {profileMenu && <div className="w-fit shadow-lg ml-auto bg-white z-50 p-6 border-b-4 border-indigo-500 absolute right-0">
                    <div className="flex items-center justify-between gap-3">
                        {/* <img
                            className="w-8 h-8 rounded-full"
                            src={isClient && authState.picture}
                            alt=""
                        /> */}
                        <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                        <div>
                            <h4 className="text-xs text-zinc-700">Kareem mohamed</h4>
                            <p className="text-xs text-zinc-500">kaeem@gmail.com</p>
                        </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm flex items-center border-b py-3">
                            <button><i className="fa-solid fa-sun mr-2"></i> Light mode</button>
                        </li>
                        <li className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm flex items-center border-b py-3">
                            <button><i className="fa-solid fa-sun mr-2"></i> Light mode</button>
                        </li>
                        <li className="text-zinc-500 hover:text-zinc-800 transition-colors text-sm flex items-center border-b py-3">
                            <button><i className="fa-solid fa-right-from-bracket"></i> Sign out</button>
                        </li>
                    </ul>
                </div>
                }
            </div>

            {isActive && <div className="block md:hidden w-full bg-white z-50 pb-6 border-b-4 border-indigo-500">
                <div className="container">
                    <ul className="space-y-5">
                        {navLinks.map((item, index) => (
                            <li key={index}><Link className="a text-zinc-500 hover:text-zinc-800 text-sm font-normal transition-colors" href={`/${item.path}`}>{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>}
        </div>
    )
}