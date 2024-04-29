"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("706454"),
  r = n("561308"),
  o = n("919394"),
  u = n("438226"),
  d = n("206295"),
  c = n("91140"),
  f = n("297781"),
  h = n("591853"),
  m = n("689938");
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: p,
    closePopout: E
  } = e, {
    applicationImageSrc: C,
    user: g
  } = (0, c.useGamingContentData)(n), {
    primaryColor: S,
    secondaryColor: _
  } = (0, d.default)(C), T = (0, s.useStateFromStores)([i.default], () => i.default.locale), I = l.useCallback(e => {
    if (null != C && null != t && null != g) return (0, o.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: C,
      avatarSrc: g.getAvatarURL(t.guild_id, 128),
      description: (0, u.formatCanvasDescription)(n, t, g),
      timestamp: (0, r.formatEntryTimestamp)(n, T),
      colors: [S, _],
      channelId: e
    })
  }, [C, t, n, T, S, _, g]);
  return null == g ? null : (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: C,
      user: g,
      channel: t,
      userDescription: (0, r.isEntryActive)(n) ? m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.POPOUT,
        children: c.GAMING_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsxs)(h.PopoutInteractionsContainer, {
      children: [(0, a.jsx)(h.PopoutReactor, {
        closePopout: E,
        user: g,
        channel: t,
        generateReactionImage: I,
        reactionImageAltText: (0, u.getContentAltText)(n, g),
        entry: n,
        requestId: p
      }), (0, a.jsx)(h.PopoutJoinPrompt, {
        entry: n,
        user: g,
        requestId: p,
        channel: t
      })]
    })]
  })
}