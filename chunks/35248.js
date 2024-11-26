n.d(t, {
    M: function () {
        return P;
    },
    a: function () {
        return _;
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
    s = n(544891),
    i = n(481060),
    o = n(355467),
    c = n(600164),
    u = n(311821),
    d = n(591759),
    m = n(987209),
    p = n(563132),
    h = n(737143),
    A = n(362755),
    E = n(981631),
    N = n(474936),
    f = n(388032),
    y = n(13926);
let P = (e) => {
        let { onPurchaseComplete: t, onHandoffFailure: n } = e,
            { selectedPlan: c, browserCheckoutState: u, browserCheckoutStateLoadId: P, contextMetadata: _ } = (0, p.usePaymentContext)(),
            { isGift: b } = (0, m.wD)(),
            [g, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!g)
                            C(!0),
                                (0, o.r5)(_.loadId),
                                !(function (e, t, n, a) {
                                    let r = E.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                                        i = new URL(d.Z.makeUrl(E.Z5c.BILLING_LOGIN_HANDOFF)),
                                        o = (0, l.Z)();
                                    i.searchParams.append('handoff_key', o),
                                        i.searchParams.append('redirect_to', r),
                                        s.tn
                                            .post({
                                                url: E.ANM.HANDOFF,
                                                body: { key: o },
                                                oldFormErrors: !0,
                                                rejectWithError: !1
                                            })
                                            .then(
                                                (e) => {
                                                    i.searchParams.append('handoff_token', e.body.handoff_token), window.open(i.href);
                                                },
                                                () => {
                                                    a();
                                                }
                                            );
                                })(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : N.Xh.PREMIUM_MONTH_TIER_2, b, _.loadId, n);
                    },
                    (0, h.q)().delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [c, b, _, n, C, g]),
            r.useEffect(() => {
                P === _.loadId && u === A.Y.DONE && t();
            }, [u, P, _, t]),
            (0, a.jsxs)('div', {
                className: y.body,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-xl/bold',
                        children: f.intl.string(f.t.C4HYf3)
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        className: y.description,
                        children: f.intl.string(f.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    _ = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, a.jsx)('div', {
            children: (0, a.jsxs)(i.ModalFooter, {
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, a.jsx)(u.y, {
                        onClick: t,
                        children: f.intl.string(f.t['4Qvmmp'])
                    }),
                    (0, a.jsx)(u.Z, { onClick: n })
                ]
            })
        });
    };
