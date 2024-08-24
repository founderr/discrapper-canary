t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(317261),
    r = t(70956),
    s = t(5192),
    o = t(379357),
    u = t(561308),
    c = t(919394),
    d = t(206295),
    _ = t(227172),
    m = t(555672),
    E = t(297781),
    T = t(591853),
    h = t(410441),
    x = t(797342),
    I = t(689938);
let N = (e, n, t, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(a),
            r = s.ZP.getName(n.guild_id, n.id, t),
            o = e.extra.game_name;
        return l
            .plainFormat({
                gameName: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    C = (e, n) =>
        I.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.game_name
        });
n.Z = (e) => {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: p } = e,
        { largeImage: g } = (0, o.rv)({ entry: t }),
        { user: v, details: f, appName: M } = (0, x.n)(t),
        { primaryColor: P, secondaryColor: Z } = (0, d.Z)(null == g ? void 0 : g.src),
        A = (0, u.yA)(t),
        S = (0, u.Nq)(t),
        O = l.useCallback(
            (e) => {
                if (null != n && null != v && null != A && null != S && !!(0, m.qy)(S))
                    return (0, c.SO)({
                        entry: t,
                        applicationImageSrc: null == g ? void 0 : g.src,
                        avatarSrcs: [v.getAvatarURL(null == n ? void 0 : n.guild_id, 128)],
                        description: N(t, n, v, S),
                        timestamp: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(A / r.Z.Seconds.HOUR) }),
                        colors: [P, Z],
                        channelId: e
                    });
            },
            [null == g ? void 0 : g.src, n, A, t, P, S, Z, v]
        );
    if (null == v || null == A || null == S || !(0, m.qy)(S)) return null;
    let R = null != t.extra.platform ? _.v[t.extra.platform] : null;
    return (0, a.jsxs)(T.yR, {
        children: [
            (0, a.jsx)(T.wG, {
                channel: n,
                headerIcons:
                    null == R
                        ? null
                        : (0, a.jsx)(h.Z, {
                              Icon: R,
                              'aria-label': I.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: t,
                userDescription: I.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: M,
                subtitle: f,
                badges: (0, a.jsx)(E.Gk, {
                    location: E.Gt.POPOUT,
                    children: m.Hs.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                }),
                disableGameProfileLinks: i
            }),
            (0, a.jsx)(T.St, {
                children: (0, a.jsx)(T.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: p,
                    user: v,
                    channel: n,
                    generateReactionImage: O,
                    reactionImageAltText: C(t, v),
                    entry: t
                })
            })
        ]
    });
};
