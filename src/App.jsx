import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Skillset from './components/Skillset'
import Work from './components/Work'

function App() {

  return (
    <div className="App font-['Sen'] bg-black min-h-screen">
      <Navbar />
      <Header />
      <Work />
      <Philosophy />
      <Skillset />
      <Footer />
    </div>
  )
}

export default App