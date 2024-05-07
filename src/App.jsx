import React from "react"
import CustomButton from "./CustomButton"
import RandomNumber from "./RandomNum"
import NavBar from "./NavBar"

function App(){
  return (
    <div>
      <NavBar />
      <h1>Hello World</h1>
      <CustomButton />
      <br />
      <RandomNumber />
      <RandomNumber />
    </div>
  )
}

export default App