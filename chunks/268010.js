n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(49012),
    u = n(5192),
    d = n(591759),
    m = n(379357),
    x = n(561308),
    h = n(685270),
    p = n(206295),
    C = n(335326),
    v = n(297781),
    g = n(591853),
    f = n(410441),
    I = n(388032);
let j = (e, t, n) => {
        let l = I.t.LHF6Dw,
            a = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return I.intl
            .formatToMarkdownString(l, {
                mediaTitle: i,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    Z = (e, t) =>
        I.intl.formatToPlainString(I.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: P } = e,
        L = (0, i.e7)([s.default], () => s.default.getUser(n.author_id)),
        { largeImage: T } = (0, m.rv)({ entry: n }),
        { primaryColor: y, secondaryColor: N } = (0, p.Z)(null == T ? void 0 : T.src),
        _ = (0, i.e7)([o.default], () => o.default.locale),
        E = (0, x.ap)(n.extra.media_assets_large_text),
        S = a.useCallback(
            (e) => {
                if (null != L && (null == T ? void 0 : T.src) != null)
                    return (0, h.B)({
                        entry: n,
                        mediaImageSrc: null == T ? void 0 : T.src,
                        avatarSrc: L.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: j(n, t, L),
                        timestamp: (0, x.yh)(n, _),
                        episodeDescription: E,
                        colors: [y, N],
                        channelId: e
                    });
            },
            [t, n, E, _, null == T ? void 0 : T.src, y, N, L]
        ),
        A = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, c.q)({
                    href: d.Z.format(e),
                    trusted: !1
                });
        };
    return null == L
        ? null
        : (0, l.jsxs)(g.yR, {
              children: [
                  (0, l.jsx)(g.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, x.kr)(n) ? I.t['LH+Z39'] : I.t.YuKgmp,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(f.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': I.intl.string(I.t.jdJYX1)
                      }),
                      badges: (0, l.jsx)(v.Gk, {
                          location: v.Gt.POPOUT,
                          children: C.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: A,
                      onClickThumbnail: A
                  }),
                  (0, l.jsx)(g.St, {
                      children: (0, l.jsx)(g.WT, {
                          onReaction: u,
                          onVoiceChannelPreview: P,
                          user: L,
                          channel: t,
                          generateReactionImage: S,
                          reactionImageAltText: Z(n, L),
                          entry: n
                      })
                  })
              ]
          });
};
