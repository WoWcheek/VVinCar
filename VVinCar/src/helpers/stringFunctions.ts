export const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const removeLastChar = (string: string) => string.slice(0, -1);

const format = new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "UAH"
});

export const formatUah = (money: number) => format.format(money).slice(0, -3);
