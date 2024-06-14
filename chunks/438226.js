"use strict";
a.r(t), a.d(t, {
  formatCanvasDescription: function() {
    return s
  },
  formatGroupCanvasDescription: function() {
    return u
  },
  getContentAltText: function() {
    return i
  }
}), a("627494"), a("757143"), a("201133");
var n = a("5192"),
  r = a("561308"),
  l = a("689938");
let i = (e, t) => l.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  }),
  o = e => {
    let t = (0, r.isEntryActive)(e);
    return (0, r.isEntryNew)(e) ? t ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : l.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  s = (e, t, a) => {
    let r = o(e),
      l = n.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, a),
      i = e.extra.game_name;
    return r.plainFormat({
      gameName: i,
      userName: l
    }).replaceAll("*", "")
  },
  u = e => {
    let {
      entry: t,
      channel: a,
      users: i,
      countOthers: o
    } = e;
    return ((0, r.isEntryActive)(t) ? l.default.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : l.default.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
      gameName: t.extra.game_name,
      user1: n.default.getName(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, i[0]),
      user2: n.default.getName(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, i[1]),
      countOthers: o
    }).replaceAll("*", "")
  }