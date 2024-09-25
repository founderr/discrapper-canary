n.d(t, {
    y: function () {
        return g;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(528144),
    u = n(112831),
    c = n(686546),
    d = n(565138),
    _ = n(601964),
    E = n(598077),
    f = n(689938),
    h = n(325929);
let p = 24,
    m = 16,
    I = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: a } = e,
            o = new E.Z(n.user);
        return (0, r.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, r.jsx)(s.Avatar, {
                    src: o.getAvatarURL(i, a ? 16 : 24),
                    size: a ? s.AvatarSizes.SIZE_16 : s.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: a ? null : h.avatar
                }),
                (0, r.jsx)(u.Z, {
                    size: a ? u.Z.Sizes.SIZE_12 : u.Z.Sizes.SIZE_14,
                    color: u.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : o.username
                })
            ]
        });
    },
    T = (e) => {
        var t;
        let { stageInstance: n, guild: a, isCard: E = !1, isEmbed: T = !1, onClick: g } = e,
            S = i.useMemo(() => (null == a ? null : a instanceof _.ZP ? a : new _.ZP(a)), [a]);
        if (null == n || null == S) return null;
        let { topic: A, speaker_count: v, participant_count: N } = n,
            O = null !== (t = n.members) && void 0 !== t ? t : [],
            R = T ? O.slice(0, 3) : O,
            C = v - R.length;
        return (
            T && (C += O.length - R.length),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: h.flex,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h.flex,
                                children: [
                                    (0, r.jsx)(s.StageIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: p,
                                        width: p,
                                        className: h.live
                                    }),
                                    (0, r.jsx)(s.Heading, {
                                        variant: 'eyebrow',
                                        className: o()(h.__invalid_label, h.live),
                                        children: f.Z.Messages.STAGE_CHANNEL_LIVE_NOW
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: h.background,
                                children: [
                                    (0, r.jsx)(s.HeadphonesIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        height: m,
                                        width: m,
                                        className: h.listeners
                                    }),
                                    (0, r.jsx)(s.Heading, {
                                        className: o()(h.__invalid_label, h.listeners),
                                        variant: 'heading-sm/semibold',
                                        children: N
                                    })
                                ]
                            })
                        ]
                    }),
                    T &&
                        (0, r.jsxs)('div', {
                            className: o()(h.guild, { [h.embed]: T }),
                            children: [
                                (0, r.jsx)(c.ZP, {
                                    mask: c.ZP.Masks.SQUIRCLE,
                                    width: 20,
                                    height: 20,
                                    children: (0, r.jsx)(d.Z, {
                                        guild: S,
                                        size: d.Z.Sizes.MINI,
                                        active: !0
                                    })
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'header-secondary',
                                    className: h.__invalid_label,
                                    variant: 'text-sm/normal',
                                    children: S.name
                                })
                            ]
                        }),
                    (0, r.jsx)(l.Z, {
                        size: E || T ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_20,
                        className: o()(h.header, { [h.embed]: T }),
                        children: A
                    }),
                    (0, r.jsxs)('div', {
                        className: o()(h.members, { [h.embed]: T }),
                        children: [
                            R.length > 0 &&
                                (0, r.jsxs)('div', {
                                    className: h.speakers,
                                    children: [
                                        R.map((e) =>
                                            (0, r.jsx)(
                                                I,
                                                {
                                                    speaker: e,
                                                    guildId: S.id,
                                                    isEmbed: T
                                                },
                                                e.user.id
                                            )
                                        ),
                                        C > 0
                                            ? (0, r.jsxs)('div', {
                                                  className: h.speaker,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: o()(h.icon, { [h.embed]: T }),
                                                          children: (0, r.jsx)(s.MicrophoneIcon, {
                                                              size: 'custom',
                                                              color: 'currentColor',
                                                              height: T ? 12 : 14,
                                                              className: h.listeners
                                                          })
                                                      }),
                                                      (0, r.jsxs)(u.Z, {
                                                          size: T ? u.Z.Sizes.SIZE_12 : u.Z.Sizes.SIZE_14,
                                                          color: u.Z.Colors.HEADER_SECONDARY,
                                                          children: ['+', f.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({ count: C })]
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                            T &&
                                (0, r.jsx)(s.Button, {
                                    color: s.Button.Colors.GREEN,
                                    onClick: g,
                                    className: h.joinButton,
                                    children: f.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
                                })
                        ]
                    })
                ]
            })
        );
    },
    g = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new _.ZP(t),
            { name: a, description: o } = i;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(l.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: f.Z.Messages.STAGE_INVITE_GUILD_HEADER
                }),
                (0, r.jsxs)('div', {
                    className: h.guild,
                    children: [
                        (0, r.jsx)(c.ZP, {
                            mask: c.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, r.jsx)(d.Z, {
                                guild: i,
                                size: d.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.guildInfo,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: a
                                }),
                                (0, r.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, r.jsx)('div', { className: h.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != o &&
                    '' !== o &&
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        className: h.alignStart,
                        variant: 'text-sm/normal',
                        children: o
                    })
            ]
        });
    };
t.Z = T;
