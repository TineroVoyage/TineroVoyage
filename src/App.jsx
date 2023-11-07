import { Route, Routes } from "react-router-dom";
import { Excursions } from "./pages/Excursions";
import { Home } from "./pages/Home";
import Layout from "./components/layout/layout";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { FrequestQuestions } from "./pages/FrequentQuestions";
import { ComeToOurTeam } from "./pages/ComeToOurTeam";
import { DestinationDetails } from "./pages/DestinationDetails";
import { ScrollToTop } from "./components/utilComponents";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
    });

    sr.reveal(
      `.home__data, .explore__data, .explore__user, .footer__container`
    );
    sr.reveal(`.home__card`, { delay: 600, distance: "100px", interval: 100 });
    sr.reveal(`.about__data, .join__image`, { origin: "right" });
    sr.reveal(`.about__image, .join__data`, { origin: "left" });
    sr.reveal(`.popular__card`, { interval: 200 });
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excursions">
          <Route path="" element={<Excursions />} />
          <Route path=":destination" element={<DestinationDetails />} />
        </Route>
        <Route path="/frequentQuestions" element={<FrequestQuestions />} />
        <Route path="/cometoOurTeam" element={<ComeToOurTeam />} />
      </Routes>
    </Layout>
  );
}

export default App;
