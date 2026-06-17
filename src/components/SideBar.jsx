import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function SideBar({isOpen, onClose}) {

    return (
        <>
{isOpen && 
  <div onClick={onClose} className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" />
}  
        <div className={`fixed top-0 right-0 h-full w-80 bg-cream-base z-60 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
           
           <div className="flex flex-row justify-between py-3 px-3">
            <p className="mt-1 font-display text-2xl bg-gold-gradient bg-clip-text text-transparent">Luz & Sabor</p>

            <div onClick={onClose} className="cursor-pointer hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 w-10 h-10 rounded-full border border-gold-main flex justify-center items-center">
            <span className="text-gold-main"><FontAwesomeIcon icon={faX} className="text-gold-main"/></span>
            </div>
           </div>
           
            <hr className="border-none h-px bg-gold-gradient w-full"/>

           <div className="cursor pointer flex flex-col font-display text-xl">
            <a onClick={onClose} href="#Hero" className="py-6 px-3">Inicio</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>


            <a onClick={onClose} href="#Catalog" className="py-6 px-3">Catálogo</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>


            <a onClick={onClose} href="#Benefits" className="py-6 px-3">Por qué nosotros</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>


            <a onClick={onClose} href="#Clients" className="py-6 px-3">Clientes</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>


            <a onClick={onClose} href="#FAQ" className="py-6 px-3">Preguntas frecuentes</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>


            <a onClick={onClose} href="#CTA" className="py-6 px-3">Hacer pedido</a>
                        <hr className="border-none h-px bg-gold-gradient w-full"/>

            </div>
        </div>
        </>
    )
}


