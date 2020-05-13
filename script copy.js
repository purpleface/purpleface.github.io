function updateClock() {
    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    if (minutes < 10) {
        time = hours + ':' + "0" + minutes;
    } else {
        time = hours + ':' + minutes;
    }
    if (hours < 10) {
        time = "0" + time;
    }
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);