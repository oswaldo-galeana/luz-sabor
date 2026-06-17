import { faHeart, faStar, faComments } from "@fortawesome/free-solid-svg-icons"
import BenefitCard from "../components/BenefitCard"
    
export default function Benefits() {

        const beneficios = [
        { icono: faHeart, titulo:"100% Hechas con amor", descripcion: "Cada vela es elaborada artesanalmente. No hay dos iguales, eso les da ese carácter único" },
        { icono: faStar, titulo:"Experiencia unica e irrepetible", descripcion:"Una vela que se enciende y se saborea. dos sentidos en un solo momento, algo que ningún regalo convencional puede ofrecer" },
        { icono: faComments, titulo:"Atención personalizada", descripcion:"Te atendemos directamente por WhatsApp. sin formularios eternos ni bots, una persona real te ayuda a elegir lo mejor" },
    ]

    return (
        <>
        <section className="bg-cream-base w-full flex flex-col items-center justify-center py-5 px-3">

        <p className="font-body text-gold-main text-sm font-bold">¿PORQUÉ ELEGIRNOS?</p>

        <p className="text-lg py-2">
            <span className="font-display text-text-primary">Lo que nos hace </span>
            <em className="font-display bg-gold-gradient bg-clip-text text-transparent">diferentes</em>
        </p>

        <p className="text-text-muted text-center font-body text-sm">Cada vela de Luz & Sabor es una experiencia pensada con cuidado, desde los ingredientes, hasta la presentación.</p>

        <div className="flex flex-col gap-5 py-3">
            {beneficios.map((beneficio) => (
                <BenefitCard key={ beneficio.titulo } {...beneficio} />
            )
        )}
        </div>

        </section>
            <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}