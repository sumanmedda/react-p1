function CustomButton(){

  // variable and method
  var buttonName = "Get Starte'd"
  let otherName = () => {
    return "Click & Get Started"
  }

return(
    <div className="custom-button">
        <button>
            <span>{buttonName}</span>
            <br />
            <span>{otherName()}</span>
        </button>
    </div>
)
}

export default CustomButton;