n(996173);
var r = n(147018),
    i = n(161581),
    a = n(926515),
    o = n(581031),
    s = n(325008),
    l = n(259230),
    u = n(859209),
    c = n(4340),
    d = n(90338),
    _ = n(865312),
    E = n(673743),
    f = n(644659),
    h = n(603528),
    p = n(354848),
    m = n(740362),
    I = n(566885),
    T = n(974971),
    g = n(24033),
    S = n(622281),
    A = n(714050),
    v = n(803938),
    N = n(879),
    O = n(981971),
    R = n(11697),
    C = n(202934),
    y = n(641236),
    b = n(976418),
    L = y('iterator'),
    D = 'URLSearchParams',
    M = D + 'Iterator',
    P = f.set,
    U = f.getterFor(D),
    w = f.getterFor(M),
    x = Object.getOwnPropertyDescriptor,
    G = function (e) {
        if (!s) return i[e];
        var t = x(i, e);
        return t && t.value;
    },
    k = G('fetch'),
    B = G('Request'),
    F = G('Headers'),
    Z = B && B.prototype,
    V = F && F.prototype,
    H = i.RegExp,
    Y = i.TypeError,
    j = i.decodeURIComponent,
    W = i.encodeURIComponent,
    K = o(''.charAt),
    z = o([].join),
    q = o([].push),
    Q = o(''.replace),
    X = o([].shift),
    $ = o([].splice),
    J = o(''.split),
    ee = o(''.slice),
    et = /\+/g,
    en = [, , , ,],
    er = function (e) {
        return en[e - 1] || (en[e - 1] = H('((?:%[\\da-f]{2}){' + e + '})', 'gi'));
    },
    ei = function (e) {
        try {
            return j(e);
        } catch (t) {
            return e;
        }
    },
    ea = function (e) {
        var t = Q(e, et, ' '),
            n = 4;
        try {
            return j(t);
        } catch (e) {
            for (; n; ) t = Q(t, er(n--), ei);
            return t;
        }
    },
    eo = /[!'()~]|%20/g,
    es = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    el = function (e) {
        return es[e];
    },
    eu = function (e) {
        return Q(W(e), eo, el);
    },
    ec = E(
        function (e, t) {
            P(this, {
                type: M,
                iterator: O(U(e).entries),
                kind: t
            });
        },
        'Iterator',
        function () {
            var e = w(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return !n.done && (n.value = 'keys' === t ? r.key : 'values' === t ? r.value : [r.key, r.value]), n;
        },
        !0
    ),
    ed = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (S(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === K(e, 0) ? ee(e, 1) : e) : A(e)));
    };
ed.prototype = {
    type: D,
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
            u = R(e);
        if (u)
            for (n = (t = O(e, u)).next; !(r = a(n, t)).done; ) {
                if ((s = a((o = (i = O(g(r.value))).next), i)).done || (l = a(o, i)).done || !a(o, i).done) throw Y('Expected sequence with length 2');
                q(this.entries, {
                    key: A(s.value),
                    value: A(l.value)
                });
            }
        else
            for (var c in e)
                m(e, c) &&
                    q(this.entries, {
                        key: c,
                        value: A(e[c])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var t, n, r = J(e, '&'), i = 0; i < r.length; )
                (t = r[i++]).length &&
                    ((n = J(t, '=')),
                    q(this.entries, {
                        key: ea(X(n)),
                        value: ea(z(n, '='))
                    }));
        }
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) q(n, eu((e = t[r++]).key) + '=' + eu(e.value));
        return z(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var e_ = function () {
        h(this, eE);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = P(this, new ed(e));
        !s && (this.size = t.entries.length);
    },
    eE = e_.prototype;
if (
    (d(
        eE,
        {
            append: function (e, t) {
                var n = U(this);
                C(arguments.length, 2),
                    q(n.entries, {
                        key: A(e),
                        value: A(t)
                    }),
                    !s && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = U(this), n = C(arguments.length, 1), r = t.entries, i = A(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : A(a), l = 0; l < r.length; ) {
                    var u = r[l];
                    if (u.key === i && (void 0 === o || u.value === o)) {
                        if (($(r, l, 1), void 0 !== o)) break;
                    } else l++;
                }
                !s && (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = U(this).entries;
                C(arguments.length, 1);
                for (var n = A(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = U(this).entries;
                C(arguments.length, 1);
                for (var n = A(e), r = [], i = 0; i < t.length; i++) t[i].key === n && q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = U(this).entries, n = C(arguments.length, 1), r = A(e), i = n < 2 ? void 0 : arguments[1], a = void 0 === i ? i : A(i), o = 0; o < t.length; ) {
                    var s = t[o++];
                    if (s.key === r && (void 0 === a || s.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = U(this);
                C(arguments.length, 1);
                for (var i = r.entries, a = !1, o = A(e), l = A(t), u = 0; u < i.length; u++) (n = i[u]).key === o && (a ? $(i, u--, 1) : ((a = !0), (n.value = l)));
                !a &&
                    q(i, {
                        key: o,
                        value: l
                    }),
                    !s && (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = U(this);
                b(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = U(this).entries, r = I(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new ec(this, 'keys');
            },
            values: function () {
                return new ec(this, 'values');
            },
            entries: function () {
                return new ec(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(eE, L, eE.entries, { name: 'entries' }),
    u(
        eE,
        'toString',
        function () {
            return U(this).serialize();
        },
        { enumerable: !0 }
    ),
    s &&
        c(eE, 'size', {
            get: function () {
                return U(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    _(e_, D),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: e_ }
    ),
    !l && p(F))
) {
    var ef = o(V.has),
        eh = o(V.set),
        ep = function (e) {
            if (S(e)) {
                var t,
                    n = e.body;
                if (T(n) === D)
                    return (
                        !ef((t = e.headers ? new F(e.headers) : new F()), 'content-type') && eh(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        v(e, {
                            body: N(0, A(n)),
                            headers: N(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (p(k) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return k(e, arguments.length > 1 ? ep(arguments[1]) : {});
                    }
                }
            ),
        p(B))
    ) {
        var em = function (e) {
            return h(this, Z), new B(e, arguments.length > 1 ? ep(arguments[1]) : {});
        };
        (Z.constructor = em),
            (em.prototype = Z),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: em }
            );
    }
}
e.exports = {
    URLSearchParams: e_,
    getState: U
};
