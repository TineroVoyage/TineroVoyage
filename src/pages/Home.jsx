import { Link } from "react-router-dom";
import { HomeDestinationCard } from "../components/homeDestinationCard";

export const Home = () => {
  return (
    <main className="main">
      <section className="home section" id="home">
        <img
          src="/home-bg.webp"
          style={{ zIndex: "-1" }}
          alt="home image"
          className="home__bg"
        />
        <div className="home__shadow" style={{ zIndex: "-1" }}></div>

        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
              Tinero <br></br>
              Voyage
            </h1>

            <p className="home__description">
              Descoperă Europa alături de organizația noastră! Excursii
              captivante, cultură și distracție pentru tineri entuziaști cu
              vârste cuprinse între 18 și 30 de ani.
            </p>

            <Link to="/excursions" className="button">
              Start Your Journey <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <Link to="/excursions/reveliontinerovoyage">
            <div className="home__cards grid">
              <article className="home__card">
                <img
                  src="/cardImages/budapesta2024.jpg"
                  alt="home image"
                  className="home__card-img"
                />
                <h3 className="home__card-title">Revelion 2023/2024</h3>
                <div className="home__card-shadow"></div>
              </article>
            </div>
          </Link>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="about__data2">
          <div className="about__data">
            <h2 className="section__title">
              Excursii încheiate în vacanța de vară 2023
            </h2>

            <p className="about__description">
              Nu ratați ocazia de a fi primii informați cu privire la viitoarele
              noastre excursii captivante pentru tineri. Pentru a vă asigura că
              nu pierdeți nicio noutate, vă încurajăm să urmăriți site-ul nostru
              și să ne urmăriți pe paginile noastre de social media - Facebook,
              TikTok și Instagram. Fiecare postare, videoclip sau anunț vă va
              aduce mai aproape de aventurile următoare. Haideți să creăm
              împreună amintiri de neuitat! #TineroVoyage
            </p>
            <section className="articles">
              <HomeDestinationCard
                title={"Viena"}
                imageUrl={"/cardImages/vienaHomeCard.jpg"}
                description={
                  "Capitala Austriei, un loc în care istoria și cultura se întâlnesc cu vibrația tânără și modernă. Viena este cunoscută ca 'Orașul Muzicii'. Viena vă întâmpină cu clădiri istorice grandioase, cum ar fi Palatul Schönbrunn și Palatul Hofburg, care vă vor transporta înapoi în vremurile imperiale. Vom explora cartierele istorice, cum ar fi Innere Stadt, cu străzi pietruite, clădiri baroce și cafenele tradiționale. Dacă sunteți în căutarea unei destinații pentru a petrece o mini-vacanță, Viena este răspunsul."
                }
              />
              <HomeDestinationCard
                title={"Paris"}
                imageUrl={"/cardImages/parisHomeCard.jpg"}
                description={
                  "Parisul este renumit pentru farmecul său romantic, dar pentru participanții excursiei #TINEROVoyage, oferă mult mai mult decât atât. Aici veți găsi cele mai faimoase obiective turistice, cum ar fi Turnul Eiffel și Muzeul Luvru, dar și cartiere vibrante, cum ar fi Montmartre și Le Marais, pline de artă, muzică și viață de noapte. Dacă sunteți în căutarea unei destinații europene pline de viață și cultură, Parisul este locul ideal."
                }
              />
              <HomeDestinationCard
                title={"Budapesta"}
                imageUrl={"/cardImages/budapestaHomeCard.jpg"}
                description={
                  "Capitala Ungariei, un oraș ce îmbină cu măiestrie istoria sa bogată cu o vibrație tânără și plină de energie. Aici puteți explora istoria în monumentalele sale clădiri, de la Parlamentul impresionant până la Castelul Buda, dar și să vă relaxați în celebrele băi termale . Budapesta este cunoscută pentru viața sa de noapte vibrantă, cu cluburi de dans dinamice și baruri elegante. Încercați gulașul tradițional sau bucurați-vă de o cafea într-un cafenea istoric."
                }
              />
              <HomeDestinationCard
                title={"Praga"}
                imageUrl={"/cardImages/pragaHomeCard.jpg"}
                description={
                  "Capitala Cehiei păstrează taina secolelor de istorie și te invită să descoperi întâmplările sale remarcabile. Pentru participanții #TINEROVoyage, Praga este o adevărată comoară a patrimoniului cultural și istoric. Cu un Centru Vechi bine conservat, declarat Patrimoniu Mondial UNESCO, Praga vă va purta înapoi în timp cu arhitectura sa gotică și barocă, străzile sale pietruite și castelele sale medievale. Vizitați Castelul Praga, unul dintre cele mai mari castele din lume, și descoperiți Catedrala Sfântul Vitus. Podurile de pe Vltava, precum faimosul Pod Carol și Podul Charles, sunt locuri pline de istorie și legende romantice."
                }
              />
              <HomeDestinationCard
                title={"Barcelona"}
                imageUrl={"/cardImages/barcelona.jpeg"}
                description={
                  "La fiecare pas, veți descoperi capodopere arhitectonice create de Gaudí, cum ar fi celebrele Sagrada Familia și Parcul Güell, care vă vor lăsa cu gura căscată. Barcelona este un oraș al bucuriei culinare. Cu o varietate de restaurante și taverne, vă puteți delecta cu specialități spaniole precum paella și tapas. De asemenea, orașul are o viață de noapte vibrantă, cu cluburi de noapte și baruri care oferă muzică, dans și distracție marca #TINEROVOIAGE. "
                }
              />
              <HomeDestinationCard
                title={"Roma"}
                imageUrl={"/cardImages/Rome12.png"}
                description={
                  "Roma, capitala Italiei, este un oraș cu o istorie bogată și fascinantă, care se îmbină perfect cu o energie contemporană și o atmosferă vibrantă. Aici puteți explora trecutul în clădiri impunătoare, de la Colosseumul impresionant la Forumul Roman sau la incitantul Vatican. Dar, în același timp, puteți savura bucătăria italiană în restaurante tradiționale sau vă puteți bucura de o cafea în pitoreștile cafenele din Piazza Navona sau Piazza di Spagna."
                }
              />
            </section>
          </div>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="about__data2">
          <div className="about__data">
            <h2 className="section__title">Despre noi</h2>

            <p className="about__description">
              Misiunea noastră este să îți oferim ocazia de a explora și de a
              descoperi bogăția și diversitatea Europei într-un mod care să
              reflecte energia și pasiunea tinereții tale. Cu un focus clar pe
              conexiuni umane, aventuri captivante și explorări autentice, ne
              străduim să aducem Europa mai aproape de tine, indiferent de locul
              în care te afli.
            </p>
          </div>
        </div>
      </section>
            <section className="about section" id="about">
        <div className="about__data2">
          <div className="about__data">
            <h2 className="section__title">De ce TineroVoyage?</h2>

            <p className="about__description">
              Misiunea noastră este să îți oferim ocazia de a explora și de a
              descoperi bogăția și diversitatea Europei într-un mod care să
              reflecte energia și pasiunea tinereții tale. Cu un focus clar pe
              conexiuni umane, aventuri captivante și explorări autentice, ne
              străduim să aducem Europa mai aproape de tine, indiferent de locul
              în care te afli.
            </p>
            <p className="about__description">
              <b> * Europa ca niciodată:</b> Fie că ești în căutarea farmecului
              istoric, a peisajelor pitorești sau a vieții de noapte vibrante,
              ne-am angajat să îți arătăm cele mai bune fețe ale Europei.
            </p>
            <p className="about__description">
              <b> * Călătorii în grup mare:</b> Făcând parte din grupuri de
              minim 50 de tineri , vei simți spiritul comunității și vei crea
              prietenii pe viață în fiecare călătorie.
            </p>
            <p className="about__description">
              <b> * Satisfacția experienței:</b> Veți reveni de la fiecare
              călătorie cu amintiri și povești care vor rămâne o sursă constantă
              de inspirație și zâmbete.
            </p>
            <p className="about__description">
              <b> * Experiențe personalizate în cadru colectiv:</b> Cu toate că
              călătoriți în grup, înțelegem că fiecare călător are interese și
              dorințe unice. Așadar, adaptăm itinerariile pentru a încorpora
              opțiuni
            </p>
            <p className="about__description">
              <b> * Aventuri la prețuri accesibile:</b> Prin TineroVoyage,
              suntem dedicați să vă oferim călătorii memorabile, încurajându-vă
              să explorați,să vă conectați și să trăiți aventura vieții voastre,
              fără a vă depăși bugetul.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
