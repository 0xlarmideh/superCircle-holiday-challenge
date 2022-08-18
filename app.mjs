// Variables to test for password valiadtion

const strongPassLetters = new RegExp("(?=.*[a-z]|[A-Z])"),
  strongPassNumbers = new RegExp("(?=.*[0-9])"),
  strongPassCharacters = new RegExp("(?=.*[!@#\$%\^&\*])"),
  passPassed = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  strongAll = new RegExp("(?=.{8,})"),
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  mtnRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1})))\d{7})$/g,
  etisalatRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([9]))|(([9])[0]([8]))|([8][1]([78]{1})))\d{7})$/g,
  airtelRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([2]))|(([7-8]{1})[0]([8]))|(([9]{1})[0]([17]{1}))|([8][1]([2]))|([7][0]([1])))\d{7})$/g,
  gloRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([57]{1}))|(([8][1][1])|([8][1][5])))\d{7})$/g,
  restrictedRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1})))\d{7})$/g,
  restrictedBeginning = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1}))))$/,
  passwordInput = document.querySelector("#password"),
  mtnRestrict = document.querySelector(".mtn-restrict"),
  phoneNoInput = document.querySelector("#phone-number"),
  mtnNumInput = document.querySelector("#mtn-num"),
  emailInput = document.querySelector("#email"),
  carrierLogo = document.querySelector(".carrier-logo"),
  emailCheck = document.querySelector("#email-check"),
  passCheck = document.querySelector("#pass-check"),
  boldAll = document.querySelector(".bold-all"),
  boldLetter = document.querySelector(".bold-letter"),
  boldNumber = document.querySelector(".bold-number"),
  boldSymbol = document.querySelector(".bold-symbol"),
  submitBtn = document.querySelector(".submit");

// NetworkProviders Logo Directories

const mtnLogo = '<img src="./carrier-logos/mtn-logo.jpeg" alt="MTN">',
  airtelLogo = '<img src="./carrier-logos/airtel-logo.jpeg" alt="AIRTEL">',
  gloLogo = '<img src="./carrier-logos/glo-logo.jpg" alt="GLO">',
  etisalatLogo = '<img src="./carrier-logos/9mobile-logo.png" alt="9MOBILE">';


// This function loads all event listeners and calls functions
function startApp() {
  phoneNoInput.addEventListener("keyup", testNumber);
  mtnNumInput.addEventListener("keyup", testMtnNumber);
  passwordInput.addEventListener("keyup", passwordCheck);
  emailInput.addEventListener("keyup", emailTest);
  submitBtn.addEventListener("click", clearInputs)
};

// function to test email validation
function emailTest(e) {
  const emailInput = e.target.value;
  checkmarkGreen(emailRegex, emailInput, emailCheck);
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

// function that hosts the style to change into once parameter is met
function passwordStyleChange(name, color, style) {
  name.style.color = color;
  name.style.textDecoration = style;
}

// function to place checkmark on validated fields
function checkmarkGreen(regexName, input, idName) {
  if (regexName.test(input)) {
    idName.style.display = "block"
  } else {
    idName.style.display = "none"
  }
}

// Check for network provider
function phoneNumberCheck(regEx, inputValue, logoName) {
  if (regEx.test(inputValue)) {
    carrierLogo.innerHTML = logoName;
    return true
  } else {
    carrierLogo.innerHTML = "";
    return false
  }
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

// Function to test if it's an MTN nuumber
function testMtnNumber(e) {
  const mtnNumberInput = e.target.value;
  if (restrictedRegex.test(mtnNumberInput)) {
    mtnRestrict.innerHTML = mtnLogo;
  }
  else {
    mtnRestrict.innerHTML = "Please input only MTN Number";
    mtnRestrict.style.width = "300px"
  }
}

// function to check if certain parameters have been met in the password validation and style.
function testCharacters(regex, idName, input) {
  if (regex.test(input)) {
    passwordStyleChange(idName, "green", "line-through")
  } else {
    passwordStyleChange(idName, "black", "none")
  }
}

// function to clear inputs
function clearInputs(e) {
  document.querySelector(".form-details").reset();
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //