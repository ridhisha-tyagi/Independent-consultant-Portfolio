import { Link } from "react-router-dom";
function FinalCTA() {
  return (
    <section id="final-cta" className="section-accent">

      <div className="container">
        <div className="section-frame">

          <div className="section-box final-cta-box">

            <h2 className="section-title">
              Tell me about your problem
            </h2>

            <p className="section-sub">
               If something isn’t working as expected — let’s identify where it breaks and what needs to change.
            </p>

            <div className="final-cta-action">
              <Link to="/contact?type=problem" className="btn-primary">
                <span>Tell me about your problem →</span>
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default FinalCTA