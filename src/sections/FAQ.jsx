import FAQItem from "../components/FAQItem"
import { useState } from "react"

export default function FAQ() {
    const [abierto, setAbierto] = useState(null)

    const FAQS = [
        {pregunta:"¿Las velas realmente se pueden comer?", respuesta:"¡Claro!, son 100% comestibles, son deliciosas."},
    ]
    return (
        <>
        <section id="FAQ" className="w-full bg-cream-base text-center justify-center items center py-3 px-3">
            <p className="text-gold-main text-sm font-body font-bold">PREGUNTAS FRECUENTES</p>

            <p className="font-display text-lg py-2">
                <span className="text-text-primary">Todo lo que </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">necesitas saber</em>
            </p>

            <p className="font-body text-text-muted text-sm pb-3">Si tienes alguna duda más, escríbenos por WhatsApp y te respondemos al instante.</p>

            <div className="bg-cream-base border border-gold-main rounded-lg">
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