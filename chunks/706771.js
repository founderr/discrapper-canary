var r = n(67867),
    i = n(668530),
    a = n(570596),
    o = n(96403),
    s = n(414629),
    l = n(447631),
    u = n(828596),
    c = n(821819),
    d = n(141603),
    _ = n(875604),
    E = n(28886),
    f = n(729605),
    h = n(591794),
    p = n(342545),
    m = n(241777),
    I = n(224106),
    T = n(302231),
    g = n(937443),
    S = n(777628),
    A = n(502640),
    v = n(65007),
    N = n(349446),
    O = n(930134),
    R = n(790248),
    C = n(691244),
    y = n(942282),
    L = n(293303),
    b = n(964653),
    D = n(511364),
    M = n(348343),
    P = n(360518),
    U = n(862602),
    w = n(187203),
    x = n(29657),
    G = n(414847),
    k = n(29461),
    B = n(804104).forEach,
    F = b('hidden'),
    Z = 'Symbol',
    V = 'prototype',
    H = k.set,
    Y = k.getterFor(Z),
    j = Object[V],
    W = i.Symbol,
    K = W && W[V],
    z = i.RangeError,
    q = i.TypeError,
    Q = i.QObject,
    X = v.f,
    $ = N.f,
    J = S.f,
    ee = R.f,
    et = o([].push),
    en = L('symbols'),
    er = L('op-symbols'),
    ei = L('wks'),
    ea = !Q || !Q[V] || !Q[V].findChild,
    eo = function (e, t, n) {
        var r = X(j, t);
        r && delete j[t], $(e, t, n), r && e !== j && $(j, t, r);
    },
    es =
        l &&
        c(function () {
            return (
                7 !==
                I(
                    $({}, 'a', {
                        get: function () {
                            return $(this, 'a', { value: 7 }).a;
                        }
                    })
                ).a
            );
        })
            ? eo
            : $,
    el = function (e, t) {
        var n = (en[e] = I(K));
        return (
            H(n, {
                type: Z,
                tag: e,
                description: t
            }),
            !l && (n.description = t),
            n
        );
    },
    eu = function (e, t, n) {
        e === j && eu(er, t, n), E(e);
        var r = h(t);
        return (E(n), d(en, r)) ? (n.enumerable ? (d(e, F) && e[F][r] && (e[F][r] = !1), (n = I(n, { enumerable: m(0, !1) }))) : (!d(e, F) && $(e, F, m(1, {})), (e[F][r] = !0)), es(e, r, n)) : $(e, r, n);
    },
    ec = function (e, t) {
        E(e);
        var n = f(t);
        return (
            B(T(n).concat(eh(n)), function (t) {
                (!l || a(e_, n, t)) && eu(e, t, n[t]);
            }),
            e
        );
    },
    ed = function (e, t) {
        return void 0 === t ? I(e) : ec(I(e), t);
    },
    e_ = function (e) {
        var t = h(e),
            n = a(ee, this, t);
        return (!(this === j && d(en, t)) || !!d(er, t)) && (!(n || !d(this, t) || !d(en, t) || (d(this, F) && this[F][t])) || n);
    },
    eE = function (e, t) {
        var n = f(e),
            r = h(t);
        if (!(n === j && d(en, r)) || d(er, r)) {
            var i = X(n, r);
            return i && d(en, r) && !(d(n, F) && n[F][r]) && (i.enumerable = !0), i;
        }
    },
    ef = function (e) {
        var t = J(f(e)),
            n = [];
        return (
            B(t, function (e) {
                !d(en, e) && !d(D, e) && et(n, e);
            }),
            n
        );
    },
    eh = function (e) {
        var t = e === j,
            n = J(t ? er : f(e)),
            r = [];
        return (
            B(n, function (e) {
                d(en, e) && (!t || d(j, e)) && et(r, en[e]);
            }),
            r
        );
    };
!u &&
    (C(
        (K = (W = function () {
            if (_(K, this)) throw new q('Symbol is not a constructor');
            var e = arguments.length && void 0 !== arguments[0] ? p(arguments[0]) : void 0,
                t = M(e),
                n = function (e) {
                    var r = void 0 === this ? i : this;
                    r === j && a(n, er, e), d(r, F) && d(r[F], t) && (r[F][t] = !1);
                    var o = m(1, e);
                    try {
                        es(r, t, o);
                    } catch (e) {
                        if (!(e instanceof z)) throw e;
                        eo(r, t, o);
                    }
                };
            return (
                l &&
                    ea &&
                    es(j, t, {
                        configurable: !0,
                        set: n
                    }),
                el(t, e)
            );
        })[V]),
        'toString',
        function () {
            return Y(this).tag;
        }
    ),
    C(W, 'withoutSetter', function (e) {
        return el(M(e), e);
    }),
    (R.f = e_),
    (N.f = eu),
    (O.f = ec),
    (v.f = eE),
    (g.f = S.f = ef),
    (A.f = eh),
    (U.f = function (e) {
        return el(P(e), e);
    }),
    l &&
        (y(K, 'description', {
            configurable: !0,
            get: function () {
                return Y(this).description;
            }
        }),
        !s && C(j, 'propertyIsEnumerable', e_, { unsafe: !0 }))),
    r(
        {
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !u,
            sham: !u
        },
        { Symbol: W }
    ),
    B(T(ei), function (e) {
        w(e);
    }),
    r(
        {
            target: Z,
            stat: !0,
            forced: !u
        },
        {
            useSetter: function () {
                ea = !0;
            },
            useSimple: function () {
                ea = !1;
            }
        }
    ),
    r(
        {
            target: 'Object',
            stat: !0,
            forced: !u,
            sham: !l
        },
        {
            create: ed,
            defineProperty: eu,
            defineProperties: ec,
            getOwnPropertyDescriptor: eE
        }
    ),
    r(
        {
            target: 'Object',
            stat: !0,
            forced: !u
        },
        { getOwnPropertyNames: ef }
    ),
    x(),
    G(W, Z),
    (D[F] = !0);
