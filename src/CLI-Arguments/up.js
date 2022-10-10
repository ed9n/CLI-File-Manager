import { sep } from 'path';

export const up = (pth) => {
    const arr = pth.split(sep);
    let puth = '';
    let homedir = '';

    if (arr.length !== 2) {
        arr.pop();
        puth = arr.join('/');
        return puth;
    } else {
        homedir = arr.join('/');
        return homedir;
    }
};