import chocolate from '../assets/chocolate.jpeg'
import cebolla from '../assets/cebolla.jpeg'
import romero from '../assets/romero.jpeg'
import ProductCard from '../components/ProductCard'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function Catalog() {

    const [emblaRef] = useEmblaCarousel({ loop:true}, [Autoplay({delay: 3000, stopOnInteraction: false })])
    const velas = [
        {imagen: chocolate ,categoria:"",nombre:"Tentación",descripcion:"Vela de chocolate semiamargo y leche, elaborada a mano con ingredientes de calidad. Oscura, cremosa y absolutamente irresistible.", precio:"$150 MXN" },
        {imagen: romero ,categoria:"",nombre:"Luz Dorada   ",descripcion:"Vela de mantequilla cremosa con romero fresco, ajo y un toque de pimienta. Hecha a mano con ingredientes honestos que reconfortan el alma.", precio:"$125 MXN" },
        {imagen: cebolla ,categoria:"",nombre:"Onion Gold",descripcion:"Vela comestible elaborada con mantequilla, cebolla caramelizada, ajo y un toque de sal. Cremosa, aromática y perfecta para acompañar pan o botanas.", precio:"$125 MXN" },

    ]    
    return (
        <>
        <section id='Catalog' className="w-full bg-cream-alt py-3 px-3">
            <p className="font-body text-sm font-bold text-center text-gold-main py-2 md:text-lg lg:text-xl">CATÁLOGO</p>
            
            <p className="text-lg text-center text-text-primary font-display py-2 md:text-3xl lg:text-5xl">
                <span className="text-text-primary">Nuestras </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">velas</em>
            </p>
            <p className="font-body text-sm text-center text-text-muted pb-5 md:text-lg lg:text-xl">Cada vela es hecha a mano. Agrega las que quieras en un solo pedido por WhatsApp.</p>

            {/*carrusel mobile*/}
            <div className='md:hidden lg:hidden'>
            <div ref={emblaRef} className='overflow-hidden'>
            <div className='flex gap-4 pb-5'>
                {velas.map((vela) => (
                    <div className='flex-none w-full' key={vela.nombre}>
                    <ProductCard {...vela} />
                    </div> 
                ))}
            </div>
            </div>
            </div>

            {/*desktop*/}
            <div className='hidden md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full '>
                {velas.map((vela) => (
                <ProductCard key={vela.nombre} {...vela} />
                ))}
            </div>


        </section>
                 <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}

