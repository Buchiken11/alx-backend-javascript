import { describe, expect, it, test } from '@jest/globals';

const readline = require('readline');

describe('readline Test', () => {
  let read;

  it('prompts for name and outputs it', () => {
    expect.assertions(1); // Expect one assertion to be called

    const input = 'John\n'; // Simulated input
    const output = [];

    // Override process.stdin for testing
    process.stdin.push(input);
    process.stdout.write = (data) => output.push(data.toString());

    read = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      read.question('Welcome to Holberton School, what is your name?\n', (name) => {
        console.log(`Your name is: ${name}`);

        expect(name).toBe('John');

        read.close();
        resolve(); // Resolve the promise
      });
    });
  });
});
