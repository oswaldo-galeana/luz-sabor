import { useState } from "react"
import  FAB  from './FAB'
import FormModal from './FormModal'

export default function FormFAB() {

const [modal, setModal] = useState(false)

function handleOpen() {
    setModal(true) 
}

function handleClose() {
    setModal(false)
}
    return (
        <div className="">
            <FAB onClick={handleOpen} />
            <FormModal isOpen={modal} onClose={handleClose} />
        </div>
    )
}