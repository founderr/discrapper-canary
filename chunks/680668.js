n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(789020);
var i = n(735250);
n(470079);
var a = n(533800),
    s = n(481060),
    r = n(358555),
    l = n(955415),
    o = n(131704),
    c = n(630388),
    u = n(267642),
    d = n(411198),
    _ = n(277707),
    E = n(358595),
    I = n(981631),
    m = n(689938),
    T = n(691784);
function f(e) {
    var t, f;
    let h,
        N,
        p,
        { onTransitionToInviteChannel: C, onAcceptInstantInvite: g, guild: S, invite: A, author: x, currentUserId: R } = e,
        v = R === x.id,
        { channel: O, approximate_member_count: M, approximate_presence_count: L } = A,
        Z = A.state === I.r2o.ACCEPTING,
        b = null != O ? (0, o.jD)(O) : null,
        P = null != S,
        D = null != b,
        j = null != b && b.isGuildVocal(),
        U = null != b && b.isGuildStageVoice(),
        y = (0, c.yE)(null !== (t = A.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        B = null !== (f = null == S ? void 0 : S.hasFeature(I.oNc.HUB)) && void 0 !== f && f;
    if (null == S) {
        if (null == A.guild) return (0, i.jsx)(E.Z, {});
        S = d.Qs(A.guild);
        let e = (0, u.rF)(A.guild.premium_subscription_count, A.guild.id);
        S.premiumTier = e;
    }
    let k = P ? C : g,
        G = (0, _.e)({
            isVoiceChannel: j,
            isOwnInvite: v,
            isGuest: y,
            isHubGuild: B,
            isStage: U,
            isStream: !1
        });
    return (
        (N = (0, i.jsxs)('span', {
            className: T.infoTitle,
            children: [
                (0, i.jsx)(l.Z.GuildName, { guild: S }),
                (0, i.jsx)('span', {
                    className: T.infoBadge,
                    children: (0, i.jsx)(r.Z, {
                        guild: S,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        y &&
            (p = (0, i.jsx)(s.TooltipContainer, {
                className: T.tooltipContainer,
                text: m.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                children: (0, i.jsx)(s.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.infoIcon
                })
            })),
        j
            ? ((N = (0, i.jsx)(l.Z.Channel, { channel: b })),
              (h = (0, i.jsxs)('span', {
                  className: T.infoTitle,
                  children: [
                      m.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: S.name }),
                      (0, i.jsx)('span', {
                          className: T.infoBadge,
                          children: (0, i.jsx)(r.Z, {
                              guild: S,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != M && M >= 5) || (null != L && L > 0)
              ? (h = (0, i.jsx)(l.Z.Data, {
                    members: M,
                    membersOnline: L
                }))
              : D &&
                (h = (0, i.jsx)(l.Z.Channel, {
                    channel: b,
                    guild: S
                })),
        (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.GuildSplash, { guild: S }),
                (0, i.jsx)(l.Z.Header, {
                    text: G,
                    extra: p
                }),
                (0, i.jsxs)(l.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.headerLine,
                            children: [
                                (0, i.jsx)(l.Z.Icon, { guild: S }),
                                (0, i.jsx)(l.Z.Info, {
                                    title: N,
                                    onClick: P ? k : null,
                                    children: h
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Z.Button, {
                            onClick: k,
                            submitting: Z,
                            color: l.Z.Button.Colors.GREEN,
                            children: j ? (U ? m.Z.Messages.STAGE_CHANNEL_JOIN : m.Z.Messages.INVITE_VOICE_CHANNEL_JOIN) : P ? m.Z.Messages.JOINED_GUILD : m.Z.Messages.JOIN_GUILD
                        })
                    ]
                }),
                S.hasFeature(I.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: T.separator }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: m.Z.Messages.HUB_INVITE_ANOTHER_SCHOOL_LINK.format({
                                    onClick: () =>
                                        (0, s.openModalLazy)(async () => {
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
