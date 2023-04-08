import "./itemCard.css";

import Card from "./Card";
import Button from "../../../../components/button-element/Button";
import Checkbox from "../../../../components/checkbox-element/Checkbox";

const ItemCard = (props) => {
  const { select, addItem, handleCheck, sendItemsClick, submitItems } = props;

  return (
    <div className="item-card-container">
      {addItem ? (
        <>
          <div className="cards-scroll">
            <Card select={select} addItem={addItem} />
            <Card select={select} addItem={addItem} />
            <Card select={select} addItem={addItem} />
          </div>
          <form onSubmit={submitItems} className="card-send">
            <Checkbox
              handleCheck={handleCheck}
              text="Bağış Metni"
              required={true}
            />
            <div className="card-buttons">
              <Button onClick={sendItemsClick} className="card-button-1">
                <p className="card-button-1-text">Gönder</p>
              </Button>
              <Button className="card-button-2">
                <p className="card-button-2-text">Yeni Eşya Ekle</p>
              </Button>
            </div>
          </form>
        </>
      ) : (
        <div className="no-content-container">
          <div className="no-content-text">
            <p>Eşya Bağışı Bulunmamaktadır</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
