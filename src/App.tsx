import { Experience } from "./components/Experience"
import Header from "./components/Header"
import { PersonalData } from "./components/PersonalData"
import { Philosophy } from "./components/Philosophy"
import { Presentation } from "./components/Presentation"
import './index.css'
import { Studies } from './components/Studies';
import { Skills } from "./components/Skills"
import { Certifications } from "./components/Certifications"
import ModuleTemplate from "./components/ModuleTemplate"

function App() {

  return (
    <div className="generalContainer">
      <Header />
      <PersonalData />
      <ModuleTemplate title='Datos personales'>
        <Presentation />
      </ModuleTemplate>
      <Experience />
      <Philosophy />
      <Studies />
      <Skills />
      <Certifications />
    </div>
  )
}

export default App
