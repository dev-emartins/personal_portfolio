import { FaHome } from "react-icons/fa"

function Home(){
    return (
        <section className="min-h-96 flex flex-col items-center justify-center">
            <FaHome className="text-6xl text-cyan-500 mb-4" />
            <h1 className="text-3xl text-cyan-500 text-center">Home</h1>
        </section>
    )
}

export default Home