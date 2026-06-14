import chocolate from '../assets/chocolate.png'
import vainilla from '../assets/vainilla.png'
import ProductCard from '../components/ProductCard'

export default function Catalog() {

    const velas = [
        {imagen: chocolate ,categoria:"VELA CLÁSICA",nombre:"Vela de chocolate",descripcion:"Suave, dulce y aromática, Perfecta para cualquier celebración especial. ", precio:"$350 MXN" },
        {imagen: vainilla ,categoria:"VELA CLÁSICA",nombre:"Vela de vainilla",descripcion:"Suave, dulce y aromática, Perfecta para cualquier celebración especial. ", precio:"$350 MXN" },
    ]    

    velas.map((vela) => (
        <ProductCard key={vela.nombre} {...vela} /> 
    ))

    return (
        <>
        <section className="w-full bg-cream-alt py-3 px-3">
            <p className="font-body text-sm font-bold text-center text-gold-main py-2">CATÁLOGO</p>
            
            <p className="text-lg text-center text-text-primary font-display py-2">
                <span className="text-text-primary">Nuestras </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">velas</em>
            </p>
            <p className="font-body text-sm text-center text-text-muted pb-5">Cada vela es hecha a mano. Agrega las que quieras en un solo pedido por WhatsApp.</p>

            <div className='flex flex-col gap-8 pb-5'>
                {velas.map((vela) => (
                    <ProductCard key={vela.nombre} {...vela} /> 
                ))}
            </div>

        </section>
                 <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}

