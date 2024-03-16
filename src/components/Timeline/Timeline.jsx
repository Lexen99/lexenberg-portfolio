import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="section-heading">My Timeline.</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2015-2016</div>
          <div className="timeline-content">
            <p>
              Moved to Örnsköldsvik to enroll in Modo's hockey gymnasium.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2016-2017</div>
          <div className="timeline-content">
            <p>
              Achieved JSM gold with both the J18 and J20 teams.
              Earned the opportunity to represent Modo at the Junior Club World Cup (JCWC), clinching a silver medal.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018-2019</div>
          <div className="timeline-content">
            <p>
              Secured victory in the J20 championship my last year in modo.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019-2020</div>
          <div className="timeline-content">
            <p>
              Moved to Halmstad to compete in Hockeyettan, reaching the final, which was ultimately canceled due to the COVID-19 pandemic.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021-2022</div>
          <div className="timeline-content">
            <p>
              Successfully qualified for Kvalserien with Halmstad, the playoffs to ascend to HockeyAllsvenskan.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022-2023</div>
          <div className="timeline-content">
            <p>
              Returned to Stockholm and joined Väsby, striving once more for promotion through Kvalserien to HockeyAllsvenskan.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <p>
              Embarked on a new journey in Mariestad, seeking fresh challenges and experiences.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot today-dot"></div>
          <div className="timeline-date">2024-02-23</div>
          <div className="timeline-content">
            <p>Completed Web Development Program at Techover Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
