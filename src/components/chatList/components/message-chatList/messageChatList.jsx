import MessageChat from "./messageChat";
import { useDispatch, useSelector } from "react-redux";
import { selectContactId } from "../../../../store/accions/selectContactActions";

function MessageChatList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleClick = (data) => {
    const idPhone = data.phone;
    dispatch(selectContactId(idPhone));
  };

  const listContacts = contacts.map((contact) => (
    <MessageChat
      key={contact.phone}
      name={contact.name}
      photoURL={contact.urlPhoto}
      lastDate={contact.lastDate}
      lastMessage={contact.lastMessage}
      onHandleClick={() => handleClick(contact)}
    />
  ));

  return <div className="messageChatList-container">{listContacts}</div>;
}

export default MessageChatList;
