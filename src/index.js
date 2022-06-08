import { getArgs } from './GetArguments/getArgs.js';
import { getName } from './GetUserName/getUserName.js';
import { exitApp, validateForStartsArg } from './ValidateArgs/validateArgs.js';

const initCliApp = () => {
    const args = getArgs(process.argv);

    if (validateForStartsArg(args)) {
        const name = getName(args);
        console.log(`Welcome to the File Manager, ${name}!`)
        exitApp(name);
    };
};

initCliApp();