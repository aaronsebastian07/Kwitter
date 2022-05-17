var firebaseConfig = {
  apiKey: "AIzaSyCCD7IGsE3M2y0vTh61EkrYL6Upc6h2JYA",
  authDomain: "clep-56e38.firebaseapp.com",
  databaseURL: "https://clep-56e38-default-rtdb.firebaseio.com",
  projectId: "clep-56e38",
  storageBucket: "clep-56e38.appspot.com",
  messagingSenderId: "972928602148",
  appId: "1:972928602148:web:082973a0b60781eb9348b1",
  measurementId: "G-E28CFFLCPQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
