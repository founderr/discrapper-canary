t(627494), t(757143);
var a = t(735250),
    l = t(470079),
    i = t(442837),
    r = t(481060),
    s = t(706454),
    o = t(594174),
    u = t(49012),
    c = t(5192),
    d = t(591759),
    _ = t(379357),
    m = t(561308),
    E = t(644810),
    T = t(206295),
    h = t(335326),
    x = t(297781),
    I = t(591853),
    N = t(410441),
    C = t(689938);
let p = (e, n, t) => {
        let a = C.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
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
    g = (e, n) =>
        C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: n.username,
            activity: e.extra.media_title
        });
n.Z = (e) => {
    let { channel: n, entry: t, onReaction: c, onVoiceChannelPreview: v } = e,
        f = (0, i.e7)([o.default], () => o.default.getUser(t.author_id)),
        { largeImage: M } = (0, _.rv)({ entry: t }),
        { primaryColor: P, secondaryColor: Z } = (0, T.Z)(null == M ? void 0 : M.src),
        A = (0, i.e7)([s.default], () => s.default.locale),
        S = (0, m.ap)(t.extra.media_assets_large_text),
        O = l.useCallback(
            (e) => {
                if (null != f && (null == M ? void 0 : M.src) != null)
                    return (0, E.B)({
                        entry: t,
                        mediaImageSrc: null == M ? void 0 : M.src,
                        avatarSrc: f.getAvatarURL(null == n ? void 0 : n.guild_id, 128),
                        description: p(t, n, f),
                        timestamp: (0, m.yh)(t, A),
                        episodeDescription: S,
                        colors: [P, Z],
                        channelId: e
                    });
            },
            [n, t, S, A, null == M ? void 0 : M.src, P, Z, f]
        ),
        R = () => {
            if (null == t.extra.url) return;
            let e = d.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, u.q)({
                    href: d.Z.format(e),
                    trusted: !1
                });
        };
    return null == f
        ? null
        : (0, a.jsxs)(I.yR, {
              children: [
                  (0, a.jsx)(I.wG, {
                      channel: n,
                      entry: t,
                      userDescription: (0, m.kr)(t) ? C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, a.jsx)(N.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': C.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, a.jsx)(x.Gk, {
                          location: x.Gt.POPOUT,
                          children: h.t.map((e, n) => (0, a.jsx)(e, { entry: t }, n))
                      }),
                      onClickTitle: R,
                      onClickThumbnail: R
                  }),
                  (0, a.jsx)(I.St, {
                      children: (0, a.jsx)(I.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: v,
                          user: f,
                          channel: n,
                          generateReactionImage: O,
                          reactionImageAltText: g(t, f),
                          entry: t
                      })
                  })
              ]
          });
};
