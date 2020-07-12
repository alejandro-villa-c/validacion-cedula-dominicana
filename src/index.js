function validateDominicanId(dominicanId) {
    if (typeof dominicanId !== 'string') {
        return false;
    }

    dominicanId = dominicanId.trim();
    const onlyDigits = (/^\d+$/).test(dominicanId);
    if (!onlyDigits) {
        return false;
    }

    const lengthIsValid = dominicanId.length === 11;
    if (!lengthIsValid) {
        return false;
    }

    const exceptions = [
        '00000000018',
        '11111111123',
        '00100759932',
        '00105606543',
        '00114272360',
        '00200123640',
        '00200409772',
        '00800106971',
        '01200004166',
        '01400074875',
        '01400000282',
        '03103749672',
        '03200066940',
        '03800032522',
        '03900192284',
        '04900026260',
        '05900072869',
        '07700009346',
        '00114532330',
        '03121982479',
        '40200700675',
        '40200639953',
        '00121581750',
        '00119161853',
        '22321581834',
        '00121581800',
        '09421581768',
        '22721581818',
        '90001200901',
        '00301200901',
        '40200452735',
        '40200401324',
        '10621581792'
    ];

    if (exceptions.includes(dominicanId)) {
        return true;
    }

    const firstThreeDigits = dominicanId.substr(0, 3);
    if (firstThreeDigits === '000') {
        return false;
    }

    const verifierDigit = parseInt(dominicanId.substr(10, 1));
    const multipliers = '1212121212';
    const sum = dominicanId
        .substr(0, 10)
        .split('')
        .map((digit, index) => {
            const multiplier = multipliers.charAt(index);
            const multipliedDigit = parseInt(digit) * multiplier;

            if (multipliedDigit < 10) {
                return multipliedDigit;
            }

            const firstDigit = parseInt(multipliedDigit / 10);
            const secondDigit = multipliedDigit % 10;
            return firstDigit + secondDigit;
        })
        .reduce((a, b) => a + b);

    const remainder = ((10 - (sum % 10)) % 10);
    return remainder === verifierDigit;
}
