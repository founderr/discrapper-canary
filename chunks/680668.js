n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(789020);
var i = n(735250);
n(470079);
var a = n(533800),
    o = n(481060),
    s = n(358555),
    l = n(955415),
    u = n(131704),
    c = n(630388),
    d = n(267642),
    _ = n(411198),
    E = n(277707),
    f = n(358595),
    h = n(981631),
    p = n(689938),
    m = n(691784);
function I(e) {
    var t, r;
    let I,
        T,
        g,
        { onTransitionToInviteChannel: S, onAcceptInstantInvite: A, guild: v, invite: N, author: O, currentUserId: R } = e,
        C = R === O.id,
        { channel: y, approximate_member_count: b, approximate_presence_count: L } = N,
        D = N.state === h.r2o.ACCEPTING,
        M = null != y ? (0, u.jD)(y) : null,
        P = null != v,
        U = null != M,
        w = null != M && M.isGuildVocal(),
        x = null != M && M.isGuildStageVoice(),
        G = (0, c.yE)(null !== (t = N.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        k = null !== (r = null == v ? void 0 : v.hasFeature(h.oNc.HUB)) && void 0 !== r && r;
    if (null == v) {
        if (null == N.guild) return (0, i.jsx)(f.Z, {});
        v = _.Qs(N.guild);
        let e = (0, d.rF)(N.guild.premium_subscription_count, N.guild.id);
        v.premiumTier = e;
    }
    let B = P ? S : A,
        F = (0, E.e)({
            isVoiceChannel: w,
            isOwnInvite: C,
            isGuest: G,
            isHubGuild: k,
            isStage: x,
            isStream: !1
        });
    return (
        (T = (0, i.jsxs)('span', {
            className: m.infoTitle,
            children: [
                (0, i.jsx)(l.Z.GuildName, { guild: v }),
                (0, i.jsx)('span', {
                    className: m.infoBadge,
                    children: (0, i.jsx)(s.Z, {
                        guild: v,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        G &&
            (g = (0, i.jsx)(o.TooltipContainer, {
                className: m.tooltipContainer,
                text: p.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                children: (0, i.jsx)(o.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.infoIcon
                })
            })),
        w
            ? ((T = (0, i.jsx)(l.Z.Channel, { channel: M })),
              (I = (0, i.jsxs)('span', {
                  className: m.infoTitle,
                  children: [
                      p.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: v.name }),
                      (0, i.jsx)('span', {
                          className: m.infoBadge,
                          children: (0, i.jsx)(s.Z, {
                              guild: v,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != b && b >= 5) || (null != L && L > 0)
              ? (I = (0, i.jsx)(l.Z.Data, {
                    members: b,
                    membersOnline: L
                }))
              : U &&
                (I = (0, i.jsx)(l.Z.Channel, {
                    channel: M,
                    guild: v
                })),
        (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.GuildSplash, { guild: v }),
                (0, i.jsx)(l.Z.Header, {
                    text: F,
                    extra: g
                }),
                (0, i.jsxs)(l.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, i.jsx)(l.Z.Icon, { guild: v }),
                                (0, i.jsx)(l.Z.Info, {
                                    title: T,
                                    onClick: P ? B : null,
                                    children: I
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Z.Button, {
                            onClick: B,
                            submitting: D,
                            color: l.Z.Button.Colors.GREEN,
                            children: w ? (x ? p.Z.Messages.STAGE_CHANNEL_JOIN : p.Z.Messages.INVITE_VOICE_CHANNEL_JOIN) : P ? p.Z.Messages.JOINED_GUILD : p.Z.Messages.JOIN_GUILD
                        })
                    ]
                }),
                v.hasFeature(h.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: m.separator }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: p.Z.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
                                    onClick: () =>
                                        (0, o.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('16325')]).then(n.bind(n, 650233));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        })
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
