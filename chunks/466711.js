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
    S = n(388032),
    y = n(17823),
    A = n(553796);
let N = g.Z.Millis.DAYS_30;
function C(e) {
    let { giftingPromotionVersion: t, hovered: n } = e;
    if (t === _.JY) return (0, r.jsx)(p.Z, { hovered: n });
    return null;
}
t.Z = i.memo(function (e) {
    let { giftingPromotionConfig: t, disabled: n, channel: _ } = e,
        { analyticsLocations: p } = (0, u.ZP)(l.Z.GIFT_BUTTON),
        [g, R] = i.useState(!1),
        O = (0, a.e7)([h.Z], () => !(null === h.Z || void 0 === h.Z ? void 0 : h.Z.hasLayers())),
        D = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        L = null != D ? E.default.age(D.id) : 0,
        [x, w] = (0, d.XR)(!n && O && L >= N ? s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, c.t)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        P = null != x,
        M = (0, v.Ft)(_),
        k = null != M;
    if (n) return null;
    let U = () => {
        (0, f.Z)({
            isGift: !0,
            giftRecipient: null == M ? void 0 : M,
            initialPlanId: null,
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
        className: y.container,
        onMouseEnter: () => {
            !g && R(!0);
        },
        onMouseLeave: () => {
            R(!1);
        },
        children: [
            P &&
                (0, r.jsx)(o.Z, {
                    onComplete: () => R(!1),
                    onDMCheckItOutClick: U,
                    markAsDismissed: w,
                    isDM: k
                }),
            (0, r.jsx)(I.Z, {
                innerClassName: A.button,
                'aria-label': S.intl.string(S.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    R(!1), w(b.L.TAKE_ACTION), U();
                },
                children: (0, r.jsx)('div', {
                    className: y.giftIconContainer,
                    children: (0, r.jsx)(C, {
                        giftingPromotionVersion: t.dismissibleContentVersion,
                        hovered: g || P
                    })
                })
            })
        ]
    });
});
