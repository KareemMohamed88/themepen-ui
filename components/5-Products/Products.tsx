import useFetchApi from "@/hooks/useFetchApi"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import FadeLoader from "react-spinners/FadeLoader";
export default function ProductsList() {
    const [data, loading] = useFetchApi("https://v2-server.onrender.com/projects")
    return (
        <div className="bg-gray-800 w-full py-16">
            <div className="container">
                <h1 className="text-white text-5xl">Latest Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                
                    {loading ? <FadeLoader className="mx-auto" color="#fff" /> : data?.slice(0, 4).map((item: { picture: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) => (
                        <div className="space-y-10 rounded overflow-hidden">
                            <div className="w-full gap-10">
                                <div className="h-full w-full cols-span-1">
                                    <img
                                        className="object-cover object-center w-full"
                                        src={item.picture}
                                        alt="product picture"
                                        height={"100%"}
                                    />
                                </div>
                                <div className="text-white py-4">
                                    <h1 className="text-4xl mb-3">{item.title}</h1>
                                    <h5 className="text-sm mb-8 text-gray-400">{item.date}</h5>
                                    <p className="text-gray-300 text-sm mb-3">
                                        {item.description}
                                    </p>
                                    <button className="px-4 py-3 border-2 border-white text-zinc-100 text-sm rounded-full hover:bg-white hover:text-gray-800 transition-colors">Explore Product</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}