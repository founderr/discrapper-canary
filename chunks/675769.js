var e = n(661233),
    o = n(158698),
    i = 0 / 0,
    u = /^\s+|\s+$/g,
    c = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    f = /^0o[0-7]+$/i,
    s = parseInt;
t.exports = function (t) {
    if ('number' == typeof t) return t;
    if (o(t)) return i;
    if (e(t)) {
        var r = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = e(r) ? r + '' : r;
    }
    if ('string' != typeof t) return 0 === t ? t : +t;
    t = t.replace(u, '');
    var n = a.test(t);
    return n || f.test(t) ? s(t.slice(2), n ? 2 : 8) : c.test(t) ? i : +t;
};
