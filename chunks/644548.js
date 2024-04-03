"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250");
n("470079");
var l = n("317261"),
  s = n("481060"),
  i = n("493683"),
  r = n("70956"),
  o = n("5192"),
  u = n("561308"),
  d = n("69259"),
  c = n("919394"),
  f = n("438226"),
  h = n("206295"),
  m = n("555672"),
  p = n("43205"),
  E = n("591853"),
  C = n("206583"),
  g = n("689938"),
  S = n("522791");

function _(e) {
  if (e === l.AggregateRange.WEEK) return g.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
}
let T = (e, t, n, a) => {
    let l = _(a),
      s = o.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  },
  I = (e, t, n, a) => {
    let l = _(a),
      s = o.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.format({
      userName: s,
      gameName: i
    })
  },
  A = (e, t) => g.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: l,
    requestId: o
  } = e, {
    applicationImageSrc: _,
    user: v
  } = (0, m.useGamingContentData)(l), {
    primaryColor: N,
    secondaryColor: x
  } = (0, h.default)(_);
  if (null == v) return null;
  let M = (0, u.getEntryDuration)(l);
  if (null == M) return null;
  let R = (0, u.getAggregateRange)(l);
  if (null == R || !(0, m.isAllowedRange)(R)) return null;
  let L = async e => {
    try {
      let t = await i.default.openPrivateChannel(l.author_id, !1, !1),
        a = await (0, c.generateGamingContentImage)({
          entry: l,
          applicationImageSrc: _,
          avatarSrc: v.getAvatarURL(n.guild_id, 128),
          description: T(l, n, v, R),
          timestamp: g.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
            hours: Math.round(M / r.default.Seconds.HOUR)
          }),
          colors: [N, x],
          channelId: t
        });
      await (0, f.sendContentImageReply)({
        file: a,
        user: v,
        altText: A(l, v),
        reply: e
      }), (0, d.trackInteraction)(C.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: l,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: o
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(E.Popout, {
    children: [(0, a.jsxs)(E.PopoutHero, {
      backgroundImgSrc: _,
      children: [(0, a.jsxs)("div", {
        className: S.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(E.PopoutAvatar, {
            user: v,
            guildId: n.guild_id
          }), (0, a.jsx)(E.PopoutTitle, {
            children: I(l, n, v, R)
          })]
        }), (0, a.jsx)(p.ContentImage, {
          size: 80,
          src: _,
          className: S.contentImage
        })]
      }), (0, a.jsx)(m.ContentRowBadges, {
        className: S.badgeContainer,
        entry: l,
        textColor: "always-white",
        iconColor: s.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(E.PopoutReactor, {
      onMessageReact: L,
      user: v,
      channel: n
    })]
  })
}