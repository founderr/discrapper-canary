var e = n(147018),
    o = n(161581),
    i = n(197187),
    u = n(261987),
    c = 'WebAssembly',
    a = o[c],
    f = 7 !== Error('e', { cause: 7 }).cause,
    s = function (t, r) {
        var n = {};
        (n[t] = u(t, r, f)),
            e(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: f
                },
                n
            );
    },
    p = function (t, r) {
        if (a && a[t]) {
            var n = {};
            (n[t] = u(c + '.' + t, r, f)),
                e(
                    {
                        target: c,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: f
                    },
                    n
                );
        }
    };
s('Error', function (t) {
    return function (r) {
        return i(t, this, arguments);
    };
}),
    s('EvalError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    s('RangeError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    s('ReferenceError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    s('SyntaxError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    s('TypeError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    s('URIError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    p('CompileError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    p('LinkError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    }),
    p('RuntimeError', function (t) {
        return function (r) {
            return i(t, this, arguments);
        };
    });
