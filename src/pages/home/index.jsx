import { FaRegCircleQuestion } from "react-icons/fa6"
import Typewriter from "@/components/typewriter"
import Button from "@/components/button"
import user from "@/assets/user.png"

function Home(){
    return (
        <section className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0">
                <h4 className="text-base md:text-xl font-black font-sans px-3 py-1">
                    Olá! Bem-vindo(a), meu nome é
                </h4>
                <h2 className="text-4xl md:text-7xl font-black font-sans p-3">
                    Everaldo Martins
                </h2>
                <h4 className="w-full md:w-xl flex justify-start items-center p-4">
                    { <Typewriter  /> }
                </h4>
                <div className="p-4">
                    <Button icon={ FaRegCircleQuestion } text="Saiba mais" link="/about" />
                </div>
            </div>
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">
                <figure className="w-4/5 block overflow-hidden bg-(--foreground)/10 backdrop-blur-xs rounded-full shadow-2xs shadow-(--foreground)/60">
                    <img className="w-full p-0" src={ user } alt="Image DEM" />
                </figure>
            </div>
        </section>
    )
}

export default Home