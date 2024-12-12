var i = r(661233),
    a = r(876557),
    s = r(213066),
    o = Object.prototype.hasOwnProperty;
function l(e) {
    if (!i(e)) return s(e);
    var n = a(e),
        r = [];
    for (var l in e) !('constructor' == l && (n || !o.call(e, l))) && r.push(l);
    return r;
}
e.exports = l;
