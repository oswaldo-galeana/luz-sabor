import Button from './components/Button'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-nowrap gap-4 p-4 pt-16">
      <Navbar />
      <br />
      <Button variant="primary">Hola</Button>
      <Button variant="secondary">Hola</Button>
    </div>
  )
}

export default App
