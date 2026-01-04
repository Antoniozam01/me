const data = {
    name: "Antonio Zamora",
    description: "💛⚛️Junior Developer exploring the world of JavaScript and React Native. 📱Passionate about mobile development.",
    email: "antoniozam01@icloud.com",
    phone: "7712401987"
}

function loadUserProfile(data){
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userDescription").textContent = data.description;
    document.getElementById("userEmail").textContent = data.email;
    document.getElementById("userPhone").textContent = data.phone;

}

document.addEventListener("DOMContentLoaded", function(){
    loadUserProfile(data);
})
