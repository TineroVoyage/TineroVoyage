import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ExcursionCard = (props) => {
  return (
    <div
      className="col"
      onTouchStart={() => this.classNameList.toggle("hover")}
    >
      <div className="container1">
        <div
          className="front"
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
          <div className="inner">
            <p>{props.title}</p>
            <span>{props.isActive ? props.subtitle : "FINALIZAT"}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{props.description}</p>
            <div>
            {props.isActive ? (
              <Link to={props.formLink}>
                <button className="button-31">Inscriere</button>
              </Link>
            ) : null}
            </div>
            <div> 
            <Link to={props.redirectUrl}>
              <button className="button-31">Programul excursiei</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExcursionCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  formLink: PropTypes.string,
  redirectUrl: PropTypes.string,
};
