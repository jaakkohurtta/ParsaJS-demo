import { useContext } from "react"
import PropTypes from "prop-types"
import UiContext from "../context/uiContext"

function ExpressionItem({ value, type, index }) {
  const uiContext = useContext(UiContext)

  const onMouseEnter = (e) => e.target.className === "expression-item" ? uiContext.setItemHighlightIndex(parseInt(e.target.id)) : null
  const onMouseLeave = () => uiContext.clearItemHighlightIndex()

  let itemStyle = {}
  if(type === "number") {
    itemStyle = {
      color: "steelblue"
    }
  } else if(type === "operator") {
    itemStyle = {
      color: "salmon"
    }
  } 

  let borderStyle = {}
  if(index === uiContext.itemHighlightIndex) {
    borderStyle = { borderColor: "salmon"}
  } else {
    borderStyle = { borderColor: "#000000" }
  }

  return (
    <div id={index} className="expression-item" style={borderStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <span className="expression-item-label">{index}</span>
      <span style={itemStyle}>{value}</span>
    </div>
  )
}

ExpressionItem.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default ExpressionItem
