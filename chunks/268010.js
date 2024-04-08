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
  h = n("43205"),
  m = n("591853"),
  p = n("689938"),
  E = n("522791");
let C = (e, t, n) => {
    let a = p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = o.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  g = (e, t, n) => {
    let a = p.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = o.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.format({
      userName: l,
      mediaTitle: s,
      episodeDescription: e.extra.media_subtitle
    })
  },
  S = (e, t) => p.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: o,
    updatePopoutPosition: p
  } = e, {
    user: _,
    mediaImageSrc: T,
    episodeDescription: I
  } = (0, f.useWatchContentData)(n), {
    primaryColor: A,
    secondaryColor: v
  } = (0, c.default)(T), x = (0, s.useStateFromStores)([r.default], () => r.default.locale), N = l.useCallback(e => {
    if (null != _ && null != T) return (0, d.generateWatchContentImage)({
      entry: n,
      mediaImageSrc: T,
      avatarSrc: _.getAvatarURL(t.guild_id, 128),
      description: C(n, t, _),
      timestamp: (0, u.formatEntryTimestamp)(n, x),
      episodeDescription: I,
      colors: [A, v],
      channelId: e
    })
  }, [t, n, I, x, T, A, v, _]);
  return null == _ ? null : (0, a.jsxs)(m.Popout, {
    children: [(0, a.jsxs)(m.PopoutHero, {
      backgroundImgSrc: T,
      children: [(0, a.jsxs)("div", {
        className: E.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(m.PopoutAvatar, {
            user: _,
            guildId: t.guild_id
          }), (0, a.jsx)(m.PopoutTitle, {
            children: g(n, t, _)
          })]
        }), (0, a.jsx)(h.ContentImage, {
          size: 80,
          src: T,
          className: E.contentImage
        })]
      }), (0, a.jsx)(f.ContentRowBadges, {
        className: E.badgeContainer,
        entry: n,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE,
        episodeDescription: I
      })]
    }), (0, a.jsx)(m.PopoutReactor, {
      user: _,
      channel: t,
      updatePopoutPosition: p,
      generateReactionImage: N,
      reactionImageAltText: S(n, _),
      entry: n,
      requestId: o
    })]
  })
}