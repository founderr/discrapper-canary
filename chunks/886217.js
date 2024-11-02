n(627494), n(757143);
var i = n(200651),
    l = n(192379),
    a = n(317261),
    r = n(423875),
    o = n(442837),
    s = n(18323),
    u = n(594174),
    c = n(908841),
    d = n(823379),
    h = n(5192),
    m = n(561308),
    x = n(256726),
    v = n(206295),
    f = n(278399),
    p = n(297781),
    g = n(591853),
    C = n(410441),
    I = n(616922),
    P = n(388032);
let Z = (e, t, n, i) => {
        let l = (function (e) {
                if (e === a._.WEEK) return P.t.SjOZfn;
            })(i),
            r = h.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return P.intl
            .formatToMarkdownString(l, {
                artist: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    y = (e, t) =>
        P.intl.formatToPlainString(P.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: h } = e,
        { parent_title: j, provider: w, image_url: T } = n.extra.media,
        L = n.extra.artist.name,
        S = (0, o.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: N, secondaryColor: E } = (0, v.Z)(T),
        _ = (0, m.Nq)(n),
        A = l.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(_, f.y9)) return;
            let e = Z(n, t, S, _);
            return (0, x.CR)({
                user: S,
                channel: t,
                mediaImageSrc: T,
                artist: L,
                description: e,
                colors: [N, E],
                badges: (0, x.UU)(n)
            });
        }, [T, L, t, n, N, _, E, S]);
    if (null == S || !(0, d.Hi)(_, f.y9)) return null;
    let R = () => {
        let e = I.Hw.ALBUM,
            t = s.Z.isProtocolRegistered() ? I.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : I.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, i.jsxs)(g.yR, {
        children: [
            (0, i.jsx)(g.wG, {
                onClickTitle: R,
                onClickSubtitle: () => {
                    let e = I.Hw.ARTIST,
                        t = s.Z.isProtocolRegistered() ? I.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : I.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: R,
                channel: t,
                entry: n,
                headerIcons:
                    w === r.p.SPOTIFY
                        ? (0, i.jsx)(C.Z, {
                              Icon: c.Z,
                              'aria-label': P.intl.string(P.t['0ZB/XF'])
                          })
                        : null,
                userDescription: P.t.CcVI1d,
                title: j,
                subtitle: L,
                badges: (0, i.jsx)(p.Gk, {
                    location: p.Gt.POPOUT,
                    children: f.Ho.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(g.St, {
                children: (0, i.jsx)(g.WT, {
                    onReaction: a,
                    onVoiceChannelPreview: h,
                    user: S,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: y(n, S),
                    entry: n
                })
            })
        ]
    });
};
