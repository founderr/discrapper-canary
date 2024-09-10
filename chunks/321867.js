i.d(n, {
    Z: function () {
        return N;
    }
});
var t = i(735250),
    o = i(470079),
    a = i(442837),
    r = i(481060),
    l = i(100527),
    s = i(906732),
    c = i(112831),
    d = i(411477),
    u = i(197115),
    _ = i(594174),
    g = i(626135),
    b = i(74538),
    h = i(981631),
    f = i(486324),
    E = i(474936),
    T = i(689938),
    I = i(634387);
function N(e) {
    let { analyticsSection: n, type: i } = e,
        N = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        m = b.ZP.canUseAnimatedAvatar(N),
        p = b.ZP.canUsePremiumProfileCustomization(N),
        x = (i === f.pC.BANNER && p) || (i === f.pC.AVATAR && m),
        { sourceAnalyticsLocations: B } = (0, s.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (o.useEffect(() => {
            !x &&
                g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: n,
                    location_stack: B
                });
        }, [x, n, B]),
        x)
    )
        return null;
    let R = (0, t.jsx)(u.Z, {
        className: I.__invalid_getNitroLink,
        size: r.Button.Sizes.SMALL,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        subscriptionTier: E.Si.TIER_2,
        buttonText: T.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: n,
            object: h.qAy.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, t.jsx)(d.Z, {
        reducedRightPadding: !0,
        className: I.nitroPreviewUpsell,
        text: T.Z.Messages.PREMIUM_PREVIEW.format(),
        textSize: c.Z.Sizes.SIZE_14,
        textColor: c.Z.Colors.HEADER_PRIMARY,
        button: R
    });
}
