import { FaRegCircleQuestion } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Typewriter from "@/components/typewriter"
import user from "@/assets/user.png"

function Home(){
    return (
        <section className="max-2xl:w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0">
                <h3 className="text-base md:text-xl font-black font-sans px-3 py-1">Olá! Bem-vindo(a), meu nome é</h3>
                <h2 className="text-4xl md:text-7xl font-black font-sans p-3">Everaldo Martins</h2>
                <h4 className="w-full md:w-xl flex justify-start items-center px-4 py-6">{ <Typewriter  /> }</h4>
                <div className="p-4">
                    <Link to="/about" className="w-fit flex justify-between items-center gap-2 bg-(--foreground) text-(--background) px-8 py-3 rounded-xl hover:bg-(--foreground)/80">
                    <FaRegCircleQuestion className="text-xl" /> 
                    <span className="font-sans font-medium text-sm">Saiba mais</span>
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">
                <figure className="w-4/5 rounded-full">
                    <img className="rounded-full" src={ user } alt="Image DEM" />
                </figure>
            </div>
        </section>
    )
}

export default Home