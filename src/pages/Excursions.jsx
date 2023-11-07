import { ExcursionCard } from "../components/excursionCard";
import { activeExcursions, inactiveExcursions } from "../excursions.json";

export const Excursions = () => {
  return (
    <main className="main">
      <section className="section">
        <h2 className="section__title excursion">Excursiile noastre</h2>
        <div className="wrapper">
          <div className="cols">
            {activeExcursions.map((excursion, key) => (
              <ExcursionCard
                key={key}
                title={excursion.cardTitle}
                formLink={excursion.formLink}
                subtitle={excursion.cardSubtitle}
                description={excursion.cardDescription}
                imageUrl={excursion.imageUrl}
                isActive
                redirectUrl={excursion.path}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title excursion">Excursii finalizate</h2>
        <div className="wrapper">
          <div className="cols">
            {inactiveExcursions.map((excursion, key) => (
              <ExcursionCard
                key={key}
                title={excursion.cardTitle}
                formLink={excursion.formLink}
                subtitle={excursion.cardSubtitle}
                description={excursion.cardDescription}
                imageUrl={excursion.imageUrl}
                isActive={false}
                redirectUrl={excursion.path}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
