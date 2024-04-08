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
  h = n("43205"),
  m = n("591853"),
  p = n("689938"),
  E = n("522791");

function C(e) {
  if (e === s.AggregateRange.WEEK) return p.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
}
let g = (e, t, n, a) => {
    let l = C(a),
      s = o.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  },
  S = (e, t, n, a) => {
    let l = C(a),
      s = o.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.format({
      userName: s,
      gameName: i
    })
  },
  _ = (e, t) => p.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    channel: t,
    entry: n,
    requestId: s,
    updatePopoutPosition: o
  } = e, {
    applicationImageSrc: C,
    user: T
  } = (0, f.useGamingContentData)(n), {
    primaryColor: I,
    secondaryColor: A
  } = (0, c.default)(C), v = (0, u.getEntryDuration)(n), x = (0, u.getAggregateRange)(n), N = l.useCallback(e => {
    if (null != T && null != v && null != x && (0, f.isAllowedRange)(x)) return (0, d.generateGamingContentImage)({
      entry: n,
      applicationImageSrc: C,
      avatarSrc: T.getAvatarURL(t.guild_id, 128),
      description: g(n, t, T, x),
      timestamp: p.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(v / r.default.Seconds.HOUR)
      }),
      colors: [I, A],
      channelId: e
    })
  }, [C, t, v, n, I, x, A, T]);
  return null != T && null != v && null != x && (0, f.isAllowedRange)(x) ? (0, a.jsxs)(m.Popout, {
    children: [(0, a.jsxs)(m.PopoutHero, {
      backgroundImgSrc: C,
      children: [(0, a.jsxs)("div", {
        className: E.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(m.PopoutAvatar, {
            user: T,
            guildId: t.guild_id
          }), (0, a.jsx)(m.PopoutTitle, {
            children: S(n, t, T, x)
          })]
        }), (0, a.jsx)(h.ContentImage, {
          size: 80,
          src: C,
          className: E.contentImage
        })]
      }), (0, a.jsx)(f.ContentRowBadges, {
        className: E.badgeContainer,
        entry: n,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(m.PopoutReactor, {
      user: T,
      channel: t,
      updatePopoutPosition: o,
      generateReactionImage: N,
      reactionImageAltText: _(n, T),
      entry: n,
      requestId: s
    })]
  }) : null
}