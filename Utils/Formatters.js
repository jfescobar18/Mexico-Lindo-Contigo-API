exports.getDateFromCURP = function (CURP) {
    let CURPDate = CURP.substring(4, 10),
        twoDigitCURPYear = parseInt(CURPDate.substring(0, 2)),
        twoDigitCurrentYear = parseInt(new Date().getFullYear().toString().slice(-2)),
        birthYear = twoDigitCURPYear <= twoDigitCurrentYear ? twoDigitCURPYear + 2000 : twoDigitCURPYear + 1900,
        birthMont = CURPDate.substring(2, 4),
        birhtDay = CURPDate.substring(4, 6);

    let birthDate = `${birthYear}-${birthMont}-${birhtDay}`;

    return birthDate;
}