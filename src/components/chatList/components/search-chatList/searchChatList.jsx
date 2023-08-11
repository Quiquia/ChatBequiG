import "./searchChatList.css";
import IconSearch from "../../../../assets/icon/search";

function SearchChatList() {
  return (
    <div className="search">
      <div className="searchContainer">
        <IconSearch className="searchIcon" />
        <input
          className="searchInput"
          type="text"
          placeholder="Buscar o iniciar un nuevo chat"
        />
      </div>
    </div>
  );
}

export default SearchChatList;
