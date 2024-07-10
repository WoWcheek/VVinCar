export const findDifferenceInDays = (date1: Date, date2: Date) => {
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());

    const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
};
