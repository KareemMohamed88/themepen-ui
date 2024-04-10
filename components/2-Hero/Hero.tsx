import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
    return (
        <div className="h-screen bg-peacefull">
            <div className="container grid place-items-center w-full h-full">
                <div className="space-y-6">
                    <p className="text-zinc-500 w-3/4">
                        Theme Pen is a small global company his goal is sell high quality and cheap web templates for other companies or student and we have a big collection of web templates.
                    </p>
                    <h1 className="text-gray-700 text-4xl md:text-6xl">Creating Softweres & <br/> <span className="text-indigo-500">Website</span> Building <span className="text-indigo-500">Services</span></h1>
                    <button className="bg-yellow-400 text-gray-700 px-4 py-2.5 text-sm flex items-center gap-3">Quick Start <FontAwesomeIcon icon={faCaretRight} /></button>
                </div>

            </div>
        </div>
    )
}
