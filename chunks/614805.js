function r(e) {
    var t = !1;
    return function () {
        !t && ((t = !0), e.apply(void 0, arguments));
    };
}
var i,
    a = n(531478).codes,
    o = a.ERR_MISSING_ARGS,
    s = a.ERR_STREAM_DESTROYED;
function l(e) {
    if (e) throw e;
}
function u(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function c(e, t, a, o) {
    o = r(o);
    var l = !1;
    e.on('close', function () {
        l = !0;
    }),
        void 0 === i && (i = n(133495)),
        i(
            e,
            {
                readable: t,
                writable: a
            },
            function (e) {
                if (e) return o(e);
                (l = !0), o();
            }
        );
    var c = !1;
    return function (t) {
        if (!l) {
            if (!c) {
                if (((c = !0), u(e))) return e.abort();
                if ('function' == typeof e.destroy) return e.destroy();
                o(t || new s('pipe'));
            }
        }
    };
}
function d(e) {
    e();
}
function _(e, t) {
    return e.pipe(t);
}
function E(e) {
    return e.length && 'function' == typeof e[e.length - 1] ? e.pop() : l;
}
function f() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    var i = E(n);
    if ((Array.isArray(n[0]) && (n = n[0]), n.length < 2)) throw new o('streams');
    var a = n.map(function (t, r) {
        var o = r < n.length - 1;
        return c(t, o, r > 0, function (t) {
            !e && (e = t), t && a.forEach(d), !o && (a.forEach(d), i(e));
        });
    });
    return n.reduce(_);
}
e.exports = f;
