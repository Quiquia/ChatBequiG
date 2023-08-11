import "./action.css";
import IconSmile from "../../../../assets/icon/smile";
import IconPaperclip from "../../../../assets/icon/paperclip";
import IconMic from "../../../../assets/icon/mic";
import { useState } from "react";
import IconSend from "../../../../assets/icon/send";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessage } from "../../../../store/accions/contactsActions";
import PropTypes from "prop-types";

function ActionChat({ idSelectContact }) {
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddNewMessage = () => {
    dispatch(
      addNewMessage({
        idOwner: user.phone,
        idContact: idSelectContact,
        message: text,
      })
    );

    setText("");
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      handleAddNewMessage();
    }
  };

  return (
    <div className="action">
      <button className="action-button action-button__emoji">
        <IconSmile />
      </button>
      <button className="action-button action-button__media">
        <IconPaperclip />
      </button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="action-message"
        placeholder="Escribe un mensaje"
        onKeyDown={handleKeyDown}
      />
      {text.length > 0 ? (
        <button
          className="action-button action-button__voice"
          onClick={handleAddNewMessage}
        >
          <IconSend />
        </button>
      ) : (
        <button className="action-button action-button__voice">
          <IconMic />
        </button>
      )}
    </div>
  );
}

ActionChat.propTypes = {
  idSelectContact: PropTypes.string.isRequired,
};

export default ActionChat;
