function validateDominicanId(dominicanId) {
    if (!dominicanId) {
        return false;
    }

    dominicanId = dominicanId.replace(/-/g, '');
    dominicanId = dominicanId.trim();

    const lengthIsValid = dominicanId.length === 11;
    if (!lengthIsValid) {
        return false;
    }

    const firstThreeDigits = dominicanId.substr(0, 3);
    if (firstThreeDigits === '000') {
        return false;
    }

    let sum = 0;
    const verifierDigit = parseInt(dominicanId.substr(10, 1));
    const multipliers = '1212121212';

    for (let i = 0; i < 10; i++)
    {
        const digit = parseInt(dominicanId.substr(i, 1));
        const multiplier = parseInt(multipliers.substr(i, 1));
        const multipliedDigit = digit * multiplier;
        let result = multipliedDigit;

        if (result > 9)
        {
            const resultString = result.toString();
            const firstDigit = parseInt(resultString.charAt(0));
            const secondDigit = parseInt(resultString.charAt(1));
            result = firstDigit + secondDigit;
        }

        sum += result;
    }

    const remainder = ((10 - (sum % 10)) % 10);
    return remainder === verifierDigit;
}

export default validateDominicanId;
