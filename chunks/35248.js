n.d(t, {
    M: function () {
        return _;
    },
    a: function () {
        return y;
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
    s = n(481060),
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
    b = n(93478);
let _ = (e) => {
        let { onPurchaseComplete: t, onHandoffFailure: n } = e,
            { selectedPlan: c, browserCheckoutState: u, browserCheckoutStateLoadId: _, contextMetadata: y } = (0, p.usePaymentContext)(),
            { isGift: P } = (0, m.wD)(),
            [g, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!g)
                            C(!0),
                                (0, o.r5)(y.loadId),
                                !(function (e, t, n, a) {
                                    let r = E.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                                        s = new URL(d.Z.makeUrl(E.Z5c.BILLING_LOGIN_HANDOFF)),
                                        o = (0, l.Z)();
                                    s.searchParams.append('handoff_key', o),
                                        s.searchParams.append('redirect_to', r),
                                        i.tn
                                            .post({
                                                url: E.ANM.HANDOFF,
                                                body: { key: o },
                                                oldFormErrors: !0
                                            })
                                            .then(
                                                (e) => {
                                                    s.searchParams.append('handoff_token', e.body.handoff_token), window.open(s.href);
                                                },
                                                () => {
                                                    a();
                                                }
                                            );
                                })(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : N.Xh.PREMIUM_MONTH_TIER_2, P, y.loadId, n);
                    },
                    (0, h.q)().delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [c, P, y, n, C, g]),
            r.useEffect(() => {
                _ === y.loadId && u === A.Y.DONE && t();
            }, [u, _, y, t]),
            (0, a.jsxs)('div', {
                className: b.body,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-xl/bold',
                        children: f.intl.string(f.t.C4HYf3)
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: b.description,
                        children: f.intl.string(f.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    y = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, a.jsx)('div', {
            children: (0, a.jsxs)(s.ModalFooter, {
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
