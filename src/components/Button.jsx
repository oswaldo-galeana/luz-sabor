export default function Button({ variant, children, onClick }) {
  
  const variants = {
    primary: 'cursor-pointer bg-wa-green text-white hover:bg-wa-dark active:bg-wa-dark md:text-lg lg:text-lg',
    secondary: 'cursor-pointer bg-cream-surface text-gold-main border border-gold-main hover:bg-cream-alt active:bg-cream-alt md:text-lg lg:text-lg',
  }

  const base = 'font-body font-medium rounded-xl px-4 py-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5'

  return (
    <button onClick={onClick} className={`flex items-center gap-1 ${base} ${variants[variant]}`}>
      {children}
    </button>
  )
 }