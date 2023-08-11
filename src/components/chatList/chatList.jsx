import HeaderChatList from "./components/header-chatList/headerChatList";
import MessageChatList from "./components/message-chatList/messageChatList";
import SearchChatList from "./components/search-chatList/searchChatList";
import "../chatList/chatList.css";
import PerfilUser from "../perfil/perfil";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Chat from "../chat/chat";

function ChatList({ mostrarContacto, isMobile }) {
  const [visibleProfile, setVisibleProfile] = useState(false);
  const user = useSelector((state) => state.user);
  const idSelectContact = useSelector((state) => state.selectContact);

  const mostrarPerfil = () => {
    setVisibleProfile(true);
  };

  const ocultarPerfil = () => {
    setVisibleProfile(false);
  };

  return (
    <div className="chatListContainer">
      <div className="chatList">
        <HeaderChatList mostrarPerfil={mostrarPerfil} />
        <SearchChatList />
        <MessageChatList mostrarContacto={mostrarContacto} />
      </div>
      {visibleProfile ? (
        <div className="chatList-perfil">
          <PerfilUser
            ocultarPerfil={ocultarPerfil}
            name={user.name}
            urlPhoto={user.urlPhoto}
          />
        </div>
      ) : null}
      {isMobile && idSelectContact ? (
        <div className="chatList-perfil">
          <Chat isMobile={isMobile} />
        </div>
      ) : null}
    </div>
  );
}

ChatList.propTypes = {
  mostrarContacto: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default ChatList;
