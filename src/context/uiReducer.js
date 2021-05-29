import { SET_ITEM_HIGHLIGHT_INDEX, SET_BLOCK_HIGHLIGHT_INDEX } from "./types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case SET_ITEM_HIGHLIGHT_INDEX:
      return {
        ...state,
        itemHighlightIndex: action.itemHighlightIndex
      }
    case SET_BLOCK_HIGHLIGHT_INDEX:
      return {
        ...state,
        blockHighlightIndex: action.blockHighlightIndex
      }
    default:
      return state
  }
}