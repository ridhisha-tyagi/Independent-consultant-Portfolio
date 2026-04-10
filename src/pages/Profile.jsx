import profileImg from "../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="section-accent">
      <div className="container">
        <div className="section-frame">
          <div className="section-box profile-page">

            {/* HERO */}
            <div className="profile-hero">
			
			<div className="profile-image">
			  <img src={profileImg} alt="Ridhisha Tyagi" />
			</div>

            <div className="profile-text">
			  <h1 className="section-title">
				Ridhisha Tyagi | Independent Consultant
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
			  </h1>

			  <p className="profile-role">
				Product, Behavior & Revenue Systems
			  </p>

			  <p className="profile-intro">
				Work focuses on understanding how product experience, user behavior, and business decisions
				shape outcomes across a system.
			  </p>

			  <p className="profile-intro">
				Analysis is structured to surface clear signals, establish direction, and support decisions
				that move beyond isolated metrics.
			  </p>

			  <p className="profile-intro">
				If something isn’t working as expected, we can start by understanding where it breaks down
				and what needs to change.
			  </p>
			  
			  <div className="profile-cta">
			  <Link to="/contact?type=chat" className="btn-primary">
				<span>Start a conversation →</span>
			  </Link>
			</div>
			</div>

          </div>
        </div>
      </div>
	  </div>
    </section>
  );
}