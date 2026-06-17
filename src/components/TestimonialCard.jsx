import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TestimonialCard({descripcion, nombre, ciudad}) {

    return (
        <div className="w-full bg-cream-base border border-gold-main rounded-xl py-3 px-3">
         <p>
            {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-gold-main text-sm" />
            ))}
         </p>
         
         <p className="font-display text-lg text-text-secondary justify-center italic">
            {descripcion}
        </p>

        <div className="flex gap-2 items-start">

        <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
            <span className="text-white font-display text-xl font-bold">{nombre[0]}</span>
        </div>
        
        <div className="flex flex-col gap-0">
        <p className="font-body font-bold text-text-primary text-xs -mb-1 mt-2">{nombre}</p>
        <p className="font-body text-text-muted font-light text-xs -mb-2">{ciudad}</p>
        </div>

        </div>

        </div>
    )
}