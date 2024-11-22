n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(706454),
    s = n(594174),
    u = n(49012),
    c = n(5192),
    d = n(591759),
    m = n(379357),
    h = n(561308),
    x = n(685270),
    C = n(31074),
    p = n(206295),
    v = n(335326),
    g = n(297781),
    f = n(591853),
    I = n(410441),
    j = n(981631),
    Z = n(388032);
let P = (e, t, n) => {
        let l = Z.t.LHF6Dw,
            a = c.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return Z.intl
            .formatToMarkdownString(l, {
                mediaTitle: i,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    L = (e, t) =>
        Z.intl.formatToPlainString(Z.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: T } = e,
        y = (0, i.e7)([s.default], () => s.default.getUser(n.author_id)),
        { largeImage: N } = (0, m.rv)({ entry: n }),
        { primaryColor: _, secondaryColor: S } = (0, p.Z)(null == N ? void 0 : N.src),
        E = (0, i.e7)([o.default], () => o.default.locale),
        A = (0, C.Z)(j.ABu.CRUNCHYROLL),
        M = (0, h.ap)(n.extra.media_assets_large_text),
        k = a.useCallback(
            (e) => {
                if (null != y && (null == N ? void 0 : N.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == N ? void 0 : N.src,
                        avatarSrc: y.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: P(n, t, y),
                        timestamp: (0, h.yh)(n, E),
                        episodeDescription: M,
                        colors: [_, S],
                        channelId: e
                    });
            },
            [t, n, M, E, null == N ? void 0 : N.src, _, S, y]
        ),
        R = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, u.q)({
                    href: d.Z.format(e),
                    trusted: !1
                });
        };
    return null == y
        ? null
        : (0, l.jsxs)(f.yR, {
              children: [
                  (0, l.jsx)(f.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, h.kr)(n) ? Z.t['LH+Z39'] : Z.t.YuKgmp,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(I.Z, {
                          onClick: A,
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': Z.intl.string(Z.t.jdJYX1)
                      }),
                      badges: (0, l.jsx)(g.Gk, {
                          location: g.Gt.POPOUT,
                          children: v.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: R,
                      onClickThumbnail: R
                  }),
                  (0, l.jsx)(f.St, {
                      children: (0, l.jsx)(f.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: T,
                          user: y,
                          channel: t,
                          generateReactionImage: k,
                          reactionImageAltText: L(n, y),
                          entry: n
                      })
                  })
              ]
          });
};
