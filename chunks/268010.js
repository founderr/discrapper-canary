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
    E = n(206295),
    v = n(335326),
    _ = n(297781),
    f = n(591853),
    T = n(410441),
    p = n(689938);
let g = (e, t, n) => {
        let a = p.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
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
        p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: N } = e,
        C = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
        { largeImage: A } = (0, h.rv)({ entry: n }),
        { primaryColor: Z, secondaryColor: P } = (0, E.Z)(null == A ? void 0 : A.src),
        S = (0, i.e7)([s.default], () => s.default.locale),
        M = (0, m.ap)(n.extra.media_assets_large_text),
        O = l.useCallback(
            (e) => {
                if (null != C && (null == A ? void 0 : A.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == A ? void 0 : A.src,
                        avatarSrc: C.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: g(n, t, C),
                        timestamp: (0, m.yh)(n, S),
                        episodeDescription: M,
                        colors: [Z, P],
                        channelId: e
                    });
            },
            [t, n, M, S, null == A ? void 0 : A.src, Z, P, C]
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
    return null == C
        ? null
        : (0, a.jsxs)(f.yR, {
              children: [
                  (0, a.jsx)(f.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, m.kr)(n) ? p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, a.jsx)(T.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': p.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, a.jsx)(_.Gk, {
                          location: _.Gt.POPOUT,
                          children: v.t.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: R,
                      onClickThumbnail: R
                  }),
                  (0, a.jsx)(f.St, {
                      children: (0, a.jsx)(f.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: N,
                          user: C,
                          channel: t,
                          generateReactionImage: O,
                          reactionImageAltText: I(n, C),
                          entry: n
                      })
                  })
              ]
          });
};
