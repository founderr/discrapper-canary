n.d(i, {
    Z: function () {
        return h;
    }
});
var o = n(735250),
    t = n(470079),
    r = n(442837),
    a = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(112831),
    d = n(411477),
    u = n(197115),
    _ = n(594174),
    g = n(626135),
    E = n(74538),
    f = n(981631),
    I = n(486324),
    N = n(474936),
    T = n(689938),
    p = n(742046);
function h(e) {
    let { analyticsSection: i, type: n } = e,
        h = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        R = E.ZP.canUseAnimatedAvatar(h),
        m = E.ZP.canUsePremiumProfileCustomization(h),
        x = (n === I.pC.BANNER && m) || (n === I.pC.AVATAR && R),
        { sourceAnalyticsLocations: C } = (0, l.ZP)(s.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (t.useEffect(() => {
            !x &&
                g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: i,
                    location_stack: C
                });
        }, [x, i, C]),
        x)
    )
        return null;
    let b = (0, o.jsx)(u.Z, {
        className: p.__invalid_getNitroLink,
        size: a.Button.Sizes.SMALL,
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        subscriptionTier: N.Si.TIER_2,
        buttonText: T.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: i,
            object: f.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, o.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: T.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: b
    });
}
