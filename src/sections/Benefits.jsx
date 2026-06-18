import { faHeart, faStar, faComments, faLeaf, faGift, faTruck } from "@fortawesome/free-solid-svg-icons"
import BenefitCard from "../components/BenefitCard"
    
export default function Benefits() {

        const beneficios = [
        { icono: faHeart, titulo:"100% Hechas con amor", descripcion: "Cada vela es elaborada artesanalmente. No hay dos iguales, eso les da ese carácter único" },
        { icono: faStar, titulo:"Experiencia unica e irrepetible", descripcion:"Una vela que se enciende y se saborea. dos sentidos en un solo momento, algo que ningún regalo convencional puede ofrecer" },
        { icono: faComments, titulo:"Atención personalizada", descripcion:"Te atendemos directamente por WhatsApp. sin formularios eternos ni bots, una persona real te ayuda a elegir lo mejor" },
        { icono: faLeaf, titulo: "Ingredientes naturales", descripcion: "Usamos ceras y aromas de origen natural, sin químicos agresivos. Bueno para ti y para el ambiente." },
        { icono: faGift, titulo: "Presentación para regalo", descripcion: "Cada vela viene lista para regalar. No necesitas envoltura extra, ya llega especial desde el primer momento." },
        { icono: faTruck, titulo: "Envío a todo México", descripcion: "Te la llevamos a donde estés. Empacada con cuidado para que llegue perfecta a sus manos." },
    ]

    return (
        <>
        <section id="Benefits" className="bg-cream-base w-full flex flex-col items-center justify-center py-5 px-3">

        <p className="font-body text-gold-main text-sm font-bold md:text-lg lg:text-xl">¿PORQUÉ ELEGIRNOS?</p>

        <p className="text-lg py-2 md:text-3xl lg:text-5xl">
            <span className="font-display text-text-primary">Lo que nos hace </span>
            <em className="font-display bg-gold-gradient bg-clip-text text-transparent">diferentes</em>
        </p>

        <p className="text-text-muted text-center font-body text-sm md:text-lg lg:text-xl">Cada vela de Luz & Sabor es una experiencia pensada con cuidado, desde los ingredientes, hasta la presentación.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 max-w-6xl mx-auto">
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