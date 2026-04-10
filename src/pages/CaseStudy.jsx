import { useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams();

  const caseItem = caseStudies.find(
  (item) => item.slug === slug);
  if (!caseItem) return <div>Not found</div>;

  return (

  <>
    <div id="background-layer"></div>

    {/* NAVBAR */}
    <header id="header">
      <div className="container">
        <div className="logo">
          <a href="/">Ridhisha</a>
        </div>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#case-studies">Work</a></li>
            <li><a href="/#services">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="asset-main">

      <section className="section-accent asset-page">
        <div className="container">
          <div className="section-frame"> {/* 🔥 THIS WAS MISSING */}
            <div className="section-box">

              <h1 className="section-title asset-title">
				  {caseItem.title}
				</h1>

				<div className="asset-doc">

				  <h3>Overview</h3>
				  <p>{caseItem.overview}</p>

				  <h3>Objective</h3>
				  <ul>
					{caseItem.objective.map((item, i) => (
					  <li key={i}>{item}</li>
					))}
				  </ul>

				  <h3>Approach</h3>

				  {caseItem.approach.sections.map((sec, i) => (
					<div key={i} className="asset-subsection">
					  <h4>{sec.title}</h4>

					  {sec.points && (
						<ul>
						  {sec.points.map((p, j) => (
							<li key={j}>{p}</li>
						  ))}
						</ul>
					  )}

					  {sec.text && <p>{sec.text}</p>}
					</div>
				  ))}

				  <h3>Key Insights</h3>
				  <ul>
					{caseItem.insights.map((item, i) => (
					  <li key={i}>{item}</li>
					))}
				  </ul>

				  <h3>Recommendations</h3>
				  <ul>
					{caseItem.recommendations.map((item, i) => (
					  <li key={i}>{item}</li>
					))}
				  </ul>

				  <h3>Business Impact</h3>
				  <ul>
					{caseItem.impact.map((item, i) => (
					  <li key={i}>{item}</li>
					))}
				  </ul>

				  <h3>Strategic Value</h3>
				  <p>{caseItem.strategic}</p>

				  <h3>Retention Drivers</h3>
				  <p>{caseItem.retention.text}</p>
				  <ul>
					{caseItem.retention.points.map((item, i) => (
					  <li key={i}>{item}</li>
					))}
				  </ul>

				  <h3>Conclusion</h3>
				  <p style={{ whiteSpace: "pre-line" }}>{caseItem.conclusion}</p>

				</div>

            </div>
          </div>
        </div>
      </section>

    </main>
  </>
);

}