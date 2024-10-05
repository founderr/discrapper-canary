var r = n(197187),
    i = n(926515),
    a = n(581031),
    s = n(527221),
    o = n(936940),
    l = n(24033),
    u = n(354848),
    c = n(35179),
    d = n(959318),
    _ = n(552028),
    E = n(714050),
    f = n(676125),
    h = n(344597),
    p = n(995739),
    I = n(115726),
    m = n(651673),
    T = n(641236)('replace'),
    S = Math.max,
    g = Math.min,
    A = a([].concat),
    N = a([].push),
    O = a(''.indexOf),
    R = a(''.slice),
    v = '$0' === 'a'.replace(/./, '$0'),
    C = !!/./[T] && '' === /./[T]('a', '$0');
s(
    'replace',
    function (e, t, n) {
        var a = C ? '$' : '$0';
        return [
            function (e, n) {
                var r = f(this),
                    a = c(e) ? void 0 : p(e, T);
                return a ? i(a, e, r, n) : i(t, E(r), e, n);
            },
            function (e, i) {
                var s = l(this),
                    o = E(e);
                if ('string' == typeof i && -1 === O(i, a) && -1 === O(i, '$<')) {
                    var c = n(t, s, o, i);
                    if (c.done) return c.value;
                }
                var f = u(i);
                !f && (i = E(i));
                var p = s.global;
                p && ((y = s.unicode), (s.lastIndex = 0));
                for (var T = []; null !== (b = m(s, o)); ) {
                    if ((N(T, b), !p)) break;
                    '' === E(b[0]) && (s.lastIndex = h(o, _(s.lastIndex), y));
                }
                for (var v = '', C = 0, L = 0; L < T.length; L++) {
                    for (var D, y, b, M, P = E((b = T[L])[0]), U = S(g(d(b.index), o.length), 0), w = [], x = 1; x < b.length; x++) {
                        N(w, void 0 === (D = b[x]) ? D : String(D));
                    }
                    var G = b.groups;
                    if (f) {
                        var k = A([P], w, U, o);
                        void 0 !== G && N(k, G), (M = E(r(i, void 0, k)));
                    } else M = I(P, o, U, w, G, i);
                    U >= C && ((v += R(o, C, U) + M), (C = U + P.length));
                }
                return v + R(o, C);
            }
        ];
    },
    !!o(function () {
        var e = /./;
        return (
            (e.exec = function () {
                var e = [];
                return (e.groups = { a: '7' }), e;
            }),
            '7' !== ''.replace(e, '$<a>')
        );
    }) ||
        !v ||
        C
);
