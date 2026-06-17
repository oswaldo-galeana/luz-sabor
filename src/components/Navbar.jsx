import { useState } from "react";
import Button from "./Button";
import SideBar from "./SideBar";
import { faBar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
const [abierto, setAbierto] = useState(false)
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-brown-dark flex flex-col">
      <div className="flex items-center justify-between p-4">
        <em className="bg-gold-gradient bg-clip-text text-transparent font-italic font-display text-3xl">Luz & Sabor</em>

      <div onClick={() => setAbierto(!abierto)} className="cursor-pointer">  
        <div className="text-gold-main bg-transparent border-none text-2xl hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200">
         <span className={`transition-all duration-300 ${abierto ? "opacity-0" : "opacity-100"}`}><FontAwesomeIcon icon={faBar}/></span>
        </div>
      </div>

      </div>
      <hr className="border-none h-px bg-gold-gradient w-full" />
      <SideBar isOpen={abierto} onClose={() => setAbierto(false)} />
    </nav>
  )
}