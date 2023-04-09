import { useState } from "react";
import Divider from "../../../components/divider-element/Divider";
import ApplyTitle from "../../../components/form-title/ApplyTitle";
import AddItemForm from "./AddItemForm";
import "./addItem.css";
import ItemCard from "./item-card/ItemCard";

const AddItem = (props) => {
  const [select, setSelect] = useState({
    esyaTipi: "",
    esyaTuru: "",
    esyaDurumu: "",
    img: "",
    itemCount: "",
    address: "",
    phoneNumber: "",
  });
  const [addItem, setAddItem] = useState(false);
  const [check, setCheck] = useState(false);
  const [sendItems, setSendItems] = useState(false);

  const handleCheck = (e) => {
    setCheck(!check);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "img") {
      setSelect((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]).replace(
          /^.*\\/,
          ""
        ),
      }));
      return;
    }
    setSelect((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formStyle = document.getElementsByClassName("item-form-condition")[0]
      .style;
    formStyle.opacity = 0.5;
    formStyle.pointerEvents = "none";
    setAddItem(true);
  };

  const submitItems = (e) => {
    e.preventDefault();
  };

  const sendItemsClick = () => {
    if (check) {
      setSendItems(true);
      setTimeout(() => {
        setSendItems(false);
      }, 2000);
    }
  };

  return (
    <div className="item-form">
      <ApplyTitle />
      <div className="itemForm-box-container">
        <AddItemForm handleChange={handleChange} handleSubmit={handleSubmit} />
        <Divider className="item-divider" />

        <ItemCard
          select={select}
          addItem={addItem}
          handleCheck={handleCheck}
          sendItemsClick={sendItemsClick}
          submitItems={submitItems}
        />
      </div>
      {sendItems && <div className="tostify">Başarılı!</div>}
    </div>
  );
};

export default AddItem;
