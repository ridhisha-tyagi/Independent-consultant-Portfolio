import { Link } from "react-router-dom";
function Diagnostic() {
  return (
	  <section id="diagnostics" className="reveal">
		  <div className="diagnostics-layout">

	  <div className="diagnostics-box">

	  <div className="diagnostics-center">

		<h2 className="diagnostics-title">
		  Not sure where to start?
		</h2>

		<p className="diagnostics-sub">
		  If you're unsure what the problem is or where to focus, I offer diagnostic analysis to identify key issues and recommend the right approach.
		</p>

		<Link to="/contact?type=diagnostic" className="btn-outline">
		  Start with a diagnostic →
		</Link>

		{/* 🔥 POINTS INSIDE */}
		<div className="diagnostics-points">

		  <div className="diagnostics-point">Understanding your current situation</div>
		  <div className="diagnostics-point">Identifying where the problem actually lies</div>
		  <div className="diagnostics-point">Highlighting key inefficiencies or risks</div>
		  <div className="diagnostics-point">Recommending the next steps</div>

		</div>

	  </div>

	</div>

	</div>
	</section>
);
}

export default Diagnostic