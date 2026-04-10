import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Header() {
  return (
    <header id="header">
      <div className="container">

        {/* LEFT: NAME */}
        <div className="logo">
		  <a href="/profile">Ridhisha Tyagi |</a>
		  
     
         
				<div className="nav-links">

		   <a href="https://linkedin.com/in/ridhisha-tyagi-20ri10" target="_blank" rel="noreferrer">
				<FaLinkedin />
			  </a>

			  <a href="https://github.com/ridhisha-tyagi" target="_blank" rel="noreferrer">
				<FaGithub />
			  </a>

			  <a href="mailto:ridhisha.tyagi20@gmail.com">
				  <HiOutlineMail />
			  </a>
			  </div>
		 </div>	  
        {/* RIGHT: NAV */}
        <nav>
          <ul>
            <li><a href="#services">Work</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#final-cta">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header