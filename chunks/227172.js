"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("706454"),
  o = n("5192"),
  u = n("561308"),
  d = n("919394"),
  c = n("438226"),
  f = n("206295"),
  h = n("91140"),
  m = n("43205"),
  p = n("591853"),
  E = n("522791");
let C = (e, t, n) => {
  let a = (0, c.getDescription)(e),
    l = o.default.getName(t.guild_id, t.id, n),
    s = e.extra.game_name;
  return a.format({
    userName: l,
    gameName: s
  })
};
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: o,
    updatePopoutPosition: g,
    closePopout: S
  } = e, {
    applicationImageSrc: _,
    user: T
  } = (0, h.useGamingContentData)(n), {
    primaryColor: I,
    secondaryColor: A
  } = (0, f.default)(_), v = (0, s.useStateFromStores)([r.default], () => r.default.locale), N = l.useCallback(e => {
    if (null != _ && null != t && null != T) return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: _,
      avatarSrc: T.getAvatarURL(t.guild_id, 128),
      description: (0, c.formatCanvasDescription)(n, t, T),
      timestamp: (0, u.formatEntryTimestamp)(n, v),
      colors: [I, A],
      channelId: e
    })
  }, [_, t, n, v, I, A, T]);
  return null == T ? null : (0, a.jsxs)(p.Popout, {
    children: [(0, a.jsxs)(p.PopoutHero, {
      backgroundImgSrc: _,
      children: [(0, a.jsxs)("div", {
        className: E.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(p.PopoutAvatar, {
            user: T,
            guildId: t.guild_id
          }), (0, a.jsx)(p.PopoutTitle, {
            children: C(n, t, T)
          })]
        }), (0, a.jsx)(m.ContentImage, {
          size: 80,
          src: _,
          className: E.contentImage
        })]
      }), (0, a.jsx)(h.ContentRowBadges, {
        className: E.badgeContainer,
        entry: n,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE
      })]
    }), (0, a.jsxs)(p.PopoutInteractionsContainer, {
      children: [(0, a.jsx)(p.PopoutReactor, {
        closePopout: S,
        user: T,
        channel: t,
        updatePopoutPosition: g,
        generateReactionImage: N,
        reactionImageAltText: (0, c.getContentAltText)(n, T),
        entry: n,
        requestId: o
      }), (0, a.jsx)(p.PopoutJoinPrompt, {
        entry: n,
        user: T
      })]
    })]
  })
}