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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : message,
          like : 0

    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}