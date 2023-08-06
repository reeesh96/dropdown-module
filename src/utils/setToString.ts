export function setToString(set: Set<string>, delim: string): string | undefined {
    // if empty, return undefined
    if (set.size <= 0) {
        return undefined
    }

    // parse set and generate string
    let str = '';
    set.forEach((elem) => {
        str += elem + delim
    });

    return str.slice(0, delim.length * -1)
}