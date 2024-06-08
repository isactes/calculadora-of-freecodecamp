import PropTypes from "prop-types";
function AreaText({ id, answer, expression }) {
  return (
    <div id={id} className="relative mb-3 text-right" data-te-input-wrapper-init>
      <div id="answe">{answer}</div>
      <div id="expression">{expression}</div>
    </div>
  );
}

AreaText.propTypes = {
  id: PropTypes.string.isRequired,
  answer: PropTypes.any.isRequired,
  expression: PropTypes.any.isRequired
};

export default AreaText;
