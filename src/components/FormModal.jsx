import { useState } from "react"
import AlertSuccess from "./AlertSuccess"

export default function FormModal({ isOpen, onClose }) {
    const [success, setSuccess] = useState(false)

    if (!isOpen) return null

    function handleEnviar() {
        setSuccess(true)
    }

    function handleClose() {
        setSuccess(false)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex justify-center items-center px-4">
            <div className="bg-cream-surface rounded-xl border border-gold-main max-w-md w-full">
                {success ? (
                    <AlertSuccess message="¡Datos enviados correctamente!" onClose={handleClose} />
                ) : (
                    <>
                    <div className="px-3">
                        <p className="font-bold text-text-primary pt-4">Datos de Contacto</p>
                        <div className="flex flex-col gap-2 py-4">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Ej. Juan" className="border border-olive-base rounded px-3 py-2 w-full focus:border-gold-main focus:outline-none" />
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" placeholder="Ej. García" className="border border-olive-base rounded px-3 py-2 w-full focus:border-gold-main focus:outline-none" />
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="tel" id="telefono" placeholder="Ej. 744 123 4567" className="border border-olive-base rounded px-3 py-2 w-full focus:border-gold-main focus:outline-none" />
                            <label htmlFor="correo">Correo</label>
                            <input type="email" id="correo" placeholder="Ej. juan@gmail.com" className="border border-olive-base rounded px-3 py-2 w-full focus:border-gold-main focus:outline-none" />
                        </div>
                        <div className="flex justify-center items-center space-x-4 pb-4">
                            <button onClick={onClose} className="cursor-pointer rounded-md w-28 py-2 px-4 bg-transparent border border-gold-main text-gold-main hover:opacity-80 active:scale-95">Cancelar</button>
                            <button onClick={handleEnviar} className="cursor-pointer rounded-md w-28 py-2 px-4 border border-gold-main bg-brown-dark text-cream-base hover:opacity-80 active:scale-95">Enviar</button>
                        </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}