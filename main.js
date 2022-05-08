// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// I'm gonna need to utilize the following to get this done:
// DOMContentLoaded, event listeners "click", .then() .catch()
// Manipulate the DOM with document.
// Grab elements with querySelector, tags, class, id's

const modalMessage = document.getElementById("modal");
console.log(modalMessage);
modalMessage.classList.add("hidden");


document.addEventListener("click", function mimicServerCall() {

  const heartButton = document.getElementsByClassName("like-glyph")
  for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener('click', function () {
      mimicServerCall()
        .then(function (e) {
          if (heartButton[i].textContent === EMPTY_HEART) {
            console.log("Gimme some Red, Come On With It")
            heartButton[i].textContent = FULL_HEART
            heartButton[i].classList.add('activated-heart')
          }
          else {
            console.log("Drain The Swamp")
            heartButton[i].textContent = EMPTY_HEART
            heartButton[i].classList.remove('activated-heart')
          }
        })
        .catch(function (error) {
          document.querySelector("#modal").classList.add("hidden")
          document.querySelector("modal-message").innerContent("error")
          setTimeout(mimicServer(), 3000)
        })
    }
    )
    //------------------------------------------------------------------------------
    // Don't change the code below: this function mocks the server response
    //------------------------------------------------------------------------------

    function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          let isRandomFailure = Math.random() < .2
          if (isRandomFailure) {
            reject("Random server error. Try again.");
          } else {
            resolve("Pretend remote server notified of action!");
          }
        }, 300);
      });

        }}})