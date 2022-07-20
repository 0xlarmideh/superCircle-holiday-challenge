const strongPassLetters = new RegExp("^(?=.*[a-z]|[A-Z])"),
      strongPassNumbers = new RegExp("^(?=.*[0-9])"),
      strongPassCharacters = new RegExp("^(?=.*[!@#\$%\^&\*])"),
      passwordInput = document.querySelector("#password"),
      phoneNoInput = document.querySelector("#phone-number"),
      carrierLogo = document.querySelector(".carrier-logo");

function startApp() {
    phoneNoInput.addEventListener("keyup", phoneNumberCheck)
  };

function passwordCheck() {
  
}

function phoneNumberCheck(e) {
  const networkCodes = {
    mtn: ["0803", "0806", "0814", "0810", "0813", "0814", "0816", "0703", "0706", "0903", "0906"],
    etisalat: ["0809", "0817", "0818", "0908", "0909"],
    glo: ["0805", "0807", "0811", "0815", "0705", "0905"],
    airtel: ["0802", "0808", "0812", "0708", "0701", "0902", "0901", "0907"]};

  const numInput = e.target.value
  if(isNaN(numInput)){
    alert("Please enter only numbers")
  }
}


  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //