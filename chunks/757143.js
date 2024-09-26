var r = n(197187),
    i = n(926515),
    a = n(581031),
    o = n(527221),
    s = n(936940),
    l = n(24033),
    u = n(354848),
    c = n(35179),
    d = n(959318),
    _ = n(552028),
    E = n(714050),
    f = n(676125),
    h = n(344597),
    p = n(995739),
    m = n(115726),
    I = n(651673),
    T = n(641236)('replace'),
    g = Math.max,
    S = Math.min,
    A = a([].concat),
    v = a([].push),
    N = a(''.indexOf),
    O = a(''.slice),
    R = function (e) {
        return void 0 === e ? e : String(e);
    },
    C = (function () {
        return '$0' === 'a'.replace(/./, '$0');
    })(),
    y = (function () {
        return !!/./[T] && '' === /./[T]('a', '$0');
    })();
o(
    'replace',
    function (e, t, n) {
        var a = y ? '$' : '$0';
        return [
            function (e, n) {
                var r = f(this),
                    a = c(e) ? void 0 : p(e, T);
                return a ? i(a, e, r, n) : i(t, E(r), e, n);
            },
            function (e, i) {
                var o = l(this),
                    s = E(e);
                if ('string' == typeof i && -1 === N(i, a) && -1 === N(i, '$<')) {
                    var c = n(t, o, s, i);
                    if (c.done) return c.value;
                }
                var f = u(i);
                !f && (i = E(i));
                var p = o.global;
                p && ((b = o.unicode), (o.lastIndex = 0));
                for (var T = []; null !== (D = I(o, s)); ) {
                    if ((v(T, D), !p)) break;
                    '' === E(D[0]) && (o.lastIndex = h(s, _(o.lastIndex), b));
                }
                for (var C = '', y = 0, L = 0; L < T.length; L++) {
                    for (var b, D, M, P = E((D = T[L])[0]), U = g(S(d(D.index), s.length), 0), w = [], x = 1; x < D.length; x++) v(w, R(D[x]));
                    var G = D.groups;
                    if (f) {
                        var k = A([P], w, U, s);
                        void 0 !== G && v(k, G), (M = E(r(i, void 0, k)));
                    } else M = m(P, s, U, w, G, i);
                    U >= y && ((C += O(s, y, U) + M), (y = U + P.length));
                }
                return C + O(s, y);
            }
        ];
    },
    !!s(function () {
        var e = /./;
        return (
            (e.exec = function () {
                var e = [];
                return (e.groups = { a: '7' }), e;
            }),
            '7' !== ''.replace(e, '$<a>')
        );
    }) ||
        !C ||
        y
);
