import { useState, useContext, Fragment } from "react"
import ParsaContext from "../context/parsaContext"
import UiContext from "../context/uiContext"
import Button from "./Button"
import ExpressionInput from "./ExpressionInput"

function InputControl() {
  const parsaContext = useContext(ParsaContext)
  const uiContext = useContext(UiContext)

  const [expression, setExpression] = useState("")
  
  const onMouseEnter = () => uiContext.setBlockHighlightIndex(parsaContext.nextBlockId - 1)
  const onMouseLeave = () => uiContext.clearBlockHighlightIndex()
  const handleChange = (e) => setExpression(e.target.value)

  // Parse expression
  const parseExpression = () => {
    if(expression.length !== 0) {
      parsaContext.resetState()
      parsaContext.parseExpression(expression)
    }
  }

  // Evaluate all
  const evaluateAll = () => {
    if(parsaContext.items.length !== 0) {
      parsaContext.evaluateAll()
    }    
  }

  // Evaluate next
  const evaluateNext = () => {
    if(parsaContext.items.length !== 0) {
      parsaContext.evaluateNext()
    }    
  }

  return (
    <Fragment>
      <ExpressionInput
        id="expressionInput" 
        classList="mb-4" 
        placeholder="Type in an expression.." 
        value={expression} onChange={handleChange} 
        />
      <div className="row">
        <Button 
          id="parseBtn" 
          value="parse()" 
          classList="btn" 
          onClick={parseExpression} 
          />
        <Button 
          id="evaluateAllBtn" 
          value="evaluateAll()" 
          classList="btn ml-2 mr-2" 
          onClick={evaluateAll} 
          />
        <Button 
          id="evaluateNextBtn" 
          value="evaluateNext()" 
          classList="btn" 
          onClick={evaluateNext} 
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave} 
          />
      </div>
    </Fragment>
  )
}

export default InputControl
