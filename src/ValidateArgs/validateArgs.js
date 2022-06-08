export const validateForStartsArg = (arg) => {
    const args = arg.slice(3, 4);

    if (args[0] !== undefined) {
        const argFirst = args[0].startsWith('--');

        if (!argFirst) {
            console.log('invalid argument');
        } else {
            return true;
        };

    } else {
        console.log('invalid argument');
    };
};
