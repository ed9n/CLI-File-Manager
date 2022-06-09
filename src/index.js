import { getArgs } from './GetArguments/getArgs.js';
import { getName } from './GetUserName/getUserName.js';
import { getPuth } from './Puth/getPuth.js';
import { exitApp, up, validateForStartsArg } from './ValidateArgs/validateArgs.js';

const initCliApp = () => {

    const args = getArgs(process.argv);

    if (validateForStartsArg(args)) {

        const url = import.meta.url;
        const name = getName(args);
        const path = getPuth(url);

        console.log(`Welcome to the File Manager, ${name}!`);
        console.log(`You are currently in ${path}`);

        exitApp(name);
        up(url);
    };
};

initCliApp();