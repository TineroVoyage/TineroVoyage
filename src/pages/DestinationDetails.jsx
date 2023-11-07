import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { activeExcursions, inactiveExcursions } from "../excursions.json";
export const DestinationDetails = () => {
  const { destination } = useParams();
  const destinationDetails = [...activeExcursions, ...inactiveExcursions].find(
    (e) => e.path === destination
  );
  const isActive =
    activeExcursions.find((e) => e.path === destination) !== undefined;
  return (
    <main className="main" style={{ marginTop: "100px" }}>
      <section className="about section" id="about">
        <div className="about__data2">
          <div className="about__data">
            <h2 className="section__title">{destinationDetails.title}</h2>
            <p className="about__description">
              {destinationDetails.description}
            </p>
          </div>
          <div className="about__data">
            <h2 className="section__title">Programul</h2>
            <br />
            <div className="about__description">
              {destinationDetails.schedule.map((d, key) => (
                <div key={key}>
                  <h1 style={{ marginBottom: "2rem" }}>
                    {d.day} - {d.title}
                  </h1>
                  {d.steps.map((e, key1) => (
                    <div className="destination__schedule" key={key1}>
                      <p style={{ textAlign: "left", marginRight: "5px" }}>
                        *
                      </p>
                      <p style={{ textAlign: "left" }}>{e}</p>
                    </div>
                  ))}
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="about__data">
            {destinationDetails.footer.map((e, key2) => (
              <div key={key2}>
                <div className="destination__schedule">
                  <p style={{ marginRight: "10px" }}>*</p>
                  <p style={{ textAlign: "left" }}>{e.title}</p>
                </div>
                {e.step.map((e, key3) => (
                  <div key={key3} className="destination__schedule">
                    <p style={{ marginRight: "10px" }}>*</p>
                    <p style={{ textAlign: "left" }}>{e}</p>
                  </div>
                ))}
              </div>
            ))}
            <br />
          </div>
          {isActive ? (
            <Link to={destinationDetails.formLink}>
              <button style={{ fontSize: "20px" }} className="button-31">
                Formular de Inscriere
              </button>
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
};
