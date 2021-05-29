import { useContext, Fragment } from "react"
import ParsaContext from "../context/parsaContext"
import UiContext from "../context/uiContext"

function ConsoleLog() {
  const parsaContext = useContext(ParsaContext)
  const uiContext = useContext(UiContext)

  const { items, blocks, msg, logType, complete } = parsaContext

  if(logType === "parse") {
    return (
      <Fragment>
        <h3 className="mt-4">console.log()</h3>
        <div className="mt-4">
          <div>
            <span style={logIndex}>msg: </span><span style={logString}>"{msg}"</span> 
          </div>
          <div>
            <div><span style={logIndex}>items: </span>[</div>
              {items.map((item, index) => (
                index === uiContext.itemHighlightIndex
                  ?  <div key={index}>&emsp;<span style={{ borderBottom: "1px solid black"}}><span style={logIndex}>{index}: </span>&#123; value: <span style={logString}>"{item.value}"</span>, type: <span style={logString}>"{item.type}"</span>  &#125;</span></div>
                  : <div key={index}>&emsp;<span style={logIndex}>{index}: </span>&#123; value: <span style={logString}>"{item.value}"</span>, type: <span style={logString}>"{item.type}"</span> &#125;</div> 
                
              ))}
            <div>]</div>
          </div>
          <div>
            <div><span style={logIndex}>blocks: </span>[</div>
              {blocks.map((block, index) => (
                index === uiContext.blockHighlightIndex
                 ? <div key={index}>&emsp;<span style={{ borderBottom: "1px solid black"}}><span style={logIndex}>{index}: </span>&#123; id: <span style={logNumber}>{block.id}</span>, prio: <span style={logNumber}>{block.prio}</span>, startIndex: <span style={logNumber}>{block.startIndex}</span>, endIndex: <span style={logNumber}>{block.endIndex}</span> &#125;</span></div>
                 : <div key={index}>&emsp;<span style={logIndex}>{index}: </span>&#123; id: <span style={logNumber}>{block.id}</span>, prio: <span style={logNumber}>{block.prio}</span>, startIndex: <span style={logNumber}>{block.startIndex}</span>, endIndex: <span style={logNumber}>{block.endIndex}</span> &#125;</div>
              ))}
            <div>]</div>
          </div>
        </div>
      </Fragment>
    )  
  } else if(logType === "eval") {
    return (
      <Fragment>
        <h3 className="mt-4">console.log()</h3>
        <div className="mt-4">
          {complete 
          ? <div><span style={logIndex}>complete: </span><span style={logBoolean}>true</span></div> 
          : <div><span style={logIndex}>complete: </span><span style={logBoolean}>false</span></div>
          }
          <div>
            <span style={logIndex}>eval: </span><span style={logNumber}>{parsaContext.eval}</span> 
          </div>
          <div>
            <div><span style={logIndex}>items: </span>[</div>
              {items.map((item, index) => (
                index === uiContext.itemHighlightIndex
                  ?  <div key={index}>&emsp;<span style={{ borderBottom: "1px solid black"}}><span style={logIndex}>{index}: </span>&#123; value: <span style={logString}>"{item.value}"</span>, type: <span style={logString}>"{item.type}"</span>  &#125;</span></div>
                  : <div key={index}>&emsp;<span style={logIndex}>{index}: </span>&#123; value: <span style={logString}>"{item.value}"</span>, type: <span style={logString}>"{item.type}"</span> &#125;</div> 
                
              ))}
            <div>]</div>
          </div>
          <div>
            <div><span style={logIndex}>blocks: </span>[</div>
              {blocks.map((block, index) => (
                index === uiContext.blockHighlightIndex
                ? <div key={index}>&emsp;<span style={{ borderBottom: "1px solid black"}}><span style={logIndex}>{index}: </span>&#123; id: <span style={logNumber}>{block.id}</span>, prio: <span style={logNumber}>{block.prio}</span>, startIndex: <span style={logNumber}>{block.startIndex}</span>, endIndex: <span style={logNumber}>{block.endIndex}</span> &#125;</span></div>
                : <div key={index}>&emsp;<span style={logIndex}>{index}: </span>&#123; id: <span style={logNumber}>{block.id}</span>, prio: <span style={logNumber}>{block.prio}</span>, startIndex: <span style={logNumber}>{block.startIndex}</span>, endIndex: <span style={logNumber}>{block.endIndex}</span> &#125;</div>
             ))}
            <div>]</div>
          </div>
        </div>
      </Fragment>
    )
  } else {
    return <Fragment />
  }
}

const logIndex = { color:"#af5ab4" }
const logString = { color:"#f58c55" }
const logNumber = { color:"#7d69cd" }
const logBoolean = { color:"#7d69cd" }

export default ConsoleLog
