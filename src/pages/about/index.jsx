import setup from "@/assets/setup.jpg"
import { FaDownload } from "react-icons/fa6"
import ButtonLink from "@/components/buttonlink"

function About(){
    return (
        <section className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-center gap-3">
            <div className="w-full md:w-1/2 pt-3 md:pt-0 flex justify-center items-center">
                <figure className="w-11/12 rounded-2xl shadow-2xs shadow-(--foreground)/60">
                    <img className="rounded-2xl" src={ setup } alt="Image DEM" />
                </figure>
            </div>
            <div className="w-full md:w-1/2 p-3 md:p-0 flex flex-col justify-start items-start gap-3">
                <h2 className="text-3xl md:text-4xl font-black font-sans">Sobre mim</h2>
                <h4 className="text-xl font-bold">Desenvolvedor Full Stack</h4>
                <p className="text-base text-justify leading-relaxed">
                    Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência criando soluções web
                    modernas e eficientes. Especializado em React, Next.js, Node.js e tecnologias cloud.
                </p>
                <p className="text-base text-justify leading-relaxed">
                    Acredito que a tecnologia deve ser acessível e útil para todos. Por isso, foco em criar interfaces
                    intuitivas e experiências de usuário excepcionais.
                </p>
                <div className="w-full py-5 flex justify-center md:justify-start items-center">
                    <ButtonLink icon={ FaDownload } text="Baixar CV" link="/cv.pdf" />
                </div>
            </div>
        </section>
    )
}

export default About