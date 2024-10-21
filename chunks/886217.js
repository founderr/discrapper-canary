n(627494), n(757143);
var l = n(200651),
    a = n(192379),
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
    E = n(206295),
    _ = n(278399),
    v = n(297781),
    C = n(591853),
    p = n(410441),
    f = n(616922),
    T = n(689938);
let g = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return T.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
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
    I = (e, t) =>
        T.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: h } = e,
        { parent_title: N, provider: Z, image_url: P } = n.extra.media,
        M = n.extra.artist.name,
        L = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: S, secondaryColor: A } = (0, E.Z)(P),
        R = (0, m.Nq)(n),
        y = a.useCallback(() => {
            if (null == t || null == L || !(0, d.Hi)(R, _.y9)) return;
            let e = g(n, t, L, R);
            return (0, x.CR)({
                user: L,
                channel: t,
                mediaImageSrc: P,
                artist: M,
                description: e,
                colors: [S, A],
                badges: (0, x.UU)(n)
            });
        }, [P, M, t, n, S, R, A, L]);
    if (null == L || !(0, d.Hi)(R, _.y9)) return null;
    let O = () => {
        let e = f.Hw.ALBUM,
            t = o.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : f.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(C.yR, {
        children: [
            (0, l.jsx)(C.wG, {
                onClickTitle: O,
                onClickSubtitle: () => {
                    let e = f.Hw.ARTIST,
                        t = o.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : f.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: O,
                channel: t,
                entry: n,
                headerIcons:
                    Z === r.p.SPOTIFY
                        ? (0, l.jsx)(p.Z, {
                              Icon: c.Z,
                              'aria-label': T.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: T.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: N,
                subtitle: M,
                badges: (0, l.jsx)(v.Gk, {
                    location: v.Gt.POPOUT,
                    children: _.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                })
            }),
            (0, l.jsx)(C.St, {
                children: (0, l.jsx)(C.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: h,
                    user: L,
                    channel: t,
                    generateReactionImage: y,
                    reactionImageAltText: I(n, L),
                    entry: n
                })
            })
        ]
    });
};
