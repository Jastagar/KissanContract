import Button from './Button'
import { KissanContextProvider } from './utils/KissanContext'

function App() {
  return (
    <KissanContextProvider>
        <div className="App">
          <Button />
        </div>
    </KissanContextProvider>
  )
}

export default App
