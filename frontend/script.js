function markAttendance(){

let uid = document.getElementById("uid").value

if(uid === ""){
document.getElementById("result").innerText = "Please enter RFID UID"
return
}

let time = new Date().toLocaleTimeString()

document.getElementById("result").innerText =
"Attendance Marked for UID: " + uid + " at " + time

}