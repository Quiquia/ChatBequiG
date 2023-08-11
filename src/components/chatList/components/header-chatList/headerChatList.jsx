import { useSelector } from "react-redux";
import "./headerChatList.css";
import PropTypes from "prop-types";

function HeaderChatList({ mostrarPerfil }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="headerImg">
      <img
        src={user.urlPhoto}
        width="48"
        height="48"
        alt="Perfil de usuario"
        onClick={mostrarPerfil}
      />
    </div>
  );
}

HeaderChatList.propTypes = {
  mostrarPerfil: PropTypes.func,
};
export default HeaderChatList;
