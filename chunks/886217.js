n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(317261),
    r = n(423875),
    o = n(442837),
    s = n(18323),
    c = n(594174),
    u = n(908841),
    d = n(823379),
    m = n(5192),
    x = n(561308),
    h = n(319604),
    p = n(206295),
    C = n(278399),
    v = n(297781),
    g = n(591853),
    f = n(410441),
    j = n(616922),
    I = n(388032);
let Z = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return I.t.SjOZfn;
            })(l),
            r = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return I.intl
            .formatToMarkdownString(a, {
                artist: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    P = (e, t) =>
        I.intl.formatToPlainString(I.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: m } = e,
        { parent_title: y, provider: L, image_url: T } = n.extra.media,
        N = n.extra.artist.name,
        _ = (0, o.e7)([c.default], () => c.default.getUser(n.author_id)),
        { primaryColor: S, secondaryColor: E } = (0, p.Z)(T),
        A = (0, x.Nq)(n),
        M = a.useCallback(() => {
            if (null == t || null == _ || !(0, d.Hi)(A, C.y9)) return;
            let e = Z(n, t, _, A);
            return (0, h.CR)({
                user: _,
                channel: t,
                mediaImageSrc: T,
                artist: N,
                description: e,
                colors: [S, E],
                badges: (0, h.UU)(n)
            });
        }, [T, N, t, n, S, A, E, _]);
    if (null == _ || !(0, d.Hi)(A, C.y9)) return null;
    let k = () => {
        let e = j.Hw.ALBUM,
            t = s.Z.isProtocolRegistered() ? j.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : j.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(g.yR, {
        children: [
            (0, l.jsx)(g.wG, {
                onClickTitle: k,
                onClickSubtitle: () => {
                    let e = j.Hw.ARTIST,
                        t = s.Z.isProtocolRegistered() ? j.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : j.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: k,
                channel: t,
                entry: n,
                headerIcons:
                    L === r.p.SPOTIFY
                        ? (0, l.jsx)(f.Z, {
                              Icon: u.Z,
                              'aria-label': I.intl.string(I.t['0ZB/XF'])
                          })
                        : null,
                userDescription: I.t.CcVI1d,
                title: y,
                subtitle: N,
                badges: (0, l.jsx)(v.Gk, {
                    location: v.Gt.POPOUT,
                    children: C.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                })
            }),
            (0, l.jsx)(g.St, {
                children: (0, l.jsx)(g.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: m,
                    user: _,
                    channel: t,
                    generateReactionImage: M,
                    reactionImageAltText: P(n, _),
                    entry: n
                })
            })
        ]
    });
};
