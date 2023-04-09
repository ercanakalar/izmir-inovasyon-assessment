import "./citizenApply.css";

import Input from "../../../components/input-element/Input";
import ApplyTitle from "../../../components/form-title/ApplyTitle";
import Button from "../../../components/button-element/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../../components/checkbox-element/Checkbox";
import date from "../../../utils/date";

const CitizenApply = (props) => {
  const navigate = useNavigate();

  const [citizen, setCitizen] = useState({
    nationality: "",
    identity: "",
    username: "",
    surname: "",
    day: "",
    accept: false,
  });

  const countries = ["Vatandaş", "Europe"];

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "accept") {
      setCitizen((prev) => ({
        ...prev,
        [e.target.name]: !citizen.accept,
      }));
      return;
    }
    setCitizen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/add-item");
  };

  const today = date();

  return (
    <form onSubmit={handleSubmit} className="apply">
      <div className="citizen-inputs">
        <ApplyTitle />
        <select
          className="input"
          required
          onChange={handleChange}
          name="nationality"
        >
          <option value="">--Please choose an option--</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="citizen-inputs-title-container">
        <p className="citizen-inputs-title-name">Vatandaş Başvurusu</p>
      </div>
      <div className="citizen-inputs">
        <Input
          type="text"
          name="identity"
          onChange={handleChange}
          className="input"
          placeholder="T.C"
          required
        />
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          className="input"
          required
        />
        <Input
          type="text"
          name="surname"
          onChange={handleChange}
          className="input"
          required
        />
        <Input
          type="date"
          name="day"
          onChange={handleChange}
          className="input"
          value={today}
          min={today}
          required
        />
      </div>
      <div className="checkbox-container">
        <Checkbox
          name="accept"
          text="Kişisel verilerin korunması hakkında
"
          required
        />
      </div>
      <Button className="apply-button">
        <p className="apply-button-text">Başvuru Yap</p>
      </Button>
    </form>
  );
};

export default CitizenApply;
