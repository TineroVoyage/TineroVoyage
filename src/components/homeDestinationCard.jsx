import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const HomeDestinationCard = ({ title, imageUrl, description }) => {
  return (
    <article>
      <Link to={`/excursions`}>
        <div className="article-wrapper">
          <figure>
            <img src={imageUrl} alt="" />
          </figure>
          <div className="article-body">
            <h2>{title}</h2>
            <p style={{ color: "white" }}>{description}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
HomeDestinationCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
