import { access } from 'fs';
import { sep } from 'path';

export const validateUrl = async (url) => {
    return new Promise((res, rej) => {
        let path;
        access(url, (err) => {
            if (!err) {
                res(url);
                console.log(`\rYou are currently in ${url}`);
            } else {
                const arr = url.split(sep);
                arr.pop();
                path = arr.join('/');
                res(path);
                console.log('Invalid input');
                console.log(`\rYou are currently in ${path}`);
            }
        })
    })
}
