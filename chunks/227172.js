"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("493683"),
  r = n("706454"),
  o = n("5192"),
  u = n("561308"),
  d = n("69259"),
  c = n("919394"),
  f = n("438226"),
  h = n("206295"),
  m = n("91140"),
  p = n("43205"),
  E = n("591853"),
  C = n("206583"),
  g = n("689938"),
  S = n("522791");
let _ = e => {
    let t = (0, u.isEntryActive)(e);
    return (0, u.isEntryNew)(e) ? t ? g.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : g.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? g.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : g.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  T = (e, t, n) => {
    let a = _(e),
      l = o.default.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return a.plainFormat({
      gameName: s,
      userName: l
    }).replaceAll("*", "")
  },
  I = (e, t, n) => {
    let a = _(e),
      l = o.default.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return a.format({
      userName: l,
      gameName: s
    })
  },
  A = (e, t) => g.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: o,
    requestId: g
  } = e, {
    applicationImageSrc: _,
    user: v
  } = (0, m.useGamingContentData)(o), {
    primaryColor: N,
    secondaryColor: x
  } = (0, h.default)(_), M = (0, l.useStateFromStores)([r.default], () => r.default.locale);
  if (null == v) return null;
  let R = async e => {
    try {
      let t = await i.default.openPrivateChannel(o.author_id, !1, !1),
        a = await (0, c.generateGamingContentImage)({
          entry: o,
          applicationImageSrc: _,
          avatarSrc: v.getAvatarURL(n.guild_id, 128),
          description: T(o, n, v),
          timestamp: (0, u.formatEntryTimestamp)(o, M),
          colors: [N, x],
          channelId: t
        });
      await (0, f.sendContentImageReply)({
        file: a,
        user: v,
        altText: A(o, v),
        reply: e
      }), (0, d.trackInteraction)(C.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: o,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: g
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(E.Popout, {
    children: [(0, a.jsxs)(E.PopoutHero, {
      backgroundImgSrc: _,
      children: [(0, a.jsxs)("div", {
        className: S.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(E.PopoutAvatar, {
            user: v,
            guildId: n.guild_id
          }), (0, a.jsx)(E.PopoutTitle, {
            children: I(o, n, v)
          })]
        }), (0, a.jsx)(p.ContentImage, {
          size: 80,
          src: _,
          className: S.contentImage
        })]
      }), (0, a.jsx)(m.ContentRowBadges, {
        className: S.badgeContainer,
        entry: o,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(E.PopoutReactor, {
      onMessageReact: R,
      user: v,
      channel: n
    })]
  })
}