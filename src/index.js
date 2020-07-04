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

    let sum = 0;
    const verifierDigit = parseInt(dominicanId.substr(10, 1));
    const multipliers = '1212121212';

    for (let i = 0; i < dominicanId.length - 1; i++)
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
