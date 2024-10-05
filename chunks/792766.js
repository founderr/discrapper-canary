n.d(t, {
    y: function () {
        return f;
    }
});
var s = n(735250),
    i = n(470079),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    c = n(528144),
    o = n(112831),
    E = n(686546),
    u = n(565138),
    d = n(601964),
    _ = n(598077),
    S = n(689938),
    h = n(325929);
let C = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: l } = e,
            r = new _.Z(n.user);
        return (0, s.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, s.jsx)(a.Avatar, {
                    src: r.getAvatarURL(i, l ? 16 : 24),
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: l ? null : h.avatar
                }),
                (0, s.jsx)(o.Z, {
                    size: l ? o.Z.Sizes.SIZE_12 : o.Z.Sizes.SIZE_14,
                    color: o.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : r.username
                })
            ]
        });
    },
    f = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new d.ZP(t),
            { name: l, description: r } = i;
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(c.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: S.Z.Messages.STAGE_INVITE_GUILD_HEADER
                }),
                (0, s.jsxs)('div', {
                    className: h.guild,
                    children: [
                        (0, s.jsx)(E.ZP, {
                            mask: E.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, s.jsx)(u.Z, {
                                guild: i,
                                size: u.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: h.guildInfo,
                            children: [
                                (0, s.jsx)(a.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: l
                                }),
                                (0, s.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, s.jsx)('div', { className: h.dot }),
                                        null != n && n > 0
                                            ? (0, s.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: S.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != r &&
                    '' !== r &&
                    (0, s.jsx)(a.Text, {
                        color: 'header-secondary',
                        className: h.alignStart,
                        variant: 'text-sm/normal',
                        children: r
                    })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { stageInstance: n, guild: l, isCard: _ = !1, isEmbed: f = !1, onClick: I } = e,
        m = i.useMemo(() => (null == l ? null : l instanceof d.ZP ? l : new d.ZP(l)), [l]);
    if (null == n || null == m) return null;
    let { topic: A, speaker_count: p, participant_count: R } = n,
        g = null !== (t = n.members) && void 0 !== t ? t : [],
        O = f ? g.slice(0, 3) : g,
        T = p - O.length;
    return (
        f && (T += g.length - O.length),
        (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: h.flex,
                    children: [
                        (0, s.jsxs)('div', {
                            className: h.flex,
                            children: [
                                (0, s.jsx)(a.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 24,
                                    width: 24,
                                    className: h.live
                                }),
                                (0, s.jsx)(a.Heading, {
                                    variant: 'eyebrow',
                                    className: r()(h.__invalid_label, h.live),
                                    children: S.Z.Messages.STAGE_CHANNEL_LIVE_NOW
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: h.background,
                            children: [
                                (0, s.jsx)(a.HeadphonesIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 16,
                                    width: 16,
                                    className: h.listeners
                                }),
                                (0, s.jsx)(a.Heading, {
                                    className: r()(h.__invalid_label, h.listeners),
                                    variant: 'heading-sm/semibold',
                                    children: R
                                })
                            ]
                        })
                    ]
                }),
                f &&
                    (0, s.jsxs)('div', {
                        className: r()(h.guild, { [h.embed]: f }),
                        children: [
                            (0, s.jsx)(E.ZP, {
                                mask: E.ZP.Masks.SQUIRCLE,
                                width: 20,
                                height: 20,
                                children: (0, s.jsx)(u.Z, {
                                    guild: m,
                                    size: u.Z.Sizes.MINI,
                                    active: !0
                                })
                            }),
                            (0, s.jsx)(a.Text, {
                                color: 'header-secondary',
                                className: h.__invalid_label,
                                variant: 'text-sm/normal',
                                children: m.name
                            })
                        ]
                    }),
                (0, s.jsx)(c.Z, {
                    size: _ || f ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_20,
                    className: r()(h.header, { [h.embed]: f }),
                    children: A
                }),
                (0, s.jsxs)('div', {
                    className: r()(h.members, { [h.embed]: f }),
                    children: [
                        O.length > 0 &&
                            (0, s.jsxs)('div', {
                                className: h.speakers,
                                children: [
                                    O.map((e) =>
                                        (0, s.jsx)(
                                            C,
                                            {
                                                speaker: e,
                                                guildId: m.id,
                                                isEmbed: f
                                            },
                                            e.user.id
                                        )
                                    ),
                                    T > 0
                                        ? (0, s.jsxs)('div', {
                                              className: h.speaker,
                                              children: [
                                                  (0, s.jsx)('div', {
                                                      className: r()(h.icon, { [h.embed]: f }),
                                                      children: (0, s.jsx)(a.MicrophoneIcon, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: f ? 12 : 14,
                                                          className: h.listeners
                                                      })
                                                  }),
                                                  (0, s.jsxs)(o.Z, {
                                                      size: f ? o.Z.Sizes.SIZE_12 : o.Z.Sizes.SIZE_14,
                                                      color: o.Z.Colors.HEADER_SECONDARY,
                                                      children: ['+', S.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({ count: T })]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                        f &&
                            (0, s.jsx)(a.Button, {
                                color: a.Button.Colors.GREEN,
                                onClick: I,
                                className: h.joinButton,
                                children: S.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
                            })
                    ]
                })
            ]
        })
    );
};
