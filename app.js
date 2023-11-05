// app.js
// setups, punchlines, and taglines created with ChatGPT

const setups = [
    "Why was the JavaScript developer sad?",
    "How do you comfort a JavaScript bug?",
    "Why do programmers prefer iOS development?",
    "What's a programmer's favorite place in France?",
    "Why did the developer go broke?",
    "How do you comfort a JavaScript bug?",
    "What's a programmer's favorite snack?",
    "Why was the function calling itself?",
    "Why do programmers always mix up Christmas and Halloween?",
    "Why was the math book sad?"
  ];
  
  const punchlines = [
    "Because he didn't 'null' his emotions.",
    "You console it.",
    "Because it's 'app'-ealing.",
    "In 'the loop' of course!",
    "Because he used up all his cache.",
    "You give it a 'bit' of love.",
    "Code-chips!",
    "Because it had no 'base case.'",
    "Because Oct 31 == Dec 25.",
    "Because it had too many problems."
  ];

  const taglines = [
    "The 'function' of life!",
    "Coding for the win!",
    "Tech support be like...",
    "Don't 'bug' out!",
    "Programmer's delight!"
  ];

  const generateJoke = () => {
    let indexRand = Math.floor(Math.random() * punchlines.length)
    if (Math.floor(Math.random()) === 0) {
        let taglineRand =  Math.floor(Math.random() * taglines.length)
        return setups[indexRand] + " " + punchlines[indexRand] + " " + taglines[taglineRand]
    } else {
        return setups[indexRand] + " " + punchlines[indexRand]
    }
  }

  console.log(generateJoke());