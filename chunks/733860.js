var r = n(147018),
    i = n(339718),
    a = n(49693),
    s = n(610148),
    o = n(708517),
    l = n(886960),
    u = 1 !== [].unshift(0);
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            u ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).unshift();
                } catch (e) {
                    return e instanceof TypeError;
                }
            })()
    },
    {
        unshift: function (e) {
            var t = i(this),
                n = a(t),
                r = arguments.length;
            if (r) {
                l(n + r);
                for (var u = n; u--; ) {
                    var c = u + r;
                    u in t ? (t[c] = t[u]) : o(t, c);
                }
                for (var d = 0; d < r; d++) t[d] = arguments[d];
            }
            return s(t, n + r);
        }
    }
);
