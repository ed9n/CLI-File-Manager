import * as readline from 'node:readline';
import { validateUrl } from '../Path/validatePath.js';
import { cat } from '../CLI-Arguments/cat.js';
import { cd } from '../CLI-Arguments/cd.js';
import { ls } from '../CLI-Arguments/ls.js';
import { up } from '../CLI-Arguments/up.js';
import { add } from '../CLI-Arguments/add.js';
import { rm } from '../CLI-Arguments/rm.js';

export const validateMainArgs = (url) => {

    const rl = readline.createInterface({
        input: process.stdin,
    });
    let path = url;

    rl.on('line', (input) => {

        const cdF = input.substring(3);
        const catF = input.substring(4);

        switch (input) {
            case 'up':
                path = up(path);
                console.log(`\rYou are currently in ${path}`);
                break;

            case 'ls':
                ls(path);
                console.log(`\rYou are currently in ${path}`);
                break;

            case (`cd ${cdF}`):
                path = cd(path, input);
                validateUrl(path).then((result) => {
                    return path = result;
                });
                break;

            case (`cat ${catF}`):
                cat(path, input)
                break;

            case (`add ${catF}`):
                add(path, input)
                break;

            case (`rm ${cdF}`):
                rm(path, input)
                break;
            default:
                console.log('Invalid input');
        }
    });
};