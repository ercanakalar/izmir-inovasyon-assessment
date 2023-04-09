import Button from "../../../../components/button-element/Button";
import BınIcon from "../../../../components/icons-element/BınIcon";
import DeleteIcon from "../../../../components/icons-element/DeleteIcon";
import { cardDetails } from "../../../../utils/options";
import "./card.css";

const Card = (props) => {
  const { select } = props;

  const renderSelect = () => {
    return (
      <>
        {select.img && (
          <>
            <img src={select.img} alt="eşya" className="card-image" />
            <Button className="card-image-delete">
              <DeleteIcon />
            </Button>
          </>
        )}
        <div className="card-details-container">
          <Button className="card-delete">
            <BınIcon />
          </Button>
          {Object.keys(select).map((key, index) => {
            if ((key === "img") | (key === "esyaDurumu")) return null;
            return (
              <div key={index} className="card-details">
                <span className="card-name">{cardDetails[index]} : </span>
                <span className="card-name-info">{select[key]} </span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return <>{<div className="card-content">{renderSelect()}</div>}</>;
};

export default Card;
