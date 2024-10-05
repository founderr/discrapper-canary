n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(789020);
var i = n(735250);
n(470079);
var a = n(533800),
    s = n(481060),
    l = n(358555),
    r = n(955415),
    o = n(131704),
    c = n(630388),
    d = n(267642),
    u = n(411198),
    _ = n(277707),
    E = n(358595),
    I = n(981631),
    m = n(689938),
    T = n(691784);
function N(e) {
    var t, N;
    let h,
        C,
        p,
        { onTransitionToInviteChannel: f, onAcceptInstantInvite: g, guild: A, invite: S, author: M, currentUserId: x } = e,
        O = x === M.id,
        { channel: R, approximate_member_count: v, approximate_presence_count: L } = S,
        Z = S.state === I.r2o.ACCEPTING,
        P = null != R ? (0, o.jD)(R) : null,
        D = null != A,
        b = null != P,
        j = null != P && P.isGuildVocal(),
        U = null != P && P.isGuildStageVoice(),
        y = (0, c.yE)(null !== (t = S.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        B = null !== (N = null == A ? void 0 : A.hasFeature(I.oNc.HUB)) && void 0 !== N && N;
    if (null == A) {
        if (null == S.guild) return (0, i.jsx)(E.Z, {});
        A = u.Qs(S.guild);
        let e = (0, d.rF)(S.guild.premium_subscription_count, S.guild.id);
        A.premiumTier = e;
    }
    let k = D ? f : g,
        G = (0, _.e)({
            isVoiceChannel: j,
            isOwnInvite: O,
            isGuest: y,
            isHubGuild: B,
            isStage: U,
            isStream: !1
        });
    return (
        (C = (0, i.jsxs)('span', {
            className: T.infoTitle,
            children: [
                (0, i.jsx)(r.Z.GuildName, { guild: A }),
                (0, i.jsx)('span', {
                    className: T.infoBadge,
                    children: (0, i.jsx)(l.Z, {
                        guild: A,
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
            ? ((C = (0, i.jsx)(r.Z.Channel, { channel: P })),
              (h = (0, i.jsxs)('span', {
                  className: T.infoTitle,
                  children: [
                      m.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: A.name }),
                      (0, i.jsx)('span', {
                          className: T.infoBadge,
                          children: (0, i.jsx)(l.Z, {
                              guild: A,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != v && v >= 5) || (null != L && L > 0)
              ? (h = (0, i.jsx)(r.Z.Data, {
                    members: v,
                    membersOnline: L
                }))
              : b &&
                (h = (0, i.jsx)(r.Z.Channel, {
                    channel: P,
                    guild: A
                })),
        (0, i.jsxs)(r.Z, {
            children: [
                (0, i.jsx)(r.Z.GuildSplash, { guild: A }),
                (0, i.jsx)(r.Z.Header, {
                    text: G,
                    extra: p
                }),
                (0, i.jsxs)(r.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: T.headerLine,
                            children: [
                                (0, i.jsx)(r.Z.Icon, { guild: A }),
                                (0, i.jsx)(r.Z.Info, {
                                    title: C,
                                    onClick: D ? k : null,
                                    children: h
                                })
                            ]
                        }),
                        (0, i.jsx)(r.Z.Button, {
                            onClick: k,
                            submitting: Z,
                            color: r.Z.Button.Colors.GREEN,
                            children: j ? (U ? m.Z.Messages.STAGE_CHANNEL_JOIN : m.Z.Messages.INVITE_VOICE_CHANNEL_JOIN) : D ? m.Z.Messages.JOINED_GUILD : m.Z.Messages.JOIN_GUILD
                        })
                    ]
                }),
                A.hasFeature(I.oNc.HUB) &&
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
