import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Greeting } from './sections/Greeting'
import { Philosophy } from './sections/Philosophy'
import { Services } from './sections/Services'
import { Works } from './sections/Works'
import { CompanyInfo } from './sections/CompanyInfo'

function App() {
  return (
    <>
      <Header />
      <main>
        <Greeting />
        <Philosophy />
        <Services />
        <Works />
        <CompanyInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
