import { caseStudies } from "../data/caseStudies";
import { Link } from "react-router-dom";

export default function AllCaseStudies() {
  return (
    <>
      <div id="background-layer"></div>

      <main style={{ paddingTop: "120px" }}>
        <section className="section-accent">
          <div className="container">
            <div className="section-frame">
              <div className="section-box">

                <h2 className="section-title">All Case Studies</h2>

                <div className="case-grid">
                  {caseStudies.map((item, index) => (
                    <Link
                      to={`/case/${item.slug}`}
                      className="card-link"
                      key={index}
                    >
                      <div className="case-card">
                        {item.title}
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}