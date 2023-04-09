import "./addItem.css";
import Button from "../../../components/button-element/Button";
import Input from "../../../components/input-element/Input";
import Select from "../../../components/select-element/Select";

import {
  esyaTipi,
  esyaTuru,
  esyaDurumu,
  eşyaAdet,
} from "../../../utils/options";
import DeleteIcon from "../../../components/icons-element/DeleteIcon";

const AddItemForm = (props) => {
  const { select, handleChange, handleSubmit, removeImage } = props;

  return (
    <form onSubmit={handleSubmit} className="add-item-form item-form-condition">
      <div className="add-item-select">
        {/* {renderSelect(defaultText, esyaTipi)} */}
        <Select
          handleChange={handleChange}
          name="esyaTipi"
          text="Eşya Tipi Seçiniz"
          options={esyaTipi}
        />
        <Select
          handleChange={handleChange}
          name="esyaTuru"
          text="Eşya Türü Seçiniz"
          options={esyaTuru}
        />
        <Select
          handleChange={handleChange}
          name="esyaDurumu"
          text="Eşya Çalışır Durumda Mı?"
          options={esyaDurumu}
        />
        <div style={{ position: "relative" }}>
          {!select.img ? (
            <label htmlFor="file-input" className="no-image">
              <p className="upload-text">Fotoğraf Yükle</p>
            </label>
          ) : (
            <label htmlFor="file-input" className="upload-image"></label>
          )}
          <Input
            handleChange={handleChange}
            id="file-input"
            name="img"
            type="file"
            className="upload"
            accept="image/gif, image/jpeg, image/png"
            required={false}
          />
          {select.img && (
            <div className="card-image-delete-container">
              <Button onClick={removeImage} className="card-image-delete">
                <DeleteIcon />
              </Button>
            </div>
          )}
        </div>
        <Select
          handleChange={handleChange}
          name="itemCount"
          text="Adet"
          options={eşyaAdet}
        />
        <Input
          type="text"
          handleChange={handleChange}
          name="address"
          placeholder="Eşyanın Alınacağı Adres"
          className="item-input"
          required={true}
        />
        <Input
          type="tel"
          handleChange={handleChange}
          name="phoneNumber"
          placeholder="Telim Edecek Kişi Telefon No"
          className="item-input"
          required={true}
        />
      </div>

      <Button type="submit" className="item-button">
        <p className="item-button-text">Ekle</p>
      </Button>
    </form>
  );
};

export default AddItemForm;
