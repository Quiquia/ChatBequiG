import "./perfil.css";
import PropTypes from "prop-types";
import IconArrowLeft from "../../assets/icon/arrow-left";
import IconCamera from "../../assets/icon/camera";
import IconEdit from "../../assets/icon/edit-2";

function PerfilUser({ ocultarPerfil, name, urlPhoto }) {
  return (
    <div className="perfilUser-container">
      <header className="perfilUser-header">
        <div className="perfilUser-header-container">
          <button className="perfilUser-header-icon" onClick={ocultarPerfil}>
            <IconArrowLeft color="white" />
          </button>
          <span className="perfilUser-header-info">Perfil</span>
        </div>
      </header>
      <div className="perfilUser-info">
        <div className="perfilUser-info-container">
          <div className="perfilUser-img">
            <img
              src={urlPhoto}
              alt="imagen del contacto"
              width={200}
              height={200}
            />
          </div>
          <span className="perfilUser-img-change">
            <button className="perfilUser-iconCamera">
              <IconCamera color="white" />
            </button>
            <span className="perfilUser-change">Cambiar imagen</span>
          </span>
        </div>
        <div className="perfilUser-details">
          <p className="perfilUser-detail-info">Tu nombre</p>
          <div className="perfil-detail-name">
            <span className="">{name}</span>
            <button className="perfil-detail-icon">
              <IconEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

PerfilUser.propTypes = {
  ocultarPerfil: PropTypes.func,
  name: PropTypes.string,
  urlPhoto: PropTypes.string,
};

export default PerfilUser;
