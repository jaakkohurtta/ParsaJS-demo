import { Fragment, useContext } from "react"
import ExpressionBlock from "./ExpressionBlock"
import ParsaContext from "../context/parsaContext"
import UiContext from "../context/uiContext"

function Expression() {
  const parsaContext = useContext(ParsaContext)
  const uiContext = useContext(UiContext)

  const { items, blocks } = parsaContext

  if(items.length !== 0) {
    return (
      <div className="row expression-container mt-4">
        {blocks.map((block, index) => (
          index === uiContext.blockHighlightIndex
            ? <ExpressionBlock 
              key={index} 
              blockId={block.id} 
              prio={block.prio} 
              startIndex={block.startIndex} 
              endIndex={block.endIndex} 
              borderStyle={{ border: "1px solid salmon" }}
              />
            : <ExpressionBlock 
              key={index} 
              blockId={block.id} 
              prio={block.prio} 
              startIndex={block.startIndex} 
              endIndex={block.endIndex} 
              borderStyle={{ border: "1px solid black" }} 
              />
        ))}      
      </div>
    )
  } else {
    return (
      <Fragment />
    )
  }
}

export default Expression
