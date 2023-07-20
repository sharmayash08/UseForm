import './App.css'
import FirstSection from './components/FirstSection'
import FourthSection from './components/FouthSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default App
