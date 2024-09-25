var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(442837),
    c = n(704215),
    d = n(996146),
    _ = n(481060),
    E = n(100527),
    f = n(906732),
    h = n(605236),
    p = n(243778),
    m = n(963249),
    I = n(599659),
    T = n(282925),
    g = n(819640),
    S = n(594174),
    A = n(70956),
    v = n(709054),
    N = n(51144),
    O = n(443603),
    R = n(981631),
    C = n(921944),
    y = n(689938),
    b = n(679583),
    L = n(933283);
let D = A.Z.Millis.DAYS_30;
function M(e) {
    let { animatedIconComponent: t, hovered: r, isCoachmarkDismissed: i } = e,
        o = !i || r;
    return (0, a.jsxs)('div', {
        className: b.iconContainer,
        children: [
            (0, a.jsx)('div', {
                className: l()(b.decorativeLayer, { [b.decorativeLayerActive]: o }),
                style: { zIndex: 3 },
                children: (0, a.jsx)(_.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('39298').then(n.t.bind(n, 324952, 19))
                })
            }),
            (0, a.jsx)('div', {
                className: l()(b.giftIconButton, { [b.giftIconButtonActive]: o }),
                style: { zIndex: 2 },
                children: (0, a.jsx)(t, { color: 'currentColor' })
            }),
            (0, a.jsx)('div', {
                className: l()(b.decorativeLayer, { [b.decorativeLayerActive]: o }),
                style: { zIndex: 1 },
                children: (0, a.jsx)(_.LottieAnimation, {
                    shouldAnimate: !0,
                    importData: () => n.e('58889').then(n.t.bind(n, 593162, 19))
                })
            })
        ]
    });
}
function P(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: r } = (0, f.ZP)(E.Z.GIFT_BUTTON),
        [i, s] = o.useState(!1),
        l = (0, u.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        _ = (0, u.e7)([S.default], () => S.default.getCurrentUser()),
        A = null != _ ? v.default.age(_.id) : 0,
        P = !t && l && A >= D,
        { enabled: U } = I.O.useExperiment({ location: 'gift-button' }),
        w = [];
    U && P && w.push(c.z.NITROWEEN_COACHMARKS);
    let [x, G] = (0, p.US)(w),
        k = null != x,
        B = (0, N.Ft)(n),
        { Component: F, events: Z, play: V } = (0, d.$)();
    if (t) return null;
    let H = () => {
        (0, m.Z)({
            isGift: !0,
            giftRecipient: null == B ? void 0 : B,
            giftMessage: y.Z.Messages.NITROWEEN_DESKTOP_GIFT_PURCHASE_PLACEHOLDER,
            initialPlanId: null,
            analyticsLocations: r,
            analyticsObject: {
                page: n.isPrivate() ? R.ZY5.DM_CHANNEL : R.ZY5.GUILD_CHANNEL,
                section: R.jXE.CHANNEL_TEXT_AREA,
                object: R.qAy.NITROWEEN_BUTTON_ICON,
                objectType: R.Qqv.GIFT
            }
        });
    };
    return (0, a.jsxs)('div', {
        className: b.container,
        onMouseEnter: () => {
            !i && s(!0);
        },
        onMouseLeave: () => {
            s(!1);
        },
        children: [
            k &&
                (0, a.jsx)(T.Z, {
                    onComplete: () => s(!1),
                    onCheckItOutClick: H,
                    markAsDismissed: G
                }),
            (0, a.jsx)(O.Z, {
                innerClassName: L.button,
                'aria-label': y.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                isActive: !1,
                onClick: () => {
                    V(), s(!1), (0, h.EW)(c.z.NITROWEEN_ANIMATED_GIFTING_ICON, { dismissAction: C.L.TAKE_ACTION }), H();
                },
                ...Z,
                children: (0, a.jsx)(M, {
                    animatedIconComponent: F,
                    hovered: i,
                    isCoachmarkDismissed: !k
                })
            })
        ]
    });
}
t.Z = o.memo(P);
