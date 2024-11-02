n(627494), n(757143);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(706454),
    s = n(594174),
    u = n(49012),
    c = n(5192),
    d = n(591759),
    h = n(379357),
    m = n(561308),
    x = n(644810),
    v = n(206295),
    f = n(335326),
    p = n(297781),
    g = n(591853),
    C = n(410441),
    I = n(388032);
let P = (e, t, n) => {
        let i = I.t.LHF6Dw,
            l = c.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            a = e.extra.media_title;
        return I.intl
            .formatToMarkdownString(i, {
                mediaTitle: a,
                userName: l,
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
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: y } = e,
        j = (0, a.e7)([s.default], () => s.default.getUser(n.author_id)),
        { largeImage: w } = (0, h.rv)({ entry: n }),
        { primaryColor: T, secondaryColor: L } = (0, v.Z)(null == w ? void 0 : w.src),
        S = (0, a.e7)([o.default], () => o.default.locale),
        N = (0, m.ap)(n.extra.media_assets_large_text),
        E = l.useCallback(
            (e) => {
                if (null != j && (null == w ? void 0 : w.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == w ? void 0 : w.src,
                        avatarSrc: j.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: P(n, t, j),
                        timestamp: (0, m.yh)(n, S),
                        episodeDescription: N,
                        colors: [T, L],
                        channelId: e
                    });
            },
            [t, n, N, S, null == w ? void 0 : w.src, T, L, j]
        ),
        _ = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, u.q)({
                    href: d.Z.format(e),
                    trusted: !1
                });
        };
    return null == j
        ? null
        : (0, i.jsxs)(g.yR, {
              children: [
                  (0, i.jsx)(g.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, m.kr)(n) ? I.t['LH+Z39'] : I.t.YuKgmp,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, i.jsx)(C.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': I.intl.string(I.t.jdJYX1)
                      }),
                      badges: (0, i.jsx)(p.Gk, {
                          location: p.Gt.POPOUT,
                          children: f.t.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: _,
                      onClickThumbnail: _
                  }),
                  (0, i.jsx)(g.St, {
                      children: (0, i.jsx)(g.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: y,
                          user: j,
                          channel: t,
                          generateReactionImage: E,
                          reactionImageAltText: Z(n, j),
                          entry: n
                      })
                  })
              ]
          });
};
