"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("481060"),
  r = n("70956"),
  o = n("5192"),
  u = n("561308"),
  d = n("919394"),
  c = n("206295"),
  f = n("555672"),
  h = n("591853"),
  m = n("689938"),
  p = n("522791");
let E = (e, t, n, a) => {
    let l = function(e) {
        if (e === s.AggregateRange.WEEK) return m.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
      }(a),
      i = o.default.getName(t.guild_id, t.id, n),
      r = e.extra.game_name;
    return l.plainFormat({
      gameName: r,
      userName: i
    }).replaceAll("*", "")
  },
  C = (e, t) => m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: o
  } = e, {
    applicationImageSrc: g,
    user: S
  } = (0, f.useGamingContentData)(n), {
    primaryColor: _,
    secondaryColor: T
  } = (0, c.default)(g), I = (0, u.getEntryDuration)(n), A = (0, u.getAggregateRange)(n), v = l.useCallback(e => {
    if (null != S && null != I && null != A && (0, f.isAllowedRange)(A)) return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrc: S.getAvatarURL(t.guild_id, 128),
      description: E(n, t, S, A),
      timestamp: m.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(I / r.default.Seconds.HOUR)
      }),
      colors: [_, T],
      channelId: e
    })
  }, [g, t, I, n, _, A, T, S]);
  return null != S && null != I && null != A && (0, f.isAllowedRange)(A) ? (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: g,
      user: S,
      channel: t,
      userDescription: m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: (0, a.jsx)(f.ContentRowBadges, {
        className: p.badgeContainer,
        entry: n,
        textColor: "text-primary",
        iconColor: i.tokens.colors.TEXT_PRIMARY,
        forPopout: !0
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: o,
        user: S,
        channel: t,
        generateReactionImage: v,
        reactionImageAltText: C(n, S),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}