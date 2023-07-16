let userid = document.getElementById("Login").addEventListener("click", check);
function check(username, userpassword) {
  username = "Deepak@gmail.com";
  userpassword = "Deepak@123";
  let inputmail = document.getElementById("usermail").value;
  let inputpassword = document.getElementById("userpass").value;
  console.log(inputmail);
  console.log(inputpassword);
  if (inputmail == username && inputpassword == userpassword) {
    document.getElementById("status").innerText = "logged in successfully";
    //   document.write(`<h2>${"logged in successfully"}</h2>`);
  } else {
    document.getElementById("status").innerText = "login failed";
    document.getElementById("usermail").innerText = " ";
    document.getElementById("userpass").innerText = " ";
  }
}
let Resetfield = document
  .getElementById("Reset")
  .addEventListener("click", Resetfun);
function Resetfun() {
  document.getElementById("usermail").value = "";
  document.getElementById("userpass").value = "";
}
