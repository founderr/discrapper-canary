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
    iconTitle: S,
    user: _,
    details: T,
    gameTitle: I
  } = (0, m.useGamingContentData)(n), {
    primaryColor: A,
    secondaryColor: v
  } = (0, d.default)(g), N = (0, o.getEntryDuration)(n), x = (0, o.getAggregateRange)(n), M = l.useCallback(e => {
    if (null != _ && null != N && null != x && (0, c.isAllowedRange)(x)) return (0, u.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: g,
      avatarSrcs: [_.getAvatarURL(t.guild_id, 128)],
      description: E(n, t, _, x),
      timestamp: p.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(N / i.default.Seconds.HOUR)
      }),
      colors: [A, v],
      channelId: e
    })
  }, [g, t, N, n, A, x, v, _]);
  return null != _ && null != N && null != x && (0, c.isAllowedRange)(x) ? (0, a.jsxs)(h.Popout, {
    children: [(0, a.jsx)(h.PopoutContent, {
      thumbnailSrc: g,
      thumbnailTitle: S,
      channel: t,
      entry: n,
      userDescription: p.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
      title: I,
      subtitle: T,
      badges: (0, a.jsx)(f.BadgesContainer, {
        location: f.BadgeLocation.POPOUT,
        children: c.TOP_GAME_BADGES.map((e, t) => (0, a.jsx)(e, {
          entry: n
        }, t))
      })
    }), (0, a.jsx)(h.PopoutInteractionsContainer, {
      children: (0, a.jsx)(h.PopoutReactor, {
        closePopout: r,
        user: _,
        channel: t,
        generateReactionImage: M,
        reactionImageAltText: C(n, _),
        entry: n,
        requestId: s
      })
    })]
  }) : null
}