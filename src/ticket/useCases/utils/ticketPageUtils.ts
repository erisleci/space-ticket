export function formatDate(departure: string) {
    const date = new Date(departure);
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const SEPARATOR = '/';
    const paddedMonth = month < 10 ? `0${month}` : month;
    const year = date.getFullYear();

    return day + SEPARATOR + paddedMonth + SEPARATOR + year;
}
