var a = r(42848),
    n = 1 / 0;
e.exports = function (e) {
    if ('string' == typeof e || a(e)) return e;
    var t = e + '';
    return '0' == t && 1 / e == -n ? '-0' : t;
};
