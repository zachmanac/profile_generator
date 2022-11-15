const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  rl.question(`What's an activity you like doing? `, (answer2) => {
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      rl.question(`Which meal is your favourite: breakfast, lunch, or dinner? `, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          rl.question(`Which sport is your favourite? `, (answer6) => {
            rl.question(`What is your superpower? `, (answer7) => {

              console.log(`Thank for for your valuable feedback: ${answer}. Activity you like doing: ${answer2}. Music you listen to while doing ${answer2}: ${answer3}. ${answer4} is your favourite meal. ${answer5} is your favourite thing to eat for ${answer4}. Your favourite sport is ${answer6}. Your superpower is ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});