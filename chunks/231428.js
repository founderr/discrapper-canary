t.d(s, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(512722),
    c = t.n(l),
    d = t(91192),
    _ = t(442837),
    u = t(481060),
    E = t(570140),
    T = t(355467),
    S = t(827837),
    I = t(821849),
    N = t(724757),
    m = t(600164),
    C = t(239827),
    A = t(818035),
    g = t(509545),
    h = t(78839),
    O = t(74538),
    p = t(807160),
    R = t(474936),
    x = t(231338),
    f = t(689938),
    M = t(486142),
    D = t(925477);
function P(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function L(e) {
    let { payments: s, locale: t, compactMode: n, numPages: r } = e,
        l = i.useRef(null),
        [c, _] = i.useState(0),
        [E, S] = i.useState(null),
        I = s.slice(10 * c, (c + 1) * 10);
    i.useEffect(() => {
        var e;
        null === (e = l.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let m = i.useCallback(
            (e) => {
                _(e);
                let t = s[s.length - 1].id;
                e >= r - 2 && E !== t && ((0, T.cQ)(10, t), S(t));
            },
            [s, r, E]
        ),
        A = (0, N.Z)('billing-history', l);
    return (0, a.jsx)(d.bG, {
        navigator: A,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: s, ...i } = e;
                return (0, a.jsx)(C.Z, {
                    className: o()(M.verticalFit, M.paginator),
                    currentPageIndex: c,
                    onChangePage: m,
                    numPages: r,
                    showPageCount: !1,
                    ref: s,
                    ...i,
                    children: (0, a.jsx)(u.AdvancedScroller, {
                        className: M.bottomDivider,
                        ref: l,
                        children: I.map((e, s) =>
                            (0, a.jsx)(
                                p.Z,
                                {
                                    className: o()(M.paymentRow, M.bottomDivider),
                                    payment: e,
                                    locale: t,
                                    compactMode: n
                                },
                                s
                            )
                        )
                    })
                });
            }
        })
    });
}
class b extends (n = i.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        E.Z.wait(() => {
            (0, S.N)(), (0, T.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, a.jsxs)(u.Card, {
                className: M.externalRow,
                children: [
                    (0, a.jsx)('div', {
                        className: M.externalRowHeader,
                        children: f.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: x.Vz[e.paymentGateway] })
                    }),
                    (0, a.jsx)('div', {
                        className: M.externalRowBody,
                        children: f.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                            paymentGatewayName: x.Vz[e.paymentGateway],
                            billingHistoryLink: (0, O.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: s, subscription: t, locale: n } = this.props,
            i = null != t && t.isPurchasedExternally;
        return 0 !== s.length || i
            ? (0, a.jsxs)('div', {
                  className: M.verticalFit,
                  children: [
                      null != t && i ? this.renderPremiumExternalSubscription(t) : null,
                      s.length > 0
                          ? (0, a.jsxs)('div', {
                                className: o()(M.paymentPane, M.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, a.jsx)('div', {
                                              className: o()(M.paymentRow, M.bottomDivider),
                                              children: (0, a.jsxs)(m.Z, {
                                                  className: M.paymentRowHeader,
                                                  children: [
                                                      (0, a.jsx)('div', {
                                                          className: D.date,
                                                          children: f.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                                      }),
                                                      (0, a.jsx)('div', {
                                                          className: M.paymentRowHeaderDescription,
                                                          children: f.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                                      }),
                                                      (0, a.jsx)('div', {
                                                          className: D.amount,
                                                          children: f.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, a.jsx)(L, {
                                        compactMode: e,
                                        locale: n,
                                        payments: s,
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
        super(...e), P(this, 'scrollerRef', i.createRef());
    }
}
function Z(e) {
    var s;
    let t = e.skuId,
        n = null === (s = e.subscription) || void 0 === s ? void 0 : s.items[0].planId;
    return !(null == t || null == n || Object.values(R.Si).includes(t) || (0, O.PV)(n));
}
function v(e) {
    let s = (0, _.e7)([A.Z], () => A.Z.getPayments()),
        t = (0, _.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        n = i.useMemo(
            () =>
                new Set(
                    s.filter(Z).map((e) => {
                        let { subscription: s } = e;
                        return null == s ? void 0 : s.items[0].planId;
                    })
                ),
            [s]
        ),
        r = i.useMemo(
            () =>
                new Set(
                    s.filter(Z).map((e) => {
                        let { skuId: s } = e;
                        return s;
                    })
                ),
            [s]
        ),
        o = (0, _.Wu)([g.Z], () => g.Z.getPlanIdsForSkus(Array.from(r))),
        l = i.useCallback(() => o.length === n.size, [o, n]);
    return (
        i.useEffect(() => {
            !l() &&
                E.Z.wait(() => {
                    r.forEach((e) => (0, I.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [l, r]),
        (0, a.jsx)(b, {
            ...e,
            payments: s,
            subscription: t
        })
    );
}
P(b, 'defaultProps', { compactMode: !1 });
