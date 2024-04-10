import { motion } from 'framer-motion'

import axios from "axios"
import { useState } from "react"
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login({ setLoginModal }) {
    const [cookies, setCookie] = useCookies();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const { email, password } = userData
    const handleRegister = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axios.post("https://v2-server.onrender.com/auth/login", { ...userData }).then((res) => {
            setUserData({
                ...userData,
                email: "",
                password: ""
            })
            setCookie("jwt-authorization", res.data.token)
            toast.dark("Loged in successfully")
            setLoginModal(false)
        }).catch((err) => {
            toast.dark(err.response.data.message)
            console.log(err)
        })
    }
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} className="w-full h-screen bg-black/80 fixed top-0 left-0">
            <motion.div
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-fit w-10/12 md:w-1/4 p-5 shadow-md bg-white ml-auto flex flex-col gap-y-5 rounded-lg"
                initial={{ top: "590%" }}
                animate={{ top: "50%" }}
                transition={{ duration: 1 }}
            >
                <div className="flex items-center justify-between">
                    <h4 className="font-bold">Login</h4>
                    <button onClick={() => setLoginModal(false)} className="bg-indigo-500 border-b-2 border-indigo-700 text-white px-2 py-1 rounded text-xs"><i className="fa-solid fa-x"></i></button>
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-y-5 rounded-lg">
                    <label className="space-y-2">
                        <h2 className="font-bold">email</h2>
                        <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} className="w-full h-10 border border-slate-500/20 placeholder:text-zinc-400 placeholder:font-medium placeholder:text-sm pl-3" placeholder="example@gmail.com" type="email" />
                    </label>
                    <label className="space-y-2">
                        <h2 className="font-bold">password</h2>
                        <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} className="w-full h-10 border border-slate-500/20 placeholder:text-zinc-400 placeholder:font-medium placeholder:text-sm pl-3" placeholder="1234%$#@ABC" type="password" />
                    </label>
                    <button className="bg-yellow-400 text-black h-10 rounded-full text-xs font-medium">Login</button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Login