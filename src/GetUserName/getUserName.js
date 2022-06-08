export const getName = (arg) => {
    const args = arg.slice(3, 4);

    const indexEqual = args[0].indexOf('=');
    const name = args[0].slice(indexEqual + 1);

    return name
};

