import Button from "../../components/button-element/Button";
import SearchIcon from "../../components/icons-element/SearchIcon";
import Input from "../../components/input-element/Input";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar_area">
        <Input
          className="searchbar__input"
          type="text"
          placeholder="Arama Yap"
        />
      </div>
      <div className="searchbar_icon">
        <Button className="search_icon-button">
          <SearchIcon className="search_icon-button-resize" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
