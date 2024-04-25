"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("706454"),
  o = n("561308"),
  u = n("919394"),
  d = n("438226"),
  c = n("206295"),
  f = n("91140"),
  h = n("591853"),
  m = n("689938"),
  p = n("522791");
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: E,
    closePopout: C
  } = e, {
    applicationImageSrc: g,
    user: S
  } = (0, f.useGamingContentData)(n), {
    primaryColor: _,
    secondaryColor: T
  } = (0, c.default)(g), I = (0, s.useStateFromStores)([r.default], () => r.default.locale), A = l.useCallback(e => {
    if (null != g && null != t && null != S) return (0, u.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrc: S.getAvatarURL(t.guild_id, 128),
      description: (0, d.formatCanvasDescription)(n, t, S),
      timestamp: (0, o.formatEntryTimestamp)(n, I),
      colors: [_, T],
      channelId: e
    })
  }, [g, t, n, I, _, T, S]);
  return null == S ? null : (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: g,
      user: S,
      channel: t,
      userDescription: (0, o.isEntryActive)(n) ? m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: (0, a.jsx)(f.ContentRowBadges, {
        className: p.badgeContainer,
        entry: n,
        textColor: "text-primary",
        iconColor: i.tokens.colors.TEXT_PRIMARY
      })
    }), (0, a.jsxs)(h.PopoutInteractionsContainer, {
      children: [(0, a.jsx)(h.PopoutReactor, {
        closePopout: C,
        user: S,
        channel: t,
        generateReactionImage: A,
        reactionImageAltText: (0, d.getContentAltText)(n, S),
        entry: n,
        requestId: E
      }), (0, a.jsx)(h.PopoutJoinPrompt, {
        entry: n,
        user: S,
        requestId: E,
        channel: t
      })]
    })]
  })
}