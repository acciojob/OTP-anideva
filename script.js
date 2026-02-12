const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  // Forward typing
  input.addEventListener("input", () => {

    // Allow only digits
    input.value = input.value.replace(/[^0-9]/g, "");

    // Move forward if value entered
    if (input.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

  });

  // Backspace logic
  input.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      // If current box is empty, move back
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    }

  });

});
