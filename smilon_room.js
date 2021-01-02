var firebaseConfig = {
  apiKey: "AIzaSyDAvjneDYfrUdtnAJ5PPXd-Rn6gXE-7FlY",
  authDomain: "kwitter-class-project.firebaseapp.com",
  databaseURL: "https://kwitter-class-project.firebaseio.com",
  projectId: "kwitter-class-project",
  storageBucket: "kwitter-class-project.appspot.com",
  messagingSenderId: "146458255835",
  appId: "1:146458255835:web:dcaebd5aac0444156b47fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function logout(){
    localStorage.removeItem("Username");
    window.location="smilon.html";
}
function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room"
    });
    localStorage.setItem("Room name", room_name);
    window.location="smilon_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log(Room_names);
rooms="<div class='roomname' id="+Room_names+" onclick='gotochat(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("trending_rooms").innerHTML+=rooms;
//End code
});});}
getData();
function gotothisroom(name){
localStorage.setItem("Room name",name);
window.location="smilon_page.html";
}