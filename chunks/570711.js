var r = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    s = t(906732),
    o = t(963249),
    l = t(703656),
    C = t(594174),
    d = t(451478),
    c = t(981631),
    u = t(689938),
    _ = t(129559);
n.Z = function (e) {
    let { subscriptionTier: n, initialPlanId: t, giftStyle: p, onClick: f, buttonText: h, analyticsLocation: x, analyticsLocationsOverride: L, repeatPurchase: I, ...g } = e,
        E = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        m = (0, a.e7)([d.Z], () => d.Z.isFocused()),
        { analyticsLocations: M } = (0, s.ZP)();
    return (0, r.jsx)(i.ShinyButton, {
        pauseAnimation: !m,
        className: _.tier2Gradient,
        color: i.Button.Colors.CUSTOM,
        onClick: (e) => {
            if ((e.preventDefault(), null == E)) {
                (0, l.uL)(c.Z5c.LOGIN);
                return;
            }
            null == f || f(e),
                (0, o.Z)({
                    subscriptionTier: n,
                    initialPlanId: t,
                    isGift: !0,
                    giftStyle: p,
                    analyticsLocation: x,
                    analyticsLocations: null != L ? L : M,
                    analyticsObject: {
                        object: c.qAy.BUTTON_CTA,
                        objectType: c.Qqv.GIFT
                    },
                    repeatPurchase: I
                });
        },
        ...g,
        children: (0, r.jsx)(i.Text, {
            variant: 'text-sm/medium',
            color: 'none',
            className: _.buttonText,
            children: null != h ? h : u.Z.Messages.PREMIUM_GIFTING_BUTTON
        })
    });
};
