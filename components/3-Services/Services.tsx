import Image from "next/image"
import icon1 from "@/public/icons/icon1.png"
import icon2 from "@/public/icons/icon2.png"
import icon3 from "@/public/icons/icon3.png"
const Services = () => {
  return (
    <div className="h-fit py-10 ">
      <div className="container">
        <h1 className="text-black text-4xl">Features We Provide</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className='rounded-md h-72 bg-indigo-100/70 p-3 flex flex-col justify-center'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-indigo-500 text-white mb-5'><i className="fa-solid fa-brain"></i></span>
            <h1 className='font-sans font-medium text-zinc-800 text-xl mb-12'>Creative Design</h1>
            <p className='text-xs text-zinc-500'>
              We are provides a good desogn thats have carefully selected color pallets and unique images
            </p>
          </div>
          <div className='card rounded-md h-72 bg-blue-100/70 p-3 flex flex-col justify-center'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-blue-500 text-white mb-5'><i className="fa-solid fa-mobile-screen"></i></span>
            <h1 className='font-sans font-medium text-slate-800 text-xl mb-12'>Fully Responsive</h1>
            <p className='text-xs text-slate-600'>
              Responsive design is a important! phase in your project development to make your users can access you app from any where
            </p>
          </div>
          <div className='card rounded-md h-72 bg-green-100/90 p-3 flex flex-col justify-center'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-green-500 text-white mb-5'><i className="fa-solid fa-headset"></i></span>
            <h1 className='font-sans font-medium text-slate-800 text-xl mb-12'>24/7 Support</h1>
            <p className='text-xs text-slate-600'>
              We provide a 24/7 for resolve any proplem facing our user & only send an email
            </p>
          </div>
          <div className='card rounded-md h-72 bg-pink-100/90 p-3 flex flex-col justify-center'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-pink-500 text-white mb-5'><i className="fa-solid fa-building"></i></span>
            <h1 className='font-sans font-medium text-slate-800 text-xl mb-12'>Cheap websites for small start ups</h1>
            <p className='text-xs text-slate-600'>
              With themepen you can start your small website with cheap price start from 25$
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services