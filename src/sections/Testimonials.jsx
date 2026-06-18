import TestimonialCard from "../components/TestimonialCard"

export default function Testimonials(){
    const comentarios = [
        {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},
                {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},
                {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},
                {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},
                {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},
                {descripcion:"muy buenas", nombre:"Rosa Melano", ciudad:"tecpan"},

    ]
    return (
        <>
        <section id="Clients" className="w-full bg-cream-alt flex flex-col items-center justify-center py-5 px-3">
            <p className="font-body text-gold-main text-sm font-bold">LO QUE DICEN</p>

            <p className="text-lg py-2">
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