import { Link } from "react-router-dom";
export const ComeToOurTeam = () => {
  return (
    <main className="main">
      <section
        className="about section"
        style={{ marginTop: "2rem" }}
        id="about"
      >
        <div className="about__data2">
          <div className="about__data">
            <h2 className="section__title">Vino în echipa noastră</h2>
            <p className="about__description">
              Ești un tânăr pasionat de aventură și călătorii? Cautăm
              organizatori entuziaști și responsabili, cu vârsta cuprinsă între
              20 și 25 de ani, care să se alăture echipei noastre în organizarea
              de excursii neuitate în diverse destinații din întreaga Europă. Vă
              informăm că această oportunitate este pe bază de voluntariat, iar
              implicarea voastră neîntreruptă vă aduce oportunitatea de a
              explora destinații fascinante, de a dezvolta abilități versatile
              în turism și de a contribui la experiențe de neuitat pentru
              tinerii călători, cu bonusul adițional al unor câștiguri
              financiare.
            </p>
            <Link to={"https://forms.gle/LVx8yL1yS8wKgVUS7"}>
              <button style={{ fontSize: "20px" }} className="button-31">
                Formular de înscriere
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="cardsVideo">
        <video className="cardVideo" controls autoPlay loop muted>
          <source src="/videos/champagneVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="cardVideo" controls autoPlay loop muted>
          <source src="videos/beachVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="cardVideo" controls autoPlay loop muted>
          <source src="videos/walkingVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};
