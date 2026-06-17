import { faQ } from "@fortawesome/free-solid-svg-icons"
import Benefits from "../sections/Benefits"
import Catalog from "../sections/Catalog"
import CTA from "../sections/CTA"

export default function SideBar({isOpen, onClose}) {

    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-cream-surface transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
           <div className="cursor pointer flex flex-col font-display text-xl">
            <a onClick={onClose} href="#Hero">Inicio</a>

            <a onClick={onClose} href="#Catalog">Catálogo</a>

            <a onClick={onClose} href="#Benefits">Por qué nosotros</a>

            <a onClick={onClose} href="#Clients">Clientes</a>

            <a onClick={onClose} href="#FAQ">Preguntas frecuentes</a>

            <a onClick={onClose} href="#CTA">Hacer pedido</a>
            </div>
        </div>
    )
}


