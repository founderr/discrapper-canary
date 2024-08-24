t.d(s, {
    Z: function () {
        return S;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(570140),
    r = t(230711),
    o = t(100527),
    l = t(963249),
    c = t(514851),
    d = t(922518),
    _ = t(643939),
    E = t(45595),
    u = t(474936),
    I = t(981631),
    T = t(689938);
function S() {
    let e = (0, a.e7)([d.Z], () => d.Z.shouldDisplayUpsell(), []),
        s = c.Z.getForCampaign(I.$Dd.CASH_APP_PAY_AWARENESS),
        t = null != s && !0 === s.is_eligible;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(E.H, {}),
            (0, n.jsx)(E.Z, {
                show: t && e,
                children: (0, n.jsx)(_.L, {
                    message: T.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_UPSELL_CONTENT,
                    handleClick: () => {
                        i.Z.dispatch({ type: 'CASH_APP_PAY_AWARENESS_UPSELL_CTA_CLICKED' }),
                            (0, l.Z)({
                                subscriptionTier: u.Si.TIER_2,
                                analyticsLocations: [o.Z.CHECKOUT_RECOVERY_NAGBAR],
                                analyticsLocation: I.Sbl.CHECKOUT_RECOVERY_NAGBAR
                            });
                    },
                    handleClose: () => {
                        i.Z.dispatch({ type: 'CASH_APP_PAY_AWARENESS_UPSELL_DISMISSED' });
                    },
                    handleImageClick: () => {
                        r.Z.open(I.oAB.PREMIUM);
                    },
                    buttonText: T.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_UPSELL_CTA,
                    useInitialGlow: !0,
                    useGlowOnHover: !0
                })
            })
        ]
    });
}
