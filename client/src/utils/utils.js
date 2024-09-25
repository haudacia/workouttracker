export const toLetterAbbr = (num) =>
    num <= 0 ?
        '' :
        toLetterAbbr(Math.floor((num - 1) / 26)) + String.fromCharCode(((num - 1) % 26) + 65);

export const formatDate = (date, withTime) => {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const formattedDate = withTime ?
        date.toLocaleDateString('es-SP', options) :
        date.toLocaleDateString('es-SP', options)
    // Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const year = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');

    // const formattedDate = withTime ?
    //     `${day}/${month}/${year} ${hours}:${minutes}` :
    //     `${day}/${month}/${year}`

    return formattedDate;
};

