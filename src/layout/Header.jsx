import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">Ridhisha Tyagi</Link>
        </div>

        {/* NAV */}
        <div className="nav-right">

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/case-studies">Work</Link>
            <Link to="/profile">Ridhisha  | Independent Consultant
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
			  </div></Link>
          </nav>

        </div>

      </div>
    </header>
  );
}

export default Header;