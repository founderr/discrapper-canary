"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("706454"),
  r = n("5192"),
  o = n("561308"),
  u = n("69259"),
  d = n("438226"),
  c = n("644810"),
  f = n("206295"),
  h = n("335326"),
  m = n("43205"),
  p = n("591853"),
  E = n("206583"),
  C = n("689938"),
  g = n("522791");
let S = (e, t, n) => {
    let a = C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = r.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  _ = (e, t, n) => {
    let a = C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = r.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.format({
      userName: l,
      mediaTitle: s,
      episodeDescription: e.extra.media_subtitle
    })
  },
  T = (e, t) => C.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: r,
    requestId: C
  } = e, {
    user: I,
    mediaImageSrc: A,
    episodeDescription: v
  } = (0, h.useWatchContentData)(r), {
    primaryColor: N,
    secondaryColor: x
  } = (0, f.default)(A), M = (0, l.useStateFromStores)([i.default], () => i.default.locale);
  if (null == I) return null;
  let R = async e => {
    try {
      let t = await (0, c.generateWatchContentImage)({
        entry: r,
        mediaImageSrc: A,
        avatarSrc: I.getAvatarURL(n.guild_id, 128),
        description: S(r, n, I),
        timestamp: (0, o.formatEntryTimestamp)(r, M),
        episodeDescription: v,
        colors: [N, x]
      });
      await (0, d.sendContentImageReply)({
        user: I,
        altText: T(r, I),
        file: t,
        reply: e
      }), (0, u.trackInteraction)(E.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: r,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: C
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(p.Popout, {
    children: [(0, a.jsxs)(p.PopoutHero, {
      backgroundImgSrc: A,
      children: [(0, a.jsxs)("div", {
        className: g.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(p.PopoutAvatar, {
            user: I,
            guildId: n.guild_id
          }), (0, a.jsx)(p.PopoutTitle, {
            children: _(r, n, I)
          })]
        }), (0, a.jsx)(m.ContentImage, {
          size: 80,
          src: A,
          className: g.contentImage
        })]
      }), (0, a.jsx)(h.ContentRowBadges, {
        className: g.badgeContainer,
        entry: r,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE,
        episodeDescription: v
      })]
    }), (0, a.jsx)(p.PopoutReactor, {
      onMessageReact: R,
      user: I,
      channel: n
    })]
  })
}