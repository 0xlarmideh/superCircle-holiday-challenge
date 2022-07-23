// Variables to test for password valiadtion

const strongPassLetters = new RegExp("(?=.*[a-z]|[A-Z])"),
  strongPassNumbers = new RegExp("(?=.*[0-9])"),
  strongPassCharacters = new RegExp("(?=.*[!@#\$%\^&\*])"),
  passPassed = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  strongAll = new RegExp("(?=.{8,})"),
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  mtnRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1})))\d{7})$/g,
  etisalatRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([9]{1}))|(([9]{1})[0]([8]{1}))|([8][1]([78]{1})))\d{7})$/g,
  airtelRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([2]{1}))|(([7-8]{1})[0]([8]{1}))|(([9]{1})[0]([17]{1}))|([8][1]([2]{1}))|([7][0]([1]{1})))\d{7})$/g,
  gloRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([57]{1}))|([81]([15]{1})))\d{7})$/g,
  passwordInput = document.querySelector("#password"),
  phoneNoInput = document.querySelector("#phone-number"),
  emailInput = document.querySelector("#email"),
  carrierLogo = document.querySelector(".carrier-logo"),
  emailCheck = document.querySelector("#email-check"),
  passCheck = document.querySelector("#pass-check"),
  boldAll = document.querySelector(".bold-all"),
  boldLetter = document.querySelector(".bold-letter"),
  boldNumber = document.querySelector(".bold-number"),
  boldSymbol = document.querySelector(".bold-symbol");

// NetworkProviders Logo Directories

const mtnLogo = '<img src="./carrier-logos/mtn-logo.jpeg" alt="MTN">',
  airtelLogo = '<img src="./carrier-logos/airtel-logo.jpeg" alt="AIRTEL">',
  gloLogo = '<img src="./carrier-logos/glo-logo.jpg" alt="GLO">',
  etisalatLogo = '<img src="./carrier-logos/9mobile-logo.png" alt="9MOBILE">';


// This function loads all event listeners and calls functions
function startApp() {
  phoneNoInput.addEventListener("keyup", testNumber);
  passwordInput.addEventListener("keyup", passwordCheck);
  emailInput.addEventListener("keyup", emailTest);
};

function emailTest(e) {
  const emailInput = e.target.value;
  checkmarkGreen(emailRegex, emailInput, emailCheck);
}

function testNumber(e) {
  const numInput = e.target.value;
  const carrierDetails = [[etisalatRegex, numInput, etisalatLogo], [mtnRegex, numInput, mtnLogo], [airtelRegex, numInput, airtelLogo], [gloRegex, numInput, gloLogo]]
  for (let i = 0; i < carrierDetails.length; i++) {
    let carrier = carrierDetails[i]
    if (phoneNumberCheck(...carrier)) {
      break
    };
  }
}

// Function to track password input and test each password parameter
function passwordCheck(e) {
  const passInput = e.target.value;
  testCharacters(strongPassLetters, boldLetter, passInput);
  testCharacters(strongPassNumbers, boldNumber, passInput);
  testCharacters(strongPassCharacters, boldSymbol, passInput);
  testCharacters(strongAll, boldAll, passInput);
  checkmarkGreen(passPassed, passInput, passCheck);
}

// function to check if certain parameters have been met in the password validation and style.
function testCharacters(x, name, z) {
  if (x.test(z)) {
    passwordStyleChange(name, "green", "line-through")
  } else {
    passwordStyleChange(name, "black", "none")
  }
}


// function that hosts the style to change into once parameter is met
function passwordStyleChange(name, color, style) {
  name.style.color = color;
  name.style.textDecoration = style;
}


function phoneNumberCheck(regEx, inputValue, logoName) {
  if (regEx.test(inputValue)) {
    carrierLogo.innerHTML = logoName;
    return true
  } else {
    carrierLogo.innerHTML = "";
    return false
  }
}


function checkmarkGreen(regexName, input, idName) {
  if (regexName.test(input)) {
    idName.style.display = "block"
  } else {
    idName.style.display = "none"
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //