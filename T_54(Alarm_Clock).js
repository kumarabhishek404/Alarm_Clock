console.log("Tut 54");

//**********************************************Current Time*******************************
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    M = AmPm(hour);
    hour = hours24(hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    let clock = document.getElementById("clock");
    clock.innerHTML = `<div class="border border-dark mx-2 p-2">${hour}</div>
                       <div class="border border-dark mx-2 p-2">${min}</div>
                       <div class="border border-dark mx-2 p-2">${sec}</div>
                       <div class="border border-dark mx-2 p-2">${M}</div>`
    // clock.innerHTML = `${hour} : ${min} : ${sec} ${M}`
    var t = setTimeout(() => {
        currentTime()
    }, 1000);
}

// Function for update every second
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

// Function to change 24hour to 12hour system
function hours24(hour) {
    if (hour < 13) {
        return hour;
    }
    else {
        return hour - 12;
    }
}

// function to show AM PM 
function AmPm(hour) {
    if (hour < 13) {
        var M = "AM"
        return M;
    }
    else {
        var M = "PM"
        return M;
    }
}
currentTime()


// **************************************Setting the Alarm****************************************** 

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// Function to play alarm rington
function ringBell() {
    alert("Bell is ringing")
    audio.play();
}


// // Function to set alarm 
// function setAlarm(e) {
//     e.preventDefault();
//     var alarm = document.getElementById('alarm');
//     alarmDate = new Date(alarm.value);

//     console.log(`Setting Alarm for... ${alarmDate}`);

//     now = new Date();

//     let timeToAlarm = alarmDate - now;
//     console.log(timeToAlarm);
//     if(timeToAlarm>=0){
//         setTimeout(() => {
//             console.log("Ringing now")
//             ringBell();
//         }, timeToAlarm);
//         // setTimeout(() => {
//         //     console.log("Ringing");
//         //     ringBell();
//         // }, timeToAlarm);
//         // let success = document.getElementById("success");
//         // let fail = document.getElementById("fail");
//         // success.classList.add("success");
//         // $("success").show();
//         // $("fail").hide();
//     }
//     else {
//         console.log("Sorry! The time you entered is in past and past will not repeat.");
//             // let fail = document.getElementById("fail");
//             // fail.classList.add("fail");
//             // $("fail").show();
//             // $("success").hide();
//     }
// }


// console.log("This is tutorial 54");
// const alarmSubmit = document.getElementById('alarmSubmit');

// // Add an event listener to the submit button
// alarmSubmit.addEventListener('click', setAlarm);

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// // function to play the alarm ring tone
// function ringBell() {
//     audio.play();
// }

// This function will run whenever alarm is set from the UI


show = (type, message) => {
    let msg = document.getElementById('message');
    let boldtext;
    if (type === 'success') {
        boldtext = 'Success!';
    }
    else {
        boldtext = 'Error!'
    }
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show success" role="alert">
                            <strong>${boldtext}</strong> ${message}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
    setTimeout(function () {
        msg.innerHTML = "";
    }, 2000);
}



function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        show("success", "You have set alarm Successfully")
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
    else {
        show("danger", "You have not set Alarm Successfully")
    }
}
