n.d(e, {
  HV: function() {
return o;
  },
  IS: function() {
return u;
  },
  VY: function() {
return c;
  }
}), n(627494), n(757143), n(201133);
var a = n(5192),
  l = n(561308),
  r = n(689938);
let u = (t, e) => r.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
username: e.username,
activity: t.extra.game_name
  }),
  i = t => {
let e = (0, l.kr)(t);
return (0, l.Ol)(t) ? e ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : e ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
  },
  o = (t, e, n) => {
let l = i(t),
  r = a.ZP.getName(null == e ? void 0 : e.guild_id, null == e ? void 0 : e.id, n),
  u = t.extra.game_name;
return l.plainFormat({
  gameName: u,
  userName: r
}).replaceAll('*', '');
  },
  c = t => {
let {
  entry: e,
  channel: n,
  users: u,
  countOthers: i
} = t;
return ((0, l.kr)(e) ? r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
  gameName: e.extra.game_name,
  user1: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, u[0]),
  user2: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, u[1]),
  countOthers: i
}).replaceAll('*', '');
  };