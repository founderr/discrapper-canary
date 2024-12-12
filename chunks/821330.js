var i = r(876557),
    a = r(541303),
    s = Object.prototype.hasOwnProperty;
function o(e) {
    if (!i(e)) return a(e);
    var n = [];
    for (var r in Object(e)) s.call(e, r) && 'constructor' != r && n.push(r);
    return n;
}
e.exports = o;
