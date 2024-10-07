var e = n(545576),
    o = n(740362),
    i = n(251069),
    u = n(838957),
    c = n(276321),
    a = n(381740),
    f = n(504559),
    s = n(95948),
    p = n(892725),
    l = n(668788),
    v = n(154154),
    h = n(325008),
    y = n(992051);
t.exports = function (t, r, n, d) {
    var g = 'stackTraceLimit',
        x = d ? 2 : 1,
        b = t.split('.'),
        m = b[b.length - 1],
        E = e.apply(null, b);
    if (E) {
        var j = E.prototype;
        if ((!y && o(j, 'cause') && delete j.cause, !n)) return E;
        var T = e('Error'),
            k = r(function (t, r) {
                var n = p(d ? r : t, void 0),
                    e = d ? new E(t) : new E();
                return void 0 !== n && i(e, 'message', n), v(e, k, e.stack, 2), this && u(j, this) && s(e, this, k), arguments.length > x && l(e, arguments[x]), e;
            });
        if (((k.prototype = j), 'Error' !== m ? (c ? c(k, T) : a(k, T, { name: !0 })) : h && g in E && (f(k, E, g), f(k, E, 'prepareStackTrace')), a(k, E), !y))
            try {
                j.name !== m && i(j, 'name', m), (j.constructor = k);
            } catch (t) {}
        return k;
    }
};
