n.d(t, {
    y: function () {
        return S;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(512722),
    o = n.n(r),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    h = n(239091),
    p = n(40851),
    m = n(184301),
    _ = n(347475),
    f = n(271383),
    E = n(709586),
    g = n(5192),
    C = n(590415),
    I = n(914648);
let T = s.memo(function (e) {
        let { guildId: t, channelId: n, user: s, isPremium: a, isBlocked: l } = e;
        return (0, i.jsxs)('div', {
            className: I.textContainer,
            children: [
                l
                    ? (0, i.jsx)(d.DenyIcon, {
                          size: 'lg',
                          className: I.blockedIcon,
                          color: u.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                (0, i.jsx)(d.Text, {
                    className: I.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: g.ZP.getName(t, n, s)
                }),
                a
                    ? (0, i.jsx)(E.Z, {
                          className: I.boost,
                          color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    x = s.memo(function (e) {
        var t;
        let { participant: n, guildId: s, channel: a, isPremium: r } = e,
            { user: o, blocked: c, rtsState: u } = n,
            h = u === C.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            p = u === C.xO.REQUESTED_TO_SPEAK || h;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: I.avatarContainer,
                    children: [
                        p &&
                            (0, i.jsx)(d.HandRequestSpeakIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: l()(I.icon, { [I.invited]: h })
                            }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(a.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: l()(I.avatar, { [I.faded]: c })
                        })
                    ]
                }),
                (0, i.jsx)(T, {
                    guildId: s,
                    channelId: a.id,
                    user: o,
                    isPremium: r,
                    isBlocked: c
                })
            ]
        });
    }),
    S = () => (0, i.jsx)('div', { className: I.tileBaseContainer });
t.Z = s.memo(function (e) {
    let { participant: t, channel: a } = e,
        { user: r, blocked: u } = t,
        E = a.getGuildId(),
        g = (0, p.bp)(),
        C = (0, c.e7)(
            [f.ZP],
            () => {
                var e;
                return null != E && (null === (e = f.ZP.getMember(E, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
            },
            [E, r.id]
        );
    o()(null != E, 'Channel cannot be guildless');
    let T = s.useCallback(
            (e) => {
                (0, h.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                user: r,
                                guildId: E,
                                channel: a,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1
                            });
                    },
                    { context: g }
                );
            },
            [r, E, a, g]
        ),
        S = s.useCallback(
            (e) =>
                (0, i.jsx)(_.Z, {
                    ...e,
                    guildId: E,
                    channelId: a.id,
                    userId: r.id
                }),
            [a.id, E, r.id]
        );
    return (0, i.jsx)(d.Popout, {
        preload: () =>
            (0, m.Z)(r, {
                guildId: a.guild_id,
                channelId: a.id
            }),
        renderPopout: S,
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(d.Clickable, {
                className: l()(I.tileContainer, {
                    [I.singleIcon]: C || u,
                    [I.doubleIcon]: C && u
                }),
                onContextMenu: T,
                ...e,
                children: (0, i.jsx)(x, {
                    participant: t,
                    guildId: E,
                    channel: a,
                    isPremium: C
                })
            })
    });
});
