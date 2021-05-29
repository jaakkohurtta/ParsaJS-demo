import { useReducer } from "react"
import UiContext from "./uiContext"
import UiReducer from "./uiReducer"
import { SET_ITEM_HIGHLIGHT_INDEX, SET_BLOCK_HIGHLIGHT_INDEX } from "./types"

const UiState = props => {
  const initialState = {
    itemHighlightIndex: null,
    blockHighlightIndex: null
  }

  const [state, dispatch] = useReducer(UiReducer, initialState)

  const setItemHighlightIndex = (index) => {
    dispatch({
      type: SET_ITEM_HIGHLIGHT_INDEX,
      itemHighlightIndex: index
    })
  }

  const clearItemHighlightIndex = () => {
    dispatch({
      type: SET_ITEM_HIGHLIGHT_INDEX,
      itemHighlightIndex: null
    })
  }

  const setBlockHighlightIndex = (index) => {
    dispatch({
      type: SET_BLOCK_HIGHLIGHT_INDEX,
      blockHighlightIndex: index
    })
  }

  const clearBlockHighlightIndex = () => {
    dispatch({
      type: SET_BLOCK_HIGHLIGHT_INDEX,
      blockHighlightIndex: null
    })
  }

  return <UiContext.Provider
    value={{
      itemHighlightIndex: state.itemHighlightIndex,
      blockHighlightIndex: state.blockHighlightIndex,
      setItemHighlightIndex,
      clearItemHighlightIndex,
      setBlockHighlightIndex,
      clearBlockHighlightIndex
    }}
    >
    {props.children}
  </UiContext.Provider>
}

export default UiState