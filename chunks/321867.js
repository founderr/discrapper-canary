n.d(t, {
    Z: function () {
        return I;
    }
});
var a = n(735250),
    o = n(470079),
    i = n(442837),
    r = n(481060),
    c = n(100527),
    s = n(906732),
    l = n(112831),
    u = n(411477),
    d = n(197115),
    _ = n(594174),
    b = n(626135),
    f = n(74538),
    g = n(981631),
    E = n(486324),
    m = n(474936),
    R = n(689938),
    p = n(634387);
function I(e) {
    let { analyticsSection: t, type: n } = e,
        I = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        v = f.ZP.canUseAnimatedAvatar(I),
        h = f.ZP.canUsePremiumProfileCustomization(I),
        P = (n === E.pC.BANNER && h) || (n === E.pC.AVATAR && v),
        { sourceAnalyticsLocations: x } = (0, s.ZP)(c.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !P &&
                b.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: x
                });
        }, [P, t, x]),
        P)
    )
        return null;
    let C = (0, a.jsx)(d.Z, {
        className: p.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: m.Si.TIER_2,
        buttonText: R.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, a.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: R.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: l.Z.Sizes.SIZE_14,
        textColor: l.Z.Colors.HEADER_PRIMARY,
        button: C
    });
}
