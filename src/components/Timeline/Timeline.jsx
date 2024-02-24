import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="section-heading">My Timeline</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024-02-23</div>
          <div className="timeline-content">
            <p>Graduated as a webdeveloper at Techover academy </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot today-dot"></div>
          <div className="timeline-date">2024-02-23</div>
          <div className="timeline-content">
            <p>More to come!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
