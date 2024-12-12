n.d(t, {
    t: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(570140),
    o = n(366939),
    C = n(16084),
    d = n(128069),
    u = n(643939),
    c = n(45595),
    p = n(823188),
    x = n(563132),
    h = n(474936),
    f = n(388032),
    _ = n(988113);
function j() {
    let { purchaseError: e, paymentError: t, setPurchaseError: n, selectedSkuId: s, selectedPlan: j, setSelectedSkuId: m, setSelectedPlanId: L, setSelectedPlanNotification: g } = (0, x.usePaymentContext)(),
        [E, S] = l.useState(!1),
        [I, M] = l.useState(!1),
        [v, y] = l.useState(!1);
    return (
        l.useEffect(() => {
            let n = setTimeout(() => {
                if (s === h.Si.TIER_2) ((null == e ? void 0 : e.code) === d.SM.BILLING_INSUFFICIENT_FUNDS || (null == t ? void 0 : t.code) === d.SM.BILLING_INSUFFICIENT_FUNDS) && y(!0);
            }, 1500);
            return () => clearTimeout(n);
        }, [t, e, s, y]),
        (0, i.jsxs)('div', {
            className: r()(_.upsellContainer, v ? _.interactable : null),
            hidden: I,
            children: [
                (0, i.jsx)(c.H, {}),
                (0, i.jsx)(c.Z, {
                    show: v,
                    children: (0, i.jsx)(u.L, {
                        message: f.intl.format(f.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => S(!0),
                                        onMouseLeave: () => S(!1),
                                        children: e
                                    },
                                    'post-failure-nitro-basic-upsell-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            n(null), a.Z.wait(C.pB), a.Z.wait(o.fw), g(f.intl.string(f.t['/5p4ws'])), m(h.Si.TIER_0);
                            let e = h.Xh.PREMIUM_MONTH_TIER_0;
                            (null == j ? void 0 : j.id) === h.Xh.PREMIUM_YEAR_TIER_2 && (e = h.Xh.PREMIUM_YEAR_TIER_0), L(e), M(!0);
                        },
                        handleClose: () => M(!0),
                        handleImageClick: () => {},
                        buttonText: f.intl.string(f.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: 'post-failure-nitro-basic-upsell',
                        themeOverride: u.T.NITRO_BASIC
                    })
                }),
                E &&
                    (0, i.jsxs)('div', {
                        className: _.tooltip,
                        children: [
                            (0, i.jsx)(p.lq, {
                                className: _.tier0Card,
                                showWumpus: !0,
                                showYearlyPrice: !0
                            }),
                            (0, i.jsx)('div', { className: _.tooltipTail })
                        ]
                    })
            ]
        })
    );
}
