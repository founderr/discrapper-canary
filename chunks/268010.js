n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    s = n(706454),
    o = n(594174),
    u = n(49012),
    c = n(5192),
    d = n(591759),
    h = n(379357),
    m = n(561308),
    x = n(644810),
    E = n(206295),
    _ = n(335326),
    v = n(297781),
    C = n(591853),
    f = n(410441),
    p = n(689938);
let T = (e, t, n) => {
        let l = p.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            a = c.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return l
            .plainFormat({
                mediaTitle: i,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    g = (e, t) =>
        p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: I } = e,
        N = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
        { largeImage: Z } = (0, h.rv)({ entry: n }),
        { primaryColor: P, secondaryColor: M } = (0, E.Z)(null == Z ? void 0 : Z.src),
        L = (0, i.e7)([s.default], () => s.default.locale),
        S = (0, m.ap)(n.extra.media_assets_large_text),
        A = a.useCallback(
            (e) => {
                if (null != N && (null == Z ? void 0 : Z.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == Z ? void 0 : Z.src,
                        avatarSrc: N.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: T(n, t, N),
                        timestamp: (0, m.yh)(n, L),
                        episodeDescription: S,
                        colors: [P, M],
                        channelId: e
                    });
            },
            [t, n, S, L, null == Z ? void 0 : Z.src, P, M, N]
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
    return null == N
        ? null
        : (0, l.jsxs)(C.yR, {
              children: [
                  (0, l.jsx)(C.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, m.kr)(n) ? p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(f.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': p.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, l.jsx)(v.Gk, {
                          location: v.Gt.POPOUT,
                          children: _.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: R,
                      onClickThumbnail: R
                  }),
                  (0, l.jsx)(C.St, {
                      children: (0, l.jsx)(C.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: I,
                          user: N,
                          channel: t,
                          generateReactionImage: A,
                          reactionImageAltText: g(n, N),
                          entry: n
                      })
                  })
              ]
          });
};
