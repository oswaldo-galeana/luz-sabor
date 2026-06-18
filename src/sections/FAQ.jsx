import FAQItem from "../components/FAQItem"
import { useState } from "react"

export default function FAQ() {
    const [abierto, setAbierto] = useState(null)

const FAQS = [
    { pregunta: "¿Las velas realmente se pueden comer?", respuesta: "¡Claro que sí! Están elaboradas con ingredientes 100% comestibles y aptos para consumo. Son tan ricas como huelen." },
    { pregunta: "¿Cuánto tiempo dura el aroma?", respuesta: "Dependiendo del uso, el aroma puede durar varias horas encendida. Guardada en un lugar fresco, conserva su olor por mucho tiempo." },
    { pregunta: "¿Puedo pedir un aroma personalizado?", respuesta: "Sí, contáctanos por WhatsApp y con gusto te ayudamos a encontrar o crear el aroma ideal para tu ocasión." },
    { pregunta: "¿Hacen pedidos al mayoreo o para eventos?", respuesta: "Sí, trabajamos pedidos especiales para bodas, XV años, baby showers y cualquier evento. Escríbenos y armamos algo único para ti." },
    { pregunta: "¿Cuánto tarda en llegar mi pedido?", respuesta: "Los tiempos varían según tu ubicación, pero nos aseguramos de que llegue bien empacado y en perfectas condiciones." },
    { pregunta: "¿Cómo realizo mi pedido?", respuesta: "Todo se gestiona por WhatsApp, de forma rápida y directa. Solo elige tu vela, escríbenos y te guiamos en el proceso." },
]

    return (
        <>
        <section id="FAQ" className="w-full bg-cream-base text-center justify-center items center py-3 px-3">
            <p className="text-gold-main text-sm font-body font-bold md:text-lg lg:text-xl">PREGUNTAS FRECUENTES</p>

            <p className="font-display text-lg py-2 md:text-3xl lg:text-4xl">
                <span className="text-text-primary">Todo lo que </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">necesitas saber</em>
            </p>

            <p className="font-body text-text-muted text-sm pb-3 md:text-lg lg:text-xl">Si tienes alguna duda más, escríbenos por WhatsApp y te respondemos al instante.</p>

            <div className="max-w-2xl mx-auto flex flex-col gap-4">
                {FAQS.map((item, index) => (
                    <FAQItem key={index} pregunta={item.pregunta} respuesta={item.respuesta} isOpen={abierto === index} 
                    onClick={() => setAbierto(abierto === index ? null : index)} />
                )
            )}
            </div>

        </section>
        <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}