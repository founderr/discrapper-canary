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
    h = n(644810),
    p = n(206295),
    C = n(335326),
    v = n(297781),
    g = n(591853),
    f = n(410441),
    j = n(388032);
let I = (e, t, n) => {
        let l = j.t.LHF6Dw,
            a = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return j.intl
            .formatToMarkdownString(l, {
                mediaTitle: i,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    Z = (e, t) =>
        j.intl.formatToPlainString(j.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: P } = e,
        y = (0, i.e7)([s.default], () => s.default.getUser(n.author_id)),
        { largeImage: L } = (0, m.rv)({ entry: n }),
        { primaryColor: T, secondaryColor: N } = (0, p.Z)(null == L ? void 0 : L.src),
        _ = (0, i.e7)([o.default], () => o.default.locale),
        S = (0, x.ap)(n.extra.media_assets_large_text),
        E = a.useCallback(
            (e) => {
                if (null != y && (null == L ? void 0 : L.src) != null)
                    return (0, h.B)({
                        entry: n,
                        mediaImageSrc: null == L ? void 0 : L.src,
                        avatarSrc: y.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: I(n, t, y),
                        timestamp: (0, x.yh)(n, _),
                        episodeDescription: S,
                        colors: [T, N],
                        channelId: e
                    });
            },
            [t, n, S, _, null == L ? void 0 : L.src, T, N, y]
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
    return null == y
        ? null
        : (0, l.jsxs)(g.yR, {
              children: [
                  (0, l.jsx)(g.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, x.kr)(n) ? j.t['LH+Z39'] : j.t.YuKgmp,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(f.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': j.intl.string(j.t.jdJYX1)
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
                          user: y,
                          channel: t,
                          generateReactionImage: E,
                          reactionImageAltText: Z(n, y),
                          entry: n
                      })
                  })
              ]
          });
};
