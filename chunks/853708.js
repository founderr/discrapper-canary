n(185726);
var r = n(67867),
    i = n(668530),
    a = n(570596),
    o = n(96403),
    s = n(447631),
    l = n(502754),
    u = n(691244),
    c = n(942282),
    d = n(151020),
    _ = n(414847),
    E = n(468154),
    f = n(29461),
    h = n(13780),
    p = n(735471),
    m = n(141603),
    I = n(476508),
    T = n(327192),
    g = n(28886),
    S = n(982665),
    A = n(342545),
    v = n(224106),
    N = n(241777),
    O = n(86930),
    R = n(749915),
    C = n(215645),
    y = n(274745),
    L = n(360518),
    b = n(409851),
    D = L('iterator'),
    M = 'URLSearchParams',
    P = M + 'Iterator',
    U = f.set,
    w = f.getterFor(M),
    x = f.getterFor(P),
    G = Object.getOwnPropertyDescriptor,
    k = function (e) {
        if (!s) return i[e];
        var t = G(i, e);
        return t && t.value;
    },
    B = k('fetch'),
    F = k('Request'),
    Z = k('Headers'),
    V = F && F.prototype,
    H = Z && Z.prototype,
    Y = i.RegExp,
    j = i.TypeError,
    W = i.decodeURIComponent,
    K = i.encodeURIComponent,
    z = o(''.charAt),
    q = o([].join),
    Q = o([].push),
    X = o(''.replace),
    $ = o([].shift),
    J = o([].splice),
    ee = o(''.split),
    et = o(''.slice),
    en = /\+/g,
    er = [, , , ,],
    ei = function (e) {
        return er[e - 1] || (er[e - 1] = Y('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    ea = function (e) {
        try {
            return W(e);
        } catch (t) {
            return e;
        }
    },
    eo = function (e) {
        var t = X(e, en, ' '),
            n = 4;
        try {
            return W(t);
        } catch (e) {
            for (; n; ) t = X(t, ei(n--), ea);
            return t;
        }
    },
    es = /[!'()~]|%20/g,
    el = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    eu = function (e) {
        return el[e];
    },
    ec = function (e) {
        return X(K(e), es, eu);
    },
    ed = E(
        function (e, t) {
            U(this, {
                type: P,
                target: w(e).entries,
                index: 0,
                kind: t
            });
        },
        M,
        function () {
            var e = x(this),
                t = e.target,
                n = e.index++;
            if (!t || n >= t.length) return (e.target = void 0), C(void 0, !0);
            var r = t[n];
            switch (e.kind) {
                case 'keys':
                    return C(r.key, !1);
                case 'values':
                    return C(r.value, !1);
            }
            return C([r.key, r.value], !1);
        },
        !0
    ),
    e_ = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (S(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === z(e, 0) ? et(e, 1) : e) : A(e)));
    };
e_.prototype = {
    type: M,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            l,
            u = this.entries,
            c = R(e);
        if (c)
            for (n = (t = O(e, c)).next; !(r = a(n, t)).done; ) {
                if ((s = a((o = (i = O(g(r.value))).next), i)).done || (l = a(o, i)).done || !a(o, i).done) throw new j('Expected sequence with length 2');
                Q(u, {
                    key: A(s.value),
                    value: A(l.value)
                });
            }
        else
            for (var d in e)
                m(e, d) &&
                    Q(u, {
                        key: d,
                        value: A(e[d])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var t, n, r = this.entries, i = ee(e, '&'), a = 0; a < i.length; )
                (t = i[a++]).length &&
                    Q(r, {
                        key: eo($((n = ee(t, '=')))),
                        value: eo(q(n, '='))
                    });
        }
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) Q(n, ec((e = t[r++]).key) + '=' + ec(e.value));
        return q(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var eE = function () {
        h(this, ef);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = U(this, new e_(e));
        !s && (this.size = t.entries.length);
    },
    ef = eE.prototype;
if (
    (d(
        ef,
        {
            append: function (e, t) {
                var n = w(this);
                y(arguments.length, 2),
                    Q(n.entries, {
                        key: A(e),
                        value: A(t)
                    }),
                    !s && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = w(this), n = y(arguments.length, 1), r = t.entries, i = A(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : A(a), l = 0; l < r.length; ) {
                    var u = r[l];
                    if (u.key === i && (void 0 === o || u.value === o)) {
                        if ((J(r, l, 1), void 0 !== o)) break;
                    } else l++;
                }
                !s && (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = w(this).entries;
                y(arguments.length, 1);
                for (var n = A(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = w(this).entries;
                y(arguments.length, 1);
                for (var n = A(e), r = [], i = 0; i < t.length; i++) t[i].key === n && Q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = w(this).entries, n = y(arguments.length, 1), r = A(e), i = n < 2 ? void 0 : arguments[1], a = void 0 === i ? i : A(i), o = 0; o < t.length; ) {
                    var s = t[o++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = w(this);
                y(arguments.length, 1);
                for (var i = r.entries, a = !1, o = A(e), l = A(t), u = 0; u < i.length; u++) (n = i[u]).key === o && (a ? J(i, u--, 1) : ((a = !0), (n.value = l)));
                !a &&
                    Q(i, {
                        key: o,
                        value: l
                    }),
                    !s && (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = w(this);
                b(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = w(this).entries, r = I(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new ed(this, 'keys');
            },
            values: function () {
                return new ed(this, 'values');
            },
            entries: function () {
                return new ed(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(ef, D, ef.entries, { name: 'entries' }),
    u(
        ef,
        'toString',
        function () {
            return w(this).serialize();
        },
        { enumerable: !0 }
    ),
    s &&
        c(ef, 'size', {
            get: function () {
                return w(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    _(eE, M),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: eE }
    ),
    !l && p(Z))
) {
    var eh = o(H.has),
        ep = o(H.set),
        em = function (e) {
            if (S(e)) {
                var t,
                    n = e.body;
                if (T(n) === M)
                    return (
                        !eh((t = e.headers ? new Z(e.headers) : new Z()), 'content-type') && ep(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        v(e, {
                            body: N(0, A(n)),
                            headers: N(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (p(B) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return B(e, arguments.length > 1 ? em(arguments[1]) : {});
                    }
                }
            ),
        p(F))
    ) {
        var eI = function (e) {
            return h(this, V), new F(e, arguments.length > 1 ? em(arguments[1]) : {});
        };
        (V.constructor = eI),
            (eI.prototype = V),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: eI }
            );
    }
}
e.exports = {
    URLSearchParams: eE,
    getState: w
};
