import axios from "axios"
import { useState } from "react"
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [cookies, setCookie] = useCookies();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        picture: ""
    })
    const { username, email, password, picture } = userData
    const handleRegister = async (e: { preventDefault: () => void }) => {
      e.preventDefault()  
      const formData = new FormData()
        formData.append("username", userData.username)
        formData.append("email", userData.email)
        formData.append("password", userData.password)
        formData.append("picture", userData.picture)
        await axios.post('https://v2-server.onrender.com/v2-server/auth/register', formData).then((res) => {
          toast.dark("user created successfully")
          setCookie("jwt-authorization", response.data.token)
        setCookie("user-profile", response.data.newUser)
        }).catch((err) => {
          toast.dark(err?.response.data.message)
        })
      }

    return (
        <div className="w-full h-screen bg-indigo-500" id="register">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center container">
              <div>
                  <h1 className="text-white text-3xl">Register and now create your profile page</h1>
              </div>
              <form onSubmit={handleRegister} className="mx-auto h-fit w-full p-5 shadow-md bg-white ml-auto flex flex-col gap-y-5 rounded-lg">
                  <label className="space-y-2">
                    <h2 className="font-bold">username</h2>
                    <input onChange={(e) => setUserData({ ...userData, username: e.target.value })} className="w-full h-10 border border-slate-500/20 placeholder:text-zinc-400 placeholder:font-medium placeholder:text-sm pl-3" placeholder="jogn deree" type="text" />
                  </label>
                  <label className="space-y-2">
                    <h2 className="font-bold">email</h2>
                    <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} className="w-full h-10 border border-slate-500/20 placeholder:text-zinc-400 placeholder:font-medium placeholder:text-sm pl-3" placeholder="example@gmail.com" type="email" />
                  </label>
                  <label className="space-y-2">
                    <h2 className="font-bold">password</h2>
                    <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} className="w-full h-10 border border-slate-500/20 placeholder:text-zinc-400 placeholder:font-medium placeholder:text-sm pl-3" placeholder="1234%$#@ABC" type="password" />
                  </label>
                  <label className="w-full py-2 bg-indigo-500/20 rounded cursor-pointer" htmlFor="upload">
                    <h3 className="bg-indigo-500 text-white font-bold px-4 py-2 w-fit mx-auto rounded text-xs">UPLOAD <i className="ml-2 fa-solid fa-cloud-arrow-up"></i></h3>
                  </label>
                  <input id="upload" className="hidden" onChange={(e) => setUserData({ ...userData, picture: e.target.files[0] })} type="file"/>
                  <button className="bg-yellow-400 text-black h-10 rounded-full text-xs font-medium">REGISTER</button>
              </form>
          </div>
        </div>
    )
}

export default Register