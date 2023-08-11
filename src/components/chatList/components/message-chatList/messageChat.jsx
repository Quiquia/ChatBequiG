import { useEffect, useState } from "react";
import "./messageChatList.css";
import PropTypes from "prop-types";

function MessageChat({ name, photoURL, lastDate, lastMessage, onHandleClick }) {
  const [nameDay, setNameDay] = useState("");

  const transformDate = (date) => {
    const fDate = new Intl.DateTimeFormat("es", {
      weekday: "long",
    }).format(new Date(date));
    return fDate.charAt(0).toUpperCase().concat(fDate.slice(1));
  };

  useEffect(() => {
    const tNameDay = transformDate(lastDate);
    setNameDay(tNameDay);
  }, []);

  return (
    <div className="messageChat-container" onClick={onHandleClick}>
      <img
        className="messageChat-img"
        src={photoURL}
        width="48"
        height="48"
        alt="Imagen de Juan"
      />
      <div className="messageChat-body">
        <div className="messageChat-list">
          <span className="messageChat-name">{name}</span>
          <span className="messageChat-date">{nameDay}</span>
        </div>
        <div className="messageChat-details">
          <span className="messageChat-status is-dobleCheck"></span>
          <p className="messageChat-text">{lastMessage}</p>
        </div>
      </div>
    </div>
  );
}

MessageChat.propTypes = {
  name: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  lastDate: PropTypes.string.isRequired,
  lastMessage: PropTypes.string,
  onHandleClick: PropTypes.func,
};
export default MessageChat;
