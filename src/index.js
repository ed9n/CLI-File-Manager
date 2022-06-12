import { getArgs } from './GetArguments/getArgs.js';
import { getName } from './GetUserName/getUserName.js';
import { validateMainArgs } from './Validate CLI-Args/validateMainArgs.js';
import { homedir } from 'os';
import { validateForStartsArgs } from './Validate CLI-Args/validateForStartsArgs.js';
import { exitApp } from './Validate CLI-Args/validateForExitApp.js';


const initCliApp = () => {

    const args = getArgs(process.argv);

    if (validateForStartsArgs(args)) {

        const name = getName(args);
        const path = homedir();

        console.log(`Welcome to the File Manager, ${name}!`);
        console.log(`You are currently in ${path}`);

        exitApp(name);
        validateMainArgs(path);
    };
};

initCliApp();