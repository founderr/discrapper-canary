"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("493683"),
  o = n("706454"),
  u = n("5192"),
  d = n("561308"),
  c = n("69259"),
  f = n("919394"),
  h = n("438226"),
  m = n("206295"),
  p = n("91140"),
  E = n("43205"),
  C = n("591853"),
  g = n("206583"),
  S = n("522791");
let _ = (e, t, n) => {
  let a = (0, h.getDescription)(e),
    l = u.default.getName(t.guild_id, t.id, n),
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
    entry: u,
    requestId: T,
    updatePopoutPosition: I
  } = e, {
    applicationImageSrc: A,
    user: v
  } = (0, p.useGamingContentData)(u), {
    primaryColor: x,
    secondaryColor: N
  } = (0, m.default)(A), M = (0, s.useStateFromStores)([o.default], () => o.default.locale), R = l.useCallback(async () => {
    if (null == A || null == n || null == v) return;
    let e = await r.default.getOrEnsurePrivateChannel(u.author_id);
    return (0, f.generateGamingContentImage)({
      entry: u,
      applicationImageSrc: A,
      avatarSrc: v.getAvatarURL(n.guild_id, 128),
      description: (0, h.formatCanvasDescription)(u, n, v),
      timestamp: (0, d.formatEntryTimestamp)(u, M),
      colors: [x, N],
      channelId: e
    })
  }, [A, n, u, M, x, N, v]);
  if (null == v) return null;
  let L = async e => {
    try {
      let t = await r.default.openPrivateChannel(u.author_id, !1, !1),
        a = await (0, f.generateGamingContentImage)({
          entry: u,
          applicationImageSrc: A,
          avatarSrc: v.getAvatarURL(n.guild_id, 128),
          description: (0, h.formatCanvasDescription)(u, n, v),
          timestamp: (0, d.formatEntryTimestamp)(u, M),
          colors: [x, N],
          channelId: t
        });
      await (0, h.sendContentImageReply)({
        file: a,
        user: v,
        altText: (0, h.getContentAltText)(u, v),
        reply: e
      }), (0, c.trackInteraction)(g.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: u,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: T
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(C.Popout, {
    children: [(0, a.jsxs)(C.PopoutHero, {
      backgroundImgSrc: A,
      children: [(0, a.jsxs)("div", {
        className: S.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(C.PopoutAvatar, {
            user: v,
            guildId: n.guild_id
          }), (0, a.jsx)(C.PopoutTitle, {
            children: _(u, n, v)
          })]
        }), (0, a.jsx)(E.ContentImage, {
          size: 80,
          src: A,
          className: S.contentImage
        })]
      }), (0, a.jsx)(p.ContentRowBadges, {
        className: S.badgeContainer,
        entry: u,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(C.PopoutReactor, {
      onMessageReact: L,
      user: v,
      channel: n,
      updatePopoutPosition: I,
      generateReactionImage: R
    })]
  })
}