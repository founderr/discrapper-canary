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
    _ = t(5192),
    m = t(561308),
    E = t(256726),
    T = t(206295),
    h = t(278399),
    x = t(297781),
    I = t(591853),
    N = t(410441),
    p = t(616922),
    C = t(689938);
let g = (e, n, t, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return C.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = _.ZP.getName(n.guild_id, n.id, t),
            s = e.extra.artist.name;
        return l
            .plainFormat({
                artist: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    v = (e, n) =>
        C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: n.username,
            artist: e.extra.artist.name
        });
n.Z = (e) => {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: _ } = e,
        { parent_title: f, provider: P, image_url: M } = t.extra.media,
        Z = t.extra.artist.name,
        A = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)),
        { primaryColor: S, secondaryColor: O } = (0, T.Z)(M),
        j = (0, m.Nq)(t),
        R = l.useCallback(() => {
            if (null == n || null == A || !(0, d.Hi)(j, h.y9)) return;
            let e = g(t, n, A, j);
            return (0, E.CR)({
                user: A,
                channel: n,
                mediaImageSrc: M,
                artist: Z,
                description: e,
                colors: [S, O],
                badges: (0, E.UU)(t)
            });
        }, [M, Z, n, t, S, j, O, A]);
    if (null == A || !(0, d.Hi)(j, h.y9)) return null;
    let y = () => {
        let e = p.Hw.ALBUM,
            n = o.Z.isProtocolRegistered() ? p.C7.PLAYER_OPEN(e, t.extra.media.external_parent_id) : p.C7.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    };
    return (0, a.jsxs)(I.yR, {
        children: [
            (0, a.jsx)(I.wG, {
                onClickTitle: y,
                onClickSubtitle: () => {
                    let e = p.Hw.ARTIST,
                        n = o.Z.isProtocolRegistered() ? p.C7.PLAYER_OPEN(e, t.extra.artist.external_id) : p.C7.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: y,
                channel: n,
                entry: t,
                headerIcons:
                    P === r.p.SPOTIFY
                        ? (0, a.jsx)(N.Z, {
                              Icon: c.Z,
                              'aria-label': C.Z.Messages.SPOTIFY
                          })
                        : null,
                userDescription: C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
                title: f,
                subtitle: Z,
                badges: (0, a.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: h.Ho.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                })
            }),
            (0, a.jsx)(I.St, {
                children: (0, a.jsx)(I.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: _,
                    user: A,
                    channel: n,
                    generateReactionImage: R,
                    reactionImageAltText: v(t, A),
                    entry: t
                })
            })
        ]
    });
};
