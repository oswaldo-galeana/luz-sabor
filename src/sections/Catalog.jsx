import chocolate from '../assets/chocolate.png'
import vainilla from '../assets/vainilla.png'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Catalog() {
    return (
        <>
        <section className="w-full bg-cream-alt py-3 px-3">
            <p className="font-body text-sm font-bold text-center text-gold-main py-2">CATÁLOGO</p>
            
            <p className="text-lg text-center text-text-primary font-display py-2">
                <span className="text-text-primary">Nuestras </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">velas</em>
            </p>
            <p className="font-body text-sm text-center text-text-muted">Cada vela es hecha a mano. Agrega las que quieras en un solo pedido por WhatsApp.</p>

        <div className="flex flex-col rounded-xl border border-gold-main bg-cream-surface overflow-hidden mt-5">
            <img src= {chocolate} alt="Vela de chocolate" className="w-full aspect-square object-cover"/>
              <div className="flex flex-col px-3 py-2">
            <p className="font-body text-olive-base text-xs font-semibold ">VELA CLÁSICA</p>
            <p className="font-display text-lg text-text-primary py-2">Vela de chocolate</p>
            <p className="font-body text-sm text-text-secondary pb-2">Suave, dulce y aromática. Perfecta para ocasiones especiales.</p>

            <div className="flex flex-row gap-2 items-center justify-between mt-3">
            <em className="font-body text-gold-main text-xl">$350 MXN</em>
            <Button variant="primary">
            <FontAwesomeIcon icon={faWhatsapp} size="lg"/> Pedir</Button>
            </div>

        </div>
        </div>
        

        <div className="flex flex-col rounded-xl border border-gold-main bg-cream-surface overflow-hidden mt-5">
            <img src= {vainilla} alt="Vela de vainilla" className="w-full aspect-square object-cover"/>
              <div className="flex flex-col px-3 py-2">
            <p className="font-body text-olive-base text-xs font-semibold ">VELA CLÁSICA</p>
            <p className="font-display text-lg text-text-primary py-2">Vela de vainilla</p>
            <p className="font-body text-sm text-text-secondary pb-2">Suave, dulce y aromática. Perfecta para ocasiones especiales.</p>

            <div className="flex flex-row gap-2 items-center justify-between mt-3">
            <em className="font-body text-gold-main text-xl">$350 MXN</em>
            <Button variant="primary">
            <FontAwesomeIcon icon={faWhatsapp} size="lg"/> Pedir</Button>
            </div>
            
        </div>
        </div>
        </section>
                 <hr className="border-none h-px bg-gold-gradient w-full"/>
        </>
    )
}

