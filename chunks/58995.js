n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(996146),
    c = n(481060),
    d = n(100527),
    _ = n(906732),
    E = n(605236),
    f = n(243778),
    h = n(963249),
    p = n(599659),
    I = n(282925),
    m = n(819640),
    T = n(594174),
    S = n(70956),
    g = n(709054),
    A = n(51144),
    N = n(443603),
    O = n(981631),
    R = n(921944),
    v = n(474936),
    C = n(689938),
    y = n(679583),
    L = n(933283);
let D = S.Z.Millis.DAYS_30;
function b(e) {
    let { animatedIconComponent: t, hovered: i, isCoachmarkDismissed: a } = e,
        o = !a || i;
    return (0, r.jsxs)('div', {
        className: y.iconContainer,
        children: [
            (0, r.jsx)('div', {
                className: s()(y.decorativeLayer, { [y.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, r.jsx)('div', {
                className: s()(y.giftIconButton, { [y.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, r.jsx)(t, { color: 'currentColor' })
            }),
            (0, r.jsx)('div', {
                className: s()(y.decorativeLayer, { [y.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(d.Z.GIFT_BUTTON),
        [s, S] = i.useState(!1),
        M = (0, o.e7)([m.Z], () => !(null === m.Z || void 0 === m.Z ? void 0 : m.Z.hasLayers())),
        P = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
        U = null != P ? g.default.age(P.id) : 0,
        { enabled: w } = p.O.useExperiment({ location: 'gift-button' }),
        x = [];
    w && !t && M && U >= D && x.push(l.z.NITROWEEN_ANIMATED_GIFTING_ICON);
    let [G, k] = (0, f.US)(x),
        B = null != G,
        F = (0, A.Ft)(n),
        { Component: V, events: H, play: Z } = (0, u.$)();
    if (t) return null;
    let Y = () => {
            (0, h.Z)({
                isGift: !0,
                giftRecipient: null == F ? void 0 : F,
                initialPlanId: null,
                subscriptionTier: v.Si.TIER_2,
                analyticsLocations: a,
                analyticsObject: {
                    page: n.isPrivate() ? O.ZY5.DM_CHANNEL : O.ZY5.GUILD_CHANNEL,
                    section: O.jXE.CHANNEL_TEXT_AREA,
                    object: O.qAy.NITROWEEN_BUTTON_ICON,
                    objectType: O.Qqv.GIFT
                }
            });
        },
        j = (0, r.jsxs)('div', {
            className: y.container,
            onMouseEnter: () => {
                !s && S(!0);
            },
            onMouseLeave: () => {
                S(!1);
            },
            children: [
                B &&
                    (0, r.jsx)(I.Z, {
                        onComplete: () => S(!1),
                        onCheckItOutClick: Y,
                        markAsDismissed: k
                    }),
                (0, r.jsx)(N.Z, {
                    innerClassName: L.button,
                    'aria-label': C.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    isActive: !1,
                    onClick: () => {
                        Z(), S(!1), (0, E.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: R.L.TAKE_ACTION }), Y();
                    },
                    ...H,
                    children: (0, r.jsx)(b, {
                        animatedIconComponent: V,
                        hovered: s,
                        isCoachmarkDismissed: !B
                    })
                })
            ]
        });
    return B
        ? j
        : (0, r.jsx)(c.TooltipContainer, {
              className: y.container,
              text: C.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE,
              children: j
          });
});
