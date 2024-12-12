var i = r(606862),
    a = r(169742),
    s = r(160171),
    o = r(192853),
    l = r(49662),
    u = o('Object.prototype.toString'),
    c = r(703825)(),
    d = 'undefined' == typeof globalThis ? r.g : globalThis,
    f = a(),
    _ = o('String.prototype.slice'),
    h = Object.getPrototypeOf,
    p =
        o('Array.prototype.indexOf', !0) ||
        function (e, n) {
            for (var r = 0; r < e.length; r += 1) if (e[r] === n) return r;
            return -1;
        },
    m = { __proto__: null };
c && l && h
    ? i(f, function (e) {
          var n = new d[e]();
          if (Symbol.toStringTag in n) {
              var r = h(n),
                  i = l(r, Symbol.toStringTag);
              !i && (i = l(h(r), Symbol.toStringTag)), (m['$' + e] = s(i.get));
          }
      })
    : i(f, function (e) {
          var n = new d[e]();
          m['$' + e] = s(n.slice);
      });
var g = function (e) {
        var n = !1;
        return (
            i(m, function (r, i) {
                if (!n)
                    try {
                        '$' + r(e) === i && (n = _(i, 1));
                    } catch (e) {}
            }),
            n
        );
    },
    E = function (e) {
        var n = !1;
        return (
            i(m, function (r, i) {
                if (!n)
                    try {
                        r(e), (n = _(i, 1));
                    } catch (e) {}
            }),
            n
        );
    };
e.exports = function (e) {
    if (!e || 'object' != typeof e) return !1;
    if (!c) {
        var n = _(u(e), 8, -1);
        return p(f, n) > -1 ? n : 'Object' === n && E(e);
    }
    return l ? g(e) : null;
};
