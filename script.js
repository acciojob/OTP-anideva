const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

  input.addEventListener("keydown", (e) => {

    // Forward typing (numbers only)
    if (e.key >= "0" && e.key <= "9") {

      // Clear current value first
      input.value = "";

      // Small timeout ensures value is set before moving focus
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    }

    // Backspace logic
    if (e.key === "Backspace") {

      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    }

  });

});
