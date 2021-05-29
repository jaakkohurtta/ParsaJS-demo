import ParsaState from "./context/ParsaState"
import UiState from "./context/UiState"
import Header from "./components/Header"
import InputControl from "./components/InputControl"
import Expression from "./components/Expression"
import ConsoleLog from "./components/ConsoleLog"

import './App.css'

function App() {
  return (
    <ParsaState>
      <UiState>
        <Header />
        <div className="container">
          <InputControl />
          <Expression />
          <ConsoleLog />
        </div>
      </UiState>
    </ParsaState>
  )
}

export default App
