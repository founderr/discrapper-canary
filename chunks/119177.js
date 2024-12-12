var i = r(706627),
    a = r(292403),
    s = r(906087),
    o = Object.prototype.hasOwnProperty;
function l(e) {
    if (!i(e)) return s(e);
    var n = a(e),
        r = [];
    for (var l in e) !('constructor' == l && (n || !o.call(e, l))) && r.push(l);
    return r;
}
e.exports = l;
