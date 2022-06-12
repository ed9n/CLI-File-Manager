import { readdir } from 'fs';

export const ls = async (url) => {

    let arr = [];

    readdir(url, (err, files) => {
        if (err) {
            console.log('Invalid input');
        } else {
            files.forEach(file => {
                arr.push(file);
            });
            console.log(arr);
        }
    });
};