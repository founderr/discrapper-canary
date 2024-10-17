t.d(a, {
    M: function () {
        return I;
    },
    a: function () {
        return T;
    }
}),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var n = t(735250),
    s = t(470079),
    r = t(772848),
    l = t(544891),
    o = t(481060),
    i = t(355467),
    c = t(600164),
    u = t(311821),
    d = t(591759),
    E = t(987209),
    _ = t(598),
    A = t(737143),
    m = t(362755),
    N = t(981631),
    p = t(474936),
    h = t(689938),
    C = t(93478);
let I = (e) => {
        let { onPurchaseComplete: a, onHandoffFailure: t } = e,
            { selectedPlan: c, browserCheckoutState: u, browserCheckoutStateLoadId: I, contextMetadata: T } = (0, _.usePaymentContext)(),
            { isGift: P } = (0, E.wD)(),
            [S, R] = s.useState(!1);
        return (
            s.useEffect(() => {
                let e = setTimeout(
                    () => {
                        var e;
                        if (!S)
                            R(!0),
                                (0, i.r5)(T.loadId),
                                !(function (e, a, t, n) {
                                    let s = N.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, a, t),
                                        o = new URL(d.Z.makeUrl(N.Z5c.BILLING_LOGIN_HANDOFF)),
                                        i = (0, r.Z)();
                                    o.searchParams.append('handoff_key', i),
                                        o.searchParams.append('redirect_to', s),
                                        l.tn
                                            .post({
                                                url: N.ANM.HANDOFF,
                                                body: { key: i },
                                                oldFormErrors: !0
                                            })
                                            .then(
                                                (e) => {
                                                    o.searchParams.append('handoff_token', e.body.handoff_token), window.open(o.href);
                                                },
                                                () => {
                                                    n();
                                                }
                                            );
                                })(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : p.Xh.PREMIUM_MONTH_TIER_2, P, T.loadId, t);
                    },
                    (0, A.q1)().delay ? 1000 : 0
                );
                return () => clearTimeout(e);
            }, [c, P, T, t, R, S]),
            s.useEffect(() => {
                I === T.loadId && u === m.Y.DONE && a();
            }, [u, I, T, a]),
            (0, n.jsxs)('div', {
                className: C.body,
                children: [
                    (0, n.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: C.description,
                        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_BODY
                    })
                ]
            })
        );
    },
    T = (e) => {
        let { onPrimaryClick: a, onBackClick: t } = e;
        return (0, n.jsx)('div', {
            children: (0, n.jsxs)(o.ModalFooter, {
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(u.y, {
                        onClick: a,
                        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                    }),
                    (0, n.jsx)(u.Z, { onClick: t })
                ]
            })
        });
    };
