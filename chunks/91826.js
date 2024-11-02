var r = n(606862),
    i = n(169742),
    a = n(160171),
    s = n(192853),
    o = n(49662),
    l = s('Object.prototype.toString'),
    u = n(703825)(),
    c = 'undefined' == typeof globalThis ? n.g : globalThis,
    d = i(),
    f = s('String.prototype.slice'),
    _ = Object.getPrototypeOf,
    h =
        s('Array.prototype.indexOf', !0) ||
        function (e, t) {
            for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
            return -1;
        },
    p = { __proto__: null };
u && o && _
    ? r(d, function (e) {
          var t = new c[e]();
          if (Symbol.toStringTag in t) {
              var n = _(t),
                  r = o(n, Symbol.toStringTag);
              !r && (r = o(_(n), Symbol.toStringTag)), (p['$' + e] = a(r.get));
          }
      })
    : r(d, function (e) {
          var t = new c[e]();
          p['$' + e] = a(t.slice);
      });
var m = function (e) {
        var t = !1;
        return (
            r(p, function (n, r) {
                if (!t)
                    try {
                        '$' + n(e) === r && (t = f(r, 1));
                    } catch (e) {}
            }),
            t
        );
    },
    g = function (e) {
        var t = !1;
        return (
            r(p, function (n, r) {
                if (!t)
                    try {
                        n(e), (t = f(r, 1));
                    } catch (e) {}
            }),
            t
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!u) {
        var t = f(l(e), 8, -1);
        return h(d, t) > -1 ? t : 'Object' === t && g(e);
    }
    return o ? m(e) : null;
};
