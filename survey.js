const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable 😄: `, (answer) => {
  console.log(`Your name is: ${answer}`);
  
  rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Liked activity: ${answer}`);

    rl.question(`What do you listen to while doing that? `, (answer) => {
      console.log(`I listen to: ${answer}`);

      rl.question(`Which meal is your favourite? (e.g: dinner, brunch, etc.) `, (answer) => {
        console.log(`Favourite meal: ${answer}`);

        rl.question(`What's your favourite thing to eat for the meal? `, (answer) => {
          console.log(`Favourite thing to eat: ${answer}`);

          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            console.log(`Favourite sport: ${answer}`);

            rl.question(`what is your superpower? (In a few words, tell us what you are amazing at!) `, (answer) => {
              console.log(`Superpower: ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

