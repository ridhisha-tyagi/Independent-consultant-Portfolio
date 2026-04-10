function Blogs() {
  return (
    <section id="insights" className="section-accent">

  <div className="container">
    <div className="section-frame"> 

    <div className="section-box">

      <h2 className="section-title">Insights</h2>

      <p className="section-sub">
        Thoughts, analyses, and frameworks on growth, product, and decision-making.
      </p>

      <div className="case-grid">

        <div className="case-card">
          Why Most Growth Strategies Fail
        </div>

        <div className="case-card">
          Understanding Retention Beyond Metrics
        </div>

        <div className="case-card">
          Pricing as a Behavioral Lever
        </div>

        <div className="case-card">
          The Hidden Cost of Poor Onboarding
        </div>

        <div className="case-card">
          Data vs Decision-Making
        </div>

        <div className="case-card">
          Designing Systems, Not Campaigns
        </div>

      </div>

      {/* SEE MORE */}
      <div className="case-more">
        <button className="case-more-btn">
          View All Insights →
        </button>
      </div>

    </div>
    </div>
  </div>

</section>
  )
}

export default Blogs