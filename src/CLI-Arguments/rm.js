import { unlink } from 'fs';
import { resolve } from 'path';

export const rm = (path, input) => {

    const fileName = input.substring(3);
    let pathToFile = resolve(path, fileName);

    unlink(pathToFile, (err) => {
        if (err) {
            console.log('Operation failed');
        } else {
            console.log('file deleted');
        }
    });
} 