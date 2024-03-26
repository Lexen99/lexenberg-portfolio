import "./Timeline.css";
import modobild from "../../assets/oliver-modo1.png";
import modovinst from "../../assets/modo-j20-vinst.png";
import olivervm from "../../assets/oliver-vm.png";
import oliverhalmstad from "../../assets/oliver-halmstad.jpg";
import kvalserienhalmstad from "../../assets/kvalserien-halmstad1.png";
import olivermariestad from "../../assets/oliver-mariestad.png";
import oliverväsby from "../../assets/oliver-väsby.jpg";

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="section-heading">My Timeline.</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2015-2016</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              style={{ backgroundImage: `url(${modobild})` }}
            >
            </div>
            <p>Moved to Örnsköldsvik to enroll in Modo's hockey gymnasium.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2016-2017</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              id="background-center"
              style={{ backgroundImage: `url(${olivervm})` }}
            >
            </div>
            <p>
              Achieved JSM gold with both the J18 and J20 teams. Earned the
              opportunity to represent Modo at the Junior Club World Cup (JCWC),
              clinching a silver medal.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018-2019</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              style={{ backgroundImage: `url(${modovinst})` }}
            >
            </div>
            <p>Secured victory in the J20 championship my last year in modo.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019-2020</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              
              style={{ backgroundImage: `url(${oliverhalmstad})` }}
            >
            </div>
            <p>
              Moved to Halmstad to compete in Hockeyettan, reaching the final,
              which was ultimately canceled due to the COVID-19 pandemic.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021-2022</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              id="background-center"
              style={{ backgroundImage: `url(${kvalserienhalmstad})` }}
            >
            </div>
            <p>
              Successfully qualified for Kvalserien with Halmstad, the playoffs
              to ascend to HockeyAllsvenskan.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022-2023</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              style={{ backgroundImage: `url(${oliverväsby})` }}
            >
            </div>
            <p>
              Returned to Stockholm and joined Väsby, striving once more for
              promotion through Kvalserien to HockeyAllsvenskan.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <div
              className="timeline-image"
              style={{ backgroundImage: `url(${olivermariestad})` }}
            >
            </div>
            <p>
              Embarked on a new journey in Mariestad, seeking fresh challenges
              and experiences.
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
