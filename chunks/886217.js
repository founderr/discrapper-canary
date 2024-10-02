n(627494), n(757143);
var l = n(735250),
    a = n(470079),
    i = n(317261),
    r = n(423875),
    s = n(442837),
    o = n(18323),
    u = n(594174),
    c = n(908841),
    d = n(823379),
    h = n(5192),
    m = n(561308),
    x = n(256726),
    v = n(206295),
    E = n(278399),
    _ = n(297781),
    p = n(591853),
    f = n(410441),
    T = n(616922),
    g = n(689938);
let I = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(l),
            r = h.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
        return a
            .plainFormat({
                artist: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    C = (e, t) =>
        g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: h } = e,
        { parent_title: N, provider: P, image_url: Z } = n.extra.media,
        A = n.extra.artist.name,
        S = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: M, secondaryColor: y } = (0, v.Z)(Z),
        R = (0, m.Nq)(n),
        O = a.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(R, E.y9)) return;
            let e = I(n, t, S, R);
            return (0, x.CR)({
                user: S,
                channel: t,
                mediaImageSrc: Z,
                artist: A,
                description: e,
                colors: [M, y],
                badges: (0, x.UU)(n)
            });
        }, [Z, A, t, n, M, R, y, S]);
    if (null == S || !(0, d.Hi)(R, E.y9)) return null;
    let j = () => {
        let e = T.Hw.ALBUM,
            t = o.Z.isProtocolRegistered() ? T.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : T.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(p.yR, {
        children: [
            (0, l.jsx)(p.wG, {
                onClickTitle: j,
                onClickSubtitle: () => {
                    let e = T.Hw.ARTIST,
                        t = o.Z.isProtocolRegistered() ? T.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : T.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: j,
                channel: t,
                entry: n,
                headerIcons:
                    P === r.p.SPOTIFY
                        ? (0, l.jsx)(f.Z, {
                              Icon: c.Z,
                              'aria-label': g.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: N,
                subtitle: A,
                badges: (0, l.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: E.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                })
            }),
            (0, l.jsx)(p.St, {
                children: (0, l.jsx)(p.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: h,
                    user: S,
                    channel: t,
                    generateReactionImage: O,
                    reactionImageAltText: C(n, S),
                    entry: n
                })
            })
        ]
    });
};
