var t = TypeError;
e.exports = function (e) {
    if (e > 9007199254740991) throw t('Maximum allowed index exceeded');
    return e;
};
