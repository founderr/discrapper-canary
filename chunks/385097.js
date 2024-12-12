var i = r(192853),
    a = r(690244),
    s = r(148025),
    o = i('RegExp.prototype.exec'),
    l = a('%TypeError%');
e.exports = function (e) {
    if (!s(e)) throw new l('`regex` must be a RegExp');
    return function (n) {
        return null !== o(e, n);
    };
};
