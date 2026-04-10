import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";


function CaseStudies() {
  return (
	<section id="case-studies" className="reveal">
	  <div className="container">
	    <div className="section-frame"> 
        <div className="section-box">
		<h2 className="section-title stagger">Selected Work</h2>

		<p className="section-sub stagger">
		  A selection of systems and analyses designed to solve business problems across marketing, product, pricing, and retention.
		</p>

		{/* 🔹 GRID */}
		<div className="case-grid">
		  {caseStudies.filter(item => item.featured)
			  .map((item, index) => (
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
			 <div className="case-more">
		  <a href="/case-studies" className="case-more-btn">
			View All Case Studies →
		  </a>
		</div>
		</div>
       
	    </div>
		
		
	    </div>
		  
	</section>
  )
}

export default CaseStudies