export const classes = (...args: (string | boolean | undefined | null | object | number | symbol | Array<string | boolean | undefined | null | object | number | symbol> )[]) => {
    return args
        .flat(Infinity)
        .filter((arg) => typeof arg === "string" && arg.length > 0)
        .join(" ");
}