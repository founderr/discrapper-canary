var n = r(147018),
    a = r(161581),
    o = r(197187),
    i = r(261987),
    _ = 'WebAssembly',
    E = a[_],
    s = 7 !== Error('e', { cause: 7 }).cause,
    c = function (e, t) {
        var r = {};
        (r[e] = i(e, t, s)),
            n(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: s
                },
                r
            );
    },
    I = function (e, t) {
        if (E && E[e]) {
            var r = {};
            (r[e] = i(_ + '.' + e, t, s)),
                n(
                    {
                        target: _,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: s
                    },
                    r
                );
        }
    };
c('Error', function (e) {
    return function (t) {
        return o(e, this, arguments);
    };
}),
    c('EvalError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    c('RangeError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    c('ReferenceError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    c('SyntaxError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    c('TypeError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    c('URIError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    I('CompileError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    I('LinkError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    }),
    I('RuntimeError', function (e) {
        return function (t) {
            return o(e, this, arguments);
        };
    });
