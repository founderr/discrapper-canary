n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(317261),
    r = n(70956),
    s = n(5192),
    o = n(379357),
    u = n(561308),
    c = n(919394),
    d = n(206295),
    h = n(227172),
    m = n(555672),
    x = n(297781),
    E = n(591853),
    _ = n(410441),
    v = n(797342),
    C = n(689938);
let f = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return C.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(l),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return a
            .plainFormat({
                gameName: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    p = (e, t) =>
        C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: T } = e,
        { largeImage: g } = (0, o.rv)({ entry: n }),
        { user: I, details: N, appName: Z } = (0, v.n)(n),
        { primaryColor: P, secondaryColor: M } = (0, d.Z)(null == g ? void 0 : g.src),
        L = (0, u.yA)(n),
        S = (0, u.Nq)(n),
        A = a.useCallback(
            (e) => {
                if (null != t && null != I && null != L && null != S && !!(0, m.qy)(S))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: null == g ? void 0 : g.src,
                        avatarSrcs: [I.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: f(n, t, I, S),
                        timestamp: C.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(L / r.Z.Seconds.HOUR) }),
                        colors: [P, M],
                        channelId: e
                    });
            },
            [null == g ? void 0 : g.src, t, L, n, P, S, M, I]
        );
    if (null == I || null == L || null == S || !(0, m.qy)(S)) return null;
    let R = null != n.extra.platform ? h.v[n.extra.platform] : null;
    return (0, l.jsxs)(E.yR, {
        children: [
            (0, l.jsx)(E.wG, {
                channel: t,
                headerIcons:
                    null == R
                        ? null
                        : (0, l.jsx)(_.Z, {
                              Icon: R,
                              'aria-label': C.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: n,
                userDescription: C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: Z,
                subtitle: N,
                badges: (0, l.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: m.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, l.jsx)(E.St, {
                children: (0, l.jsx)(E.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: T,
                    user: I,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: p(n, I),
                    entry: n
                })
            })
        ]
    });
};
