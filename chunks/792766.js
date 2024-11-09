n.d(t, {
    y: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(528144),
    d = n(118012),
    u = n(686546),
    c = n(565138),
    _ = n(601964),
    E = n(598077),
    p = n(388032),
    h = n(325929);
let m = (e) => {
        var t;
        let { speaker: n, guildId: s, isEmbed: r } = e,
            l = new E.Z(n.user);
        return (0, i.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, i.jsx)(o.Avatar, {
                    src: l.getAvatarURL(s, r ? 16 : 24),
                    size: r ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: r ? null : h.avatar
                }),
                (0, i.jsx)(d.Z, {
                    size: r ? d.Z.Sizes.SIZE_12 : d.Z.Sizes.SIZE_14,
                    color: d.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : l.username
                })
            ]
        });
    },
    f = (e) => {
        let { guild: t, onlineCount: n } = e;
        if (null == t) return null;
        let s = new _.ZP(t),
            { name: r, description: l } = s;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(a.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: p.intl.string(p.t.Eabu19)
                }),
                (0, i.jsxs)('div', {
                    className: h.guild,
                    children: [
                        (0, i.jsx)(u.ZP, {
                            mask: u.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, i.jsx)(c.Z, {
                                guild: s,
                                size: c.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: h.guildInfo,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: r
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, i.jsx)('div', { className: h.dot }),
                                        null != n && n > 0
                                            ? (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: p.intl.format(p.t['LC+S+v'], { membersOnline: n })
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
                    (0, i.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: h.alignStart,
                        variant: 'text-sm/normal',
                        children: l
                    })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { stageInstance: n, guild: r, isCard: E = !1, isEmbed: f = !1, onClick: S } = e,
        g = s.useMemo(() => (null == r ? null : r instanceof _.ZP ? r : new _.ZP(r)), [r]);
    if (null == n || null == g) return null;
    let { topic: I, speaker_count: C, participant_count: v } = n,
        A = null !== (t = n.members) && void 0 !== t ? t : [],
        y = f ? A.slice(0, 3) : A,
        b = C - y.length;
    return (
        f && (b += A.length - y.length),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)('div', {
                    className: h.flex,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.flex,
                            children: [
                                (0, i.jsx)(o.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 24,
                                    width: 24,
                                    className: h.live
                                }),
                                (0, i.jsx)(o.Heading, {
                                    variant: 'eyebrow',
                                    className: l()(h.__invalid_label, h.live),
                                    children: p.intl.string(p.t['X2K3//'])
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: h.background,
                            children: [
                                (0, i.jsx)(o.HeadphonesIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: 16,
                                    width: 16,
                                    className: h.listeners
                                }),
                                (0, i.jsx)(o.Heading, {
                                    className: l()(h.__invalid_label, h.listeners),
                                    variant: 'heading-sm/semibold',
                                    children: v
                                })
                            ]
                        })
                    ]
                }),
                f &&
                    (0, i.jsxs)('div', {
                        className: l()(h.guild, { [h.embed]: f }),
                        children: [
                            (0, i.jsx)(u.ZP, {
                                mask: u.ZP.Masks.SQUIRCLE,
                                width: 20,
                                height: 20,
                                children: (0, i.jsx)(c.Z, {
                                    guild: g,
                                    size: c.Z.Sizes.MINI,
                                    active: !0
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'header-secondary',
                                className: h.__invalid_label,
                                variant: 'text-sm/normal',
                                children: g.name
                            })
                        ]
                    }),
                (0, i.jsx)(a.Z, {
                    size: E || f ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_20,
                    className: l()(h.header, { [h.embed]: f }),
                    children: I
                }),
                (0, i.jsxs)('div', {
                    className: l()(h.members, { [h.embed]: f }),
                    children: [
                        y.length > 0 &&
                            (0, i.jsxs)('div', {
                                className: h.speakers,
                                children: [
                                    y.map((e) =>
                                        (0, i.jsx)(
                                            m,
                                            {
                                                speaker: e,
                                                guildId: g.id,
                                                isEmbed: f
                                            },
                                            e.user.id
                                        )
                                    ),
                                    b > 0
                                        ? (0, i.jsxs)('div', {
                                              className: h.speaker,
                                              children: [
                                                  (0, i.jsx)('div', {
                                                      className: l()(h.icon, { [h.embed]: f }),
                                                      children: (0, i.jsx)(o.MicrophoneIcon, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: f ? 12 : 14,
                                                          className: h.listeners
                                                      })
                                                  }),
                                                  (0, i.jsxs)(d.Z, {
                                                      size: f ? d.Z.Sizes.SIZE_12 : d.Z.Sizes.SIZE_14,
                                                      color: d.Z.Colors.HEADER_SECONDARY,
                                                      children: ['+', p.intl.format(p.t.L1pCBQ, { count: b })]
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                        f &&
                            (0, i.jsx)(o.Button, {
                                color: o.Button.Colors.GREEN,
                                onClick: S,
                                className: h.joinButton,
                                children: p.intl.string(p.t.ZYO5OD)
                            })
                    ]
                })
            ]
        })
    );
};
