var i = r(42848),
    a = 1 / 0;
function s(e) {
    if ('string' == typeof e || i(e)) return e;
    var n = e + '';
    return '0' == n && 1 / e == -a ? '-0' : n;
}
e.exports = s;
