n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var r = n(533800),
    l = n(481060),
    a = n(358555),
    o = n(955415),
    s = n(131704),
    c = n(630388),
    u = n(267642),
    d = n(411198),
    m = n(277707),
    f = n(358595),
    h = n(981631),
    p = n(388032),
    g = n(691784);
function _(e) {
    var t, _;
    let C,
        E,
        I,
        { onTransitionToInviteChannel: x, onAcceptInstantInvite: v, guild: N, invite: T, author: S, currentUserId: b } = e,
        A = b === S.id,
        { channel: j, approximate_member_count: Z, approximate_presence_count: R } = T,
        P = T.state === h.r2o.ACCEPTING,
        y = null != j ? (0, s.jD)(j) : null,
        L = null != N,
        O = null != y,
        M = null != y && y.isGuildVocal(),
        k = null != y && y.isGuildStageVoice(),
        D = (0, c.yE)(null !== (t = T.flags) && void 0 !== t ? t : 0, r.$.IS_GUEST_INVITE),
        B = null !== (_ = null == N ? void 0 : N.hasFeature(h.oNc.HUB)) && void 0 !== _ && _;
    if (null == N) {
        if (null == T.guild) return (0, i.jsx)(f.Z, {});
        N = d.Qs(T.guild);
        let e = (0, u.rF)(T.guild.premium_subscription_count, T.guild.id);
        N.premiumTier = e;
    }
    let w = L ? x : v,
        U = (0, m.e)({
            isVoiceChannel: M,
            isOwnInvite: A,
            isGuest: D,
            isHubGuild: B,
            isStage: k,
            isStream: !1
        });
    return (
        (E = (0, i.jsxs)('span', {
            className: g.infoTitle,
            children: [
                (0, i.jsx)(o.Z.GuildName, { guild: N }),
                (0, i.jsx)('span', {
                    className: g.infoBadge,
                    children: (0, i.jsx)(a.Z, {
                        guild: N,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        D &&
            (I = (0, i.jsx)(l.TooltipContainer, {
                className: g.tooltipContainer,
                text: p.intl.string(p.t['/FeTKy']),
                children: (0, i.jsx)(l.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.infoIcon
                })
            })),
        M
            ? ((E = (0, i.jsx)(o.Z.Channel, { channel: y })),
              (C = (0, i.jsxs)('span', {
                  className: g.infoTitle,
                  children: [
                      p.intl.format(p.t['2wimj4'], { guildName: N.name }),
                      (0, i.jsx)('span', {
                          className: g.infoBadge,
                          children: (0, i.jsx)(a.Z, {
                              guild: N,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != Z && Z >= 5) || (null != R && R > 0)
              ? (C = (0, i.jsx)(o.Z.Data, {
                    members: Z,
                    membersOnline: R
                }))
              : O &&
                (C = (0, i.jsx)(o.Z.Channel, {
                    channel: y,
                    guild: N
                })),
        (0, i.jsxs)(o.Z, {
            children: [
                (0, i.jsx)(o.Z.GuildSplash, { guild: N }),
                (0, i.jsx)(o.Z.Header, {
                    text: U,
                    extra: I
                }),
                (0, i.jsxs)(o.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.headerLine,
                            children: [
                                (0, i.jsx)(o.Z.Icon, { guild: N }),
                                (0, i.jsx)(o.Z.Info, {
                                    title: E,
                                    onClick: L ? w : null,
                                    children: C
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Z.Button, {
                            onClick: w,
                            submitting: P,
                            color: o.Z.Button.Colors.GREEN,
                            children: M ? (k ? p.intl.string(p.t['7vb2cX']) : p.intl.string(p.t.gpqgam)) : L ? p.intl.string(p.t.cEnaW1) : p.intl.string(p.t.XpeFYm)
                        })
                    ]
                }),
                N.hasFeature(h.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: g.separator }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: p.intl.format(p.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, l.openModalLazy)(async () => {
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
