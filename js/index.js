var stopvar = 1;
var ccounter = 0;
var cpuarr = [];
var usrarr = [];
var tmp = 0;
var clightup;
var hc = 1;
var time = document.getElementById("counter");
time.innerHTML = "00";
var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");



function checkwin() {
  
    for(x=0;x<usrarr.length;x++) {
      if(usrarr[x] != cpuarr[x]) {
        if(hc == -1) {
        alert("You lost!");
        stopsimon();
        return;
        } else {
          usrarr = [];
          alert("Wrong! Try again!");
          stopvar = 1;
          var i = 0;
          (function loop(){
  if (i++ == cpuarr.length) {
    stopvar = 0;
  return;}
  setTimeout(function(){
    flashBtn(cpuarr[i-1]);
    loop();
  }, 1000);
})();
        }
      }
    }
  if(ccounter == usrarr.length) {
    if(ccounter == 20) {
      alert("You won!");
      stopsimon();
      return;
    }
    usrarr = [];
    stopvar = 1;
    setCPU();
  }
}

function usrbtn(num) {
  if(stopvar == 0) {
  switch(num) {
    case 1:
      audio1.play();
      clightup = document.getElementById("blue");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      usrarr.push(1);
      break;
      
      case 2:
      audio2.play();
      clightup = document.getElementById("red");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      usrarr.push(2);
      break;
      
      case 3:
      audio3.play();
      clightup = document.getElementById("green");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      usrarr.push(3);
      break;
      
      case 4:
      audio4.play();
      clightup = document.getElementById("yellow");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      usrarr.push(4);
      break;      
  }
  checkwin();
  }
}

function setCPU() {
  var i = 0;
  ccounter = ccounter + 1;
    if(ccounter > 9) {
      time.innerHTML = ccounter;
    } else {
      time.innerHTML = "0" + ccounter;
    }
  
(function loop(){
  if (i++ == cpuarr.length) {
    tmp = 0;
    tmp = Math.floor((Math.random() * 4) + 1);
    cpuarr.push(tmp);
    stopvar = 0;
    setTimeout(function() {
      flashBtn(tmp);
    },1000);
  return;}
  setTimeout(function(){
    flashBtn(cpuarr[i-1]);
    loop();
  }, 1000);
})();
}

function flashBtn(num) {
  switch(num) {
    case 1:
      audio1.play();
      clightup = document.getElementById("blue");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      break;
      
      case 2:
      audio2.play();
      clightup = document.getElementById("red");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      break;
      
      case 3:
      audio3.play();
      clightup = document.getElementById("green");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      break;
      
      case 4:
      audio4.play();
      clightup = document.getElementById("yellow");
      clightup.style.opacity = 0.1;
      setTimeout(function() {
        clightup.style.opacity = 1;
      },1000);
      break;
  }
}

function sethc() {
  //set strict mode
  hc = hc * -1;
  
  if(hc == -1) {
   var hcb = document.getElementById("hcBtn");
  hcb.style.fill = "green";
    alert("Activated Strict mode!");
  } else {
    var hcb = document.getElementById("hcBtn");
  hcb.style.fill = "red";
    alert("Deactivated Strict mode!");
  }
}

function startsimon() {
  ccounter = 0;
  time.innerHTML = "01";
  
  setCPU();
}

function stopsimon() {
stopvar = 1;
ccounter = 0;
tmp = 0;
  hc = 1;
  var hcb = document.getElementById("hcBtn");
  hcb.style.fill = "red";
cpuarr = [];
usrarr = [];
time.innerHTML = "00";
stopvar = 1;
ccounter = 0;
cpuarr = [];
usrarr = [];
tmp = 0;
time = document.getElementById("counter");
time.innerHTML = "00";
}














$("#blue").hover(function(){
  if(stopvar == 0) {
    $(this).css("opacity", "0.5");
    }}, function(){
    $(this).css("opacity", "1");
});


$("#red").hover(function(){
  if(stopvar == 0) {
    $(this).css("opacity", "0.5");
    }}, function(){
    $(this).css("opacity", "1");
});

$("#green").hover(function(){
  if(stopvar == 0) {
    $(this).css("opacity", "0.5");
    }}, function(){
    $(this).css("opacity", "1");
});

$("#yellow").hover(function(){
  if(stopvar == 0) {
    $(this).css("opacity", "0.5");
    }}, function(){
    $(this).css("opacity", "1");
});

$("#startb").hover(function(){
    $(this).css("opacity", "0.5");
    }, function(){
    $(this).css("opacity", "1");
});

$("#resetb").hover(function(){
    $(this).css("opacity", "0.5");
    }, function(){
    $(this).css("opacity", "1");
});

$("#hcBtn").hover(function(){
    $(this).css("opacity", "0.5");
    }, function(){
    $(this).css("opacity", "1");
});