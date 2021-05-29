import PropTypes from "prop-types"

function ExpressionInput({ id, classList, placeholder, value, onChange }) {
  return (
    <input 
      type="text" 
      id={id}
      className={classList} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
    />  
  )
}

ExpressionInput.propTypes = {
  id: PropTypes.string,
  classList: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default ExpressionInput
