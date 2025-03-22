
import './App.css'

function App() {
  const containerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div style={containerStyle}>
        <Developer name="sabbir" tech= "js,python,c"></Developer>
        <Developer name="akhi" tech= "python"></Developer>
        <Developer name="rakib" tech= "c"></Developer>
      </div>
      
      <div style={containerStyle}>
        <Device name= "iqoo" brand = "Vivo" price= "32k" color ="offWhite"></Device>
        <Device name= "Oppo F23" brand = "Oppo" price= "42k" color ="Black"></Device>
        <Device name= "S24 ultra" brand = "Samsung" price= "132k" color ="White"></Device>
        <Device name= "Iphone 15 pro max" brand = "Iphone" price= "152k" color ="gold"></Device>
      </div>
      
    </>
  )
}

function Developer( amni ){
  // console.log(props)
  const DeveloperStyle = {
    color: "green",
    padding: "5px",
    margin: "5px",
    border: "2px solid green",
    borderRadius: "8px",
  }

  return(
    <div style={DeveloperStyle}>
      <p>Name: {amni.name}</p>
      <p>Technology: {amni.tech}</p>
    </div>
  )
}

function Device ( props ){
  return (
    <div style={{
      border: "2px solid aqua",
      color: "white",
      margin: "10px",
      padding: "10px"
    }}>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>color: {props.color}</p>
    </div>
  )
}
export default App
