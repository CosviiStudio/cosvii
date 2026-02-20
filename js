function login() {
 const pass =
document.getElementById("pass").value;
 const ACCESS_KEY = "your-secret-key";
if (pass === ACCESS_KEY) {
 localStorage.setItem("auth","true");
  window.location.href = "private/dashboard.html";
  } else {
    alert("Access denied");
    }
   }
