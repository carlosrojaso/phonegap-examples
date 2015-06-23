//document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    //console.log("El dispositivo esta listo.");
    alert("El dispositivo esta listo.");
    document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

function onResume() {
        // Handle the resume event
        alert("El dispositivo ejecuto onresume().");
    }

function onBackKeyDown() {
            // Handle the resume event
            alert("El usuario ejecuto la tecla de regresar.");
        }
