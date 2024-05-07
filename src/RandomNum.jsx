function RandomNumber(){
  var number = Math.random() * 100
  var color = '#EC3710'
  return (
  <div style={{'background-color': color}}>
    <h1>Random Number is : {Math.round(number)}</h1>  
  </div>
  )
}

export default RandomNumber;