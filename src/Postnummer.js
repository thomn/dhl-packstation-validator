export default class Postnummer {
    /**
     * @param {string|int} postnummer
     * @returns {boolean}
     */
    static isValid(postnummer) {
        postnummer = postnummer.trim();
        let parsedNumber = parseInt(postnummer).toString(); // to normalize input value

        // parseInt filters out special chars, when string is given
        // So check, if string is longer than parsedNumber
        if (postnummer.length !== parsedNumber.toString().length) {
            return false;
        }

        if (parsedNumber.match(/^\d{6,10}$/) === null) {
            return false;
        }
        parsedNumber = parsedNumber.padStart(10, '0');

        return parsedNumber.substring(parsedNumber.length - 1) === Postnummer.getCheckDigitFromPostnummer(parsedNumber).toString();
    }

    /**
     * @param {string} postnummer
     *
     * @return {int}
     */
    static getCheckDigitFromPostnummer(postnummer) {
        let sum = [...postnummer.substring(0, postnummer.length - 1)].reduce((sum, value, index) => {
            return sum + (value * ((index + 1) % 2 ? 4 : 9));
        }, 0);

        return (10 - (sum % 10)) % 10;
    }
}