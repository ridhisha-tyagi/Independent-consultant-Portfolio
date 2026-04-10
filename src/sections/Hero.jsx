import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="hero" className="reveal">
      <div className="container hero-grid">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1 className="stagger" >
            Identify where your business is losing revenue and fix it with structured data systems.
          </h1>

          <p className="stagger">
            I analyze marketing, conversion, pricing, product experience, and customer behavior to uncover inefficiencies and guide clear, data-driven decisions.
          </p>

          <div className="cta-group stagger">
            <Link to="/contact?type=problem" className="btn-primary">
			  <span>Tell me about your problem →</span>
			</Link>
            <Link to="/contact?type=chat" className="btn-secondary">
			  Start a conversation
			</Link>
          </div>
        </div>

        {/* RIGHT VISUAL (THIS WILL BECOME YOUR CARD STACK) */}
        <div className="hero-visual">
		<div className="hero-card main-card">
		  <div className="card-inner">
		  <div className="card-visual bars">
			  <span></span>
			  <span></span>
			  <span></span>
			</div>

			<span className="card-number"></span>
				  <p>Revenue Leak</p>
		  </div>
		</div>

		<div className="hero-card secondary-card">
		  <div className="card-inner">
				  <div className="card-visual nodes">
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		    <div className="card-visual line"></div>
			 <span className="card-number"></span>
				<p>User Friction</p>
		  </div>
		</div>
          <div className="hero-card accent-card">
		  <div className="card-inner">
			<div className="card-content">
			  <span className="card-number"></span>
			  <p>Decision System</p>
			</div>
		  </div>
		</div>
        </div>

      </div>
    </section>
  )
}

export default Hero