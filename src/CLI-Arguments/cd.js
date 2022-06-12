import { resolve } from 'path';

export const cd = (path, inp) => {

    const fileName = inp.substring(3);
    let pathToFile = resolve(path, fileName);
    return pathToFile;

};

