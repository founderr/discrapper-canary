"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("493683"),
  o = n("706454"),
  u = n("5192"),
  d = n("561308"),
  c = n("69259"),
  f = n("438226"),
  h = n("644810"),
  m = n("206295"),
  p = n("335326"),
  E = n("43205"),
  C = n("591853"),
  g = n("206583"),
  S = n("689938"),
  _ = n("522791");
let T = (e, t, n) => {
    let a = S.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = u.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.plainFormat({
      mediaTitle: s,
      userName: l,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  I = (e, t, n) => {
    let a = S.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
      l = u.default.getName(t.guild_id, t.id, n),
      s = e.extra.media_title;
    return a.format({
      userName: l,
      mediaTitle: s,
      episodeDescription: e.extra.media_subtitle
    })
  },
  A = (e, t) => S.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
    username: t.username,
    activity: e.extra.media_title
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: u,
    requestId: S,
    updatePopoutPosition: v
  } = e, {
    user: N,
    mediaImageSrc: x,
    episodeDescription: M
  } = (0, p.useWatchContentData)(u), {
    primaryColor: R,
    secondaryColor: L
  } = (0, m.default)(x), y = (0, s.useStateFromStores)([o.default], () => o.default.locale), O = l.useCallback(async () => {
    if (null == N || null == x) return;
    let e = await r.default.getOrEnsurePrivateChannel(u.author_id);
    return (0, h.generateWatchContentImage)({
      entry: u,
      mediaImageSrc: x,
      avatarSrc: N.getAvatarURL(n.guild_id, 128),
      description: T(u, n, N),
      timestamp: (0, d.formatEntryTimestamp)(u, y),
      episodeDescription: M,
      colors: [R, L],
      channelId: e
    })
  }, [n, u, M, y, x, R, L, N]);
  if (null == N) return null;
  let j = async e => {
    try {
      let t = await r.default.getOrEnsurePrivateChannel(u.author_id),
        a = await (0, h.generateWatchContentImage)({
          entry: u,
          mediaImageSrc: x,
          avatarSrc: N.getAvatarURL(n.guild_id, 128),
          description: T(u, n, N),
          timestamp: (0, d.formatEntryTimestamp)(u, y),
          episodeDescription: M,
          colors: [R, L],
          channelId: t
        });
      await (0, f.sendContentImageReply)({
        user: N,
        altText: A(u, N),
        file: a,
        reply: e
      }), (0, c.trackInteraction)(g.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: u,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: S
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(C.Popout, {
    children: [(0, a.jsxs)(C.PopoutHero, {
      backgroundImgSrc: x,
      children: [(0, a.jsxs)("div", {
        className: _.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(C.PopoutAvatar, {
            user: N,
            guildId: n.guild_id
          }), (0, a.jsx)(C.PopoutTitle, {
            children: I(u, n, N)
          })]
        }), (0, a.jsx)(E.ContentImage, {
          size: 80,
          src: x,
          className: _.contentImage
        })]
      }), (0, a.jsx)(p.ContentRowBadges, {
        className: _.badgeContainer,
        entry: u,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE,
        episodeDescription: M
      })]
    }), (0, a.jsx)(C.PopoutReactor, {
      onMessageReact: j,
      user: N,
      channel: n,
      updatePopoutPosition: v,
      generateReactionImage: O
    })]
  })
}