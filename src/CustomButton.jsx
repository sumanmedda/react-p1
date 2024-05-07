function CustomButton(){

  // variable and method
  var buttonName = "Get Starte'd"
  let otherName = () => {
    return "Click & Get Started"
  }

return(
  <button type="button" class="btn btn-primary">
    <span>{buttonName}</span>
    <br />
    <span>{otherName()}</span>
  </button>
)
}

export default CustomButton;