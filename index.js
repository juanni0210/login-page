let btn = document.querySelector(".submit-btn");
let loadingBar = document.querySelector(".loader");
let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");
let errorMsg = document.querySelector(".error");

loadingBar.style.display = "none";
errorMsg.style.display = "none";



function showLoadingbar() {

    if (userName.value == "stackmaster" && passWord.value == "123456") {
        setTimeout(function(){window.location.replace('signout.html')},1000)
    } else {
        loadingBar.style.display = "block";
        btn.value = "";
        setTimeout(function showInfo() {
            loadingBar.style.display = "none";
            btn.value = "login";
            errorMsg.style.display = "block";
        },1000) 
    }
}

btn.addEventListener("click", showLoadingbar);




