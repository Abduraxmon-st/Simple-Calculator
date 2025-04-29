const display = document.querySelector(".display")

function appendToDisplay(input) {
   display.value += input;
}
function deletE() {
   display.value = display.value.slice(0, -1)
}
function clearAll() {
   display.value = "";
}

function result() {
   try {
      display.value = eval(display.value)
   } catch (error) {
      display.value = "error"
   }
}
