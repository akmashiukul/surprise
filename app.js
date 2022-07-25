console.log("Hello");
function no() {
  document.getElementById("body").innerHTML =
    "Thank you for everything 😞.তোমাকে আর জ্বালাবো না। ধন্যবাদ";
}
function yes() {
  let love_1 = document.getElementById("love-1");
  let love_2 = document.getElementById("love-2");
  let love_3 = document.getElementById("love-3");
  let love_4 = document.getElementById("love-4");
  love_1.style.animationName = "move-1";
  love_1.style.animationDuration = "2s";
  love_2.style.animationName = "move-2";
  love_2.style.animationDuration = "2s";
  love_3.style.animationName = "move-3";
  love_3.style.animationDuration = "2s";
  love_4.style.animationName = "move-4";
  love_4.style.animationDuration = "2s";

  setTimeout(() => {
    document.getElementById("body").innerHTML =
      "<h2 style=' color: deeppink;margin-top: 99px;margin-left: 46px;font-size: 30px;' >I love you princess 😘। তোমাকে এভাবে জ্বালাতে থাকবো সহ্য করতে পারবে?</h2>";
  }, 4000);
}

let wlc = document.getElementById("wlc1");
console.log(wlc);
// let a = 1;
// setInterval(() => {
//   if (a % 2 == 0) {
//     wlc.style.color = "yellow";
//   } else {
//     wlc.style.color = "lightpink";
//   }
//   a++;
// }, 500);

let love = document.getElementById("love");
console.log(love);
// love.style.display = "none";
