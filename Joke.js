let joke = [
  "Why did the tomato turn red? <br> Because it saw the salad dressing! 😂",
  "Why did the scarecrow win an award? <br> Because he was outstanding in his field! 😂",
  "Why don’t scientists trust atoms? <br> Because they make up everything! 😂",
  "Why did the chicken cross the road? <br> Because he was outstanding in his field! 😂",
  "What do you call a fake noodle? An impasta! 😂",
  "Why did the coffee file a police report? It got mugged! 😂",
  "What do you call a belt made out of watches? A waist of time! 😂",
  "Why did the math book look sad? Because it had too many problems! 😂",
  "What do you call a bear with no teeth? A gummy bear! 😂",
  "Why did the chicken cross the playground? To get to the other slide! 😂",
  "What do you call a snowman with a six-pack? An abdominal snowman! 😂",
  "Why don’t skeletons fight each other? They don’t have the guts! 😂",
  "What do you call a group of cows playing instruments? A moo-sical! 😂",
  "Why did the banana go to the doctor? Because it wasn’t peeling well! 😂",
  "What do you call a fake stone in Ireland? A shamrock! 😂",
  "Why did the cookie go to the doctor? Because it felt crummy! 😂",
  "What do you call an alligator in a vest? An investigator! 😂",
  "Why don’t oysters share their pearls? Because they’re shellfish! 😂",
  "What do you call a lazy kangaroo? A pouch potato! 😂",
  "Why did the frog call his insurance company? He had a jump in his car! 😂",
  "What do you call a fish wearing a bowtie? Sofishticated! 😂",
  "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
  "Why did the two Java methods get a divorce? In Java, Because they had constant arguments. 😂",
  "Why did the edge server go bankrupt? Because it ran out of cache. 😂",
  "What do you call a cow with no legs? A cow! 😂",
  "How many developers does it take to screw in a lightbulb?  It’s a hardware problem. 😂",
  "Why did the private classes break up? Because they never saw each other. 😂",
  "Why did the Java developer teach his young kids about single quotes? Because they build character. 😂",
  "Why do programmers confuse Christmas with Halloween? Because OCT 31 is the same as DEC 25. 😂",
  "Why do most Java programmers wear glasses? Because they don’t see sharp. 😂",
  "What’s the first step in understanding recursion? To understand recursion, you must first understand recursion. 😂",
  "Why did the Java developer quit his job? Because he didn’t get arrays. 😂",
  "Why do submarines all run Linux? you can’t open Windows under water. 😂",
  "What happens when developers ask a silly question? They get a silly ANSI. 😂",
  
];
  // Time
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning 🌅";

  }
  else if (hour < 18) {
    greeting = "Good Afternoon ☀️";
  }
  else {
    greeting = "Good Evening 🌙";
  }
  document.getElementById("Greeting").innerHTML = `${greeting}`;


document.getElementById("joke").addEventListener("click", myFunction);

function myFunction() {
  let after = " <br><br> I hope that made you laugh. Let me know if you want to hear more jokes. 😊";
  let before = "Sure! Here’s a joke for you: 😅 <br><br>";
  let random = Math.random() * joke.length;
  random = Math.floor(random);
  let a = joke[random];
  
  
  document.getElementById("final2").innerHTML = `<h3> ${before} ${a} ${after}</h3>`;
  document.getElementById("joke").innerHTML = "Once More !!";
}
 
