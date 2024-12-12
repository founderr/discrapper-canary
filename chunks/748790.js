var i = r(387493),
    a = r(698030),
    s = r(459901),
    o = r(44091);
function l(e) {
    return function (n) {
        var r = a((n = o(n))) ? s(n) : void 0,
            l = r ? r[0] : n.charAt(0),
            u = r ? i(r, 1).join('') : n.slice(1);
        return l[e]() + u;
    };
}
e.exports = l;
