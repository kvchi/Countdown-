const startBtn = document.getElementById("startBtn");
 const userInput = document.getElementById("userInput")
 const counter = document.getElementById("counter");

 startBtn.addEventListener("click", () => {
   let count = Number(userInput.value)
   counter.textContent = count

   counter.style.position = "absolute";
 counter.style.top = "50%";
 counter.style.left = "50%";
 counter.style.transform = "translate(-50%, -50%)";
 counter.style.fontSize = "50px";
 counter.style.color = "black";
 counter.style.zIndex = "1";
 counter.style.fontWeight = "bold";
 counter.style.textAlign = "center";



   const timer = setInterval(() => {
     count--;
     if(count === 0) {
       clearInterval(timer)
     alert("times up")
      
     }
     counter.textContent = count; 
    
   }, 1000)

   userInput = document.getElementById("userInput").value = ""

 })