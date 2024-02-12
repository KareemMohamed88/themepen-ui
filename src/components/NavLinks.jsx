import { NavLink } from "react-router-dom";
import Axios from "axios"
import { useEffect, useState } from 'react';

const NavLinks = () => {
    const id = JSON.parse(localStorage.getItem("user-id"))
    const [data, setData] = useState({})

    const getUserData = async () => {
        const res = await Axios.get(`https://v2-server.onrender.com/users/getuser/${id.user._id}`)
            setData(res.data)
    }
    useEffect(() => {
        getUserData()
    })
    return (
        <div className="nav-links bg-mainColor w-full px-8 py-1 flex justify-between items-center">
            <p className="text-white">Hello: {data.firstName}</p>
            <ul className="flex gap-7">
                <li><NavLink className="text-slate-100 text-sm cursor-pointer" to=""><i class="fa-brands fa-facebook-f"></i></NavLink></li>
                <li><NavLink className="text-slate-100 text-sm cursor-pointer" to=""><i class="fa-brands fa-instagram"></i></NavLink></li>
                <li><NavLink className="text-slate-100 text-sm cursor-pointer" to="https://pin.it/2tbnAvq1E"><i class="fa-brands fa-pinterest-p"></i></NavLink></li>
            </ul>
        </div>
    )
}
export default NavLinks