
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBE1cCthPm9B7pXO9FfRzkVQZ6WyWyaI4w",
      authDomain: "kwitter-32fb7.firebaseapp.com",
      databaseURL: "https://kwitter-32fb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-32fb7",
      storageBucket: "kwitter-32fb7.appspot.com",
      messagingSenderId: "700836887153",
      appId: "1:700836887153:web:1500cc2c869854f7fb39d0"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

      function addroom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

 function redirectToRoomName(name){
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
