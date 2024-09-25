var r = n(67867),
    i = n(294377),
    a = n(156741),
    o = n(570596),
    s = n(96403),
    l = n(821819),
    u = n(735471),
    c = n(538769),
    d = n(780524),
    _ = n(492091),
    E = n(828596),
    f = String,
    h = i('JSON', 'stringify'),
    p = s(/./.exec),
    m = s(''.charAt),
    I = s(''.charCodeAt),
    T = s(''.replace),
    g = s((1).toString),
    S = /[\uD800-\uDFFF]/g,
    A = /^[\uD800-\uDBFF]$/,
    v = /^[\uDC00-\uDFFF]$/,
    N =
        !E ||
        l(function () {
            var e = i('Symbol')('stringify detection');
            return '[null]' !== h([e]) || '{}' !== h({ a: e }) || '{}' !== h(Object(e));
        }),
    O = l(function () {
        return '"\uDF06\uD834"' !== h('\uDF06\uD834') || '"\uDEAD"' !== h('\uDEAD');
    }),
    R = function (e, t) {
        var n = d(arguments),
            r = _(t);
        if (!(!u(r) && (void 0 === e || c(e))))
            return (
                (n[1] = function (e, t) {
                    if ((u(r) && (t = o(r, this, f(e), t)), !c(t))) return t;
                }),
                a(h, null, n)
            );
    },
    C = function (e, t, n) {
        var r = m(n, t - 1),
            i = m(n, t + 1);
        return (p(A, e) && !p(v, i)) || (p(v, e) && !p(A, r)) ? '\\u' + g(I(e, 0), 16) : e;
    };
h &&
    r(
        {
            target: 'JSON',
            stat: !0,
            arity: 3,
            forced: N || O
        },
        {
            stringify: function (e, t, n) {
                var r = d(arguments),
                    i = a(N ? R : h, null, r);
                return O && 'string' == typeof i ? T(i, S, C) : i;
            }
        }
    );
