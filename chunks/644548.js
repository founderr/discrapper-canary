n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(317261),
    r = n(70956),
    o = n(5192),
    s = n(379357),
    c = n(561308),
    u = n(919394),
    d = n(206295),
    m = n(227172),
    x = n(555672),
    h = n(297781),
    p = n(591853),
    C = n(410441),
    v = n(797342),
    g = n(388032);
let f = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return g.t['7TXfc3'];
            })(l),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return g.intl
            .formatToMarkdownString(a, {
                gameName: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    j = (e, t) =>
        g.intl.formatToPlainString(g.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: o, onVoiceChannelPreview: I } = e,
        { largeImage: Z } = (0, s.rv)({ entry: n }),
        { user: P, details: y, appName: L } = (0, v.n)(n),
        { primaryColor: T, secondaryColor: N } = (0, d.Z)(null == Z ? void 0 : Z.src),
        _ = (0, c.yA)(n),
        S = (0, c.Nq)(n),
        E = a.useCallback(
            (e) => {
                if (null != t && null != P && null != _ && null != S && !!(0, x.qy)(S))
                    return (0, u.SO)({
                        entry: n,
                        applicationImageSrc: null == Z ? void 0 : Z.src,
                        avatarSrcs: [P.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: f(n, t, P, S),
                        timestamp: g.intl.formatToPlainString(g.t.YL7UEx, { hours: Math.round(_ / r.Z.Seconds.HOUR) }),
                        colors: [T, N],
                        channelId: e
                    });
            },
            [null == Z ? void 0 : Z.src, t, _, n, T, S, N, P]
        );
    if (null == P || null == _ || null == S || !(0, x.qy)(S)) return null;
    let A = null != n.extra.platform ? m.v[n.extra.platform] : null;
    return (0, l.jsxs)(p.yR, {
        children: [
            (0, l.jsx)(p.wG, {
                channel: t,
                headerIcons:
                    null == A
                        ? null
                        : (0, l.jsx)(C.Z, {
                              Icon: A,
                              'aria-label': g.intl.string(g.t.YR4cHB)
                          }),
                entry: n,
                userDescription: g.t.rPqqtr,
                title: L,
                subtitle: y,
                badges: (0, l.jsx)(h.Gk, {
                    location: h.Gt.POPOUT,
                    children: x.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, l.jsx)(p.St, {
                children: (0, l.jsx)(p.WT, {
                    onReaction: o,
                    onVoiceChannelPreview: I,
                    user: P,
                    channel: t,
                    generateReactionImage: E,
                    reactionImageAltText: j(n, P),
                    entry: n
                })
            })
        ]
    });
};
