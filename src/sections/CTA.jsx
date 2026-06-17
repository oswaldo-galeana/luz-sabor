import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../components/Button"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function CTA() {

    return (
        <>
        <section className="w-full bg-cream-alt flex flex-col text-center justify-center items-center px-3">
            <p className="font-body font-bold text-sm text-gold-main">EMPIEZA TU EXPERIENCIA</p>
            
            <p className="text-lg text-light py-3">
                <span className="font-display text-text-primary">&nbsp;Ilumina tu momento </span>
                <em className="font-display bg-gold-gradient italic bg-clip-text text-transparent">especial &nbsp;</em>
            </p>

            <p className="font-body text-sm text-text-muted">
                Un solo mensaje, y tu Vela Comestible está en camino. Escríbenos ahora.
            </p>

            <div className="flex flex-row gap-2 py-3">
            <Button variant="primary">
            <FontAwesomeIcon icon={faWhatsapp} />
            Pedir por WhatsApp
            </Button>

            <Button variant="secondary">
            Hacer pedido 
            <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            </div>

        </section>
        <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}