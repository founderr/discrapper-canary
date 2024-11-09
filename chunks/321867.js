n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    o = n(192379),
    a = n(442837),
    r = n(481060),
    c = n(100527),
    l = n(906732),
    s = n(118012),
    u = n(411477),
    d = n(197115),
    b = n(594174),
    _ = n(626135),
    f = n(74538),
    g = n(981631),
    m = n(486324),
    p = n(474936),
    h = n(388032),
    v = n(634387);
function x(e) {
    let { analyticsSection: t, type: n } = e,
        x = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        C = f.ZP.canUseAnimatedAvatar(x),
        N = f.ZP.canUsePremiumProfileCustomization(x),
        E = (n === m.pC.BANNER && N) || (n === m.pC.AVATAR && C),
        { sourceAnalyticsLocations: A } = (0, l.ZP)(c.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !E &&
                _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: A
                });
        }, [E, t, A]),
        E)
    )
        return null;
    let R = (0, i.jsx)(d.Z, {
        className: v.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: p.Si.TIER_2,
        buttonText: h.intl.format(h.t['944tDg'], {}),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: v.nitroPreviewUpsell,
        text: h.intl.format(h.t.Og8039, {}),
        textSize: s.Z.Sizes.SIZE_14,
        textColor: s.Z.Colors.HEADER_PRIMARY,
        button: R
    });
}
