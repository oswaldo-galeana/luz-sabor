import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BenefitCard({ icono, titulo, descripcion }) {

    return (
        <div className="w-full justify-start border border-gold-main rounded-xl bg-cream-surface py-3 px-3">
            
        <div className="inline-flex items-center justify-center border border-gold-main p-3 rounded-lg bg-cream-alt">
        <FontAwesomeIcon icon={icono} className="text-olive-hover text-xl"/>
        </div>

        <p className="font-display text-lg text-text-primary pb-2">{titulo}</p>
        <p className="font-body text-sm text-text-muted">{descripcion}</p>    

        </div>
    )
}