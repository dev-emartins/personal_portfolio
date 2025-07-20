import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full md:py-2 p-5 flex justify-center items-center">
        <section className="w-full max-w-7xl flex flex-col justify-center items-center text-xs text-center gap-1">
          <p className="w-full flex justify-center items-center gap-1.5">Desenvolvido com <FaHeart className="text-red-500 text-lg" /> por Everaldo Martins</p>
          &copy; DEM &#174; - Dev Everaldo Martins - {`${new Date().getFullYear()}`}  - Todos os direitos reservados.
        </section>
    </footer>
  );
}

export default Footer