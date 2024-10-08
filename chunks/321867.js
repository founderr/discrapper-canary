n.d(t, {
    Z: function () {
        return I;
    }
});
var o = n(735250),
    i = n(470079),
    a = n(442837),
    r = n(481060),
    c = n(100527),
    s = n(906732),
    l = n(112831),
    u = n(411477),
    d = n(197115),
    _ = n(594174),
    b = n(626135),
    f = n(74538),
    E = n(981631),
    g = n(486324),
    R = n(474936),
    m = n(689938),
    p = n(634387);
function I(e) {
    let { analyticsSection: t, type: n } = e,
        I = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        h = f.ZP.canUseAnimatedAvatar(I),
        v = f.ZP.canUsePremiumProfileCustomization(I),
        P = (n === g.pC.BANNER && v) || (n === g.pC.AVATAR && h),
        { sourceAnalyticsLocations: x } = (0, s.ZP)(c.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            !P &&
                b.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: t,
                    location_stack: x
                });
        }, [P, t, x]),
        P)
    )
        return null;
    let C = (0, o.jsx)(d.Z, {
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
    return (0, o.jsx)(u.Z, {
        reducedRightPadding: !0,
        className: p.nitroPreviewUpsell,
        text: m.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: l.Z.Sizes.SIZE_14,
        textColor: l.Z.Colors.HEADER_PRIMARY,
        button: C
    });
}
