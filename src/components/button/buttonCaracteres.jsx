import PropTypes from "prop-types";

function ButtonCaracteres({ caracter, id, onClick }) {
  return (
    <button
      id={id}
      type="button"
      className="m-auto h-auto w-fit"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={onClick}
    >
      {caracter}
    </button>
  );
}

ButtonCaracteres.propTypes = {
  id: PropTypes.string.isRequired,
  caracter: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonCaracteres;
