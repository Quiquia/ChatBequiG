import HeaderChat from "./components/header-chat/header";
import MenssagesChat from "./components/message-chat/message";
import AccionChat from "./components/action-chat/action";
import "./chat.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InicioChat from "../inicioChat/inicioChat";
import PerfilUser from "../perfil/perfil";
import { selectContactId } from "../../store/accions/selectContactActions";

function Chat({ isMobile }) {
  const contacts = useSelector((state) => state.contacts);
  const idSelectContact = useSelector((state) => state.selectContact);
  const dispatch = useDispatch();
  const [contact, setContact] = useState({});
  const [visibleProfile, setVisibleProfile] = useState(false);

  useEffect(() => {
    const contactSelected = contacts.find((c) => c.phone === idSelectContact);
    setContact(contactSelected);
  }, [idSelectContact, contacts]);

  const ocultarPerfil = () => {
    setVisibleProfile(false);
  };

  const mostrarPerfil = () => {
    setVisibleProfile(true);
  };

  const returnPageMain = () => {
    dispatch(selectContactId(null));
  };

  return (
    <div className="chat-container">
      {idSelectContact ? (
        <div className="chat">
          <HeaderChat
            name={contact?.name}
            urlPhoto={contact?.urlPhoto}
            isOnline={contact?.isOnline}
            isMobile={isMobile}
            mostrarPerfil={mostrarPerfil}
            returnPageMain={returnPageMain}
          />
          <MenssagesChat
            messages={contact?.messages}
            idContact={idSelectContact}
          />
          <AccionChat idSelectContact={idSelectContact} />
        </div>
      ) : (
        <div className="chat-inicio">
          <InicioChat />
        </div>
      )}

      {visibleProfile ? (
        <div className="">
          <PerfilUser
            ocultarPerfil={ocultarPerfil}
            name={contact?.name}
            urlPhoto={contact?.urlPhoto}
          />
        </div>
      ) : null}
    </div>
  );
}

Chat.propTypes = {
  isMobile: PropTypes.bool,
};

export default Chat;
