import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-brown-dark flex flex-col">
      <div className="flex items-center justify-between p-4">
        <em className="bg-gold-gradient bg-clip-text text-transparent font-italic font-display text-3xl">Luz & Sabor</em>
        <button className="text-gold-main bg-transparent border-none text-2xl hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200">
          ☰
        </button>
      </div>
      <hr className="border-none h-px bg-gold-gradient w-full" />
    </nav>
  )
}