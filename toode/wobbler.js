document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM for wobbler.html has loaded");

  // Add links to product cards in shop
  const submitbutton = document.getElementById("submit-button");
  submitbutton.addEventListener("click", (event) => {
    event.preventDefault();
    const response = validateFormFields();
    if (response) {
      console.log("Response ok");
    } else console.log("Response NOT OK");
  });
});

function validateFormFields() {
  // nimi
  // email
  // telefon
  // aadress
  // Kogus
  // Makseviis
  // Kohaletoimetamine
}
