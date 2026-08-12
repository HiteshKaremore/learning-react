function Greeting(props){
  return(
    <>
    <h1>Hello {props.name}</h1>
    <h2>You are {props.age} years old</h2>
    </>
    
  )
}

function App(){
  return (
  <div>
    <Greeting name="Hitesh" age = {29} />
    <Greeting name="Rahul" age = {28} />
   </div>
   )
   
}
export default App