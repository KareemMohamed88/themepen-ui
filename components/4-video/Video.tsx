import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function video() {
    // const videoRef = useRef<HTMLVideoElement>(null)
    // const handlePlay = () => {
    //     const video = videoRef.current
    //     if(video){
    //         video.play()
    //     }
    // }

    // useEffect(() => {
    //     handlePlay()
    // })

    return (
        <div className="w-full">
            <div className='text-end px-10 space-y-5 my-12'>
                <h1 className="text-4xl text-gray-800"><span className="text-indigo-500">Powerful Website At</span> The information Landing <br />  pages and <span className='text-indigo-500'>Blogging</span></h1>
                <button className="bg-yellow-400 text-gray-700 px-4 py-2.5 text-sm flex items-center gap-3 ml-auto">Call For Product <FontAwesomeIcon icon={faPhone} /></button>
            </div>
            <div className='w-full md:w-3/4 relative md:m-10 md:rounded-xl overflow-hidden'>
            <video
                controls
                id="video"
                loop
                width="100%"
            >
                <source src='https://res.cloudinary.com/dna2e8dot/video/upload/v1712537210/csbvsduscwgu1euiktzm.mp4' type="video/mp4"/>
            </video>

            </div>
        </div>
    )
}