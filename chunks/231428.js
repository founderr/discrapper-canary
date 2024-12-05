n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    g = n(570140),
    h = n(355467),
    p = n(827837),
    x = n(821849),
    T = n(724757),
    S = n(600164),
    _ = n(239827),
    E = n(818035),
    C = n(509545),
    f = n(78839),
    I = n(74538),
    N = n(807160),
    A = n(474936),
    b = n(231338),
    v = n(388032),
    j = n(14593),
    O = n(943857);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    let { payments: t, locale: n, compactMode: i, numPages: l } = e,
        o = r.useRef(null),
        [c, u] = r.useState(0),
        [g, p] = r.useState(null),
        x = t.slice(10 * c, (c + 1) * 10);
    r.useEffect(() => {
        var e;
        null === (e = o.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let S = r.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= l - 2 && g !== n && ((0, h.cQ)(10, n), p(n));
            },
            [t, l, g]
        ),
        E = (0, T.Z)('billing-history', o);
    return (0, s.jsx)(d.bG, {
        navigator: E,
        children: (0, s.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...r } = e;
                return (0, s.jsx)(_.Z, {
                    className: a()(j.verticalFit, j.paginator),
                    currentPageIndex: c,
                    onChangePage: S,
                    numPages: l,
                    showPageCount: !1,
                    ref: t,
                    ...r,
                    children: (0, s.jsx)(m.AdvancedScroller, {
                        className: j.bottomDivider,
                        ref: o,
                        children: x.map((e, t) =>
                            (0, s.jsx)(
                                N.Z,
                                {
                                    className: a()(j.paymentRow, j.bottomDivider),
                                    payment: e,
                                    locale: n,
                                    compactMode: i
                                },
                                t
                            )
                        )
                    })
                });
            }
        })
    });
}
class D extends (i = r.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        g.Z.wait(() => {
            (0, p.N)(), (0, h.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, s.jsxs)(m.Card, {
                className: j.externalRow,
                children: [
                    (0, s.jsx)('div', {
                        className: j.externalRowHeader,
                        children: v.intl.format(v.t['6mIX6u'], { paymentGatewayName: b.Vz[e.paymentGateway] })
                    }),
                    (0, s.jsx)('div', {
                        className: j.externalRowBody,
                        children: v.intl.format(v.t.eG0uZG, {
                            paymentGatewayName: b.Vz[e.paymentGateway],
                            billingHistoryLink: (0, I.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: i } = this.props,
            r = null != n && n.isPurchasedExternally;
        return 0 !== t.length || r
            ? (0, s.jsxs)('div', {
                  className: j.verticalFit,
                  children: [
                      null != n && r ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, s.jsxs)('div', {
                                className: a()(j.paymentPane, j.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, s.jsx)('div', {
                                              className: a()(j.paymentRow, j.bottomDivider),
                                              children: (0, s.jsxs)(S.Z, {
                                                  className: j.paymentRowHeader,
                                                  children: [
                                                      (0, s.jsx)('div', {
                                                          className: O.date,
                                                          children: v.intl.string(v.t['5t11BQ'])
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: j.paymentRowHeaderDescription,
                                                          children: v.intl.string(v.t.yAAPb2)
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: O.amount,
                                                          children: v.intl.string(v.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, s.jsx)(P, {
                                        compactMode: e,
                                        locale: i,
                                        payments: t,
                                        numPages: this.numPages
                                    })
                                ]
                            })
                          : null
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e), R(this, 'scrollerRef', r.createRef());
    }
}
function y(e) {
    var t;
    let n = e.skuId,
        i = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
    return !(null == n || null == i || Object.values(A.Si).includes(n) || (0, I.PV)(i));
}
function B(e) {
    let t = (0, u.e7)([E.Z], () => E.Z.getPayments()),
        n = (0, u.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
        i = r.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    })
                ),
            [t]
        ),
        l = r.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        a = (0, u.Wu)([C.Z], () => C.Z.getPlanIdsForSkus(Array.from(l))),
        o = r.useCallback(() => a.length === i.size, [a, i]);
    return (
        r.useEffect(() => {
            !o() &&
                g.Z.wait(() => {
                    l.forEach((e) => (0, x.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, l]),
        (0, s.jsx)(D, {
            ...e,
            payments: t,
            subscription: n
        })
    );
}
R(D, 'defaultProps', { compactMode: !1 });
