import readline from 'readline';
const rd = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export function give_input(question) {
    rd.question(`Welcome to Holberton School, what is your name?\n`, (name) => {
        console.log(`Your name is: ${name}`);
            rd.close();
    });
}
rd.on('close', () => {
    console.log('This important software is now closing');

});

give_input();
