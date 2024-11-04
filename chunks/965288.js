n.d(t, {
    y: function () {
        return b;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    v = n(590415),
    _ = n(914648);
let I = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: a, isBlocked: r } = e;
        return (0, i.jsxs)('div', {
            className: _.textContainer,
            children: [
                r
                    ? (0, i.jsx)(u.DenyIcon, {
                          size: 'lg',
                          className: _.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    className: _.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: x.ZP.getName(t, n, l)
                }),
                a
                    ? (0, i.jsx)(C.Z, {
                          className: _.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    E = l.memo(function (e) {
        var t;
        let { participant: n, guildId: l, channel: a, isPremium: s } = e,
            { user: o, blocked: c, rtsState: d } = n,
            h = d === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            p = d === v.xO.REQUESTED_TO_SPEAK || h;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: _.avatarContainer,
                    children: [
                        p &&
                            (0, i.jsx)(u.HandRequestSpeakIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: r()(_.icon, { [_.invited]: h })
                            }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(a.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: r()(_.avatar, { [_.faded]: c })
                        })
                    ]
                }),
                (0, i.jsx)(I, {
                    guildId: l,
                    channelId: a.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c
                })
            ]
        });
    }),
    b = () => (0, i.jsx)('div', { className: _.tileBaseContainer });
t.Z = l.memo(function (e) {
    let { participant: t, channel: a } = e,
        { user: s, blocked: d } = t,
        C = a.getGuildId(),
        x = (0, p.bp)(),
        v = (0, c.e7)(
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
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                user: s,
                                guildId: C,
                                channel: a,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1
                            });
                    },
                    { context: x }
                );
            },
            [s, C, a, x]
        ),
        b = l.useCallback(
            (e) =>
                (0, i.jsx)(f.Z, {
                    ...e,
                    guildId: C,
                    channelId: a.id,
                    userId: s.id
                }),
            [a.id, C, s.id]
        );
    return (0, i.jsx)(u.Popout, {
        preload: () =>
            (0, m.Z)(s, {
                guildId: a.guild_id,
                channelId: a.id
            }),
        renderPopout: b,
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(u.Clickable, {
                className: r()(_.tileContainer, {
                    [_.singleIcon]: v || d,
                    [_.doubleIcon]: v && d
                }),
                onContextMenu: I,
                ...e,
                children: (0, i.jsx)(E, {
                    participant: t,
                    guildId: C,
                    channel: a,
                    isPremium: v
                })
            })
    });
});
