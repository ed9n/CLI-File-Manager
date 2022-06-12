import { access, open } from 'fs';
import { resolve } from 'path';

export const add = (path, input) => {
    const fileName = input.substring(4);
    let pathToFile = resolve(path, fileName);

    access(pathToFile, (err) => {
        if (err) {
            open(pathToFile, 'w', (err, f) => {
                console.log('file created');
            });

        } else {
            console.log('Operation failed');
        }
    });
}

