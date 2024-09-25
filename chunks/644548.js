n(627494), n(757143);
var a = n(735250),
    l = n(470079),
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
    v = n(410441),
    _ = n(797342),
    f = n(689938);
let T = (e, t, n, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(a),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return l
            .plainFormat({
                gameName: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    p = (e, t) =>
        f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: g } = e,
        { largeImage: I } = (0, o.rv)({ entry: n }),
        { user: N, details: C, appName: A } = (0, _.n)(n),
        { primaryColor: Z, secondaryColor: P } = (0, d.Z)(null == I ? void 0 : I.src),
        S = (0, u.yA)(n),
        M = (0, u.Nq)(n),
        O = l.useCallback(
            (e) => {
                if (null != t && null != N && null != S && null != M && !!(0, m.qy)(M))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: null == I ? void 0 : I.src,
                        avatarSrcs: [N.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: T(n, t, N, M),
                        timestamp: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(S / r.Z.Seconds.HOUR) }),
                        colors: [Z, P],
                        channelId: e
                    });
            },
            [null == I ? void 0 : I.src, t, S, n, Z, M, P, N]
        );
    if (null == N || null == S || null == M || !(0, m.qy)(M)) return null;
    let R = null != n.extra.platform ? h.v[n.extra.platform] : null;
    return (0, a.jsxs)(E.yR, {
        children: [
            (0, a.jsx)(E.wG, {
                channel: t,
                headerIcons:
                    null == R
                        ? null
                        : (0, a.jsx)(v.Z, {
                              Icon: R,
                              'aria-label': f.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: n,
                userDescription: f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: A,
                subtitle: C,
                badges: (0, a.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: m.Hs.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, a.jsx)(E.St, {
                children: (0, a.jsx)(E.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: g,
                    user: N,
                    channel: t,
                    generateReactionImage: O,
                    reactionImageAltText: p(n, N),
                    entry: n
                })
            })
        ]
    });
};
