import './Presentation.css'
import { FcPhone } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";

export const Presentation = () => {
  return (
    <div className="presentation-container">
      {/* Telefono */}
      <FcPhone />
      <span>(+56) 9 356 439 91</span>
      {/* Email */}
      <CgMail color='darkred' />
      <span>jorge.arancibia.jeal@gmail.com</span>
      {/* Linkedin */}
      <FaLinkedin />
      <a href="https://www.linkedin.com/in/jaranci/">https://www.linkedin.com/in/jaranci</a>
      {/* Github */}
      <TfiGithub color='purple' />
      <a href="https://www.github.com/JorgeArancibia1/">https://www.github.com/JorgeArancibia1</a>
      {/* Ubicación */}
      <FaLocationDot />
      <span>Santiago - Chile</span>
      {/* Nacionalidad */}
      <FaFlag />
      <span>Chileno</span>
    </div>
  )
}