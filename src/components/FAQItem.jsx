export default function FAQItem({pregunta, respuesta, isOpen, onClick}) {

    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="flex justify-between items-center py-1 px-2">
            <p className="font-display text-ms text-text-primary">{pregunta}</p>
           
            <div className="w-5 h-5 rounded-full border border-gold-main flex justify-center items-center">
            <span>{isOpen ? "-" : "+"}</span>
            </div>

            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
            <p className="font-body text-text-muted mt-2">{respuesta}</p>
            </div>

        </div>
    )
}