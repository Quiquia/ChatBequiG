import "./header.css";
import IconSearch from "../../../../assets/icon/search";
import PropTypes from "prop-types";
import IconArrowLeft from "../../../../assets/icon/arrow-left";

function HeaderChat({
  name = "",
  urlPhoto = "",
  isOnline = false,
  isMobile,
  mostrarPerfil,
  returnPageMain,
}) {
  const ocultarArrowLeft = {
    position: "absolute",
    visibility: "hidden",
  };

  return (
    <div className="header">
      <div className="header-info">
        <button
          className="icon-arrowLef"
          style={isMobile ? {} : ocultarArrowLeft}
          onClick={returnPageMain}
        >
          <IconArrowLeft />
        </button>
        <div className="user">
          <img
            src={urlPhoto}
            width="48"
            height="48"
            alt="Perfil de usuario"
            onClick={mostrarPerfil}
          />
          <p>
            <span className="user-name">{name} </span>
            <span className="user-status">{`${
              isOnline ? "En Línea" : "Desconectado"
            }`}</span>
          </p>
        </div>
      </div>

      <div className="header-actions">
        <button className="header-actions-search">
          <IconSearch />
        </button>
      </div>
    </div>
  );
}

HeaderChat.propTypes = {
  name: PropTypes.string,
  urlPhoto: PropTypes.string,
  isOnline: PropTypes.bool,
  isMobile: PropTypes.bool,
  mostrarPerfil: PropTypes.func,
  returnPageMain: PropTypes.func,
};

export default HeaderChat;
