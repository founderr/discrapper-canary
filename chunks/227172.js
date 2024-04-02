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
  d = n("919394"),
  c = n("438226"),
  f = n("206295"),
  h = n("91140"),
  m = n("43205"),
  p = n("591853"),
  E = n("206583"),
  C = n("689938"),
  g = n("522791");
let S = e => {
    let t = (0, o.isEntryActive)(e);
    return (0, o.isEntryNew)(e) ? t ? C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : C.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  _ = (e, t, n) => {
    let a = S(e),
      l = r.default.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return a.plainFormat({
      gameName: s,
      userName: l
    }).replaceAll("*", "")
  },
  T = (e, t, n) => {
    let a = S(e),
      l = r.default.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return a.format({
      userName: l,
      gameName: s
    })
  },
  I = (e, t) => C.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: r,
    requestId: C
  } = e, {
    applicationImageSrc: S,
    user: A
  } = (0, h.useGamingContentData)(r), {
    primaryColor: v,
    secondaryColor: N
  } = (0, f.default)(S), x = (0, l.useStateFromStores)([i.default], () => i.default.locale);
  if (null == A) return null;
  let M = async e => {
    try {
      let t = await (0, d.generateGamingContentImage)({
        entry: r,
        applicationImageSrc: S,
        avatarSrc: A.getAvatarURL(n.guild_id, 128),
        description: _(r, n, A),
        timestamp: (0, o.formatEntryTimestamp)(r, x),
        colors: [v, N]
      });
      await (0, c.sendContentImageReply)({
        file: t,
        user: A,
        altText: I(r, A),
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
      backgroundImgSrc: S,
      children: [(0, a.jsxs)("div", {
        className: g.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(p.PopoutAvatar, {
            user: A,
            guildId: n.guild_id
          }), (0, a.jsx)(p.PopoutTitle, {
            children: T(r, n, A)
          })]
        }), (0, a.jsx)(m.ContentImage, {
          size: 80,
          src: S,
          className: g.contentImage
        })]
      }), (0, a.jsx)(h.ContentRowBadges, {
        className: g.badgeContainer,
        entry: r,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(p.PopoutReactor, {
      onMessageReact: M,
      user: A,
      channel: n
    })]
  })
}