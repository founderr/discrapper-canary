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
    v = n(591853),
    E = n(410441),
    _ = n(797342),
    f = n(689938);
let p = (e, t, n, a) => {
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
    T = (e, t) =>
        f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: g } = e,
        { largeImage: I } = (0, o.rv)({ entry: n }),
        { user: C, details: N, appName: P } = (0, _.n)(n),
        { primaryColor: Z, secondaryColor: S } = (0, d.Z)(null == I ? void 0 : I.src),
        A = (0, u.yA)(n),
        R = (0, u.Nq)(n),
        M = l.useCallback(
            (e) => {
                if (null != t && null != C && null != A && null != R && !!(0, m.qy)(R))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: null == I ? void 0 : I.src,
                        avatarSrcs: [C.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: p(n, t, C, R),
                        timestamp: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(A / r.Z.Seconds.HOUR) }),
                        colors: [Z, S],
                        channelId: e
                    });
            },
            [null == I ? void 0 : I.src, t, A, n, Z, R, S, C]
        );
    if (null == C || null == A || null == R || !(0, m.qy)(R)) return null;
    let y = null != n.extra.platform ? h.v[n.extra.platform] : null;
    return (0, a.jsxs)(v.yR, {
        children: [
            (0, a.jsx)(v.wG, {
                channel: t,
                headerIcons:
                    null == y
                        ? null
                        : (0, a.jsx)(E.Z, {
                              Icon: y,
                              'aria-label': f.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: n,
                userDescription: f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: P,
                subtitle: N,
                badges: (0, a.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: m.Hs.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, a.jsx)(v.St, {
                children: (0, a.jsx)(v.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: g,
                    user: C,
                    channel: t,
                    generateReactionImage: M,
                    reactionImageAltText: T(n, C),
                    entry: n
                })
            })
        ]
    });
};
