export default class Postnummer {
    /**
     * @param {string|int} postnummer
     * @returns {boolean}
     */
    static isValid(postnummer) {
        if (postnummer.match(/^\d{6,10}$/) === null) {
            return false;
        }

        postnummer = parseInt(postnummer).toString(); // to normalize input value
        postnummer = postnummer.padStart(10, '0');

        return postnummer.substring(postnummer.length - 1) === Postnummer.getCheckDigitFromPostnummer(postnummer).toString();
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