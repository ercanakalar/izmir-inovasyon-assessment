import { Link } from "react-router-dom";
import Button from "../../components/button-element/Button";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <Button className="button-logo">LOGO</Button>
      </Link>
    </div>
  );
};

export default Logo;
