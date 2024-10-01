console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', function (name) {
    process.stdout.write(`Your name is: ${input}`);
    
    const name = input.toString().trim();
    console.log("This important software is now closing");
    process.exit();
})