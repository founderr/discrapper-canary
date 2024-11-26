n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(704215),
    o = n(845538),
    l = n(100527),
    u = n(906732),
    c = n(644916),
    d = n(243778),
    f = n(963249),
    _ = n(906690),
    p = n(685311),
    h = n(819640),
    m = n(594174),
    g = n(70956),
    E = n(709054),
    v = n(51144),
    I = n(443603),
    T = n(981631),
    b = n(921944),
    S = n(474936),
    y = n(388032),
    A = n(17823),
    N = n(553796);
let C = g.Z.Millis.DAYS_30;
function R(e) {
    let { giftingPromotionVersion: t, hovered: n } = e;
    if (t === _.JY) return (0, r.jsx)(p.Z, { hovered: n });
    return null;
}
t.Z = i.memo(function (e) {
    let { giftingPromotionConfig: t, disabled: n, channel: _ } = e,
        { analyticsLocations: p } = (0, u.ZP)(l.Z.GIFT_BUTTON),
        [g, O] = i.useState(!1),
        D = (0, a.e7)([h.Z], () => !(null === h.Z || void 0 === h.Z ? void 0 : h.Z.hasLayers())),
        L = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        x = null != L ? E.default.age(L.id) : 0,
        [w, P] = (0, d.XR)(!n && D && x >= C ? s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, c.t)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        M = null != w,
        k = (0, v.Ft)(_),
        U = null != k;
    if (n) return null;
    let B = () => {
        (0, f.Z)({
            isGift: !0,
            giftRecipient: null == k ? void 0 : k,
            initialPlanId: null,
            subscriptionTier: S.Si.TIER_2,
            analyticsLocations: p,
            analyticsObject: {
                page: _.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                section: T.jXE.CHANNEL_TEXT_AREA,
                object: T.qAy.SEASONAL_BUTTON_ICON,
                objectType: T.Qqv.GIFT
            }
        });
    };
    return (0, r.jsxs)('div', {
        className: A.container,
        onMouseEnter: () => {
            !g && O(!0);
        },
        onMouseLeave: () => {
            O(!1);
        },
        children: [
            M &&
                (0, r.jsx)(o.Z, {
                    onComplete: () => O(!1),
                    onDMCheckItOutClick: B,
                    markAsDismissed: P,
                    isDM: U
                }),
            (0, r.jsx)(I.Z, {
                innerClassName: N.button,
                'aria-label': y.intl.string(y.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    O(!1), P(b.L.TAKE_ACTION), B();
                },
                children: (0, r.jsx)('div', {
                    className: A.giftIconContainer,
                    children: (0, r.jsx)(R, {
                        giftingPromotionVersion: t.dismissibleContentVersion,
                        hovered: g || M
                    })
                })
            })
        ]
    });
});
