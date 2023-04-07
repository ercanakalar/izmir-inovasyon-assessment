import "./icons.css";
import FacebookIcon from "../../components/icons-element/FacebookIcon";
import InstagramIcon from "../../components/icons-element/InstagramIcon";
import TwitterIcon from "../../components/icons-element/TwitterIcon";
import LinkedInIcon from "../../components/icons-element/LinkedInIcon";
import YoutubeIcon from "../../components/icons-element/YoutubeIcon";
import Button from "../../components/button-element/Button";

const Icons = () => {
  return (
    <div className="icon-container">
      <Button className="icons-1 buttons-icons">
        <FacebookIcon className="icon" />
      </Button>
      <Button className="icons-1 buttons-icons">
        <InstagramIcon className="icon" />
      </Button>
      <Button className="icons-1 buttons-icons">
        <TwitterIcon className="icon" />
      </Button>
      <Button className="icons-1 buttons-icons">
        <LinkedInIcon className="icon" />
      </Button>
      <Button className="icons-1 buttons-icons">
        <YoutubeIcon className="icon" />
      </Button>
    </div>
  );
};

export default Icons;
