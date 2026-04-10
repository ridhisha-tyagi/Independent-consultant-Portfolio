function WhatIDo() {
  return (
    <section id="what-i-do" className="reveal">
      <div className="container what-flow-v2 section-panel">

        {/* TITLE */}
        <div className="flow-title">
          <h2 className="stagger">What I Do</h2>
        </div>

        {/* 🔥 NEW: EXPLANATION */}
        <p className="what-sub stagger">
          I work with businesses to understand how different parts of their system connect — from acquisition to retention — and identify where inefficiencies impact revenue.
        </p>

        {/* FLOW */}
        <div className="flow-horizontal">
          <div className="flow-item stagger">Acquire</div>
          <div className="flow-item stagger">Convert</div>
          <div className="flow-item stagger">Monetize</div>
          <div className="flow-item stagger">Experience</div>
          <div className="flow-item stagger">Retain</div>
        </div>

        {/* 🔥 NEW: BULLET INSIGHTS */}
        <div className="what-points">

          <div className="what-point stagger">
            Understanding where revenue is generated and where it is lost
          </div>

          <div className="what-point stagger">
            Identifying friction in user journeys and product experience
          </div>

          <div className="what-point stagger">
            Evaluating pricing and monetization strategies
          </div>

          <div className="what-point stagger">
            Analyzing behavioral patterns that influence retention
          </div>

          <div className="what-point stagger">
            Building systems that support better decision-making
          </div>
		  
		  <div className="what-point stagger">
			Connecting insights across marketing, product, pricing, and retention into a unified system
		  </div>

        </div>

      </div>
    </section>
  )
}

export default WhatIDo