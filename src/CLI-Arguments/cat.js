import { access, createReadStream } from 'fs';
import { resolve } from 'path';

export const cat = async (path, input) => {

    const fileName = input.substring(4);
    let pth;
    let pathToFile = resolve(path, fileName);

    access(pathToFile, (err) => {
        if (!err) {
            pth = pathToFile;
            const readableStream = createReadStream(pth, 'utf-8');
            readableStream.on('data', chunk => res(console.log(chunk)));
        } else {
            console.log('Operation failed');
        }
    })
};

