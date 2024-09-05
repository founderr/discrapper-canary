var n = r(545576),
    a = r(740362),
    o = r(251069),
    i = r(838957),
    _ = r(276321),
    E = r(381740),
    s = r(504559),
    c = r(95948),
    I = r(892725),
    u = r(668788),
    l = r(154154),
    R = r(325008),
    A = r(992051);
e.exports = function (e, t, r, T) {
    var d = 'stackTraceLimit',
        N = T ? 2 : 1,
        p = e.split('.'),
        O = p[p.length - 1],
        f = n.apply(null, p);
    if (f) {
        var S = f.prototype;
        if ((!A && a(S, 'cause') && delete S.cause, !r)) return f;
        var L = n('Error'),
            D = t(function (e, t) {
                var r = I(T ? t : e, void 0),
                    n = T ? new f(e) : new f();
                return void 0 !== r && o(n, 'message', r), l(n, D, n.stack, 2), this && i(S, this) && c(n, this, D), arguments.length > N && u(n, arguments[N]), n;
            });
        if (((D.prototype = S), 'Error' !== O ? (_ ? _(D, L) : E(D, L, { name: !0 })) : R && d in f && (s(D, f, d), s(D, f, 'prepareStackTrace')), E(D, f), !A))
            try {
                S.name !== O && o(S, 'name', O), (S.constructor = D);
            } catch (e) {}
        return D;
    }
};
