n.d(t, {
    t: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(570140),
    r = n(366939),
    a = n(16084),
    o = n(128069),
    C = n(643939),
    d = n(45595),
    u = n(823188),
    c = n(563132),
    p = n(474936),
    x = n(388032),
    h = n(988113);
function f() {
    let { purchaseError: e, paymentError: t, setPurchaseError: n, selectedSkuId: f, selectedPlan: _, setSelectedSkuId: j, setSelectedPlanId: m, setSelectedPlanNotification: L } = (0, c.usePaymentContext)(),
        [g, E] = l.useState(!1),
        [S, I] = l.useState(!1),
        [M, v] = l.useState(!1);
    return (
        l.useEffect(() => {
            let n = setTimeout(() => {
                if (f === p.Si.TIER_2) ((null == e ? void 0 : e.code) === o.SM.BILLING_INSUFFICIENT_FUNDS || (null == t ? void 0 : t.code) === o.SM.BILLING_INSUFFICIENT_FUNDS) && v(!0);
            }, 1500);
            return () => clearTimeout(n);
        }, [t, e, f, v]),
        (0, i.jsxs)('div', {
            className: h.upsellContainer,
            hidden: S,
            children: [
                (0, i.jsx)(d.H, {}),
                (0, i.jsx)(d.Z, {
                    show: M,
                    children: (0, i.jsx)(C.L, {
                        message: x.intl.format(x.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => E(!0),
                                        onMouseLeave: () => E(!1),
                                        children: e
                                    },
                                    'post-failure-nitro-basic-upsell-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            n(null), s.Z.wait(a.pB), s.Z.wait(r.fw), L(x.intl.string(x.t['/5p4ws'])), j(p.Si.TIER_0);
                            let e = p.Xh.PREMIUM_MONTH_TIER_0;
                            (null == _ ? void 0 : _.id) === p.Xh.PREMIUM_YEAR_TIER_2 && (e = p.Xh.PREMIUM_YEAR_TIER_0), m(e), I(!0);
                        },
                        handleClose: () => I(!0),
                        handleImageClick: () => {},
                        buttonText: x.intl.string(x.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: 'post-failure-nitro-basic-upsell',
                        themeOverride: C.T.NITRO_BASIC
                    })
                }),
                g &&
                    (0, i.jsxs)('div', {
                        className: h.tooltip,
                        children: [
                            (0, i.jsx)(u.lq, {
                                className: h.tier0Card,
                                showWumpus: !0,
                                showYearlyPrice: !0
                            }),
                            (0, i.jsx)('div', { className: h.tooltipTail })
                        ]
                    })
            ]
        })
    );
}
