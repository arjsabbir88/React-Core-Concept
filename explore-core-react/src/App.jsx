import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Div></Div>
     
    </>
  )
}


function Person(){
  return(
    <h1>hello world</h1>
  )
}

function Div(){
  return(
    <div>
      <h1>This is Me</h1>
      <p>Who made up this component</p>
    </div>
  )
}
export default App
