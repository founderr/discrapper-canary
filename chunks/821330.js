var r = n(876557),
    i = n(541303),
    a = Object.prototype.hasOwnProperty;
function o(e) {
    if (!r(e)) return i(e);
    var t = [];
    for (var n in Object(e)) a.call(e, n) && 'constructor' != n && t.push(n);
    return t;
}
e.exports = o;
