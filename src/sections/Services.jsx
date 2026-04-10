import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services" className="reveal section-accent">
      <div className="container">

        <h2 className="section-title stagger">Services</h2>

        <div className="services-grid">

          {/* 1 */}
          <div className="service-card stagger">
            <h4>End-to-End Revenue Intelligence System</h4>
            <p>
              Integrate acquisition, conversion, monetization, and retention into a unified system that enables structured, data-driven decision-making.
            </p>
            <span>
              Outcome: A complete decision framework for growth and retention.
            </span>

            <div className="service-proof">
              <Link to="/case/end-to-end-churn">
                View Case Study →
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="service-card stagger">
            <h4>Marketing & Spend Intelligence</h4>
            <p>Analyze marketing performance and optimize budget allocation.</p>
            <span>Outcome: Clear visibility into spend efficiency.</span>

            <div className="service-proof">
              <Link to="/case/marketing-spend">
                View Case Study →
              </Link>
            </div>
          </div>

          {/* 3 */}
          <div className="service-card stagger">
            <h4>Funnel & Conversion Intelligence</h4>
            <p>Identify drop-offs and friction in user journeys.</p>
            <span>Outcome: Improved conversion clarity.</span>

            <div className="service-proof">
              <Link to="/case/funnel-dropoff">
                View Case Study →
              </Link>
            </div>
          </div>

          {/* 4 */}
          <div className="service-card stagger">
            <h4>Pricing & Monetization Intelligence</h4>
            <p>Evaluate pricing strategies and their behavioral impact.</p>
            <span>Outcome: Structured pricing decisions.</span>

            <div className="service-proof">
              <Link to="/case/pricing-experimentation">
                → Pricing Experimentation
              </Link>
              <Link to="/case/saas-revenue-churn">
                → Revenue Optimization
              </Link>
            </div>
          </div>

          {/* 5 */}
          <div className="service-card stagger">
            <h4>Product & Feature Intelligence</h4>
            <p>Identify feature-level friction and prioritize improvements.</p>
            <span>Outcome: Better product decisions.</span>

            <div className="service-proof">
              <Link to="/case/product-health">
                → Product Health
              </Link>
              <Link to="/case/feature-health">
                → Feature Prioritization
              </Link>
            </div>
          </div>

          {/* 6 */}
          <div className="service-card stagger">
            <h4>Behavioral & Churn Intelligence</h4>
            <p>Analyze user behavior and detect early churn signals.</p>
            <span>Outcome: Early risk identification.</span>

            <div className="service-proof">
              <Link to="/case/behavioral-churn">
                View Case Study →
              </Link>
            </div>
          </div>

          {/* 7 */}
          <div className="service-card stagger">
            <h4>Predictive & Decision Systems</h4>
            <p>Build models to identify risk and guide decisions.</p>
            <span>Outcome: Actionable future insights.</span>

            <div className="service-proof">
              <Link to="/case/predictive-churn">
                View Case Study →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;