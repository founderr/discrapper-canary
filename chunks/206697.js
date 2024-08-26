n.d(t, {
    w: function () {
        return Z;
    }
});
var i = n(735250),
    s = n(120356),
    a = n.n(s),
    r = n(106351),
    l = n(657707),
    o = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(436774),
    _ = n(93735),
    E = n(786761),
    I = n(3148),
    m = n(294218),
    T = n(197115),
    h = n(695346),
    N = n(131704),
    C = n(598077),
    f = n(594174),
    p = n(111361),
    g = n(74538),
    S = n(981631),
    A = n(474936),
    R = n(689938),
    x = n(591047),
    O = n(80706),
    M = n(305682);
let v = {
        offset: {
            left: 4,
            right: -12
        }
    },
    L = '1337';
function Z() {
    let e = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        t = (0, p.I5)(e, A.p9.TIER_2),
        { fakeMessage: n, fakeChannel: s } = (function (e) {
            let { showAttachment: t } = e,
                n = new C.Z({
                    id: '1337',
                    username: R.Z.Messages.WUMPUS,
                    avatar: 'nitro_wumpus',
                    bot: !0
                }),
                i = new N.DA({
                    id: L,
                    guild_id: '1337',
                    type: r.d.GUILD_TEXT,
                    name: ''
                }),
                s = {
                    id: '1337',
                    filename: 'save-message.png',
                    url: M,
                    proxy_url: M,
                    width: 621,
                    height: 432,
                    size: 1337,
                    content_scan_version: (0, _.Qy)()
                };
            return {
                fakeChannel: i,
                fakeMessage: (0, E.e5)({
                    ...(0, I.ZP)({
                        channelId: L,
                        content: R.Z.Messages.FOR_LATER_TUTORIAL_MESSAGE
                    }),
                    state: S.yb.SENT,
                    id: '1337',
                    author: n,
                    attachments: t ? [s] : void 0
                })
            };
        })({ showAttachment: t });
    return (0, i.jsxs)('div', {
        className: O.messagesScroller,
        children: [
            (0, i.jsx)('div', {
                className: O.messageContainer,
                children: (0, i.jsx)(m.Z, {
                    message: n,
                    channel: s,
                    className: a()(O.message, x.tutorialMessage),
                    compact: h.jU.getSetting(),
                    animateAvatar: !1,
                    focusProps: v,
                    trackAnnouncementViews: !0
                })
            }),
            t ? null : (0, i.jsx)(P, {})
        ]
    });
}
function P() {
    let e = (0, g.Px)(A.p9.TIER_2),
        t = R.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({ nitroTierName: e });
    return (0, i.jsxs)('div', {
        className: x.upsellContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: d.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: x.upsellText,
                children: t
            }),
            (0, i.jsx)(T.Z, {
                className: x.upsellButton,
                size: u.ButtonSizes.TINY,
                shinyButtonClassName: x.upsellButton,
                subscriptionTier: A.Si.TIER_2,
                buttonText: R.Z.Messages.FOR_LATER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: { section: S.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
