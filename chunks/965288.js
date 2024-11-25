n.d(t, {
    y: function () {
        return b;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    h = n(239091),
    p = n(40851),
    m = n(184301),
    f = n(347475),
    g = n(271383),
    C = n(709586),
    x = n(5192),
    _ = n(590415),
    v = n(253428);
let I = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: r, isBlocked: a, isIgnored: s } = e;
        return (0, i.jsxs)('div', {
            className: v.textContainer,
            children: [
                a
                    ? (0, i.jsx)(u.DenyIcon, {
                          size: 'lg',
                          className: v.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                s
                    ? (0, i.jsx)(u.EyeSlashIcon, {
                          size: 'lg',
                          className: v.blockedIcon
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    className: v.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: x.ZP.getName(t, n, l)
                }),
                r
                    ? (0, i.jsx)(C.Z, {
                          className: v.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    E = l.memo(function (e) {
        var t;
        let { participant: n, guildId: l, channel: r, isPremium: s } = e,
            { user: o, blocked: c, ignored: d, rtsState: h } = n,
            p = h === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            m = h === _.xO.REQUESTED_TO_SPEAK || p;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: v.avatarContainer,
                    children: [
                        m &&
                            (0, i.jsx)(u.HandRequestSpeakIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(v.icon, { [v.invited]: p })
                            }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(r.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: a()(v.avatar, { [v.faded]: c || d })
                        })
                    ]
                }),
                (0, i.jsx)(I, {
                    guildId: l,
                    channelId: r.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: d
                })
            ]
        });
    }),
    b = () => (0, i.jsx)('div', { className: v.tileBaseContainer });
t.Z = l.memo(function (e) {
    let { participant: t, channel: r } = e,
        { user: s, blocked: d } = t,
        C = r.getGuildId(),
        x = (0, p.bp)(),
        _ = (0, c.e7)(
            [g.ZP],
            () => {
                var e;
                return null != C && (null === (e = g.ZP.getMember(C, s.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
            },
            [C, s.id]
        );
    o()(null != C, 'Channel cannot be guildless');
    let I = l.useCallback(
            (e) => {
                (0, h.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                user: s,
                                guildId: C,
                                channel: r,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1
                            });
                    },
                    { context: x }
                );
            },
            [s, C, r, x]
        ),
        b = l.useCallback(
            (e) =>
                (0, i.jsx)(f.Z, {
                    ...e,
                    guildId: C,
                    channelId: r.id,
                    userId: s.id
                }),
            [r.id, C, s.id]
        );
    return (0, i.jsx)(u.Popout, {
        preload: () =>
            (0, m.Z)(s, {
                guildId: r.guild_id,
                channelId: r.id
            }),
        renderPopout: b,
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(u.Clickable, {
                className: a()(v.tileContainer, {
                    [v.singleIcon]: _ || d,
                    [v.doubleIcon]: _ && d
                }),
                onContextMenu: I,
                ...e,
                children: (0, i.jsx)(E, {
                    participant: t,
                    guildId: C,
                    channel: r,
                    isPremium: _
                })
            })
    });
});
