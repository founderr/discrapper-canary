t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(317261),
    r = t(70956),
    s = t(5192),
    o = t(561308),
    c = t(919394),
    u = t(206295),
    d = t(227172),
    m = t(555672),
    _ = t(297781),
    E = t(591853),
    T = t(410441),
    h = t(797342),
    x = t(689938);
let N = (e, n, t, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
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
    I = (e, n) =>
        x.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.game_name
        });
n.Z = (e) => {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: C } = e,
        { iconUrl: p, iconTitle: g, user: f, details: v, appName: M, coverImageUrl: P } = (0, h.n)(t),
        { primaryColor: Z, secondaryColor: S } = (0, u.Z)(p),
        A = (0, o.yA)(t),
        O = (0, o.Nq)(t),
        j = l.useCallback(
            (e) => {
                if (null != n && null != f && null != A && null != O && !!(0, m.qy)(O))
                    return (0, c.SO)({
                        entry: t,
                        applicationImageSrc: p,
                        avatarSrcs: [f.getAvatarURL(null == n ? void 0 : n.guild_id, 128)],
                        description: N(t, n, f, O),
                        timestamp: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(A / r.Z.Seconds.HOUR) }),
                        colors: [Z, S],
                        channelId: e
                    });
            },
            [p, n, A, t, Z, O, S, f]
        );
    if (null == f || null == A || null == O || !(0, m.qy)(O)) return null;
    let R = null != t.extra.platform ? d.v[t.extra.platform] : null;
    return (0, a.jsxs)(E.yR, {
        children: [
            (0, a.jsx)(E.wG, {
                thumbnailSrc: null != P ? P : p,
                thumbnailTitle: g,
                channel: n,
                headerIcons:
                    null == R
                        ? null
                        : (0, a.jsx)(T.Z, {
                              Icon: R,
                              'aria-label': x.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: t,
                userDescription: x.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
                title: M,
                subtitle: v,
                badges: (0, a.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: m.Hs.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                }),
                disableGameProfileLinks: i
            }),
            (0, a.jsx)(E.St, {
                children: (0, a.jsx)(E.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: C,
                    user: f,
                    channel: n,
                    generateReactionImage: j,
                    reactionImageAltText: I(t, f),
                    entry: t
                })
            })
        ]
    });
};
