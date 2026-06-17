import logo from '../assets/logo.jpeg'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return(
        <>
        <section className="w-full bg-cream-logo pt-5 flex flex-col items-center">
            <img src={logo} alt="Logotipo" className="w-48 aspect-square object-cover mx-auto"/>
                <hr className="border-none h-px bg-gold-gradient w-full mt-5" />
        </section>

        <section id='Hero' className="w-full bg-cream-base py-3 px-3">

         <p className="font-display text-3xl text-center leading-tight py-5">
         <span className="text-text-primary">Velas que se </span>
         <em className="bg-gold-gradient bg-clip-text text-transparent">iluminan </em>
         <span className="text-text-primary">y se </span>
         <em className="bg-gold-gradient bg-clip-text text-transparent">saborean.</em>
         </p>

         <p className="text-text-muted text-sm mt-4 text-center pb-10">
            Una experiencia única: velas 100% comestibles, hechas a mano con ingredientes naturales.
            Perfectas para celebraciones especiales e instantes inolvidables.
         </p> 

         <div className="flex gap-3 justify-center pb-10">   
         <Button variant="primary" >
            <FontAwesomeIcon icon={faWhatsapp} size="xl"/>WhatsApp</Button>
         <Button variant="secondary" >
            Ver catálogo <FontAwesomeIcon icon={faArrowDown}/></Button>
         </div>

        <div className="flex gap-2 justify-center flex-wrap">


         <div className="flex flex-col rounded-xl border border-gold-main bg-cream-surface overflow-hidden">
            <div className="h-px bg-gold-gradient w-full pb-0.5"/>
              <div className="flex flex-col px-3 py-2">
            <p className="font-body text-text-muted text-sm ">PEDIDOS ESTE MES</p>
            <em className="font-display text-2xl bg-gold-gradient bg-clip-text text-transparent">200+</em>
            <p className="font-body text-text-muted text-sm ">clientes felices</p>
            </div>
         </div>

        <div className="flex flex-col rounded-xl border border-gold-main bg-cream-surface overflow-hidden">
            <div className="h-px bg-gold-gradient w-full pb-0.5"/>
              <div className="flex flex-col px-3 py-2">
            <p className="font-body text-text-muted text-sm ">CALIFICACIÓN</p>
            <em className="font-display text-2xl bg-gold-gradient bg-clip-text text-transparent">4.9★</em>
            <p className="font-body text-text-muted text-sm ">promedio</p>
            </div>
         </div>


        </div> 
        </section>
         <hr className="border-none h-px bg-gold-gradient w-full mt-5"/>
        </>
    )
}