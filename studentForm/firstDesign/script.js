function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your login validation here (e.g., check against a database or hardcoded values)
    // For simplicity, let's assume a hardcoded username and password.
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
