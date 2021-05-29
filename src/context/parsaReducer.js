import { PARSE, EVALUATE_ALL, EVALUATE_NEXT, RESET_STATE } from "./types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  let evalMsg = ""
  action.data.complete ? evalMsg = "Evaluation complete." : evalMsg = "Evaluation incomplete"

  switch(action.type) {
    case PARSE:
      return {
        ...state,
        msg: action.data.msg,
        items: action.data.items,
        blocks: action.data.blocks,
        nextBlockId: action.nextBlock,
        logType: action.logType
      }
    case EVALUATE_ALL:
      return {
        ...state,
        msg: evalMsg,
        eval: action.data.eval,
        items: action.data.items,
        blocks: action.data.blocks,
        complete: action.data.complete,
        nextBlockId: action.nextBlock,
        logType: action.logType
      }
    case EVALUATE_NEXT:
      return {
        ...state,
        msg: evalMsg,
        eval: action.data.eval,
        items: action.data.items,
        blocks: action.data.blocks,
        complete: action.data.complete,
        nextBlockId: action.nextBlock,
        logType: action.logType
        }
    case RESET_STATE:
      return {
        msg: action.data.msg,
        eval: action.data.eval,
        items: action.data.items,
        blocks: action.data.blocks,
        complete: action.data.complete,
        nextBlockId: action.nextBlock,
        logType: action.logType
      }
    default:
      return state
  }
}