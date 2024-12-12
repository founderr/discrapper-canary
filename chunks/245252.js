var i = r(81021),
    a = r(160171),
    s = i('%Promise.resolve%', !0),
    o = s && a(s);
e.exports = function (e, n) {
    if (!o) throw SyntaxError('This environment does not support Promises.');
    return o(e, n);
};
