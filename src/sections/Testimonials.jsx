import TestimonialCard from "../components/TestimonialCard"

export default function Testimonials(){
  
const comentarios = [
    { descripcion: "Jamás pensé que una vela pudiera oler tan rico. La de chocolate me recordó a un pastel recién horneado. Ya pedí tres más.", nombre: "Mariana Torres", ciudad: "Ciudad de México" },
    { descripcion: "Las regalé en una reunión familiar y todas querían saber dónde las conseguí. Son hermosas y el aroma dura muchísimo.", nombre: "Sofía Ramírez", ciudad: "Guadalajara" },
    { descripcion: "La atención por WhatsApp fue rapidísima. Me ayudaron a elegir el aroma perfecto para el cumpleaños de mi mamá.", nombre: "Valeria Cruz", ciudad: "Monterrey" },
    { descripcion: "Son detalles únicos. Las compré para mis damas de honor y quedaron encantadas. Definitivamente las recomiendo.", nombre: "Paulina Mendoza", ciudad: "Puebla" },
    { descripcion: "La vela de vainilla es mi favorita. La enciendo cuando llego a casa y transforma el ambiente completamente.", nombre: "Lucía Herrera", ciudad: "Acapulco" },
    { descripcion: "Pedido rápido, empaque cuidado y el aroma superó mis expectativas. Ya se volvió mi regalo favorito para dar.", nombre: "Andrea Flores", ciudad: "Oaxaca" },
]

    return (
        <>
        <section id="Clients" className="w-full bg-cream-alt flex flex-col items-center justify-center py-5 px-3">
            <p className="font-body text-gold-main text-sm font-bold md:text-lg lg:text-xl">LO QUE DICEN</p>

            <p className="text-lg py-2 md:text-3xl lg:text-4xl">
                <span className="font-display text-text-primary">Clientes que </span>
                <em className="font-display bg-gold-gradient bg-clip-text text-transparent">nos aman</em>
            </p>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 max-w-6xl mx-auto">
                {comentarios.map((comentario) => (
                    <TestimonialCard key={comentario.descripcion} {...comentario} />
                  )
                )}
            </div>

        </section>
            <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>    
    )
}