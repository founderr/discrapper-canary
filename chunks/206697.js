n.d(t, {
    w: function () {
        return R;
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
    d = n(436774),
    _ = n(294218),
    E = n(197115),
    I = n(695346),
    m = n(594174),
    T = n(111361),
    h = n(74538),
    N = n(997486),
    f = n(981631),
    C = n(474936),
    p = n(689938),
    g = n(591047),
    S = n(80706);
let A = {
    offset: {
        left: 4,
        right: -12
    }
};
function R() {
    let e = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        t = (0, T.I5)(e, C.p9.TIER_2),
        { fakeMessage: n, fakeChannel: s } = a.useMemo(() => (0, N.Z)({ showAttachment: !1 }), []);
    return (0, i.jsxs)('div', {
        className: S.messagesScroller,
        children: [
            (0, i.jsx)('div', {
                className: S.messageContainer,
                children: (0, i.jsx)(_.Z, {
                    message: n,
                    channel: s,
                    className: r()(S.message, g.tutorialMessage),
                    compact: I.jU.getSetting(),
                    animateAvatar: !1,
                    focusProps: A,
                    trackAnnouncementViews: !0
                })
            }),
            t ? null : (0, i.jsx)(x, {})
        ]
    });
}
function x() {
    let e = (0, h.Px)(C.p9.TIER_2),
        t = p.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({ nitroTierName: e });
    return (0, i.jsxs)('div', {
        className: g.upsellContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: d.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: g.upsellText,
                children: t
            }),
            (0, i.jsx)(E.Z, {
                className: g.upsellButton,
                size: u.ButtonSizes.TINY,
                shinyButtonClassName: g.upsellButton,
                subscriptionTier: C.Si.TIER_2,
                buttonText: p.Z.Messages.FOR_LATER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
