import * as readline from 'node:readline';
import { sep } from 'path';
import { getPuth } from '../Puth/getPuth.js';


export const validateForStartsArg = (arg) => {

    const args = arg.slice(3, 4);

    if (args[0] !== undefined) {
        const argFirst = args[0].startsWith('--');

        if (!argFirst) {
            console.log('invalid argument');
        } else {
            return true;
        };

    } else {
        console.log('invalid argument');
    };
};

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

export const up = (url) => {

    const rl = readline.createInterface({
        input: process.stdin,
    });

    const puth = getPuth(url);
    const arr = puth.split(sep);
    rl.on('line', (input) => {
        if (input === 'up') {
            if (arr.length === 2) {
                const lastDirectory = arr.join('/');
                console.log(`You are currently in ${lastDirectory}`);
            } else {
                arr.pop();
                const newPuth = arr.join('/');
                console.log(`You are currently in ${newPuth}`);
            };
        };
    });
};
