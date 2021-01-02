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
  
  user_name=localStorage.getItem("Username");
  room_name=localStorage.getItem("Room name");

function send(){
  message=document.getElementById("message_input").value;
  firebase.database().ref(room_name).push({
        Name:user_name,
        Message:message,
        Likes:0
  });
}  
function logout(){
  localStorage.removeItem("Username");
  localStorage.removeItem("Room name");
  window.location="smilon.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("message_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message=message_data["Message"];
likes=message_data["Likes"];
name=message_data["Name"];
namefordiv="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
messagefordiv="<h4 class='message_h4'>"+message+"</h4>";
likebuttonfordiv="<button class='btn btn-info' id="+firebase_message_id+"value="+likes+"onclick='update(this.id)'>";
likefordiv="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+"</span></button>";
row=namefordiv+messagefordiv+likebuttonfordiv+likefordiv;
document.getElementById("message_div").innerHTML+=row;
//End code
  } });  }); }
getData();
function update(message_id){
  buttonid=message_id;
  like=document.getElementById(buttonid).value;
  updatedlikes=Number(like)+1;
  console.log(updatedlikes);
  firebase.database().ref(room_name).child(message_id).update({
        LIKES:updatedlikes
  });    
}