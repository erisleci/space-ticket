export function formatDate(departure: string) {
    departure = new Date(departure);
    const month = departure.getMonth() + 1;
    departure = `${departure.getDate()}/${month < 10 ? `0${month}` : month}/${departure.getFullYear()}`;
    return departure;
}
