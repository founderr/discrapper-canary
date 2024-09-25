var r,
    i,
    a,
    o,
    s = n(67867),
    l = n(414629),
    u = n(42433),
    c = n(668530),
    d = n(570596),
    _ = n(691244),
    E = n(600385),
    f = n(414847),
    h = n(187592),
    p = n(548828),
    m = n(735471),
    I = n(982665),
    T = n(13780),
    g = n(992416),
    S = n(62691).set,
    A = n(584831),
    v = n(502856),
    N = n(139545),
    O = n(6938),
    R = n(29461),
    C = n(197859),
    y = n(732116),
    b = n(653457),
    L = 'Promise',
    D = y.CONSTRUCTOR,
    M = y.REJECTION_EVENT,
    P = y.SUBCLASSING,
    U = R.getterFor(L),
    w = R.set,
    x = C && C.prototype,
    G = C,
    k = x,
    B = c.TypeError,
    F = c.document,
    Z = c.process,
    V = b.f,
    H = V,
    Y = !!(F && F.createEvent && c.dispatchEvent),
    j = 'unhandledrejection',
    W = 'rejectionhandled',
    K = 0,
    z = 1,
    q = 2,
    Q = 1,
    X = 2,
    $ = function (e) {
        var t;
        return !!(I(e) && m((t = e.then))) && t;
    },
    J = function (e, t) {
        var n,
            r,
            i,
            a = t.value,
            o = t.state === z,
            s = o ? e.ok : e.fail,
            l = e.resolve,
            u = e.reject,
            c = e.domain;
        try {
            s ? (!o && (t.rejection === X && ei(t), (t.rejection = Q)), !0 === s ? (n = a) : (c && c.enter(), (n = s(a)), c && (c.exit(), (i = !0))), n === e.promise ? u(new B('Promise-chain cycle')) : (r = $(n)) ? d(r, n, l, u) : l(n)) : u(a);
        } catch (e) {
            c && !i && c.exit(), u(e);
        }
    },
    ee = function (e, t) {
        !e.notified &&
            ((e.notified = !0),
            A(function () {
                for (var n, r = e.reactions; (n = r.get()); ) J(n, e);
                (e.notified = !1), t && !e.rejection && en(e);
            }));
    },
    et = function (e, t, n) {
        var r, i;
        Y
            ? (((r = F.createEvent('Event')).promise = t), (r.reason = n), r.initEvent(e, !1, !0), c.dispatchEvent(r))
            : (r = {
                  promise: t,
                  reason: n
              }),
            !M && (i = c['on' + e]) ? i(r) : e === j && v('Unhandled promise rejection', n);
    },
    en = function (e) {
        d(S, c, function () {
            var t,
                n = e.facade,
                r = e.value;
            if (
                er(e) &&
                ((t = N(function () {
                    u ? Z.emit('unhandledRejection', r, n) : et(j, n, r);
                })),
                (e.rejection = u || er(e) ? X : Q),
                t.error)
            )
                throw t.value;
        });
    },
    er = function (e) {
        return e.rejection !== Q && !e.parent;
    },
    ei = function (e) {
        d(S, c, function () {
            var t = e.facade;
            u ? Z.emit('rejectionHandled', t) : et(W, t, e.value);
        });
    },
    ea = function (e, t, n) {
        return function (r) {
            e(t, r, n);
        };
    },
    eo = function (e, t, n) {
        !e.done && ((e.done = !0), n && (e = n), (e.value = t), (e.state = q), ee(e, !0));
    },
    es = function (e, t, n) {
        if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
                if (e.facade === t) throw new B("Promise can't be resolved itself");
                var r = $(t);
                r
                    ? A(function () {
                          var n = { done: !1 };
                          try {
                              d(r, t, ea(es, n, e), ea(eo, n, e));
                          } catch (t) {
                              eo(n, t, e);
                          }
                      })
                    : ((e.value = t), (e.state = z), ee(e, !1));
            } catch (t) {
                eo({ done: !1 }, t, e);
            }
        }
    };
if (
    D &&
    ((k = (G = function (e) {
        T(this, k), p(e), d(r, this);
        var t = U(this);
        try {
            e(ea(es, t), ea(eo, t));
        } catch (e) {
            eo(t, e);
        }
    }).prototype),
    ((r = function (e) {
        w(this, {
            type: L,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new O(),
            rejection: !1,
            state: K,
            value: void 0
        });
    }).prototype = _(k, 'then', function (e, t) {
        var n = U(this),
            r = V(g(this, G));
        return (
            (n.parent = !0),
            (r.ok = !m(e) || e),
            (r.fail = m(t) && t),
            (r.domain = u ? Z.domain : void 0),
            n.state === K
                ? n.reactions.add(r)
                : A(function () {
                      J(r, n);
                  }),
            r.promise
        );
    })),
    (i = function () {
        var e = new r(),
            t = U(e);
        (this.promise = e), (this.resolve = ea(es, t)), (this.reject = ea(eo, t));
    }),
    (b.f = V =
        function (e) {
            return e === G || e === a ? new i(e) : H(e);
        }),
    !l && m(C) && x !== Object.prototype)
) {
    (o = x.then),
        !P &&
            _(
                x,
                'then',
                function (e, t) {
                    var n = this;
                    return new G(function (e, t) {
                        d(o, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 }
            );
    try {
        delete x.constructor;
    } catch (e) {}
    E && E(x, k);
}
s(
    {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: D
    },
    { Promise: G }
),
    f(G, L, !1, !0),
    h(L);
