import "./message.css";
import PropTypes from "prop-types";

function MenssagesChat({ messages = [], idContact = "" }) {
  const messageIsSender = (text, date) => (
    <div className="message is-sender" key={date}>
      <div className="message-body">
        <p className="message-text">{text}</p>
      </div>
      <div className="message-details">
        <span className="message-date">09:28 am</span>
        <span className="message-status is-dobleCheck"></span>
      </div>
    </div>
  );

  const messageIsReceiver = (text, date) => (
    <div className="message is-receiver" key={date}>
      <div className="message-body">
        <p className="message-text">{text} </p>
      </div>
      <div className="message-details">
        <span className="message-date">09:28 am</span>
      </div>
    </div>
  );

  return (
    <div className="message-list">
      <div className="date">Jueves</div>
      {messages.map((message) =>
        message.ownerId === idContact
          ? messageIsReceiver(message.content, message.date)
          : messageIsSender(message.content, message.date)
      )}
      <div className="date">viernes</div>
    </div>
  );
}

MenssagesChat.propTypes = {
  messages: PropTypes.array,
  idContact: PropTypes.string,
};

export default MenssagesChat;
