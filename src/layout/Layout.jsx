import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div id="background-layer"></div>

      {/* Header only on non-home pages */}
      {<Header />}

      <main className="with-header">
        {children}
      </main>

      <footer className="footer">
		  <div className="container footer-inner">

			<p className="footer-name">Ridhisha Tyagi
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
			
			</p>

			<div className="footer-links">
			  <a href="/">Home</a>
			  <a href="/case-studies">Work</a>
			  <a href="/profile">Ridhisha</a>
			</div>

		  </div>
		</footer>
    </>
  );
}