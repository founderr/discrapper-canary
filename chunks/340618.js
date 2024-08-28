var n = r(354848),
    a = String,
    o = TypeError;
e.exports = function (e) {
    if ('object' == typeof e || n(e)) return e;
    throw o("Can't set " + a(e) + ' as a prototype');
};
