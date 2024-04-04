"use strict";
n.r(t);
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
  g = n("522791");
let S = (e, t, n) => {
  let a = (0, f.getDescription)(e),
    l = o.default.getName(t.guild_id, t.id, n),
    s = e.extra.game_name;
  return a.format({
    userName: l,
    gameName: s
  })
};
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: o,
    requestId: _,
    updatePopoutPosition: T
  } = e, {
    applicationImageSrc: I,
    user: A
  } = (0, m.useGamingContentData)(o), {
    primaryColor: v,
    secondaryColor: N
  } = (0, h.default)(I), x = (0, l.useStateFromStores)([r.default], () => r.default.locale);
  if (null == A) return null;
  let M = async e => {
    try {
      let t = await i.default.openPrivateChannel(o.author_id, !1, !1),
        a = await (0, c.generateGamingContentImage)({
          entry: o,
          applicationImageSrc: I,
          avatarSrc: A.getAvatarURL(n.guild_id, 128),
          description: (0, f.formatCanvasDescription)(o, n, A),
          timestamp: (0, u.formatEntryTimestamp)(o, x),
          colors: [v, N],
          channelId: t
        });
      await (0, f.sendContentImageReply)({
        file: a,
        user: A,
        altText: (0, f.getContentAltText)(o, A),
        reply: e
      }), (0, d.trackInteraction)(C.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: o,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: _
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(E.Popout, {
    children: [(0, a.jsxs)(E.PopoutHero, {
      backgroundImgSrc: I,
      children: [(0, a.jsxs)("div", {
        className: g.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(E.PopoutAvatar, {
            user: A,
            guildId: n.guild_id
          }), (0, a.jsx)(E.PopoutTitle, {
            children: S(o, n, A)
          })]
        }), (0, a.jsx)(p.ContentImage, {
          size: 80,
          src: I,
          className: g.contentImage
        })]
      }), (0, a.jsx)(m.ContentRowBadges, {
        className: g.badgeContainer,
        entry: o,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(E.PopoutReactor, {
      onMessageReact: M,
      user: A,
      channel: n,
      updatePopoutPosition: T
    })]
  })
}