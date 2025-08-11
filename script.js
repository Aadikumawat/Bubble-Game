var ourtime = 60;
var newhit = 0;
var score = 0;

function resethit() {
  newhit = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").textContent = newhit;
}

function startGame() {
  var data = "";

  for (var i = 1; i <= 75; i++) {
    var num = Math.floor(Math.random() * 10);
    data += `<div class="bubble">${num}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = data;
}

function timer() {
  var changetime = setInterval(function () {
    if (ourtime > 0) {
      ourtime--;
      document.querySelector("#timevalue").textContent = ourtime;
    } else {
      clearInterval(changetime);
      document.querySelector("#pbtm").innerHTML = "Game Over!";
    }
  }, 1000);
}

function checkscore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

function checkhit() {
  document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var checkclick = Number(dets.target.textContent);
    console.log(checkclick);
    console.log(newhit);
    if (newhit === checkclick) {
      checkscore();
      resethit();
      startGame();
    } else {
      alert("Wrong Hit! Try Again!");
    }
  });
}



resethit();
timer();
startGame();
checkhit();
