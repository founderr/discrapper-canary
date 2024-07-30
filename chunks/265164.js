n(47120), n(653041), n(733860), n(724458);
var i, s = n(876215),
  a = n(442837),
  r = n(570140),
  l = n(146282),
  o = n(561308),
  c = n(353926),
  d = n(786761),
  u = n(314897),
  _ = n(592125),
  h = n(375954),
  E = n(306680),
  I = n(699516),
  m = n(9156),
  g = n(626135),
  p = n(70956),
  T = n(709054),
  f = n(761080),
  S = n(584925),
  C = n(207205),
  N = n(981631),
  A = n(206583);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Z = [],
  L = null,
  O = [],
  R = {},
  x = {},
  b = {},
  P = {},
  M = {},
  D = {},
  y = {},
  j = {},
  U = new Set(),
  G = 0,
  w = !1,
  k = !1,
  B = !1,
  H = null,
  V = null,
  F = 0,
  Y = [],
  W = [],
  z = 0;

function K(e) {
  var t, n;
  let i = new Set(e.map(e => e.id)),
a = null !== (n = null === (t = l.Z.getFeed(A.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
  return a.sort((e, t) => e.rank - t.rank), a.forEach((t, n) => {
if (i.has(t.content.id) || t.content.content_type !== s.s.PLAYED_GAME && t.content.content_type !== s.s.CUSTOM_STATUS && t.content.content_type !== s.s.TOP_GAME || (0, o.n2)(t.content))
  return;
null == P[t.content.id] && (P[t.content.id] = {
  id: t.content.id,
  type: f.Rr.ACTIVITY,
  score: 50,
  activity: t.content
});
let a = {
  id: t.content.id,
  type: f.Rr.ACTIVITY,
  score: 50,
  data: {
    user_id: t.content.author_id,
    content_id: t.content.id
  }
};
b[a.id] = a, (n + 1) * 5 < e.length ? e.splice((n + 1) * 5, 0, a) : e.push(a);
  }), e;
}

function q() {
  O.length > 0 && (Z = O, O = []), G++;
  let [e, t] = Q(Z);
  if (Y = e, W = t, null != R.load_id && L !== R.load_id) {
var n;
g.default.track(N.rMx.FEED_LOADED, {
  ...R,
  unread_feed_item_ids: Y.map(e => e.id),
  read_feed_item_ids: W.map(e => e.id),
  home_session_id: 'gravity'
}), L = null !== (n = R.load_id) && void 0 !== n ? n : null, R = {};
  }
  z = 0, (0, C.em)([
...Y,
...W
  ], 0, f.xy);
}

function Q(e) {
  let t = [],
n = [],
i = [];
  return e.forEach(e => {
let s = null != S.Z.getReadTimestamp(e.id);
e.type === f.Rr.MESSAGE ? s = s || !(0, C.$U)(e.data.channel_id, e.data.message_id) : e.type === f.Rr.SUMMARY && (s = s || !(0, C.$U)(e.data.channel_id, e.data.summary_id)), s ? t.push(e) : e.type === f.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
  }), [
[
  ...i,
  ...n
],
t.sort((e, t) => S.Z.compare(e.id, t.id))
  ];
}

function X() {
  let e = 0,
t = new Set(Z.map(e => e.id));
  return O.forEach(n => {
if (!(e >= f.Lb))
  !t.has(n.id) && e++;
  }), e >= f.Lb;
}

function J(e, t) {
  if ((0, C.cn)(t) === C.Jb.MUTED_GUILD)
Z = Z.filter(t => t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY || t.data.guild_id !== e), Y = Y.filter(t => t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY || t.data.guild_id !== e), W = W.filter(t => t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY || t.data.guild_id !== e), O = O.filter(t => t.type !== f.Rr.MESSAGE && t.type !== f.Rr.SUMMARY || t.data.guild_id !== e);
}

function $(e) {
  let {
type: t,
messageId: n,
userId: i,
emoji: s,
reactionType: a
  } = e, r = P[n];
  if (null == r || r.type !== f.Rr.MESSAGE)
return !1;
  let l = u.default.getId() === i;
  'MESSAGE_REACTION_ADD' === t ? r.message = r.message.addReaction(s, l, e.colors, a) : r.message = r.message.removeReaction(s, l, a);
}

function ee(e) {
  let {
channelId: t
  } = e, n = [], i = [];
  if (Y.forEach((e, s) => {
  s > z && (e.type === f.Rr.MESSAGE || e.type === f.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
}), 0 === n.length)
return !1;
  Y = i.sort((e, t) => S.Z.compare(e.id, t.id)), W = [
...W,
...n
  ];
}
class et extends(i = a.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(h.Z, _.Z, E.ZP, c.Z, m.ZP, u.default, S.Z, l.Z), null != e) {
  var t, n, i, s, a;
  Z = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], x = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, e.dehydratedItems.forEach(e => {
    b[e.id] = e;
  }), D = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}, y = null !== (s = e.customChannelScoresByGuild) && void 0 !== s ? s : {}, F = null !== (a = e.numOpens) && void 0 !== a ? a : 0;
}
  }
  getVersion() {
return G;
  }
  getDehydratedItems() {
return Z;
  }
  getNewDehydratedItems() {
return O;
  }
  getDehydratedItem(e) {
var t;
return null !== (t = b[e]) && void 0 !== t ? t : null;
  }
  getHydratedItem(e) {
var t;
return null !== (t = P[e]) && void 0 !== t ? t : null;
  }
  getMessage(e) {
let t = P[e];
return null == t || t.type !== f.Rr.MESSAGE ? null : t.message;
  }
  getHydratedItems() {
return P;
  }
  getUnreadDisplayItems() {
return Y;
  }
  getReadDisplayItems() {
return W;
  }
  getNextIndexToHydrate() {
return z;
  }
  getMissingItems() {
return M;
  }
  getCustomChannelScore(e, t) {
var n;
return null == y[e] ? 0 : null !== (n = y[e][t]) && void 0 !== n ? n : 0;
  }
  getCustomChannelScores(e) {
var t;
return null !== (t = y[e]) && void 0 !== t ? t : {};
  }
  getCustomGuildScore(e) {
var t;
return null !== (t = D[e]) && void 0 !== t ? t : 0;
  }
  getNumLocallyAddedItems() {
return Object.keys(x).length;
  }
  hasNewContent() {
return k;
  }
  getSelectedSummary(e) {
return null == H || H.channelId !== e ? null : H;
  }
  isGravitySelectedChannel(e) {
return null != V && V === e;
  }
  getLoadId() {
return L;
  }
  hasOpenedEnoughTimes() {
return 5 === F;
  }
  hasOpened() {
return B;
  }
  hasEverOpened() {
return F > 0;
  }
  getState() {
return {
  dehydratedItems: Z,
  locallyAddedItems: x,
  numOpens: F,
  customGuildScores: D,
  customChannelScoresByGuild: y
};
  }
}
v(et, 'displayName', 'GravityStore'), v(et, 'persistKey', 'GravityStore'), t.Z = new et(r.Z, {
  POST_CONNECTION_OPEN: function() {
if (Z.length > 0) {
  let [e, t] = Q(Z);
  Y = e, W = t, z = 0, (0, C.em)([
    ...Y,
    ...W
  ], 0, f.xy);
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
if (!(0, C.rK)('GravityStore-handleMessageCreate') || null == s || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === u.default.getId() || I.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || s in D && D[s] < 0 || null != y[s] && a in y[s] && null != y[s][a] && y[s][a] < 0)
  return !1;
let r = _.Z.getChannel(a);
if (null == r || r.type !== N.d4z.GUILD_ANNOUNCEMENT || m.ZP.isChannelMuted(s, a))
  return !1;
let l = h.Z.getMessage(i.channel_id, i.id);
null == l && (l = (0, d.e5)(i));
let o = l.mentionEveryone;
if (i.id in b)
  return !1;
let c = {
  type: f.Rr.MESSAGE,
  id: i.id,
  score: Date.now(),
  data: {
    channel_id: i.channel_id,
    guild_id: s,
    message_id: i.id,
    channel_type: N.d4z.GUILD_ANNOUNCEMENT,
    has_mention: o
  }
};
o && (null == j[a] && (j[a] = 0), j[a]++, U.add(s)), null == (O = 0 === O.length ? [...Z] : [...O]).find(e => e.id === i.id) && (O.unshift(c), x[i.id] = c), X() && G > 0 && (k = !0), b[i.id] = c, P[i.id] = {
  ...c,
  message: l
};
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
let {
  items: t,
  loadId: n,
  startTime: i
} = e;
O = t.filter(e => f.zd.has(e.type)), ! function() {
  let e = new Set();
  O.forEach(t => {
    e.add(t.id);
  }), Object.values(x).forEach(t => {
    f.zd.has(t.type) && (e.has(t.id) || T.default.age(t.id) > p.Z.Millis.DAY || t.type === f.Rr.MESSAGE && m.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete x[t.id] : !e.has(t.id) && (O.unshift(t), e.add(t.id)));
  }), O.forEach(e => {
    b[e.id] = e, e.type === f.Rr.CUSTOM_STATUS && (I.Z.isBlocked(e.data.user_id) ? M[e.id] = !0 : P[e.id] = (0, C.mV)(e));
  });
}(), O = K(O), R = {
  load_id: n,
  load_time_millis: Date.now() - i,
  feed_item_ids: O.map(e => e.id)
};
let s = X();
if (0 === G)
  s && !B && (k = !0, w = !0), q();
else if (k = s, s) {
  let [e, t] = Q(O);
  (0, C.em)([
    ...e,
    ...t
  ], 0, f.xy);
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
P = {
  ...P
};
let c = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
  u = n.reduce((e, t) => (e[t.id] = t, e), {}),
  _ = i.reduce((e, t) => (e[t.id] = t, e), {});
s.forEach(e => {
  let t = c[e.message_id];
  if (null == t) {
    M[e.message_id] = !0;
    return;
  }
  let n = b[e.message_id];
  if (null == n) {
    M[e.message_id] = !0;
    return;
  }
  null != h.Z.getMessage(t.channel_id, t.message.id) ? P[t.message.id] = {
    ...n,
    message: h.Z.getMessage(t.channel_id, t.message.id)
  } : P[t.message.id] = {
    ...n,
    message: (0, d.e5)(t.message)
  };
}), a.forEach(e => {
  let t = u[e.summary_id];
  if (null == t) {
    M[e.summary_id] = !0;
    return;
  }
  let n = b[e.summary_id];
  if (null == n || n.type !== f.Rr.SUMMARY || t.messages.length < 3) {
    M[e.summary_id] = !0;
    return;
  }
  P[t.id] = {
    ...n,
    summary: (0, C.wV)(t, n.data.guild_id)
  };
}), r.forEach(e => {
  let t = _[e.content_id];
  if (null == t) {
    M[e.content_id] = !0;
    return;
  }
  let n = b[e.content_id];
  if (null == n) {
    M[e.content_id] = !0;
    return;
  }
  P[t.id] = {
    ...n,
    activity: t
  };
}), l === z && (z = o);
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
let {
  scores: t
} = e;
for (let e of t)
  for (let t of (D[e.guild_id] = e.guild_score, J(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores)))
    null == y[e.guild_id] && (y[e.guild_id] = {}), y[e.guild_id][t] = e.custom_channel_scores[t];
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
let {
  channelScores: t,
  guildId: n,
  guildScore: i
} = e;
null != i && (D[n] = i, J(n, i)), null == t || t.forEach(e => {
  let {
    channelId: t,
    score: i
  } = e;
  null == y[n] && (y[n] = {}), y[n][t] = i;
});
  },
  RELOAD_GRAVITY: function() {
if (0 === O.length)
  return !1;
q(), k = !1;
  },
  GRAVITY_TAB_OPENED: function() {
B = !0, w && (w = !1, k = !1), F < 5 && F++;
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
F = 6;
  },
  SET_GRAVITY_SELECTED_SUMMARY: function(e) {
if (null == e.summaryId) {
  H = null;
  return;
}
let t = P[e.summaryId];
if (null == t || t.type !== f.Rr.SUMMARY) {
  H = null;
  return;
}
H = t.summary;
  },
  SET_GRAVITY_SELECTED_CHANNEL: function(e) {
V = e.channelId;
  },
  MESSAGE_REACTION_ADD: $,
  MESSAGE_REACTION_ADD_MANY: function(e) {
let {
  messageId: t,
  reactions: n
} = e, i = P[t];
if (null == i || i.type !== f.Rr.MESSAGE)
  return !1;
let s = u.default.getId();
i.message = i.message.addReactionBatch(n, s);
  },
  MESSAGE_REACTION_REMOVE: $,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
let {
  messageId: t
} = e, n = P[t];
if (null == n || n.type !== f.Rr.MESSAGE)
  return !1;
n.message = n.message.set('reactions', []);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
let {
  messageId: t,
  emoji: n
} = e, i = P[t];
if (null == i || i.type !== f.Rr.MESSAGE)
  return !1;
i.message = i.message.removeReactionsForEmoji(n);
  },
  CHANNEL_ACK: ee,
  MESSAGE_ACK: ee,
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feedId: t
} = e;
if (t !== A.YN.GLOBAL_FEED)
  return !1;
if (!B) {
  let [e, t] = Q(Z = K(Z));
  Y = e, W = t;
}
O = K(O = 0 === O.length ? [...Z] : O);
  }
});