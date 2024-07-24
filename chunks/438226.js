t.d(n, {
  HV: function() {
return u;
  },
  IS: function() {
return i;
  },
  VY: function() {
return c;
  }
}), t(627494), t(757143), t(201133);
var a = t(5192),
  l = t(561308),
  r = t(689938);
let i = (e, n) => r.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
username: n.username,
activity: e.extra.game_name
  }),
  o = e => {
let n = (0, l.kr)(e);
return (0, l.Ol)(e) ? n ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : n ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
  },
  u = (e, n, t) => {
let l = o(e),
  r = a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
  i = e.extra.game_name;
return l.plainFormat({
  gameName: i,
  userName: r
}).replaceAll('*', '');
  },
  c = e => {
let {
  entry: n,
  channel: t,
  users: i,
  countOthers: o
} = e;
return ((0, l.kr)(n) ? r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
  gameName: n.extra.game_name,
  user1: a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, i[0]),
  user2: a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, i[1]),
  countOthers: o
}).replaceAll('*', '');
  };