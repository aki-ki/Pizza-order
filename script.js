// Inputs & Inner HTML

// .innerHTML command:
//      1. Gets the contents of an HTML element. Eg. <p>click <a> here </a> </p>
// The innerHTML of the paragraph is Click <a> here </a>
// The innerHTML of the anchor <a> is: here
//      2. Sets the content of an HTML element.
// value command: retrieves the content of an <input> element.
//  *IMPORTANT* value command should ALWAYS be used within a function.

document.getElementById("order-btn").addEventListener("click", getOrder);
function getOrder() {
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;

  // Processing:
  let output =
    "Your " +
    size +
    " pizza with " +
    topping1 +
    " and " +
    topping2 +
    " will be ready in 20 minutes.";

  // Output: Display output in the "Your Order" section of the website.
  document.getElementById("order-output").innerHTML = output;
}
