import { useState, useContext, Fragment } from "react"
import ParsaContext from "../context/parsaContext"
import UiContext from "../context/uiContext"
import Button from "./Button"
import ExpressionInput from "./ExpressionInput"

function InputControl() {
  const parsaContext = useContext(ParsaContext)
  const uiContext = useContext(UiContext)

  const [expression, setExpression] = useState("")

  const onChange = (e) => setExpression(e.target.value)

  const onClick = (e) => {
    switch(e.target.id) {
      case "parseBtn":
        if(expression.length !== 0) {
          parsaContext.resetState()
          parsaContext.parseExpression(expression)
        }
        break
      case "evaluateAllBtn":
        if(parsaContext.items.length !== 0) {
          parsaContext.evaluateAll()
        }
        break
      case "evaluateNextBtn":
        if(parsaContext.items.length !== 0) {
          parsaContext.evaluateNext()
        }
        break
      default:
        break
    }
  }

  const onMouseEnter = () => uiContext.setBlockHighlightIndex(parsaContext.nextBlockId - 1)
  const onMouseLeave = () => uiContext.clearBlockHighlightIndex()

  return (
    <Fragment>
      <ExpressionInput 
        id="expressionInput" 
        classList="mb-4" 
        placeholder="Type in an expression.." 
        value={expression} onChange={onChange} 
        />
      <div className="row">
        <Button 
          id="parseBtn" 
          value="parse()" 
          classList="btn" 
          onClick={onClick} 
          />
        <Button 
          id="evaluateAllBtn" 
          value="evaluateAll()" 
          classList="btn ml-2 mr-2" 
          onClick={onClick} 
          />
        <Button 
          id="evaluateNextBtn" 
          value="evaluateNext()" 
          classList="btn" 
          onClick={onClick} 
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave} 
          />
      </div>
    </Fragment>
  )
}

export default InputControl
