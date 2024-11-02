n(627494), n(757143);
var i = n(200651),
    l = n(192379),
    a = n(317261),
    r = n(70956),
    o = n(5192),
    s = n(379357),
    u = n(561308),
    c = n(919394),
    d = n(206295),
    h = n(227172),
    m = n(555672),
    x = n(297781),
    v = n(591853),
    f = n(410441),
    p = n(797342),
    g = n(388032);
let C = (e, t, n, i) => {
        let l = (function (e) {
                if (e === a._.WEEK) return g.t['7TXfc3'];
            })(i),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return g.intl
            .formatToMarkdownString(l, {
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
    let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: o, onVoiceChannelPreview: P } = e,
        { largeImage: Z } = (0, s.rv)({ entry: n }),
        { user: y, details: j, appName: w } = (0, p.n)(n),
        { primaryColor: T, secondaryColor: L } = (0, d.Z)(null == Z ? void 0 : Z.src),
        S = (0, u.yA)(n),
        N = (0, u.Nq)(n),
        E = l.useCallback(
            (e) => {
                if (null != t && null != y && null != S && null != N && !!(0, m.qy)(N))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: null == Z ? void 0 : Z.src,
                        avatarSrcs: [y.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: C(n, t, y, N),
                        timestamp: g.intl.formatToPlainString(g.t.YL7UEx, { hours: Math.round(S / r.Z.Seconds.HOUR) }),
                        colors: [T, L],
                        channelId: e
                    });
            },
            [null == Z ? void 0 : Z.src, t, S, n, T, N, L, y]
        );
    if (null == y || null == S || null == N || !(0, m.qy)(N)) return null;
    let _ = null != n.extra.platform ? h.v[n.extra.platform] : null;
    return (0, i.jsxs)(v.yR, {
        children: [
            (0, i.jsx)(v.wG, {
                channel: t,
                headerIcons:
                    null == _
                        ? null
                        : (0, i.jsx)(f.Z, {
                              Icon: _,
                              'aria-label': g.intl.string(g.t.YR4cHB)
                          }),
                entry: n,
                userDescription: g.t.rPqqtr,
                title: w,
                subtitle: j,
                badges: (0, i.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: m.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: a
            }),
            (0, i.jsx)(v.St, {
                children: (0, i.jsx)(v.WT, {
                    onReaction: o,
                    onVoiceChannelPreview: P,
                    user: y,
                    channel: t,
                    generateReactionImage: E,
                    reactionImageAltText: I(n, y),
                    entry: n
                })
            })
        ]
    });
};
