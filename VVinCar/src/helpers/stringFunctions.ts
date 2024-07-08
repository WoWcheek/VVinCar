export const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const removeLastChar = (string: string) => string.slice(0, -1);
