import { FaHome } from "react-icons/fa"
import Typewriter from "@/components/typewriter"

function Home(){
    return (
        <section className="min-h-96 flex flex-col items-center justify-center">
            <FaHome className="text-6xl text-cyan-500 mb-4" />
            <h1 className="text-3xl text-cyan-500 text-center">Home</h1>
            <h2 className="w-full md:w-xl flex justify-start items-center p-5">{ <Typewriter  /> }</h2>
        </section>
    )
}

export default Home