import { getArgs } from './GetArguments/getArgs.js';
import { getName } from './DisplayText/displayText.js';
import { validateForStartsArg } from './ValidateArgs/validateArgs.js';

const initCliApp = () => {
    const args = getArgs(process.argv)
    if (validateForStartsArg(args)) {
        getName(args);
    }
};

initCliApp();