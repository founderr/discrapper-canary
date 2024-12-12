n.d(t, {
    M: function () {
        return g;
    },
    a: function () {
        return C;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(772848),
    i = n(544891),
    o = n(481060),
    s = n(355467),
    c = n(821849),
    u = n(600164),
    d = n(311821),
    m = n(591759),
    p = n(987209),
    h = n(563132),
    A = n(409813),
    E = n(737143),
    N = n(926841),
    f = n(362755),
    y = n(981631),
    _ = n(474936),
    P = n(388032),
    b = n(13926);
let g = (e) => {
        let { step: t, onPurchaseComplete: n, onHandoffFailure: u } = e,
            { selectedPlan: d, setSelectedPlanId: g, setSelectedSkuId: C, browserCheckoutState: T, browserCheckoutStateLoadId: I, browserCheckoutStateSkuId: S, browserCheckoutStatePlanId: v, contextMetadata: x } = (0, h.usePaymentContext)(),
            { isGift: R } = (0, p.wD)(),
            [L, M] = r.useState(!1),
            O = t === A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY ? y.i$l.GOOGLE_PAY : void 0,
            D = t === A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY ? (0, N.a)() : (0, E.q1)();
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!L)
                            M(!0),
                                (0, s.r5)(x.loadId),
                                !(function (e, t, n, a, r) {
                                    let o = y.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, r),
                                        s = new URL(m.Z.makeUrl(y.Z5c.BILLING_LOGIN_HANDOFF)),
                                        c = (0, l.Z)();
                                    s.searchParams.append('handoff_key', c),
                                        s.searchParams.append('redirect_to', o),
                                        i.tn
                                            .post({
                                                url: y.ANM.HANDOFF,
                                                body: { key: c },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then(
                                                (e) => {
                                                    s.searchParams.append('handoff_token', e.body.handoff_token), window.open(s.href);
                                                },
                                                () => {
                                                    a();
                                                }
                                            );
                                })(null !== (e = null == d ? void 0 : d.id) && void 0 !== e ? e : _.Xh.PREMIUM_MONTH_TIER_2, R, x.loadId, u, O);
                    },
                    D.delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [d, R, x, u, M, L, O, D.delay]),
            r.useEffect(() => {
                null !== S && (_.YQ.includes(S) && ((0, c.GZ)(S), (0, s.jg)()), C(S)), null !== v && g(v), I === x.loadId && T === f.Y.DONE && n();
            }, [C, g, T, I, S, v, x, n]),
            (0, a.jsxs)('div', {
                className: b.body,
                children: [
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        children: P.intl.string(P.t.C4HYf3)
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: b.description,
                        children: P.intl.string(P.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    C = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, a.jsx)('div', {
            children: (0, a.jsxs)(o.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                align: u.Z.Align.CENTER,
                children: [
                    (0, a.jsx)(d.y, {
                        onClick: t,
                        children: P.intl.string(P.t['4Qvmmp'])
                    }),
                    (0, a.jsx)(d.Z, { onClick: n })
                ]
            })
        });
    };
