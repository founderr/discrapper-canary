"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("706454"),
  i = n("5192"),
  r = n("561308"),
  o = n("69259"),
  u = n("438226"),
  d = n("644810"),
  c = n("206295"),
  f = n("335326"),
  h = n("43205"),
  m = n("591853"),
  p = n("206583"),
  E = n("689938"),
  C = n("522791");
let g = (e, t, n) => {
    let a = E.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = i.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_assets_large_text
    }).replaceAll("*", "")
  },
  S = (e, t, n) => {
    let a = E.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = i.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.format({
      userName: l,
      mediaTitle: s,
      episodeDescription: e.extra.media_assets_large_text
    })
  },
  _ = (e, t) => E.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: i,
    requestId: E
  } = e, {
    user: T,
    mediaImageSrc: I
  } = (0, f.useWatchContentData)(i), {
    primaryColor: A,
    secondaryColor: v
  } = (0, c.default)(I), N = (0, l.useStateFromStores)([s.default], () => s.default.locale);
  if (null == T) return null;
  let x = async e => {
    try {
      let t = await (0, d.generateWatchContentImage)({
        entry: i,
        mediaImageSrc: I,
        avatarSrc: T.getAvatarURL(n.guild_id, 128),
        description: g(i, n, T),
        timestamp: (0, r.formatEntryTimestamp)(i, N),
        colors: [A, v]
      });
      await (0, u.sendContentImageReply)({
        user: T,
        altText: _(i, T),
        file: t,
        reply: e
      }), (0, o.trackInteraction)(p.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: i,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: E
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(m.Popout, {
    children: [(0, a.jsx)(m.PopoutHero, {
      backgroundImgSrc: I,
      children: (0, a.jsxs)("div", {
        className: C.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(m.PopoutAvatar, {
            user: T,
            guildId: n.guild_id
          }), (0, a.jsx)(m.PopoutTitle, {
            children: S(i, n, T)
          })]
        }), (0, a.jsx)(h.ContentImage, {
          size: 80,
          src: I,
          className: C.contentImage
        })]
      })
    }), (0, a.jsx)(m.PopoutReactor, {
      onMessageReact: x,
      user: T,
      channel: n
    })]
  })
}