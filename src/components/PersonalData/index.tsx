import './index.css'
import { FcPhone } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";

export const PersonalData = () => {
  return (
    <div className="pd-container">
      {/* Telefono */}
      <FcPhone />
      <span>(+56) 9 356 439 91</span>
      {/* Email */}
      <CgMail color='darkred' />
      <span>jorge.arancibia.jeal@gmail.com</span>
      {/* Linkedin */}
      <FaLinkedin />
      <a href="https://www.linkedin.com/in/jaranci/">linkedin.com/in/jaranci</a>
      {/* Github */}
      <TfiGithub color='purple' />
      <a href="https://www.github.com/JorgeArancibia1/">github.com/JorgeArancibia1</a>
      {/* Ubicación */}
      <FaLocationDot color='#007CF9' />
      <span>Santiago - Chile</span>
      {/* Nacionalidad */}
      <FaFlag color='#D30026'/>
      <span>Chileno</span>
    </div>
  )
}