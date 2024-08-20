n.d(t, {
    w: function () {
        return L;
    }
});
var i = n(735250),
    a = n(120356),
    s = n.n(a),
    r = n(106351),
    l = n(657707),
    o = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(436774),
    _ = n(786761),
    E = n(3148),
    I = n(294218),
    m = n(197115),
    T = n(695346),
    h = n(131704),
    N = n(598077),
    f = n(594174),
    C = n(111361),
    p = n(74538),
    g = n(981631),
    S = n(474936),
    A = n(689938),
    R = n(591047),
    x = n(80706),
    O = n(305682);
let M = {
        offset: {
            left: 4,
            right: -12
        }
    },
    v = '1337';
function L() {
    let e = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
        t = (0, C.I5)(e, S.p9.TIER_2),
        { fakeMessage: n, fakeChannel: a } = (function (e) {
            let { showAttachment: t } = e,
                n = new N.Z({
                    id: '1337',
                    username: A.Z.Messages.WUMPUS,
                    avatar: 'nitro_wumpus',
                    bot: !0
                }),
                i = new h.DA({
                    id: v,
                    guild_id: '1337',
                    type: r.d.GUILD_TEXT,
                    name: ''
                });
            return {
                fakeChannel: i,
                fakeMessage: (0, _.e5)({
                    ...(0, E.ZP)({
                        channelId: v,
                        content: A.Z.Messages.FOR_LATER_TUTORIAL_MESSAGE
                    }),
                    state: g.yb.SENT,
                    id: '1337',
                    author: n,
                    attachments: t
                        ? [
                              {
                                  id: '1337',
                                  filename: 'save-message.png',
                                  url: O,
                                  proxy_url: O,
                                  width: 621,
                                  height: 432,
                                  size: 1337
                              }
                          ]
                        : void 0
                })
            };
        })({ showAttachment: t });
    return (0, i.jsxs)('div', {
        className: x.messagesScroller,
        children: [
            (0, i.jsx)('div', {
                className: x.messageContainer,
                children: (0, i.jsx)(I.Z, {
                    message: n,
                    channel: a,
                    className: s()(x.message, R.tutorialMessage),
                    compact: T.jU.getSetting(),
                    animateAvatar: !1,
                    focusProps: M,
                    trackAnnouncementViews: !0
                })
            }),
            t ? null : (0, i.jsx)(Z, {})
        ]
    });
}
function Z() {
    let e = (0, p.Px)(S.p9.TIER_2),
        t = A.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({ nitroTierName: e });
    return (0, i.jsxs)('div', {
        className: R.upsellContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: d.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: R.upsellText,
                children: t
            }),
            (0, i.jsx)(m.Z, {
                className: R.upsellButton,
                size: u.ButtonSizes.TINY,
                shinyButtonClassName: R.upsellButton,
                subscriptionTier: S.Si.TIER_2,
                buttonText: A.Z.Messages.FOR_LATER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: { section: g.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
