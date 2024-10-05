var r = n(147018),
    i = n(339718),
    a = n(49693),
    s = n(610148),
    o = n(886960),
    l = n(936940)(function () {
        return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    });
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
            l ||
            !(function () {
                try {
                    Object.defineProperty([], 'length', { writable: !1 }).push();
                } catch (e) {
                    return e instanceof TypeError;
                }
            })()
    },
    {
        push: function (e) {
            var t = i(this),
                n = a(t),
                r = arguments.length;
            o(n + r);
            for (var l = 0; l < r; l++) (t[n] = arguments[l]), n++;
            return s(t, n), n;
        }
    }
);
