n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250),
    a = n(470079),
    o = n(442837),
    r = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(112831),
    d = n(411477),
    u = n(197115),
    _ = n(594174),
    h = n(626135),
    g = n(74538),
    f = n(981631),
    b = n(486324),
    p = n(474936),
    E = n(689938),
    m = n(634387);
function N(e) {
    let { analyticsSection: t, type: n } = e,
        N = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        x = g.ZP.canUseAnimatedAvatar(N),
        I = g.ZP.canUsePremiumProfileCustomization(N),
        R = (n === b.pC.BANNER && I) || (n === b.pC.AVATAR && x),
        { sourceAnalyticsLocations: v } = (0, l.ZP)(s.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (a.useEffect(() => {
            !R &&
                h.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: v
                });
        }, [R, t, v]),
        R)
    )
        return null;
    let A = (0, i.jsx)(u.Z, {
        className: m.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: E.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: m.nitroPreviewUpsell,
        text: E.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: A
    });
}
