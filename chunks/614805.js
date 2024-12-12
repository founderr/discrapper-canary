function i(e) {
    var n = !1;
    return function () {
        !n && ((n = !0), e.apply(void 0, arguments));
    };
}
var a,
    s = r(531478).codes,
    o = s.ERR_MISSING_ARGS,
    l = s.ERR_STREAM_DESTROYED;
function u(e) {
    if (e) throw e;
}
function c(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function d(e, n, s, o) {
    o = i(o);
    var u = !1;
    e.on('close', function () {
        u = !0;
    }),
        void 0 === a && (a = r(133495)),
        a(
            e,
            {
                readable: n,
                writable: s
            },
            function (e) {
                if (e) return o(e);
                (u = !0), o();
            }
        );
    var d = !1;
    return function (n) {
        if (!u) {
            if (!d) {
                if (((d = !0), c(e))) return e.abort();
                if ('function' == typeof e.destroy) return e.destroy();
                o(n || new l('pipe'));
            }
        }
    };
}
function f(e) {
    e();
}
function _(e, n) {
    return e.pipe(n);
}
function h(e) {
    return e.length && 'function' == typeof e[e.length - 1] ? e.pop() : u;
}
function p() {
    for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    var a = h(r);
    if ((Array.isArray(r[0]) && (r = r[0]), r.length < 2)) throw new o('streams');
    var s = r.map(function (n, i) {
        var o = i < r.length - 1;
        return d(n, o, i > 0, function (n) {
            !e && (e = n), n && s.forEach(f), !o && (s.forEach(f), a(e));
        });
    });
    return r.reduce(_);
}
e.exports = p;
