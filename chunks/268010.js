n(627494), n(757143);
var a = n(735250),
    l = n(470079),
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
    v = n(206295),
    E = n(335326),
    _ = n(297781),
    f = n(591853),
    p = n(410441),
    T = n(689938);
let g = (e, t, n) => {
        let a = T.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            l = c.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return a
            .plainFormat({
                mediaTitle: i,
                userName: l,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    I = (e, t) =>
        T.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: C } = e,
        N = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
        { largeImage: P } = (0, h.rv)({ entry: n }),
        { primaryColor: Z, secondaryColor: S } = (0, v.Z)(null == P ? void 0 : P.src),
        A = (0, i.e7)([s.default], () => s.default.locale),
        R = (0, m.ap)(n.extra.media_assets_large_text),
        M = l.useCallback(
            (e) => {
                if (null != N && (null == P ? void 0 : P.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == P ? void 0 : P.src,
                        avatarSrc: N.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: g(n, t, N),
                        timestamp: (0, m.yh)(n, A),
                        episodeDescription: R,
                        colors: [Z, S],
                        channelId: e
                    });
            },
            [t, n, R, A, null == P ? void 0 : P.src, Z, S, N]
        ),
        y = () => {
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
        : (0, a.jsxs)(f.yR, {
              children: [
                  (0, a.jsx)(f.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, m.kr)(n) ? T.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : T.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, a.jsx)(p.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': T.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, a.jsx)(_.Gk, {
                          location: _.Gt.POPOUT,
                          children: E.t.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: y,
                      onClickThumbnail: y
                  }),
                  (0, a.jsx)(f.St, {
                      children: (0, a.jsx)(f.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: C,
                          user: N,
                          channel: t,
                          generateReactionImage: M,
                          reactionImageAltText: I(n, N),
                          entry: n
                      })
                  })
              ]
          });
};
