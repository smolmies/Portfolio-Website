const email = document.querySelector(".email");
const emailContainer = document.querySelector(".email-container");


 function showEmail(){
    if(emailContainer.classList.contains("view-email")){
        emailContainer.classList.remove("view-email");
    } else {
        emailContainer.classList.add("view-email");
    }
};