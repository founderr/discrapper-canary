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
    E = n(206295),
    _ = n(278399),
    v = n(297781),
    T = n(591853),
    p = n(410441),
    f = n(616922),
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
        { primaryColor: M, secondaryColor: y } = (0, E.Z)(Z),
        O = (0, m.Nq)(n),
        R = a.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(O, _.y9)) return;
            let e = I(n, t, S, O);
            return (0, x.CR)({
                user: S,
                channel: t,
                mediaImageSrc: Z,
                artist: A,
                description: e,
                colors: [M, y],
                badges: (0, x.UU)(n)
            });
        }, [Z, A, t, n, M, O, y, S]);
    if (null == S || !(0, d.Hi)(O, _.y9)) return null;
    let j = () => {
        let e = f.Hw.ALBUM,
            t = o.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : f.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(T.yR, {
        children: [
            (0, l.jsx)(T.wG, {
                onClickTitle: j,
                onClickSubtitle: () => {
                    let e = f.Hw.ARTIST,
                        t = o.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : f.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: j,
                channel: t,
                entry: n,
                headerIcons:
                    P === r.p.SPOTIFY
                        ? (0, l.jsx)(p.Z, {
                              Icon: c.Z,
                              'aria-label': g.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: N,
                subtitle: A,
                badges: (0, l.jsx)(v.Gk, {
                    location: v.Gt.POPOUT,
                    children: _.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                })
            }),
            (0, l.jsx)(T.St, {
                children: (0, l.jsx)(T.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: h,
                    user: S,
                    channel: t,
                    generateReactionImage: R,
                    reactionImageAltText: C(n, S),
                    entry: n
                })
            })
        ]
    });
};
