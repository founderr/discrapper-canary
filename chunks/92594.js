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
    let { purchaseError: e, setPurchaseError: t, selectedSkuId: n, selectedPlan: f, setSelectedSkuId: _, setSelectedPlanId: j, setSelectedPlanNotification: m } = (0, c.usePaymentContext)(),
        [L, g] = l.useState(!1),
        [E, S] = l.useState(!1),
        [I, M] = l.useState(!1);
    return (
        l.useEffect(() => {
            let t = setTimeout(() => {
                n === p.Si.TIER_2 && (null == e ? void 0 : e.code) === o.SM.BILLING_INSUFFICIENT_FUNDS && M(!0);
            }, 1500);
            return () => clearTimeout(t);
        }, [e, n, M]),
        (0, i.jsxs)('div', {
            className: h.upsellContainer,
            hidden: E,
            children: [
                (0, i.jsx)(d.H, {}),
                (0, i.jsx)(d.Z, {
                    show: I,
                    children: (0, i.jsx)(C.L, {
                        message: x.intl.format(x.t.dk8zl5, {
                            perkHover: (e, t) =>
                                (0, i.jsx)(
                                    'span',
                                    {
                                        onMouseEnter: () => g(!0),
                                        onMouseLeave: () => g(!1),
                                        children: e
                                    },
                                    'post-upsell-action-perk-hover'
                                )
                        }),
                        handleClick: () => {
                            s.Z.wait(r.fw), s.Z.wait(a.pB), t(null), m(x.intl.string(x.t['/5p4ws'])), _(p.Si.TIER_0);
                            let e = p.Xh.PREMIUM_MONTH_TIER_0;
                            (null == f ? void 0 : f.id) === p.Xh.PREMIUM_YEAR_TIER_2 && (e = p.Xh.PREMIUM_YEAR_TIER_0), j(e), S(!0);
                        },
                        handleClose: () => S(!0),
                        handleImageClick: () => {},
                        buttonText: x.intl.string(x.t['7aa9vr']),
                        useInitialGlow: !0,
                        useGlowOnHover: !0,
                        upsellType: C.T.NITRO_BASIC
                    })
                }),
                L &&
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
