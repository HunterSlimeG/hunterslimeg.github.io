/*let userData = {"user": "Admin", "pass": "Test123"};
function sign() {
    let sl = document.getElementById("admin");
    let sign = sessionStorage.getItem("signed");
    if (sign==="true") {
        sl.innerHTML = "Signed In";
    } else {
        sl.innerHTML = "Admin Sign In";
    }
}*/
function dark() {
    let button = document.getElementById("d/l");
    let theme = document.getElementById("style");
    let mode = localStorage.mode;
    if (mode==="dark") {
        theme.href = "../CSS/dark.css";
        button.innerHTML = "Light Mode";
    } else {
        theme.href = "../CSS/light.css";
        button.innerHTML = "Dark Mode";
    }
}
function darkbutton() {
    let button = document.getElementById("d/l");
    let theme = document.getElementById("style");
    let mode = localStorage.mode;
    if (mode==="dark") {
        localStorage.mode = "light";
        button.innerHTML = "Dark Mode";
    } else {
        localStorage.mode = "dark";
        button.innerHTML = "Light Mode";
    }
    dark();
}
function load() {
    //sign();
    dark();
}
