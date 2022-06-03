function showThankYou(event) {
  event.preventDefault();
  let display = document.querySelector("#main-display");
  display.innerHTML = `
    <div class="thank-you-display">

  <img src="images/illustration-thank-you.svg" alt="Thank you image">
  <div class="displayed-score-message">You selected <span id="selected-rating-score">4</span> out of 5</div> 

  <h2>Thank you!</h2>

  <p class="thank-you-message">We appreciate you taking the time to give a rating.<br /> If you ever need more support, 
  don’t hesitate to <br /> get in touch!</p>
</div>
`;
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", showThankYou);

let ratingButtons = document.querySelectorAll(#)
