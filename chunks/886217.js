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
    E = n(206295),
    v = n(278399),
    _ = n(297781),
    f = n(591853),
    T = n(410441),
    p = n(616922),
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
    N = (e, t) =>
        g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: h } = e,
        { parent_title: C, provider: A, image_url: Z } = n.extra.media,
        P = n.extra.artist.name,
        S = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: M, secondaryColor: O } = (0, E.Z)(Z),
        R = (0, m.Nq)(n),
        j = l.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(R, v.y9)) return;
            let e = I(n, t, S, R);
            return (0, x.CR)({
                user: S,
                channel: t,
                mediaImageSrc: Z,
                artist: P,
                description: e,
                colors: [M, O],
                badges: (0, x.UU)(n)
            });
        }, [Z, P, t, n, M, R, O, S]);
    if (null == S || !(0, d.Hi)(R, v.y9)) return null;
    let y = () => {
        let e = p.Hw.ALBUM,
            t = o.Z.isProtocolRegistered() ? p.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : p.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, a.jsxs)(f.yR, {
        children: [
            (0, a.jsx)(f.wG, {
                onClickTitle: y,
                onClickSubtitle: () => {
                    let e = p.Hw.ARTIST,
                        t = o.Z.isProtocolRegistered() ? p.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : p.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: y,
                channel: t,
                entry: n,
                headerIcons:
                    A === r.p.SPOTIFY
                        ? (0, a.jsx)(T.Z, {
                              Icon: c.Z,
                              'aria-label': g.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: C,
                subtitle: P,
                badges: (0, a.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: v.Ho.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                })
            }),
            (0, a.jsx)(f.St, {
                children: (0, a.jsx)(f.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: h,
                    user: S,
                    channel: t,
                    generateReactionImage: j,
                    reactionImageAltText: N(n, S),
                    entry: n
                })
            })
        ]
    });
};
