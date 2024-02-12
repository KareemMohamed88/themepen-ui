import React from 'react'

const ComponentsGrid = () => {
    return (

        <div className="componentsGrid relative grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-4 w-full md:w-2/4 h-full z-40 md:ml-10">
            <div className="comp col-span-1 md:col-span-2 md:row-span-2 bg-slate-50 hover:bg-slate-200 rounded-xl p-4 h-fit  dark:bg-slate-800 dark:hover:bg-slate-900 ">
                <div className='flex items-center gap-2 mb-2'>
                    <span className='rounded-full p-3 flex items-center justify-center bg-sky-500 text-white'>
                        <i class="fa-solid fa-message"></i>
                    </span>
                    <p className='text-slate-500 dark:text-slate-200'>comments</p>
                </div>
                <h1 className='text-slate-900 dark:text-slate-200 text-4xl font-bold font-sans mb-4'>
                    7,782
                </h1>
                <p className='text-xs text-slate-400 dark:text-slate-200'>
                    <span className='text-emerald-400 mr-1'>
                        <i class="fa-solid fa-arrow-up mr-1"></i>
                        +2.1%
                    </span>
                    vs last week
                </p>
            </div>
            <div className="comp col-span-1 md:col-span-2 md:col-start-3 md:row-start-4 dark:text-slate-200 bg-slate-50 hover:bg-slate-200 rounded-xl p-4 flex items-center justify-between h-fit  dark:bg-slate-800 dark:hover:bg-slate-900 ">
                Team invite
                <span className='p-3 text-white rounded-xl bg-black text-xs'>
                    <i class="fa-solid fa-check"></i>
                </span>
            </div>
            <div className="comp col-span-1 md:col-span-3 md:col-start-3 md:-start-1 bg-slate-50 hover:bg-slate-200 rounded-xl p-4 h-fit  dark:bg-slate-800 dark:hover:bg-slate-900 md:translate-x-2 ">
                <div className='flex items-center gap-2'>
                    <span className='rounded-full p-3 flex items-center justify-center bg-emerald-500 text-white'>
                        <i class="fa-solid fa-chart-simple"></i>
                    </span>
                    <div>
                        <p className='text-slate-800 dark:text-slate-300'>Sales</p>
                        <p className='text-slate-500 text-xs dark:text-slate-200'>Sold products Growing up</p>
                    </div>
                </div>
            </div>
            <div className="comp col-span-1 md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-2 bg-slate-50 hover:bg-slate-200 rounded-xl p-4 h-fit  dark:bg-slate-800 dark:hover:bg-slate-900 ">
                <div className='flex items-center gap-2 mb-2'>
                    <span className='rounded-full p-3 flex items-center justify-center bg-red-500 text-white'>
                        <i class="fa-solid fa-heart"></i>
                    </span>
                    <p className='text-slate-500 dark:text-slate-300'>Loves</p>
                </div>
                <h1 className='text-slate-900 dark:text-slate-200 text-4xl font-bold font-sans mb-4'>
                    19,202
                </h1>
                <p className='text-xs text-slate-400 dark:text-slate-200'>
                    <span className='text-emerald-400 mr-1'>
                        <i class="fa-solid fa-arrow-up mr-1"></i>
                        +2.1%
                    </span>
                    vs last week
                </p>
            </div>
            <div className="comp col-span-1 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-3 bg-indigo-600 h-fit hover:scale-110 ease-in duration-300 rounded-xl overflow-hidden ">
                <div className='w-full h-1/2 flex items-center justify-center'>
                    <img className="object-contain" src={require("../assets/card-img.jpg")} alt="" />
                </div>
                <div className='p-4'>
                    <h2 className='text-white mb-2'>Card heading</h2>
                    <p className='text-slate-100 text-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti itaque aspernatur sint.
                    </p>
                </div>
            </div>
            <div className="comp col-span-1 md:col-span-2 md:col-start-4 md:row-start-5 bg-slate-50 hover:bg-slate-200 rounded-xl p-4 h-fit  dark:bg-slate-800 dark:hover:bg-slate-900 ">
                LOREM
            </div>
            <div className="comp col-span-1 md:col-start-3 md:row-start-5 relative flex items-center text-slate-900 dark:text-slate-200  ">
                Typography
            </div>
            <div className="comp col-span-1 md:col-start-5 md:row-start-4 w-full bg-blue-500 hover:bg-blue-600 m-auto rounded-2xl p-4 text-white text-sm cursor-pointer h-fit font-sans text-center  ">
                Learn more
            </div>
        </div>

    )
}

export default ComponentsGrid