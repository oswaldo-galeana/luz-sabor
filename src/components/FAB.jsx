export default function FAB({onClick}) {

    return (
            <div className="fixed bottom-4 right-4 z-50">
                <button onClick={onClick} className="border border-gold-main bg-brown-dark rounded-full w-15 h-15 flex items-center justify-center">
                    <span className="bg-gold-gradient  bg-clip-text text-transparent font-display text-lg">VIP</span>
                </button>
            </div>
    )
}