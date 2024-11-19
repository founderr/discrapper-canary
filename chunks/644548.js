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
    h = n(555672),
    x = n(297781),
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
    I = (e, t) =>
        g.intl.formatToPlainString(g.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: o, onVoiceChannelPreview: j } = e,
        { largeImage: P } = (0, s.rv)({ entry: n }),
        { user: Z, details: L, appName: y } = (0, v.n)(n),
        { primaryColor: T, secondaryColor: N } = (0, d.Z)(null == P ? void 0 : P.src),
        _ = (0, c.yA)(n),
        E = (0, c.Nq)(n),
        S = a.useCallback(
            (e) => {
                if (null != t && null != Z && null != _ && null != E && !!(0, h.qy)(E))
                    return (0, u.SO)({
                        entry: n,
                        applicationImageSrc: null == P ? void 0 : P.src,
                        avatarSrcs: [Z.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: f(n, t, Z, E),
                        timestamp: g.intl.formatToPlainString(g.t.YL7UEx, { hours: Math.round(_ / r.Z.Seconds.HOUR) }),
                        colors: [T, N],
                        channelId: e
                    });
            },
            [null == P ? void 0 : P.src, t, _, n, T, E, N, Z]
        );
    if (null == Z || null == _ || null == E || !(0, h.qy)(E)) return null;
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
                title: y,
                subtitle: L,
                badges: (0, l.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: h.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, l.jsx)(p.St, {
                children: (0, l.jsx)(p.WT, {
                    onReaction: o,
                    onVoiceChannelPreview: j,
                    user: Z,
                    channel: t,
                    generateReactionImage: S,
                    reactionImageAltText: I(n, Z),
                    entry: n
                })
            })
        ]
    });
};
