function Process() {
  return (
    <section id="process" className="section-accent">
	  <div className="section-frame"> 

	  <div className="container section-panel"> {/* 🔥 THIS FIXES LEFT ISSUE */}

		<h2 className="section-title">How I Work</h2>

		<div className="process-grid">

		  <div className="process-card">
			<span>01</span>
			<h4>Understand the Problem</h4>
			<p>
			  We start by identifying what is happening and where the issue may lie — 
			  across marketing, product, pricing, or retention.
			</p>
		  </div>

		  <div className="process-card">
			<span>02</span>
			<h4>Diagnose the System</h4>
			<p>
			  Relevant layers are analyzed to uncover root causes, patterns, and 
			  points of inefficiency.
			</p>
		  </div>

		  <div className="process-card">
			<span>03</span>
			<h4>Build the Framework</h4>
			<p>
			  Insights are structured into a clear system with defined priorities 
			  and direction.
			</p>
		  </div>

		  <div className="process-card">
			<span>04</span>
			<h4>Deliver Actionable Outputs</h4>
			<p>
			  You receive focused insights and recommendations designed to support 
			  confident decision-making.
			</p>
		  </div>

		</div>
        </div>
	  </div>
	</section>
  )
}

export default Process