n(47120), n(653041), n(733860), n(724458);
var i, s = n(876215),
  a = n(442837),
  r = n(570140),
  l = n(146282),
  o = n(353926),
  c = n(786761),
  d = n(314897),
  u = n(592125),
  _ = n(375954),
  h = n(306680),
  E = n(699516),
  I = n(9156),
  m = n(626135),
  g = n(70956),
  p = n(709054),
  T = n(761080),
  f = n(584925),
  S = n(207205),
  C = n(981631),
  N = n(206583);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let v = [],
  Z = null,
  L = [],
  O = {},
  R = {},
  x = {},
  b = {},
  P = {},
  M = {},
  D = {},
  y = {},
  j = new Set(),
  U = 0,
  G = !1,
  w = !1,
  k = !1,
  B = null,
  H = null,
  V = 0,
  F = [],
  Y = [],
  W = 0;

function z(e) {
  var t, n;
  let i = new Set(e.map(e => e.id)),
a = null !== (n = null === (t = l.Z.getFeed(N.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
  return a.sort((e, t) => e.rank - t.rank), a.forEach((t, n) => {
if (i.has(t.content.id) || t.content.content_type !== s.s.PLAYED_GAME && t.content.content_type !== s.s.CUSTOM_STATUS)
  return;
null == b[t.content.id] && (b[t.content.id] = {
  id: t.content.id,
  type: T.Rr.ACTIVITY,
  score: 50,
  activity: t.content
});
let a = {
  id: t.content.id,
  type: T.Rr.ACTIVITY,
  score: 50,
  data: {
    user_id: t.content.author_id,
    content_id: t.content.id
  }
};
x[a.id] = a, (n + 1) * 5 < e.length ? e.splice((n + 1) * 5, 0, a) : e.push(a);
  }), e;
}

function K() {
  L.length > 0 && (v = L, L = []), U++;
  let [e, t] = q(v);
  if (F = e, Y = t, null != O.load_id && Z !== O.load_id) {
var n;
m.default.track(C.rMx.FEED_LOADED, {
  ...O,
  unread_feed_item_ids: F.map(e => e.id),
  read_feed_item_ids: Y.map(e => e.id),
  home_session_id: 'gravity'
}), Z = null !== (n = O.load_id) && void 0 !== n ? n : null, O = {};
  }
  W = 0, (0, S.em)([
...F,
...Y
  ], 0, T.xy);
}

function q(e) {
  let t = [],
n = [],
i = [];
  return e.forEach(e => {
let s = null != f.Z.getReadTimestamp(e.id);
e.type === T.Rr.MESSAGE ? s = s || !(0, S.$U)(e.data.channel_id, e.data.message_id) : e.type === T.Rr.SUMMARY && (s = s || !(0, S.$U)(e.data.channel_id, e.data.summary_id)), s ? t.push(e) : e.type === T.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
  }), [
[
  ...i,
  ...n
],
t.sort((e, t) => f.Z.compare(e.id, t.id))
  ];
}

function Q() {
  let e = 0,
t = new Set(v.map(e => e.id));
  return L.forEach(n => {
if (!(e >= T.Lb))
  !t.has(n.id) && e++;
  }), e >= T.Lb;
}

function X(e, t) {
  if ((0, S.cn)(t) === S.Jb.MUTED_GUILD)
v = v.filter(t => t.type !== T.Rr.MESSAGE && t.type !== T.Rr.SUMMARY || t.data.guild_id !== e), F = F.filter(t => t.type !== T.Rr.MESSAGE && t.type !== T.Rr.SUMMARY || t.data.guild_id !== e), Y = Y.filter(t => t.type !== T.Rr.MESSAGE && t.type !== T.Rr.SUMMARY || t.data.guild_id !== e), L = L.filter(t => t.type !== T.Rr.MESSAGE && t.type !== T.Rr.SUMMARY || t.data.guild_id !== e);
}

function J(e) {
  let {
type: t,
messageId: n,
userId: i,
emoji: s,
reactionType: a
  } = e, r = b[n];
  if (null == r || r.type !== T.Rr.MESSAGE)
return !1;
  let l = d.default.getId() === i;
  'MESSAGE_REACTION_ADD' === t ? r.message = r.message.addReaction(s, l, e.colors, a) : r.message = r.message.removeReaction(s, l, a);
}

function $(e) {
  let {
channelId: t
  } = e, n = [], i = [];
  if (F.forEach((e, s) => {
  s > W && (e.type === T.Rr.MESSAGE || e.type === T.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
}), 0 === n.length)
return !1;
  F = i.sort((e, t) => f.Z.compare(e.id, t.id)), Y = [
...Y,
...n
  ];
}
class ee extends(i = a.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(_.Z, u.Z, h.ZP, o.Z, I.ZP, d.default, f.Z, l.Z), null != e) {
  var t, n, i, s, a;
  v = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], R = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, e.dehydratedItems.forEach(e => {
    x[e.id] = e;
  }), M = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}, D = null !== (s = e.customChannelScoresByGuild) && void 0 !== s ? s : {}, V = null !== (a = e.numOpens) && void 0 !== a ? a : 0;
}
  }
  getVersion() {
return U;
  }
  getDehydratedItems() {
return v;
  }
  getNewDehydratedItems() {
return L;
  }
  getDehydratedItem(e) {
var t;
return null !== (t = x[e]) && void 0 !== t ? t : null;
  }
  getHydratedItem(e) {
var t;
return null !== (t = b[e]) && void 0 !== t ? t : null;
  }
  getMessage(e) {
let t = b[e];
return null == t || t.type !== T.Rr.MESSAGE ? null : t.message;
  }
  getHydratedItems() {
return b;
  }
  getUnreadDisplayItems() {
return F;
  }
  getReadDisplayItems() {
return Y;
  }
  getNextIndexToHydrate() {
return W;
  }
  getMissingItems() {
return P;
  }
  getCustomChannelScore(e, t) {
var n;
return null == D[e] ? 0 : null !== (n = D[e][t]) && void 0 !== n ? n : 0;
  }
  getCustomChannelScores(e) {
var t;
return null !== (t = D[e]) && void 0 !== t ? t : {};
  }
  getCustomGuildScore(e) {
var t;
return null !== (t = M[e]) && void 0 !== t ? t : 0;
  }
  getNumLocallyAddedItems() {
return Object.keys(R).length;
  }
  hasNewContent() {
return w;
  }
  getSelectedSummary(e) {
return null == B || B.channelId !== e ? null : B;
  }
  isGravitySelectedChannel(e) {
return null != H && H === e;
  }
  getLoadId() {
return Z;
  }
  hasOpenedEnoughTimes() {
return 5 === V;
  }
  hasOpened() {
return k;
  }
  getState() {
return {
  dehydratedItems: v,
  locallyAddedItems: R,
  numOpens: V,
  customGuildScores: M,
  customChannelScoresByGuild: D
};
  }
}
A(ee, 'displayName', 'GravityStore'), A(ee, 'persistKey', 'GravityStore'), t.Z = new ee(r.Z, {
  POST_CONNECTION_OPEN: function() {
if (v.length > 0) {
  let [e, t] = q(v);
  F = e, Y = t, W = 0, (0, S.em)([
    ...F,
    ...Y
  ], 0, T.xy);
}
  },
  LOGOUT: function() {
return !1;
  },
  MESSAGE_CREATE: function(e) {
var t, n;
let {
  message: i,
  guildId: s,
  channelId: a
} = e;
if (!(0, S.rK)('GravityStore-handleMessageCreate') || null == s || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === d.default.getId() || E.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || s in M && M[s] < 0 || null != D[s] && a in D[s] && null != D[s][a] && D[s][a] < 0)
  return !1;
let r = u.Z.getChannel(a);
if (null == r || r.type !== C.d4z.GUILD_ANNOUNCEMENT || I.ZP.isChannelMuted(s, a))
  return !1;
let l = _.Z.getMessage(i.channel_id, i.id);
null == l && (l = (0, c.e5)(i));
let o = l.mentionEveryone;
if (i.id in x)
  return !1;
let h = {
  type: T.Rr.MESSAGE,
  id: i.id,
  score: Date.now(),
  data: {
    channel_id: i.channel_id,
    guild_id: s,
    message_id: i.id,
    channel_type: C.d4z.GUILD_ANNOUNCEMENT,
    has_mention: o
  }
};
o && (null == y[a] && (y[a] = 0), y[a]++, j.add(s)), null == (L = 0 === L.length ? [...v] : [...L]).find(e => e.id === i.id) && (L.unshift(h), R[i.id] = h), Q() && U > 0 && (w = !0), x[i.id] = h, b[i.id] = {
  ...h,
  message: l
};
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
let {
  items: t,
  loadId: n,
  startTime: i
} = e;
L = t.filter(e => T.zd.has(e.type)), ! function() {
  let e = new Set();
  L.forEach(t => {
    e.add(t.id);
  }), Object.values(R).forEach(t => {
    T.zd.has(t.type) && (e.has(t.id) || p.default.age(t.id) > g.Z.Millis.DAY || t.type === T.Rr.MESSAGE && I.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete R[t.id] : !e.has(t.id) && (L.unshift(t), e.add(t.id)));
  }), L.forEach(e => {
    x[e.id] = e, e.type === T.Rr.CUSTOM_STATUS && (E.Z.isBlocked(e.data.user_id) ? P[e.id] = !0 : b[e.id] = (0, S.mV)(e));
  });
}(), L = z(L), O = {
  load_id: n,
  load_time_millis: Date.now() - i,
  feed_item_ids: L.map(e => e.id)
};
let s = Q();
if (0 === U)
  s && !k && (w = !0, G = !0), K();
else if (w = s, s) {
  let [e, t] = q(L);
  (0, S.em)([
    ...e,
    ...t
  ], 0, T.xy);
}
  },
  LOAD_GRAVITY_HYDRATED: function(e) {
let {
  messageItems: t,
  summaryItems: n,
  activityItems: i,
  requestMessageItems: s,
  requestSummaryItems: a,
  requestActivityItems: r,
  startingIndex: l,
  endingIndex: o
} = e;
b = {
  ...b
};
let d = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
  u = n.reduce((e, t) => (e[t.id] = t, e), {}),
  h = i.reduce((e, t) => (e[t.id] = t, e), {});
s.forEach(e => {
  let t = d[e.message_id];
  if (null == t) {
    P[e.message_id] = !0;
    return;
  }
  let n = x[e.message_id];
  if (null == n) {
    P[e.message_id] = !0;
    return;
  }
  null != _.Z.getMessage(t.channel_id, t.message.id) ? b[t.message.id] = {
    ...n,
    message: _.Z.getMessage(t.channel_id, t.message.id)
  } : b[t.message.id] = {
    ...n,
    message: (0, c.e5)(t.message)
  };
}), a.forEach(e => {
  let t = u[e.summary_id];
  if (null == t) {
    P[e.summary_id] = !0;
    return;
  }
  let n = x[e.summary_id];
  if (null == n || n.type !== T.Rr.SUMMARY || t.messages.length < 3) {
    P[e.summary_id] = !0;
    return;
  }
  b[t.id] = {
    ...n,
    summary: (0, S.wV)(t, n.data.guild_id)
  };
}), r.forEach(e => {
  let t = h[e.content_id];
  if (null == t) {
    P[e.content_id] = !0;
    return;
  }
  let n = x[e.content_id];
  if (null == n) {
    P[e.content_id] = !0;
    return;
  }
  b[t.id] = {
    ...n,
    activity: t
  };
}), l === W && (W = o);
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
let {
  scores: t
} = e;
for (let e of t)
  for (let t of (M[e.guild_id] = e.guild_score, X(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores)))
    null == D[e.guild_id] && (D[e.guild_id] = {}), D[e.guild_id][t] = e.custom_channel_scores[t];
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
let {
  channelScores: t,
  guildId: n,
  guildScore: i
} = e;
null != i && (M[n] = i, X(n, i)), null == t || t.forEach(e => {
  let {
    channelId: t,
    score: i
  } = e;
  null == D[n] && (D[n] = {}), D[n][t] = i;
});
  },
  RELOAD_GRAVITY: function() {
if (0 === L.length)
  return !1;
K(), w = !1;
  },
  GRAVITY_TAB_OPENED: function() {
k = !0, G && (G = !1, w = !1), V < 5 && V++;
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
V = 6;
  },
  SET_GRAVITY_SELECTED_SUMMARY: function(e) {
if (null == e.summaryId) {
  B = null;
  return;
}
let t = b[e.summaryId];
if (null == t || t.type !== T.Rr.SUMMARY) {
  B = null;
  return;
}
B = t.summary;
  },
  SET_GRAVITY_SELECTED_CHANNEL: function(e) {
H = e.channelId;
  },
  MESSAGE_REACTION_ADD: J,
  MESSAGE_REACTION_ADD_MANY: function(e) {
let {
  messageId: t,
  reactions: n
} = e, i = b[t];
if (null == i || i.type !== T.Rr.MESSAGE)
  return !1;
let s = d.default.getId();
i.message = i.message.addReactionBatch(n, s);
  },
  MESSAGE_REACTION_REMOVE: J,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
let {
  messageId: t
} = e, n = b[t];
if (null == n || n.type !== T.Rr.MESSAGE)
  return !1;
n.message = n.message.set('reactions', []);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
let {
  messageId: t,
  emoji: n
} = e, i = b[t];
if (null == i || i.type !== T.Rr.MESSAGE)
  return !1;
i.message = i.message.removeReactionsForEmoji(n);
  },
  CHANNEL_ACK: $,
  MESSAGE_ACK: $,
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feedId: t
} = e;
if (t !== N.YN.GLOBAL_FEED)
  return !1;
if (!k) {
  let [e, t] = q(v = z(v));
  F = e, Y = t;
}
L = z(L = 0 === L.length ? [...v] : L), Q() && U > 0 && (w = !0);
  }
});