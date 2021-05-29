import PropTypes from "prop-types"

function Button({ id, value, classList, onClick, onMouseEnter, onMouseLeave }) {
  return (
      <button 
        id={id}
        className={classList} 
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        {value}
      </button>
    )
}

Button.defaultProps = {
  classList: "btn",
  onClick: "onClick",
}

Button.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  classList: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default Button
