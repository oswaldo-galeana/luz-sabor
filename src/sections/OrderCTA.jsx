import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export default function OrderCTA() {
    return (
        <>
        <section className="w-full bg-cream-base py-3 px-3">
            <p className="font-body text-sm font-bold text-center text-gold-main py-2">PEDIDO DIRECTO</p>
            
            <p className="text-lg text-center text-text-primary font-display py-2">
                <span className="text-text-primary">&nbsp; ¿Listo para </span>
                <em className="bg-gold-gradient bg-clip-text text-transparent">ordenar? &nbsp;</em>
            </p>
            <p className="font-body text-sm text-center text-text-muted py-5">
                Llena el formulario y te mandamos un mensaje de WhatsApp con tu pedido ya redactado, listo para confirmar en un clic.
            </p>

            <div className="flex items-start gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-olive-hover"/>
            <p className="font-body text-sm text-text-muted pb-2">Confirmación inmediata por WhatsApp</p>
            </div>

            <div className="flex items-start gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-olive-hover"/>
            <p className="font-body text-sm text-text-muted pb-2">Hecho a mano con ingredientes naturales</p>
            </div>


            <div className="flex items-start gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-olive-hover"/>
            <p className="font-body text-sm text-text-muted pb-2">Entrega a domicilio y recolección</p>
            </div>
            
            <div className="flex items-start gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-olive-hover"/>
            <p className="font-body text-sm text-text-muted pb-2">Pedidos personalizados disponibles</p>
            </div>





        </section>
        <hr className="border-none h-px bg-gold-gradient w-full mt-5"/>
        </>
    )
}