n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(735250),
    o = n(470079),
    a = n(442837),
    r = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(112831),
    u = n(411477),
    d = n(197115),
    _ = n(594174),
    b = n(626135),
    f = n(74538),
    E = n(981631),
    g = n(486324),
    R = n(474936),
    m = n(689938),
    p = n(742046);
function P(e) {
    let { analyticsSection: t, type: n } = e,
        P = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        I = f.ZP.canUseAnimatedAvatar(P),
        h = f.ZP.canUsePremiumProfileCustomization(P),
        Z = (n === g.pC.BANNER && h) || (n === g.pC.AVATAR && I),
        { sourceAnalyticsLocations: N } = (0, l.ZP)(s.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !Z &&
                b.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: N
                });
        }, [Z, t, N]),
        Z)
    )
        return null;
    let x = (0, i.jsx)(d.Z, {
        className: p.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: R.Si.TIER_2,
        buttonText: m.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: E.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: m.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: x
    });
}
