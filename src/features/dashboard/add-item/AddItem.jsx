import { useState } from "react";
import Divider from "../../../components/divider-element/Divider";
import ApplyTitle from "../../../components/form-title/ApplyTitle";
import AddItemForm from "./AddItemForm";
import "./addItem.css";
import ItemCard from "./item-card/ItemCard";
import addItemPointer from "../../../utils/addItemPointer";
import Popup from "../../../components/popup-element/Popup";

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
  const [items, setItems] = useState([]);

  const [check, setCheck] = useState(false);
  const [sendItems, setSendItems] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const closePopup = () => {
    setOpenPopup(!openPopup);
  };

  const clickOpenPopup = () => {
    return <Popup closePopup={closePopup} />;
  };

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
    addItemPointer("item-form-condition", 0.5, "none");

    setItems((prev) => [...prev, select]);
  };

  const addItemClick = (e) => {
    e.preventDefault();

    addItemPointer("item-form-condition", 1, "painted");
  };

  const submitItems = (e) => {
    e.preventDefault();
    if (check) {
      setSendItems(true);
      setTimeout(() => {
        setItems([]);
      }, 2000);
      addItemPointer("item-form-condition", 1, "painted");
    }
  };

  const removeImage = (e) => {
    e.preventDefault();
    setSelect((prev) => ({ ...prev, img: "" }));
  };

  return (
    <>
      <div className="item-form">
        <ApplyTitle />
        <div className="itemForm-box-container">
          <AddItemForm
            select={select}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            removeImage={removeImage}
          />
          <Divider className="item-divider" />

          <ItemCard
            handleCheck={handleCheck}
            submitItems={submitItems}
            addItemClick={addItemClick}
            items={items}
            openPopup={closePopup}
          />
        </div>
        {sendItems && <div className="tostify">Başarılı!</div>}
      </div>
      {openPopup && clickOpenPopup()}
    </>
  );
};

export default AddItem;
