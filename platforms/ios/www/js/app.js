//document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    //console.log("El dispositivo esta listo.");
    document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBackKeyDown, false);


    /*
    var loginButton = $('#login-with-facebook');

    loginButton.on('click', function(e) {
    	e.preventDefault();

    	FB.login(function(response) {
    		if (response.status === 'connected') {
    			alert('logged in');
    		} else {
    			alert('not logged in');
    		}
    	},{ scope: "email" });
    }
    */

}

function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

function onResume() {
        // Handle the resume event
    }

function onBackKeyDown() {
            // Handle the resume event
        }

function createUser(user){
  var ref = new Firebase("https://phonegaptemplate.firebaseio.com/");
    ref.createUser({
      email: user.email,
      password: user.password
    }, function(error, userData) {
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
}
