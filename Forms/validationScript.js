    // JavaScript code for form validation
	// Prevent form from submitting

      var inputValue = document.getElementById("inputField").value
      var submit = document.getElementById("submit")
      submit.addEventListener("submit", function() {
        let regex = /^[a-zA-Z0-9]*$/
        if (!regex.test(inputValue)) {
          alert("Invalid format- letters and numbers only please!")
          event.preventDefault();
        }

      })
