"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("706454"),
  o = n("5192"),
  u = n("561308"),
  d = n("644810"),
  c = n("206295"),
  f = n("335326"),
  h = n("591853"),
  m = n("689938"),
  p = n("50928");
let E = (e, t, n) => {
    let a = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = o.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  C = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: o,
    closePopout: g
  } = e, {
    user: S,
    mediaImageSrc: _,
    episodeDescription: T
  } = (0, f.useWatchContentData)(n), {
    primaryColor: I,
    secondaryColor: A
  } = (0, c.default)(_), v = (0, s.useStateFromStores)([r.default], () => r.default.locale), N = l.useCallback(e => {
    if (null != S && null != _) return (0, d.generateWatchContentImage)({
      entry: n,
      mediaImageSrc: _,
      avatarSrc: S.getAvatarURL(t.guild_id, 128),
      description: E(n, t, S),
      timestamp: (0, u.formatEntryTimestamp)(n, v),
      episodeDescription: T,
      colors: [I, A],
      channelId: e
    })
  }, [t, n, T, v, _, I, A, S]);
  return null == S ? null : (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: _,
      user: S,
      channel: t,
      userDescription: (0, u.isEntryActive)(n) ? m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
      title: n.extra.media_title,
      subtitle: n.extra.media_subtitle,
      badges: (0, a.jsx)(f.ContentRowBadges, {
        className: p.badgeContainer,
        entry: n,
        textColor: "text-primary",
        iconColor: i.tokens.colors.TEXT_PRIMARY,
        episodeDescription: T
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: g,
        user: S,
        channel: t,
        generateReactionImage: N,
        reactionImageAltText: C(n, S),
        entry: n,
        requestId: o
      })
    })]
  })
}