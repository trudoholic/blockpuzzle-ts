import './App.css'

import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl">
        Hello world!
      </h1>
      <div>
        <Button className="first:mr-4">
          Music
        </Button>
        <Button>Sound FX</Button>
      </div>
    </>
  )
}

export default App
