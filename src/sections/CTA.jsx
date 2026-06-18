import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../components/Button"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function CTA() {

    return (
        <>
        <section id="CTA" className="w-full bg-cream-alt flex flex-col text-center justify-center items-center px-3">
            <p className="font-body font-bold text-sm text-gold-main md:text-lg lg:text-lg">EMPIEZA TU EXPERIENCIA</p>
            
            <p className="text-lg text-light py-3 md:text-3xl lg:text-4xl">
                <span className="font-display text-text-primary">&nbsp;Ilumina tu momento </span>
                <em className="font-display bg-gold-gradient italic bg-clip-text text-transparent">especial &nbsp;</em>
            </p>

            <p className="font-body text-sm text-text-muted md:text-lg lg:text-lg">
                Un solo mensaje, y tu Vela Comestible está en camino. Escríbenos ahora.
            </p>

            <div className="flex flex-row gap-2 py-3">
            <Button onClick={() => { window.location.href = "https://wa.me/525658433558?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20%F0%9F%95%AF%EF%B8%8F" }} 
                    variant="primary">
            <FontAwesomeIcon icon={faWhatsapp} />
            Hacer Pedido
            </Button>
            </div>

        </section>
        <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}