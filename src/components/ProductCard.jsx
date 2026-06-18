import { buildWhatsAppURL } from "../utils/whatsApp"
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function ProductCard({imagen, categoria, nombre, descripcion, precio}) {
    return (
        <div className="flex flex-col rounded-xl border border-gold-main bg-cream-surface overflow-hidden">
            <img src= {imagen} alt={nombre} className="w-full aspect-square object-cover"/>
              <div className="flex flex-col px-3 py-2">
            <p className="font-body text-olive-base text-xs font-semibold lg:text-sm">{categoria}</p>
            <p className="font-display text-lg text-text-primary py-2 lg:text-2xl">{nombre}</p>
            <p className="font-body text-sm text-text-secondary pb-2 lg:text-lg">{descripcion}</p>

            <div className="flex flex-row gap-2 items-center justify-between mt-3">
            <p className="font-body text-gold-main text-xl italic lg:text-2xl">{precio}</p>

            <Button variant="primary" onClick={() => window.open(buildWhatsAppURL(nombre), '_blank')}>
            <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
            Pedir
            </Button>
            
            </div>
        </div>
        </div>
    )
}