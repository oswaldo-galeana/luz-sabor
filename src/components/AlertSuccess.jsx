import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function AlertSuccess({ message, onClose }) {
    return (
        <div className="bg-green-100 rounded-md border border-green-500 text-green-800 p-6 flex flex-col items-center gap-3 w-full">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />
            <p className="text-center font-jost">{message}</p>
            <button onClick={onClose} className="border border-green-500 text-green-800 px-4 py-1 rounded-md hover:opacity-80 active:scale-95 cursor-pointer">Cerrar</button>
        </div>
    )
}