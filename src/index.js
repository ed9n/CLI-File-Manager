import { getArgs } from './GetArguments/getArgs.js';
import { getName } from './DisplayText/displayText.js';
import { exitApp, validateForStartsArg } from './ValidateArgs/validateArgs.js';

const initCliApp = () => {
    const args = getArgs(process.argv)
    if (validateForStartsArg(args)) {
        const name = getName(args);
        exitApp(name);
    };
};

initCliApp();