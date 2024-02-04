import React from 'react'

const cards = () => {
  return (
    <div className='cards bg-speceficSection dark:bg-indigo-900/20 w-full py-36'>
      <div className='container mx-auto grid gap-5 items-center grid-cols-1 md:grid-cols-2'>
        <div className='z-10 flex items-center flex-col md:-mt-52'>
          <span className='-mt-20 mb-10 text-9xl text-slate-300'>,,</span>
          <h1 className='-ml-10 font-sans text-4xl'>What we are <br /> providing for you <span className='text-6xl text-mainColor'>.</span></h1>
        </div>
        <div className='z-10 h-full grid gap-5 grid-cols-1 md:grid-cols-2'>
          <div className='card rounded-md h-52 bg-mainColor p-3 flex flex-col justify-center gap-y-5'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-white text-slate-300'><i className="fa-solid fa-brain"></i></span>
            <h1 className='font-sans font-medium text-white text-xl'>Creative Design</h1>
            <p className='text-xs text-white'>
              We are provides a good desogn thats have carefully selected color pallets and unique images
            </p>
          </div>
          <div className='card rounded-md h-52 bg-white p-3 flex flex-col justify-center gap-y-5'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-sky-300/40 text-sky-600'><i className="fa-solid fa-mobile-screen"></i></span>
            <h1 className='font-sans font-medium text-slate-800 text-xl'>Fully Responsive</h1>
            <p className='text-xs text-slate-600'>
              Responsive design is a important! phase in your project development to make your users can access you app from any where
            </p>
          </div>
          <div className='card rounded-md h-52 bg-white p-3 flex flex-col justify-center gap-y-5'>
            <span className='h-10 w-10 rounded-md flex justify-center items-center bg-rose-300/40 text-rose-600'><i class="fa-solid fa-headset"></i></span>
            <h1 className='font-sans font-medium text-slate-800 text-xl'>24/7 Support</h1>
            <p className='text-xs text-slate-600'>
              We provide a 24/7 for resolve any proplem facing our user & only send an email
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cards