import Button from "./Button";

export default function Navbar() {
    return(
    <nav className="w-full fixed top-0 left-0 z-50 bg-cream-base flex items-center justify-between p-4">

        <h1 className="text-gold-main font-bold text-xl flex flex-row">Luz y Sabor</h1>

        <button className="text-gold-main bg-transparent border-none text-2xl flex flex-row-reverse hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200">
        ☰
        </button>
    </nav>


    )
}