"use strict";
n.r(t), n.d(t, {
  formatCanvasDescription: function() {
    return d
  },
  getContentAltText: function() {
    return o
  },
  getDescription: function() {
    return u
  },
  sendContentImageReply: function() {
    return r
  }
}), n("627494"), n("757143");
var a = n("201133"),
  l = n("5192"),
  s = n("561308"),
  i = n("689938");
let r = e => {
    let {
      reply: t,
      user: n,
      altText: l,
      file: s
    } = e;
    return (0, a.sendReply)({
      file: s,
      altText: l,
      user: n,
      reply: t
    })
  },
  o = (e, t) => i.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  }),
  u = e => {
    let t = (0, s.isEntryActive)(e);
    return (0, s.isEntryNew)(e) ? t ? i.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : i.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? i.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : i.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  d = (e, t, n) => {
    let a = u(e),
      s = l.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
      i = e.extra.game_name;
    return a.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  }