document.getElementById("registerForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const gender = document.querySelector('input[name="gender"]:checked');

      // Clear previous errors
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("mobileError").textContent = "";
      document.getElementById("genderError").textContent = "";
      document.getElementById("passwordError").textContent = "";
      document.getElementById("confirmError").textContent = "";
      document.getElementById("successMsg").classList.add("d-none");

      let isValid = true;

      // Validate Name
      if (name.length < 2) {
        document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
      }

      // Validate Mobile
      if (!/^[1-9][0-9]{9}$/.test(mobile)) {
        document.getElementById("mobileError").textContent = "Enter valid 10-digit mobile number not starting with 0.";
        isValid = false;
      }

      // Validate Gender
      if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
      }

      // Validate Password
      let passErrors = [];
      if (password.length < 6) passErrors.push("Password must be at least 6 characters.");
      if (!/[A-Z]/.test(password)) passErrors.push("Password must contain at least one uppercase letter.");
      if (!/[0-9]/.test(password)) passErrors.push("Password must contain any numbers.");
      if (!/[@,$,*,_,~,&,#,$,{},[],(),+,=,<,>,\,%]/.test(password)) passErrors.push("Password must contain any special character.");
      if (passErrors.length > 0) {
        document.getElementById("passwordError").innerHTML = passErrors.join("<br>");
        isValid = false;
      }

      // Confirm Password
      if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Passwords do not match.";
        isValid = false;
      }

      // Final check
      if (isValid) {
        document.getElementById("successMsg").classList.remove("d-none");
        document.getElementById("registerForm").reset();
      }
    });