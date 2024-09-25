var r = n(67867),
    i = n(875604),
    a = n(646948),
    o = n(600385),
    s = n(221446),
    l = n(224106),
    u = n(948634),
    c = n(241777),
    d = n(353991),
    _ = n(972554),
    E = n(730427),
    f = n(104210),
    h = n(360518)('toStringTag'),
    p = Error,
    m = [].push,
    I = function (e, t) {
        var n,
            r = i(T, this);
        o ? (n = o(new p(), r ? a(this) : T)) : u((n = r ? this : l(T)), h, 'Error'), void 0 !== t && u(n, 'message', f(t)), _(n, I, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
        var s = [];
        return E(e, m, { that: s }), u(n, 'errors', s), n;
    };
o ? o(I, p) : s(I, p, { name: !0 });
var T = (I.prototype = l(p.prototype, {
    constructor: c(1, I),
    message: c(1, ''),
    name: c(1, 'AggregateError')
}));
r(
    {
        global: !0,
        constructor: !0,
        arity: 2
    },
    { AggregateError: I }
);
