var r = n(147018),
    i = n(339718),
    a = n(49693),
    o = n(610148),
    s = n(886960),
    l = n(936940)(function () {
        return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }),
    u = function () {
        try {
            Object.defineProperty([], 'length', { writable: !1 }).push();
        } catch (e) {
            return e instanceof TypeError;
        }
    };
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: l || !u()
    },
    {
        push: function (e) {
            var t = i(this),
                n = a(t),
                r = arguments.length;
            s(n + r);
            for (var l = 0; l < r; l++) (t[n] = arguments[l]), n++;
            return o(t, n), n;
        }
    }
);
