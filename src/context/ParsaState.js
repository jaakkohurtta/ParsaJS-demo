import { useReducer } from "react"
import ParsaContext from "./parsaContext"
import ParsaReducer from "./parsaReducer"
import { PARSE, EVALUATE_ALL, EVALUATE_NEXT, RESET_STATE } from "./types"
import Parsa from "@jaakkohurtta/parsajs"

const parsa = new Parsa()

const ParsaState = props => {
  const initialState = {
    msg: "",
    eval: null,
    items: [],
    blocks: [],
    nextBlockId: null,
    complete: false,
    logType: null
  }

  const [state, dispatch] = useReducer(ParsaReducer, initialState)

  const parseExpression = async (expression) => {
    const res = parsa.parse(expression)

    dispatch({
      type: PARSE,
      data: res,
      nextBlock: getNextBlockId(),
      logType: "parse"
    })
  }

  const evaluateAll = async () => {
    let res = parsa.evaluateAll(state.items)

    dispatch({
      type: EVALUATE_ALL,
      data: res,
      nextBlock: getNextBlockId(),
      logType: "eval"
    })
  }

  const evaluateNext = async () => {
    let res = parsa.evaluateNext(state.items)

    dispatch({
      type: EVALUATE_NEXT,
      data: res,
      nextBlock: getNextBlockId(),
      logType: "eval"
    })
  }

  const resetState = () => {
    dispatch({
      type: RESET_STATE,
      data: initialState,
      nextBlock: null,
      logType: null
    })
  }

  const getNextBlockId = () => {
    return parsa.getNextBlock()
  }

  return <ParsaContext.Provider
    value={{
      msg: state.msg,
      eval: state.eval,
      items: state.items,
      blocks: state.blocks,
      nextBlockId: state.nextBlockId,
      complete: state.complete,
      logType: state.logType,
      parseExpression,
      evaluateAll,
      evaluateNext,
      resetState
    }}
    >
    {props.children}
  </ParsaContext.Provider>
}

export default ParsaState