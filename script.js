const email = document.querySelector("#email-image");
const emailContainer = document.querySelector("#container-display");


 function showEmail(){
    if(emailContainer.classList.contains("view-email")){
        emailContainer.classList.remove("view-email");
    } else {
        emailContainer.classList.add("view-email");
    }
};

function addEmailEventListener(){
    email.addEventListener('click', showEmail);
};

addEmailEventListener();