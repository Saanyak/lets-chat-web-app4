var firebaseConfig = {
  apiKey: "AIzaSyCsdt_3tRRRdOPL3Af-eS3PgpGvaQC2BYI",
  authDomain: "lets-chat-web-app-4a2da.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-4a2da-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-4a2da",
  storageBucket: "lets-chat-web-app-4a2da.appspot.com",
  messagingSenderId: "723838462056",
  appId: "1:723838462056:web:02834a03531a9d7ac033dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_room() {
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
  });
  localStorage.setItem("roomname",room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
    console.log("Room Names - " + Room_names);
    var row = "<div class='room_name' id=" + Room_names + " onclick='RederectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML = row;
  //End code
});});}
getData();

function RederectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}