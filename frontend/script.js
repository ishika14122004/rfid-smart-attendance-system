let attendanceData = [];

function markAttendance() {

let uid = document.getElementById("uid").value;

if(uid === ""){
document.getElementById("result").innerText = "Please enter RFID UID";
return;
}

let time = new Date().toLocaleTimeString();

let record = {
uid: uid,
time: time,
status: "Present"
};

attendanceData.push(record);

document.getElementById("result").innerText =
"Attendance marked for UID: " + uid;

updateDashboard();

document.getElementById("uid").value = "";
}

function updateDashboard(){

let table = document.getElementById("attendanceTable");

table.innerHTML = `
<tr>
<th>Student UID</th>
<th>Time</th>
<th>Status</th>
</tr>
`;

attendanceData.forEach(record => {

table.innerHTML += `
<tr>
<td>${record.uid}</td>
<td>${record.time}</td>
<td>${record.status}</td>
</tr>
`;

});

}