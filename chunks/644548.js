"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("70956"),
  r = n("5192"),
  o = n("561308"),
  u = n("919394"),
  d = n("206295"),
  c = n("555672"),
  f = n("297781"),
  h = n("591853"),
  m = n("265048"),
  p = n("689938");
let E = (e, t, n, a) => {
    let l = function(e) {
        if (e === s.AggregateRange.WEEK) return p.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
      }(a),
      i = r.default.getName(t.guild_id, t.id, n),
      o = e.extra.game_name;
    return l.plainFormat({
      gameName: o,
      userName: i
    }).replaceAll("*", "")
  },
  C = (e, t) => p.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    closePopout: r
  } = e, {
    iconUrl: g,
    user: S
  } = (0, m.useGamingContentData)(n), {
    primaryColor: _,
    secondaryColor: T
  } = (0, d.default)(g), I = (0, o.getEntryDuration)(n), A = (0, o.getAggregateRange)(n), v = l.useCallback(e => {
    if (null != S && null != I && null != A && (0, c.isAllowedRange)(A)) return (0, u.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrcs: [S.getAvatarURL(t.guild_id, 128)],
      description: E(n, t, S, A),
      timestamp: p.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(I / i.default.Seconds.HOUR)
      }),
      colors: [_, T],
      channelId: e
    })
  }, [g, t, I, n, _, A, T, S]);
  return null != S && null != I && null != A && (0, c.isAllowedRange)(A) ? (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: g,
      channel: t,
      entry: n,
      userDescription: p.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: n.extra.game_name,
      badges: (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.POPOUT,
        children: c.TOP_GAME_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: r,
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