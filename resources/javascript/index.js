const ffxiv = document.querySelector("#ffxiv");
const profileMe = document.querySelector("#profile-me");

function switchProfilePic (){
    if(profileMe.getAttribute('src') === './resources/images/profile-me.jpg'){
        profileMe.setAttribute('src', './resources/images/profile-wol.jpg' );
        profileMe.setAttribute('alt', "A picture of my character in FF XIV");
    } else {
    profileMe.setAttribute('src', './resources/images/profile-me.jpg');
    profileMe.setAttribute('alt', "A picture of me");
}}

function addProfileEventListener(){
    ffxiv.addEventListener('click', switchProfilePic);
};

addProfileEventListener();