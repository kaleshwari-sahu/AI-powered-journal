
    // Switch between Login and Registration forms
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loginForm').style.display = "none";
        document.getElementById('registerForm').style.display = "block";
      });
  
      document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('registerForm').style.display = "none";
        document.getElementById('loginForm').style.display = "block";
      });
  
      // Registration Handler
      document.getElementById('registerButton').addEventListener('click', function() {
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
  
        if (email === "" || password === "") {
          alert("Please fill in all fields.");
          return;
        }
  
        // Save the user credentials in localStorage (for demo purposes)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        alert("Registration successful! Please log in.");
        
        // Switch to login form
        document.getElementById('registerForm').style.display = "none";
        document.getElementById('loginForm').style.display = "block";
      });
  
      // Login Handler
      document.getElementById('loginButton').addEventListener('click', function() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
  
        if (email === storedEmail && password === storedPassword) {
          alert("Login successful!");
          window.location.href = "mainpage.html";
          // Redirect to main page
        } else {
          alert("Invalid email or password.");
        }
      });
      