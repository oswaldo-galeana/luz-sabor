export const buildWhatsAppURL = (nombre) => {
    const numero = "5658433558"
    const mensaje = `Hola, me interesa pedir: ${nombre}`
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}