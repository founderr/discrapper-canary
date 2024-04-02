"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("317261"),
  s = n("481060"),
  i = n("70956"),
  r = n("5192"),
  o = n("561308"),
  u = n("69259"),
  d = n("919394"),
  c = n("438226"),
  f = n("206295"),
  h = n("555672"),
  m = n("43205"),
  p = n("591853"),
  E = n("206583"),
  C = n("689938"),
  g = n("522791");

function S(e) {
  if (e === l.AggregateRange.WEEK) return C.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
}
let _ = (e, t, n, a) => {
    let l = S(a),
      s = r.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  },
  T = (e, t, n, a) => {
    let l = S(a),
      s = r.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.format({
      userName: s,
      gameName: i
    })
  },
  I = (e, t) => C.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: l,
    requestId: r
  } = e, {
    applicationImageSrc: S,
    user: A
  } = (0, h.useGamingContentData)(l), {
    primaryColor: v,
    secondaryColor: N
  } = (0, f.default)(S);
  if (null == A) return null;
  let x = (0, o.getEntryDuration)(l);
  if (null == x) return null;
  let M = (0, o.getAggregateRange)(l);
  if (null == M || !(0, h.isAllowedRange)(M)) return null;
  let R = async e => {
    try {
      let t = await (0, d.generateGamingContentImage)({
        entry: l,
        applicationImageSrc: S,
        avatarSrc: A.getAvatarURL(n.guild_id, 128),
        description: _(l, n, A, M),
        timestamp: C.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
          hours: Math.round(x / i.default.Seconds.HOUR)
        }),
        colors: [v, N]
      });
      await (0, c.sendContentImageReply)({
        file: t,
        user: A,
        altText: I(l, A),
        reply: e
      }), (0, u.trackInteraction)(E.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: l,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: r
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(p.Popout, {
    children: [(0, a.jsxs)(p.PopoutHero, {
      backgroundImgSrc: S,
      children: [(0, a.jsxs)("div", {
        className: g.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(p.PopoutAvatar, {
            user: A,
            guildId: n.guild_id
          }), (0, a.jsx)(p.PopoutTitle, {
            children: T(l, n, A, M)
          })]
        }), (0, a.jsx)(m.ContentImage, {
          size: 80,
          src: S,
          className: g.contentImage
        })]
      }), (0, a.jsx)(h.ContentRowBadges, {
        className: g.badgeContainer,
        entry: l,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(p.PopoutReactor, {
      onMessageReact: R,
      user: A,
      channel: n
    })]
  })
}