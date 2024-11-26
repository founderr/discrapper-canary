n.d(t, {
    M: function () {
        return b;
    },
    a: function () {
        return g;
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
    c = n(600164),
    u = n(311821),
    d = n(591759),
    m = n(987209),
    p = n(563132),
    h = n(409813),
    A = n(737143),
    E = n(926841),
    N = n(362755),
    f = n(981631),
    y = n(474936),
    _ = n(388032),
    P = n(13926);
let b = (e) => {
        let { step: t, onPurchaseComplete: n, onHandoffFailure: c } = e,
            { selectedPlan: u, browserCheckoutState: b, browserCheckoutStateLoadId: g, contextMetadata: C } = (0, p.usePaymentContext)(),
            { isGift: T } = (0, m.wD)(),
            [I, S] = r.useState(!1),
            v = t === h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY ? f.i$l.GOOGLE_PAY : void 0,
            x = t === h.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY ? (0, E.a)() : (0, A.q)();
        return (
            r.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!I)
                            S(!0),
                                (0, s.r5)(C.loadId),
                                !(function (e, t, n, a, r) {
                                    let o = f.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n, r),
                                        s = new URL(d.Z.makeUrl(f.Z5c.BILLING_LOGIN_HANDOFF)),
                                        c = (0, l.Z)();
                                    s.searchParams.append('handoff_key', c),
                                        s.searchParams.append('redirect_to', o),
                                        i.tn
                                            .post({
                                                url: f.ANM.HANDOFF,
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
                                })(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : y.Xh.PREMIUM_MONTH_TIER_2, T, C.loadId, c, v);
                    },
                    x.delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [u, T, C, c, S, I, v, x.delay]),
            r.useEffect(() => {
                g === C.loadId && b === N.Y.DONE && n();
            }, [b, g, C, n]),
            (0, a.jsxs)('div', {
                className: P.body,
                children: [
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        children: _.intl.string(_.t.C4HYf3)
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: P.description,
                        children: _.intl.string(_.t.xfG7Ji)
                    })
                ]
            })
        );
    },
    g = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, a.jsx)('div', {
            children: (0, a.jsxs)(o.ModalFooter, {
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, a.jsx)(u.y, {
                        onClick: t,
                        children: _.intl.string(_.t['4Qvmmp'])
                    }),
                    (0, a.jsx)(u.Z, { onClick: n })
                ]
            })
        });
    };
