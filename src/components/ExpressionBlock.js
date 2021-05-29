import { useContext } from "react"
import PropTypes from 'prop-types'
import ExpressionItem from "./ExpressionItem"
import ParsaContext from "../context/parsaContext"
import UiContext from "../context/uiContext"

function ExpressionBlock({ blockId, prio, startIndex, endIndex, borderStyle }) {
  const parsaContext = useContext(ParsaContext)
  const uiContext = useContext(UiContext)

  const { items } = parsaContext

  const onMouseEnter = (e) => uiContext.setBlockHighlightIndex(parseInt(e.target.id))
  const onMouseLeave = () => uiContext.clearBlockHighlightIndex()

  return (
    <div id={blockId - 1} className="expression-block" style={borderStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="row">
        {items.map((item, index) => (
          (index >= startIndex && index <= endIndex)
           ? <ExpressionItem 
            key={index} 
            value={item.value} 
            type={item.type} 
            index={index} 
            />
           : null
        ))}
      </div>
      <div className="expression-block-label">Block Id: {blockId}</div>       
      <div className="expression-block-label">Prio: {prio}</div>       
    </div>
  )
}

ExpressionBlock.propTypes = {
  blockId: PropTypes.number.isRequired,
  prio: PropTypes.number.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
  borderStyle: PropTypes.object.isRequired
}

export default ExpressionBlock
