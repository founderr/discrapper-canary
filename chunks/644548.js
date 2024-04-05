"use strict";
n.r(t), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("317261"),
  i = n("481060"),
  r = n("493683"),
  o = n("70956"),
  u = n("5192"),
  d = n("561308"),
  c = n("69259"),
  f = n("919394"),
  h = n("438226"),
  m = n("206295"),
  p = n("555672"),
  E = n("43205"),
  C = n("591853"),
  g = n("206583"),
  S = n("689938"),
  _ = n("522791");

function T(e) {
  if (e === s.AggregateRange.WEEK) return S.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT
}
let I = (e, t, n, a) => {
    let l = T(a),
      s = u.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  },
  A = (e, t, n, a) => {
    let l = T(a),
      s = u.default.getName(t.guild_id, t.id, n),
      i = e.extra.game_name;
    return l.format({
      userName: s,
      gameName: i
    })
  },
  v = (e, t) => S.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  });
t.default = e => {
  let {
    closePopout: t,
    channel: n,
    entry: s,
    requestId: u
  } = e, {
    applicationImageSrc: T,
    user: x
  } = (0, p.useGamingContentData)(s), {
    primaryColor: N,
    secondaryColor: M
  } = (0, m.default)(T), R = l.useCallback(async () => {
    if (null == x) return;
    let e = (0, d.getEntryDuration)(s);
    if (null == e) return;
    let t = (0, d.getAggregateRange)(s);
    if (null == t || !(0, p.isAllowedRange)(t)) return;
    let a = await r.default.getOrEnsurePrivateChannel(s.author_id);
    return (0, f.generateGamingContentImage)({
      entry: s,
      applicationImageSrc: T,
      avatarSrc: x.getAvatarURL(n.guild_id, 128),
      description: I(s, n, x, t),
      timestamp: S.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
        hours: Math.round(e / o.default.Seconds.HOUR)
      }),
      colors: [N, M],
      channelId: a
    })
  }, [T, n, s, N, M, x]);
  if (null == x) return null;
  let L = (0, d.getEntryDuration)(s);
  if (null == L) return null;
  let y = (0, d.getAggregateRange)(s);
  if (null == y || !(0, p.isAllowedRange)(y)) return null;
  let O = async e => {
    try {
      let t = await r.default.openPrivateChannel(s.author_id, !1, !1),
        a = await (0, f.generateGamingContentImage)({
          entry: s,
          applicationImageSrc: T,
          avatarSrc: x.getAvatarURL(n.guild_id, 128),
          description: I(s, n, x, y),
          timestamp: S.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({
            hours: Math.round(L / o.default.Seconds.HOUR)
          }),
          colors: [N, M],
          channelId: t
        });
      await (0, h.sendContentImageReply)({
        file: a,
        user: x,
        altText: v(s, x),
        reply: e
      }), (0, c.trackInteraction)(g.ContentInventoryInteractionTypes.REACTION_MESSAGE_SENT, {
        entry: s,
        channelId: n.id,
        guildId: n.guild_id,
        requestId: u
      })
    } finally {
      t()
    }
  };
  return (0, a.jsxs)(C.Popout, {
    children: [(0, a.jsxs)(C.PopoutHero, {
      backgroundImgSrc: T,
      children: [(0, a.jsxs)("div", {
        className: _.heroDetails,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(C.PopoutAvatar, {
            user: x,
            guildId: n.guild_id
          }), (0, a.jsx)(C.PopoutTitle, {
            children: A(s, n, x, y)
          })]
        }), (0, a.jsx)(E.ContentImage, {
          size: 80,
          src: T,
          className: _.contentImage
        })]
      }), (0, a.jsx)(p.ContentRowBadges, {
        className: _.badgeContainer,
        entry: s,
        textColor: "always-white",
        iconColor: i.tokens.colors.WHITE
      })]
    }), (0, a.jsx)(C.PopoutReactor, {
      onMessageReact: O,
      user: x,
      channel: n,
      generateReactionImage: R
    })]
  })
}