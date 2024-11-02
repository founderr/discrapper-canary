var r = n(690244),
    i = n(192853),
    a = n(813426),
    s = n(815329),
    o = r('%WeakMap%', !0),
    l = r('%Map%', !0),
    u = i('WeakMap.prototype.get', !0),
    c = i('WeakMap.prototype.set', !0),
    d = i('WeakMap.prototype.has', !0),
    f = i('Map.prototype.get', !0),
    _ = i('Map.prototype.set', !0),
    h = i('Map.prototype.has', !0),
    p = function (e, t) {
        for (var n, r = e; null !== (n = r.next); r = n) if (n.key === t) return (r.next = n.next), (n.next = e.next), (e.next = n), n;
    },
    m = function (e, t) {
        var n = p(e, t);
        return n && n.value;
    },
    g = function (e, t, n) {
        var r = p(e, t);
        r
            ? (r.value = n)
            : (e.next = {
                  key: t,
                  next: e.next,
                  value: n
              });
    };
e.exports = function () {
    var e,
        t,
        n,
        r = {
            assert: function (e) {
                if (!r.has(e)) throw new s('Side channel does not contain ' + a(e));
            },
            get: function (r) {
                if (o && r && ('object' == typeof r || 'function' == typeof r)) {
                    if (e) return u(e, r);
                } else if (l) {
                    if (t) return f(t, r);
                } else if (n) return m(n, r);
            },
            has: function (r) {
                if (o && r && ('object' == typeof r || 'function' == typeof r)) {
                    if (e) return d(e, r);
                } else if (l) {
                    if (t) return h(t, r);
                } else if (n) return !!p(n, r);
                return !1;
            },
            set: function (r, i) {
                o && r && ('object' == typeof r || 'function' == typeof r)
                    ? (!e && (e = new o()), c(e, r, i))
                    : l
                      ? (!t && (t = new l()), _(t, r, i))
                      : (!n &&
                            (n = {
                                key: {},
                                next: null
                            }),
                        g(n, r, i));
            }
        };
    return r;
};
