import Link from "next/link"

const Footer = () => {
    return (
        <div className="space-y-10 mt-24">
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div>
                        <Link href="/" className="font-bold">Themepen</Link>
                    </div>
                    <div>
                        <h4 className="font-medium text-zinc-800 mb-2 text-sm">ABOUT</h4>
                        <p className="text-zinc-500 text-xs leading-4">Leading software worlds to turn your ideas into real bussines</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-zinc-800 mb-2 text-sm">CONTACT</h4>
                        <p className="text-zinc-500 text-xs mb-1">themepen@gmail.com</p>
                        <p className="text-zinc-500 text-xs">+20 111 629 1770</p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-x-4">
                            <li>
                                <Link className="bg-zinc-800 text-white h-7 w-7 flex items-center justify-center text-xs" href="https://www.facebook.com/themepen/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link className="bg-zinc-800 text-white h-7 w-7 flex items-center justify-center text-xs" href="https://www.instagram.com/themepen?igsh=MWZiYzludmdtNGluMA==">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link className="bg-zinc-800 text-white h-7 w-7 flex items-center justify-center text-xs" href="https://pin.it/2tbnAvq1E">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-zinc-500/20">
                <div className="container h-20 flex justify-between items-center">
                    <p className="text-zinc-800 text-sm">© Themepen, All rights reserved</p>
                    <Link className="text-zinc-500 hover:text-zinc-800 text-xs transtion-colors" href="/terms">Terms & Conditions</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer