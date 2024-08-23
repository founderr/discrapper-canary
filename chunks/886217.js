t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(317261),
    r = t(423875),
    s = t(442837),
    o = t(18323),
    u = t(594174),
    c = t(908841),
    d = t(823379),
    m = t(5192),
    _ = t(561308),
    E = t(256726),
    T = t(206295),
    h = t(278399),
    x = t(297781),
    N = t(591853),
    I = t(410441),
    C = t(616922),
    p = t(689938);
let g = (e, n, t, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = m.ZP.getName(n.guild_id, n.id, t),
            s = e.extra.artist.name;
        return l
            .plainFormat({
                artist: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    v = (e, n) =>
        p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: n.username,
            artist: e.extra.artist.name
        });
n.Z = (e) => {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: m } = e,
        { parent_title: f, provider: M, image_url: P } = t.extra.media,
        Z = t.extra.artist.name,
        S = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)),
        { primaryColor: A, secondaryColor: O } = (0, T.Z)(P),
        j = (0, _.Nq)(t),
        R = l.useCallback(() => {
            if (null == n || null == S || !(0, d.Hi)(j, h.y9)) return;
            let e = g(t, n, S, j);
            return (0, E.CR)({
                user: S,
                channel: n,
                mediaImageSrc: P,
                artist: Z,
                description: e,
                colors: [A, O],
                badges: (0, E.UU)(t)
            });
        }, [P, Z, n, t, A, j, O, S]);
    if (null == S || !(0, d.Hi)(j, h.y9)) return null;
    let y = () => {
        let e = C.Hw.ALBUM,
            n = o.Z.isProtocolRegistered() ? C.C7.PLAYER_OPEN(e, t.extra.media.external_parent_id) : C.C7.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    };
    return (0, a.jsxs)(N.yR, {
        children: [
            (0, a.jsx)(N.wG, {
                onClickTitle: y,
                onClickSubtitle: () => {
                    let e = C.Hw.ARTIST,
                        n = o.Z.isProtocolRegistered() ? C.C7.PLAYER_OPEN(e, t.extra.artist.external_id) : C.C7.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: y,
                thumbnailSrc: P,
                channel: n,
                entry: t,
                headerIcons:
                    M === r.p.SPOTIFY
                        ? (0, a.jsx)(I.Z, {
                              Icon: c.Z,
                              'aria-label': p.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: f,
                subtitle: Z,
                badges: (0, a.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: h.Ho.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                })
            }),
            (0, a.jsx)(N.St, {
                children: (0, a.jsx)(N.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: m,
                    user: S,
                    channel: n,
                    generateReactionImage: R,
                    reactionImageAltText: v(t, S),
                    entry: t
                })
            })
        ]
    });
};
