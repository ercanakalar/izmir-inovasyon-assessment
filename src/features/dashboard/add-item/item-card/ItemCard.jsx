import "./itemCard.css";

import Card from "./Card";
import Button from "../../../../components/button-element/Button";
import Checkbox from "../../../../components/checkbox-element/Checkbox";

const ItemCard = (props) => {
  const {
    addItem,
    handleCheck,
    sendItemsClick,
    addItemClick,
    submitItems,
    items,
  } = props;

  return (
    <div className="item-card-container">
      {items.length > 0 ? (
        <>
          <div className="cards-scroll">
            {items.map((item, index) => (
              <Card key={index} select={item} addItem={item} />
            ))}
          </div>
          <form onSubmit={submitItems} className="card-send">
            <Checkbox
              handleCheck={handleCheck}
              text="Bağış Metni"
              required={addItem}
            />
            <div className="card-buttons">
              <Button onClick={sendItemsClick} className="card-button-1">
                <p className="card-button-1-text">Gönder</p>
              </Button>
              <Button onClick={addItemClick} className="card-button-2">
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
