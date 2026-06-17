import { useState } from "react";
import Button from "./Button";
import SideBar from "./SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../utils/links"

export default function Navbar() {
const [abierto, setAbierto] = useState(false)
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-brown-dark flex flex-col">
      <div className="flex items-center justify-between p-4">
        <em className="bg-gold-gradient bg-clip-text text-transparent font-italic font-display text-3xl">Luz & Sabor</em>

      {/* desktop */}
      <div className="hidden md:flex gap-6 text-xl">
        {links.map((link) => (
          <a key={link.id} onClick={() => document.getElementById(link.id).scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-cream-base font-display">
            {link.label}
          </a>
        ))}
      </div>

      {/*mobile*/}
      <div onClick={() => setAbierto(!abierto)} className="cursor-pointer">  
        <div className="text-gold-main bg-transparent border-none text-2xl hover:-translate-y-1 active:translate-y-0.5 
                          transition-all duration-200 md:hidden">
         <span className={`transition-all duration-300 ${abierto ? "opacity-0" : "opacity-100"}`}><FontAwesomeIcon icon={faBars}/></span>
        </div>
      </div>

      </div>
      <hr className="border-none h-px bg-gold-gradient w-full" />
      <SideBar isOpen={abierto} onClose={() => setAbierto(false)} />
    </nav>
  )
}