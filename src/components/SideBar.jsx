    import { faX,faHouse, faBookOpen,faStar, faComments, faQuestion, faBagShopping } from "@fortawesome/free-solid-svg-icons"
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
    import React from "react"

    export default function SideBar({isOpen, onClose}) {

    const links = [
        {href:"#Hero" , icon:faHouse , label:"Inicio"},
        {href:"#Catalog" , icon:faBookOpen , label:"Catálogo"},
        {href:"#Benefits" , icon:faStar , label:"Por qué nosotros"},
        {href:"#Clients" , icon:faComments , label:"Clientes"},
        {href:"#FAQ" , icon:faQuestion , label:"Preguntas frecuentes"},
        {href:"#CTA" , icon:faBagShopping , label:"Hacer pedido"},
    ]

        return (
            <>
    {isOpen && 
    <div onClick={onClose} className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" />
    }  
            <div className={`fixed top-0 right-0 h-full w-80 bg-cream-base z-60 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            <div className="flex flex-row bg-brown-dark justify-between py-3 px-3">
                <p className="mt-1 font-display text-2xl bg-gold-gradient bg-clip-text text-transparent">Luz & Sabor</p>

                <div onClick={onClose} className="cursor-pointer hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 w-10 h-10 rounded-full border border-gold-main flex justify-center items-center">
                <span className="text-gold-main"><FontAwesomeIcon icon={faX} className="text-gold-main"/></span>
                </div>
            </div>
            
                <hr className="border-none h-px bg-gold-gradient w-full"/>
            
                <div>
                    {links.map((link) => (
                        <React.Fragment key={link.href}>
                        <a onClick={onClose} href={link.href} className="block cursor-pointer text-text-primary font-display 
                        font-bold text-xl py-6 px-3 hover:bg-cream-alt hover:text-gold-main active:bg-cream-alt active:text-gold-main transition-all duration-200 ">
                           
                            <FontAwesomeIcon icon={link.icon} className="text-olive-base" /> {link.label}
                        </a>

                        <hr className="border-none h-px bg-gold-gradient w-full"/>
                        </React.Fragment>
                        
                    ))}
                </div>

            </div>
            </>
        )
    }


