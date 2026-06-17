import TestimonialCard from "../components/TestimonialCard"

export default function Testimonials(){
    const comentarios = [
        {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"}
    ]
    return (
        <>
        <section id="Clients" className="w-full bg-cream-alt flex flex-col items-center justify-center py-5 px-3">
            <p className="font-body text-gold-main text-sm font-bold">LO QUE DICEN</p>

            <p className="text-lg py-2">
                <span className="font-display text-text-primary">Clientes que </span>
                <em className="font-display bg-gold-gradient bg-clip-text text-transparent">nos aman</em>
            </p>

            <div className="flex flex-col w-full gap-3">
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