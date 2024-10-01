n(627494), n(757143);
var a = n(735250),
    l = n(470079),
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
    f = n(591853),
    p = n(410441),
    T = n(616922),
    g = n(689938);
let I = (e, t, n, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = h.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
        return l
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
        S = n.extra.artist.name,
        A = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: R, secondaryColor: M } = (0, v.Z)(Z),
        y = (0, m.Nq)(n),
        O = l.useCallback(() => {
            if (null == t || null == A || !(0, d.Hi)(y, E.y9)) return;
            let e = I(n, t, A, y);
            return (0, x.CR)({
                user: A,
                channel: t,
                mediaImageSrc: Z,
                artist: S,
                description: e,
                colors: [R, M],
                badges: (0, x.UU)(n)
            });
        }, [Z, S, t, n, R, y, M, A]);
    if (null == A || !(0, d.Hi)(y, E.y9)) return null;
    let j = () => {
        let e = T.Hw.ALBUM,
            t = o.Z.isProtocolRegistered() ? T.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : T.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, a.jsxs)(f.yR, {
        children: [
            (0, a.jsx)(f.wG, {
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
                        ? (0, a.jsx)(p.Z, {
                              Icon: c.Z,
                              'aria-label': g.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: N,
                subtitle: S,
                badges: (0, a.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: E.Ho.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                })
            }),
            (0, a.jsx)(f.St, {
                children: (0, a.jsx)(f.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: h,
                    user: A,
                    channel: t,
                    generateReactionImage: O,
                    reactionImageAltText: C(n, A),
                    entry: n
                })
            })
        ]
    });
};
