export const getArgs = (args) => {
    const cliArgs = args.reduce((acc, arg, index, array) => {
        const args = array[index];
        acc.push(args);
        return acc;
    }, []);

    return cliArgs;
};

