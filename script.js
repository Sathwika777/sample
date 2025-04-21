function validateLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    if (user === "" || pass === "") {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Please enter both username and password.";
    } else if (user === "admin" && pass === "password123") {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Login successful!";
    } else {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Invalid credentials!";
    }
  }
  