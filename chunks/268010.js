t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(442837),
    r = t(481060),
    s = t(706454),
    o = t(49012),
    c = t(5192),
    u = t(591759),
    d = t(561308),
    m = t(644810),
    _ = t(206295),
    E = t(335326),
    T = t(297781),
    h = t(591853),
    x = t(410441),
    N = t(689938);
let I = (e, n, t) => {
        let a = N.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            l = c.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
            i = e.extra.media_title;
        return a
            .plainFormat({
                mediaTitle: i,
                userName: l,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    C = (e, n) =>
        N.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: n.username,
            activity: e.extra.media_title
        });
n.Z = (e) => {
    let { channel: n, entry: t, onReaction: c, onVoiceChannelPreview: p } = e,
        { user: g, mediaImageSrc: f, episodeDescription: v } = (0, E.Bj)(t),
        { primaryColor: M, secondaryColor: P } = (0, _.Z)(f),
        Z = (0, i.e7)([s.default], () => s.default.locale),
        S = l.useCallback(
            (e) => {
                if (null != g && null != f)
                    return (0, m.B)({
                        entry: t,
                        mediaImageSrc: f,
                        avatarSrc: g.getAvatarURL(null == n ? void 0 : n.guild_id, 128),
                        description: I(t, n, g),
                        timestamp: (0, d.yh)(t, Z),
                        episodeDescription: v,
                        colors: [M, P],
                        channelId: e
                    });
            },
            [n, t, v, Z, f, M, P, g]
        ),
        A = () => {
            if (null == t.extra.url) return;
            let e = u.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, o.q)({
                    href: u.Z.format(e),
                    trusted: !1
                });
        };
    return null == g
        ? null
        : (0, a.jsxs)(h.yR, {
              children: [
                  (0, a.jsx)(h.wG, {
                      thumbnailSrc: f,
                      channel: n,
                      entry: t,
                      userDescription: (0, d.kr)(t) ? N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, a.jsx)(x.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': N.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, a.jsx)(T.Gk, {
                          location: T.Gt.POPOUT,
                          children: E.td.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                      }),
                      onClickTitle: A,
                      onClickThumbnail: A
                  }),
                  (0, a.jsx)(h.St, {
                      children: (0, a.jsx)(h.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: p,
                          user: g,
                          channel: n,
                          generateReactionImage: S,
                          reactionImageAltText: C(t, g),
                          entry: t
                      })
                  })
              ]
          });
};
