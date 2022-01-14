const ffxiv = document.querySelector("#ffxiv");
const profileMe = document.querySelector("#profile-me");

function switchProfilePic (){
    profileMe.setAttribute('src', './resources/images/profile-wol.jpg' );
}

function addProfileEventListener(){
    ffxiv.addEventListener('click', switchProfilePic);
};

addProfileEventListener();