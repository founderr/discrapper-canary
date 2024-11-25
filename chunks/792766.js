n.d(t, {
    y: function () {
        return S;
    }
});
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(528144),
    c = n(118012),
    d = n(686546),
    u = n(565138),
    _ = n(601964),
    E = n(598077),
    h = n(388032),
    p = n(828573);
let f = (e) => {
        var t;
        let { speaker: n, guildId: i, isEmbed: s } = e,
            l = new E.Z(n.user);
        return (0, r.jsxs)('div', {
            className: p.speaker,
            children: [
                (0, r.jsx)(o.Avatar, {
                    src: l.getAvatarURL(i, s ? 16 : 24),
                    size: s ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: s ? null : p.avatar
                }),
                (0, r.jsx)(c.Z, {
                    size: s ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                    color: c.Z.Colors.HEADER_SECONDARY,
                    className: p.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : l.username
                })
            ]
        });
    },
    S = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let i = new _.ZP(t),
            { name: s, description: l } = i;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: p.alignStart,
                    children: h.intl.string(h.t.Eabu19)
                }),
                (0, r.jsxs)('div', {
                    className: p.guild,
                    children: [
                        (0, r.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, r.jsx)(u.Z, {
                                guild: i,
                                size: u.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: p.guildInfo,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: s
                                }),
                                (0, r.jsxs)('div', {
                                    className: p.speaker,
                                    children: [
                                        (0, r.jsx)('div', { className: p.dot }),
                                        null != n && n > 0
                                            ? (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: h.intl.format(h.t['LC+S+v'], { membersOnline: n })
                                              })
                                            : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != l &&
                    '' !== l &&
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: p.alignStart,
                        variant: 'text-sm/normal',
                        children: l
                    })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { stageInstance: n, guild: s, isCard: E = !1, isEmbed: S = !1, onClick: m } = e,
        C = i.useMemo(() => (null == s ? null : s instanceof _.ZP ? s : new _.ZP(s)), [s]);
    if (null == n || null == C) return null;
    let { topic: g, speaker_count: I, participant_count: A } = n,
        y = null !== (t = n.members) && void 0 !== t ? t : [],
        R = S ? y.slice(0, 3) : y,
        O = I - R.length;
    return (
        S && (O += y.length - R.length),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)('div', {
                    className: p.flex,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.flex,
                            children: [
                                (0, r.jsx)(o.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 24,
                                    width: 24,
                                    className: p.live
                                }),
                                (0, r.jsx)(o.Heading, {
                                    variant: 'eyebrow',
                                    className: l()(p.__invalid_label, p.live),
                                    children: h.intl.string(h.t['X2K3//'])
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: p.background,
                            children: [
                                (0, r.jsx)(o.HeadphonesIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 16,
                                    width: 16,
                                    className: p.listeners
                                }),
                                (0, r.jsx)(o.Heading, {
                                    className: l()(p.__invalid_label, p.listeners),
                                    variant: 'heading-sm/semibold',
                                    children: A
                                })
                            ]
                        })
                    ]
                }),
                S &&
                    (0, r.jsxs)('div', {
                        className: l()(p.guild, { [p.embed]: S }),
                        children: [
                            (0, r.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 20,
                                height: 20,
                                children: (0, r.jsx)(u.Z, {
                                    guild: C,
                                    size: u.Z.Sizes.MINI,
                                    active: !0
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                color: 'header-secondary',
                                className: p.__invalid_label,
                                variant: 'text-sm/normal',
                                children: C.name
                            })
                        ]
                    }),
                (0, r.jsx)(a.Z, {
                    size: E || S ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_20,
                    className: l()(p.header, { [p.embed]: S }),
                    children: g
                }),
                (0, r.jsxs)('div', {
                    className: l()(p.members, { [p.embed]: S }),
                    children: [
                        R.length > 0 &&
                            (0, r.jsxs)('div', {
                                className: p.speakers,
                                children: [
                                    R.map((e) =>
                                        (0, r.jsx)(
                                            f,
                                            {
                                                speaker: e,
                                                guildId: C.id,
                                                isEmbed: S
                                            },
                                            e.user.id
                                        )
                                    ),
                                    O > 0
                                        ? (0, r.jsxs)('div', {
                                              className: p.speaker,
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: l()(p.icon, { [p.embed]: S }),
                                                      children: (0, r.jsx)(o.MicrophoneIcon, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: S ? 12 : 14,
                                                          className: p.listeners
                                                      })
                                                  }),
                                                  (0, r.jsxs)(c.Z, {
                                                      size: S ? c.Z.Sizes.SIZE_12 : c.Z.Sizes.SIZE_14,
                                                      color: c.Z.Colors.HEADER_SECONDARY,
                                                      children: ['+', h.intl.format(h.t.L1pCBQ, { count: O })]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                        S &&
                            (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.GREEN,
                                onClick: m,
                                className: p.joinButton,
                                children: h.intl.string(h.t.ZYO5OD)
                            })
                    ]
                })
            ]
        })
    );
};
