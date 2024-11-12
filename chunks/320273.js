n(996173);
var r = n(147018),
    i = n(161581),
    a = n(926515),
    s = n(581031),
    o = n(325008),
    l = n(259230),
    u = n(859209),
    c = n(4340),
    d = n(90338),
    f = n(865312),
    _ = n(673743),
    p = n(644659),
    h = n(603528),
    m = n(354848),
    g = n(740362),
    E = n(566885),
    v = n(974971),
    I = n(24033),
    b = n(622281),
    S = n(714050),
    T = n(803938),
    y = n(879),
    A = n(981971),
    N = n(11697),
    C = n(202934),
    R = n(641236),
    O = n(976418),
    D = R('iterator'),
    L = 'URLSearchParams',
    x = L + 'Iterator',
    w = p.set,
    M = p.getterFor(L),
    P = p.getterFor(x),
    k = Object.getOwnPropertyDescriptor,
    U = function (e) {
        if (!o) return i[e];
        var t = k(i, e);
        return t && t.value;
    },
    B = U('fetch'),
    G = U('Request'),
    Z = U('Headers'),
    F = G && G.prototype,
    V = Z && Z.prototype,
    j = i.RegExp,
    H = i.TypeError,
    Y = i.decodeURIComponent,
    W = i.encodeURIComponent,
    K = s(''.charAt),
    z = s([].join),
    q = s([].push),
    Q = s(''.replace),
    X = s([].shift),
    J = s([].splice),
    $ = s(''.split),
    ee = s(''.slice),
    et = /\+/g,
    en = [, , , ,],
    er = function (e) {
        try {
            return Y(e);
        } catch (t) {
            return e;
        }
    },
    ei = function (e) {
        var t,
            n = Q(e, et, ' '),
            r = 4;
        try {
            return Y(n);
        } catch (e) {
            for (; r; ) {
                n = Q(n, en[(t = r--) - 1] || (en[t - 1] = j('((?:%[\\da-f]{2}){' + t + '})', 'gi')), er);
            }
            return n;
        }
    },
    ea = /[!'()~]|%20/g,
    es = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    eo = function (e) {
        return es[e];
    },
    el = function (e) {
        return Q(W(e), ea, eo);
    },
    eu = _(
        function (e, t) {
            w(this, {
                type: x,
                iterator: A(M(e).entries),
                kind: t
            });
        },
        'Iterator',
        function () {
            var e = P(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return !n.done && (n.value = 'keys' === t ? r.key : 'values' === t ? r.value : [r.key, r.value]), n;
        },
        !0
    ),
    ec = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (b(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === K(e, 0) ? ee(e, 1) : e) : S(e)));
    };
ec.prototype = {
    type: L,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            s,
            o,
            l,
            u = N(e);
        if (u)
            for (n = (t = A(e, u)).next; !(r = a(n, t)).done; ) {
                if ((o = a((s = (i = A(I(r.value))).next), i)).done || (l = a(s, i)).done || !a(s, i).done) throw H('Expected sequence with length 2');
                q(this.entries, {
                    key: S(o.value),
                    value: S(l.value)
                });
            }
        else
            for (var c in e)
                g(e, c) &&
                    q(this.entries, {
                        key: c,
                        value: S(e[c])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var t, n, r = $(e, '&'), i = 0; i < r.length; )
                (t = r[i++]).length &&
                    ((n = $(t, '=')),
                    q(this.entries, {
                        key: ei(X(n)),
                        value: ei(z(n, '='))
                    }));
        }
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) q(n, el((e = t[r++]).key) + '=' + el(e.value));
        return z(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ed = function () {
        h(this, ef);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = w(this, new ec(e));
        !o && (this.size = t.entries.length);
    },
    ef = ed.prototype;
if (
    (d(
        ef,
        {
            append: function (e, t) {
                var n = M(this);
                C(arguments.length, 2),
                    q(n.entries, {
                        key: S(e),
                        value: S(t)
                    }),
                    !o && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = M(this), n = C(arguments.length, 1), r = t.entries, i = S(e), a = n < 2 ? void 0 : arguments[1], s = void 0 === a ? a : S(a), l = 0; l < r.length; ) {
                    var u = r[l];
                    if (u.key === i && (void 0 === s || u.value === s)) {
                        if ((J(r, l, 1), void 0 !== s)) break;
                    } else l++;
                }
                !o && (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = M(this).entries;
                C(arguments.length, 1);
                for (var n = S(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = M(this).entries;
                C(arguments.length, 1);
                for (var n = S(e), r = [], i = 0; i < t.length; i++) t[i].key === n && q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = M(this).entries, n = C(arguments.length, 1), r = S(e), i = n < 2 ? void 0 : arguments[1], a = void 0 === i ? i : S(i), s = 0; s < t.length; ) {
                    var o = t[s++];
                    if (o.key === r && (void 0 === a || o.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = M(this);
                C(arguments.length, 1);
                for (var i = r.entries, a = !1, s = S(e), l = S(t), u = 0; u < i.length; u++) (n = i[u]).key === s && (a ? J(i, u--, 1) : ((a = !0), (n.value = l)));
                !a &&
                    q(i, {
                        key: s,
                        value: l
                    }),
                    !o && (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = M(this);
                O(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = M(this).entries, r = E(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new eu(this, 'keys');
            },
            values: function () {
                return new eu(this, 'values');
            },
            entries: function () {
                return new eu(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(ef, D, ef.entries, { name: 'entries' }),
    u(
        ef,
        'toString',
        function () {
            return M(this).serialize();
        },
        { enumerable: !0 }
    ),
    o &&
        c(ef, 'size', {
            get: function () {
                return M(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    f(ed, L),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: ed }
    ),
    !l && m(Z))
) {
    var e_ = s(V.has),
        ep = s(V.set),
        eh = function (e) {
            if (b(e)) {
                var t,
                    n = e.body;
                if (v(n) === L)
                    return (
                        !e_((t = e.headers ? new Z(e.headers) : new Z()), 'content-type') && ep(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        T(e, {
                            body: y(0, S(n)),
                            headers: y(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (m(B) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return B(e, arguments.length > 1 ? eh(arguments[1]) : {});
                    }
                }
            ),
        m(G))
    ) {
        var em = function (e) {
            return h(this, F), new G(e, arguments.length > 1 ? eh(arguments[1]) : {});
        };
        (F.constructor = em),
            (em.prototype = F),
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
    URLSearchParams: ed,
    getState: M
};
