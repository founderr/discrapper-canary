"use strict";
n.r(t), n.d(t, {
  formatCanvasDescription: function() {
    return s
  },
  formatGroupCanvasDescription: function() {
    return u
  },
  getContentAltText: function() {
    return i
  }
}), n("627494"), n("757143"), n("201133");
var a = n("5192"),
  r = n("561308"),
  l = n("689938");
let i = (e, t) => l.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  }),
  o = e => {
    let t = (0, r.isEntryActive)(e);
    return (0, r.isEntryNew)(e) ? t ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  s = (e, t, n) => {
    let r = o(e),
      l = a.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
      i = e.extra.game_name;
    return r.plainFormat({
      gameName: i,
      userName: l
    }).replaceAll("*", "")
  },
  u = e => {
    let {
      entry: t,
      channel: n,
      users: i,
      countOthers: o
    } = e;
    return ((0, r.isEntryActive)(t) ? l.default.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : l.default.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
      gameName: t.extra.game_name,
      user1: a.default.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[0]),
      user2: a.default.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, i[1]),
      countOthers: o
    }).replaceAll("*", "")
  }