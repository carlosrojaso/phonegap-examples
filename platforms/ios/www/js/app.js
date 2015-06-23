//document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    //console.log("El dispositivo esta listo.");
    //alert("El dispositivo esta listo.");
    document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBackKeyDown, false);
    window.open = cordova.InAppBrowser.open;
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');

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
function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

function onResume() {
        // Handle the resume event
        //alert("El dispositivo ejecuto onresume().");
    }

function onBackKeyDown() {
            // Handle the resume event
            //alert("El usuario ejecuto la tecla de regresar.");
        }
