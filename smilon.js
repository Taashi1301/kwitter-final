function adduser(){
    username=document.getElementById("logininput").value;
    localStorage.setItem("Username", username);
    window.location="smilon_room.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyDEiO07zF5EbM1FicMJ1_d_pUUBduyp7fY",
    authDomain: "smilon-c-93-project.firebaseapp.com",
    databaseURL: "https://smilon-c-93-project.firebaseio.com",
    projectId: "smilon-c-93-project",
    storageBucket: "smilon-c-93-project.appspot.com",
    messagingSenderId: "994460519353",
    appId: "1:994460519353:web:57c2b5e7e377e1651a0468"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);