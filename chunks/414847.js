var r = n(273511),
    i = n(349446).f,
    a = n(948634),
    o = n(141603),
    s = n(867028),
    l = n(360518)('toStringTag');
e.exports = function (e, t, n, u) {
    var c = n ? e : e && e.prototype;
    c &&
        (!o(c, l) &&
            i(c, l, {
                configurable: !0,
                value: t
            }),
        u && !r && a(c, 'toString', s));
};
