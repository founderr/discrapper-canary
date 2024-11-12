n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(996146),
    c = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(605236),
    p = n(243778),
    h = n(963249),
    m = n(599659),
    g = n(282925),
    E = n(819640),
    v = n(594174),
    I = n(70956),
    b = n(709054),
    S = n(51144),
    T = n(443603),
    y = n(981631),
    A = n(921944),
    N = n(388032),
    C = n(679583),
    R = n(703130);
let O = I.Z.Millis.DAYS_30;
function D(e) {
    let { animatedIconComponent: t, hovered: i, isCoachmarkDismissed: a } = e,
        o = !a || i;
    return (0, r.jsxs)('div', {
        className: C.iconContainer,
        children: [
            (0, r.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: o,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, r.jsx)('div', {
                className: s()(C.giftIconButton, { [C.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, r.jsx)(t, { color: 'currentColor' })
            }),
            (0, r.jsx)('div', {
                className: s()(C.decorativeLayer, { [C.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, r.jsx)(c.LottieAnimation, {
                    shouldAnimate: o,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, f.ZP)(d.Z.GIFT_BUTTON),
        [s, c] = i.useState(!1),
        I = (0, o.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        L = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        x = null != L ? b.default.age(L.id) : 0,
        { enabled: w } = m.O.useExperiment({ location: 'gift-button' }),
        M = [];
    w && !t && I && x >= O && M.push(l.z.NITROWEEN_COACHMARKS);
    let [P, k] = (0, p.US)(M),
        U = null != P,
        G = (0, S.Ft)(n),
        { Component: B, events: Z, play: F } = (0, u.$)();
    if (t) return null;
    let V = () => {
        (0, h.Z)({
            isGift: !0,
            giftRecipient: null == G ? void 0 : G,
            giftMessage: N.intl.string(N.t['rX/m/f']),
            initialPlanId: null,
            analyticsLocations: a,
            analyticsObject: {
                page: n.isPrivate() ? y.ZY5.DM_CHANNEL : y.ZY5.GUILD_CHANNEL,
                section: y.jXE.CHANNEL_TEXT_AREA,
                object: y.qAy.NITROWEEN_BUTTON_ICON,
                objectType: y.Qqv.GIFT
            }
        });
    };
    return (0, r.jsxs)('div', {
        className: C.container,
        onMouseEnter: () => {
            !s && c(!0);
        },
        onMouseLeave: () => {
            c(!1);
        },
        children: [
            U &&
                (0, r.jsx)(g.Z, {
                    onComplete: () => c(!1),
                    onCheckItOutClick: V,
                    markAsDismissed: k
                }),
            (0, r.jsx)(T.Z, {
                innerClassName: R.button,
                'aria-label': N.intl.string(N.t.Z1RnTk),
                isActive: !1,
                onClick: () => {
                    F(), c(!1), (0, _.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: A.L.TAKE_ACTION }), V();
                },
                ...Z,
                children: (0, r.jsx)(D, {
                    animatedIconComponent: B,
                    hovered: s,
                    isCoachmarkDismissed: !U
                })
            })
        ]
    });
});
