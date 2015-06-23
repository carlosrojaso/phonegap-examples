//document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    console.log("El dispositivo esta listo.");
}
function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
