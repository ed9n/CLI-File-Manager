import * as readline from 'node:readline';

export const exitApp = (name) => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        if (input == '.exit') {
            console.log(`Thank you for using File Manager! ${name}`);
            rl.close();
        };
    });

    rl.on('SIGINT', () => {
        console.log(`Thank you for using File Manager! ${name}`);
        rl.close();
    });
};