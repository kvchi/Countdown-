const startBtn = document.getElementById("startBtn");
 const userInput = document.getElementById("userInput")
 const counter = document.getElementById("counter");

 let timerId = null;

function startCountdown() {
  const raw = userInput.value.trim();
  const countStart = Number(raw);

  if (!raw || isNaN(countStart) || countStart <= 0) {
    alert("Invalid input. Please enter a positive number.");
    return;
  }
  if (timerId) clearInterval(timerId);

  let count = countStart;
  counter.textContent = count;

timerId = setInterval(() => {
  count--;
counter.textContent = count;

 counter.classList.add('animate');
setTimeout(() => counter.classList.remove('animate'), 150);

if (count === 0) {
  clearInterval(timerId);
  alert("Times up!");
}
}, 1000);

userInput.value = "";
  }
 startBtn.addEventListener("click", startCountdown);


