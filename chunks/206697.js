n.d(t, {
    w: function () {
        return x;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(657707),
    o = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(100527),
    _ = n(436774),
    E = n(294218),
    I = n(197115),
    m = n(695346),
    T = n(594174),
    h = n(111361),
    N = n(74538),
    f = n(997486),
    C = n(981631),
    p = n(474936),
    g = n(689938),
    S = n(591047),
    A = n(80706);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function x() {
    let e = (0, c.e7)([T.default], () => T.default.getCurrentUser()),
        t = (0, h.I5)(e, p.p9.TIER_2),
        { fakeMessage: n, fakeChannel: s } = a.useMemo(() => (0, f.Z)({ showAttachment: !1 }), []);
    return (0, i.jsxs)('div', {
        className: A.messagesScroller,
        children: [
            (0, i.jsx)('div', {
                className: A.messageContainer,
                children: (0, i.jsx)(E.Z, {
                    message: n,
                    channel: s,
                    className: r()(A.message, S.tutorialMessage),
                    compact: m.jU.getSetting(),
                    animateAvatar: !1,
                    focusProps: R,
                    trackAnnouncementViews: !0
                })
            }),
            t ? null : (0, i.jsx)(O, {})
        ]
    });
}
function O() {
    let e = (0, N.Px)(p.p9.TIER_2),
        t = a.useCallback(
            () =>
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: d.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        s = g.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)('div', {
        className: S.upsellContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: _.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: S.upsellText,
                children: s
            }),
            (0, i.jsx)(I.Z, {
                className: S.upsellButton,
                size: u.ButtonSizes.TINY,
                shinyButtonClassName: S.upsellButton,
                subscriptionTier: p.Si.TIER_2,
                buttonText: g.Z.Messages.FOR_LATER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: { section: C.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
