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
  E = n(306680),
  h = n(9156),
  I = n(626135),
  m = n(70956),
  g = n(709054),
  p = n(761080),
  T = n(584925),
  S = n(207205),
  f = n(981631),
  C = n(206583);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let A = [],
  v = null,
  Z = [],
  L = {},
  O = {},
  R = {},
  x = {},
  b = {},
  P = {},
  M = {},
  D = {},
  y = new Set(),
  j = 0,
  U = !1,
  G = !1,
  k = !1,
  w = null,
  B = null,
  H = 0,
  V = [],
  F = [],
  Y = 0;

function W(e) {
  var t, n;
  let i = new Set(e.map(e => e.id)),
a = null !== (n = null === (t = l.Z.getFeed(C.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
  return a.sort((e, t) => e.rank - t.rank), a.forEach((t, n) => {
if (i.has(t.content.id) || t.content.content_type !== s.s.PLAYED_GAME && t.content.content_type !== s.s.CUSTOM_STATUS)
  return;
null == x[t.content.id] && (x[t.content.id] = {
  id: t.content.id,
  type: p.Rr.ACTIVITY,
  score: 50,
  activity: t.content
});
let a = {
  id: t.content.id,
  type: p.Rr.ACTIVITY,
  score: 50,
  data: {
    user_id: t.content.author_id,
    content_id: t.content.id
  }
};
R[a.id] = a, (n + 1) * 5 < e.length ? e.splice((n + 1) * 5, 0, a) : e.push(a);
  }), e;
}

function z() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (Z.length > 0 && (A = Z, Z = []), j++, e) {
let [e, t] = K(A);
V = e, F = t;
  }
  if (null != L.load_id && v !== L.load_id) {
var t;
I.default.track(f.rMx.FEED_LOADED, {
  ...L,
  unread_feed_item_ids: V.map(e => e.id),
  read_feed_item_ids: F.map(e => e.id),
  home_session_id: 'gravity'
}), v = null !== (t = L.load_id) && void 0 !== t ? t : null, L = {};
  }
  Y = 0, (0, S.em)([
...V,
...F
  ], 0, p.xy);
}

function K(e) {
  let t = [],
n = [],
i = [];
  return e.forEach(e => {
let s = null != T.Z.getReadTimestamp(e.id);
e.type === p.Rr.MESSAGE ? s = s || !(0, S.$U)(e.data.channel_id, e.data.message_id) : e.type === p.Rr.SUMMARY && (s = s || !(0, S.$U)(e.data.channel_id, e.data.summary_id)), s ? t.push(e) : e.type === p.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
  }), [
[
  ...i,
  ...n
],
t.sort((e, t) => T.Z.compare(e.id, t.id))
  ];
}

function q() {
  let e = 0,
t = new Set(A.map(e => e.id));
  return Z.forEach(n => {
if (!(e >= p.Lb))
  !t.has(n.id) && e++;
  }), e >= p.Lb;
}

function Q(e) {
  let {
type: t,
messageId: n,
userId: i,
emoji: s,
reactionType: a
  } = e, r = x[n];
  if (null == r || r.type !== p.Rr.MESSAGE)
return !1;
  let l = d.default.getId() === i;
  'MESSAGE_REACTION_ADD' === t ? r.message = r.message.addReaction(s, l, e.colors, a) : r.message = r.message.removeReaction(s, l, a);
}

function X(e) {
  let {
channelId: t
  } = e, n = [], i = [];
  if (V.forEach((e, s) => {
  s > Y && (e.type === p.Rr.MESSAGE || e.type === p.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
}), 0 === n.length)
return !1;
  V = i.sort((e, t) => T.Z.compare(e.id, t.id)), F = [
...F,
...n
  ];
}
class J extends(i = a.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(_.Z, u.Z, E.ZP, o.Z, h.ZP, d.default, T.Z, l.Z), null != e) {
  var t, n, i;
  A = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], O = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, e.dehydratedItems.forEach(e => {
    R[e.id] = e;
  }), H = null !== (i = e.numOpens) && void 0 !== i ? i : 0;
}
  }
  getVersion() {
return j;
  }
  getDehydratedItems() {
return A;
  }
  getNewDehydratedItems() {
return Z;
  }
  getDehydratedItem(e) {
var t;
return null !== (t = R[e]) && void 0 !== t ? t : null;
  }
  getHydratedItem(e) {
var t;
return null !== (t = x[e]) && void 0 !== t ? t : null;
  }
  getMessage(e) {
let t = x[e];
return null == t || t.type !== p.Rr.MESSAGE ? null : t.message;
  }
  getHydratedItems() {
return x;
  }
  getUnreadDisplayItems() {
return V;
  }
  getReadDisplayItems() {
return F;
  }
  getNextIndexToHydrate() {
return Y;
  }
  getMissingItems() {
return b;
  }
  getCustomChannelScore(e, t) {
var n;
return null == M[e] ? 0 : null !== (n = M[e][t]) && void 0 !== n ? n : 0;
  }
  getCustomChannelScores(e) {
var t;
return null !== (t = M[e]) && void 0 !== t ? t : {};
  }
  getCustomGuildScore(e) {
var t;
return null !== (t = P[e]) && void 0 !== t ? t : 0;
  }
  getNumLocallyAddedItems() {
return Object.keys(O).length;
  }
  hasNewContent() {
return G;
  }
  getSelectedSummary(e) {
return null == w || w.channelId !== e ? null : w;
  }
  isGravitySelectedChannel(e) {
return null != B && B === e;
  }
  getLoadId() {
return v;
  }
  hasOpenedEnoughTimes() {
return 5 === H;
  }
  getState() {
return {
  dehydratedItems: A,
  locallyAddedItems: O,
  numOpens: H
};
  }
}
N(J, 'displayName', 'GravityStore'), N(J, 'persistKey', 'GravityStore'), t.Z = new J(r.Z, {
  POST_CONNECTION_OPEN: function() {
if (A.length > 0) {
  let [e, t] = K(A);
  V = e, F = t, Y = 0, (0, S.em)([
    ...V,
    ...F
  ], 0, p.xy);
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
if (!(0, S.rK)('GravityStore-handleMessageCreate') || null == s || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === d.default.getId() || (null !== (n = P[s]) && void 0 !== n ? n : 0) < 0)
  return !1;
let r = u.Z.getChannel(a);
if (null == r || r.type !== f.d4z.GUILD_ANNOUNCEMENT || h.ZP.isChannelMuted(s, a) || s in P && P[s] < 0 || null != M[s] && a in M[s] && null != M[s][a] && M[s][a] < 0)
  return !1;
let l = _.Z.getMessage(i.channel_id, i.id);
null == l && (l = (0, c.e5)(i));
let o = l.mentionEveryone;
if (i.id in R)
  return !1;
let E = {
  type: p.Rr.MESSAGE,
  id: i.id,
  score: Date.now(),
  data: {
    channel_id: i.channel_id,
    guild_id: s,
    message_id: i.id,
    channel_type: f.d4z.GUILD_ANNOUNCEMENT,
    has_mention: o
  }
};
o && (null == D[a] && (D[a] = 0), D[a]++, y.add(s)), null == (Z = 0 === Z.length ? [...A] : [...Z]).find(e => e.id === i.id) && (Z.unshift(E), O[i.id] = E), q() && j > 0 && (G = !0), R[i.id] = E, x[i.id] = {
  ...E,
  message: l
};
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
let {
  items: t,
  loadId: n,
  startTime: i
} = e;
Z = t.filter(e => p.zd.has(e.type)), ! function() {
  let e = new Set();
  Z.forEach(t => {
    e.add(t.id);
  }), Object.values(O).forEach(t => {
    e.has(t.id) || g.default.age(t.id) > m.Z.Millis.DAY || t.type === p.Rr.MESSAGE && h.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete O[t.id] : !e.has(t.id) && (Z.unshift(t), e.add(t.id));
  }), Z.forEach(e => {
    R[e.id] = e;
  });
}(), Z = W(Z), L = {
  load_id: n,
  load_time_millis: Date.now() - i,
  feed_item_ids: Z.map(e => e.id)
};
let s = q();
if (0 === j)
  s && !k && (G = !0, U = !0), z();
else if (G = s, s) {
  let [e, t] = K(Z);
  (0, S.em)([
    ...e,
    ...t
  ], 0, p.xy);
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
x = {
  ...x
};
let d = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
  u = n.reduce((e, t) => (e[t.id] = t, e), {}),
  E = i.reduce((e, t) => (e[t.id] = t, e), {});
s.forEach(e => {
  let t = d[e.message_id];
  if (null == t) {
    b[e.message_id] = !0;
    return;
  }
  let n = R[e.message_id];
  if (null == n) {
    b[e.message_id] = !0;
    return;
  }
  null != _.Z.getMessage(t.channel_id, t.message.id) ? x[t.message.id] = {
    ...n,
    message: _.Z.getMessage(t.channel_id, t.message.id)
  } : x[t.message.id] = {
    ...n,
    message: (0, c.e5)(t.message)
  };
}), a.forEach(e => {
  let t = u[e.summary_id];
  if (null == t) {
    b[e.summary_id] = !0;
    return;
  }
  let n = R[e.summary_id];
  if (null == n || n.type !== p.Rr.SUMMARY || t.messages.length < 3) {
    b[e.summary_id] = !0;
    return;
  }
  x[t.id] = {
    ...n,
    summary: (0, S.wV)(t, n.data.guild_id)
  };
}), r.forEach(e => {
  let t = E[e.content_id];
  if (null == t) {
    b[e.content_id] = !0;
    return;
  }
  let n = R[e.content_id];
  if (null == n) {
    b[e.content_id] = !0;
    return;
  }
  x[t.id] = {
    ...n,
    activity: t
  };
}), l === Y && (Y = o);
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
let {
  scores: t
} = e;
for (let e of t)
  for (let t of (P[e.guild_id] = e.guild_score, Object.keys(e.custom_channel_scores)))
    null == M[e.guild_id] && (M[e.guild_id] = {}), M[e.guild_id][t] = e.custom_channel_scores[t];
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
let {
  channelScores: t,
  guildId: n,
  guildScore: i
} = e;
null != i && (P[n] = i, i < 0 && (A = A.filter(e => e.type === p.Rr.MESSAGE && e.data.guild_id !== n), V = V.filter(e => e.type === p.Rr.MESSAGE && e.data.guild_id !== n), F = F.filter(e => e.type === p.Rr.MESSAGE && e.data.guild_id !== n), Z = Z.filter(e => e.type === p.Rr.MESSAGE && e.data.guild_id !== n))), null == t || t.forEach(e => {
  let {
    channelId: t,
    score: i
  } = e;
  null == M[n] && (M[n] = {}), M[n][t] = i;
});
  },
  RELOAD_GRAVITY: function() {
if (0 === Z.length)
  return !1;
z(), G = !1;
  },
  GRAVITY_TAB_OPENED: function() {
k = !0, U && (U = !1, G = !1), H < 5 && H++;
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
H = 6;
  },
  SET_GRAVITY_SELECTED_SUMMARY: function(e) {
if (null == e.summaryId) {
  w = null;
  return;
}
let t = x[e.summaryId];
if (null == t || t.type !== p.Rr.SUMMARY) {
  w = null;
  return;
}
w = t.summary;
  },
  SET_GRAVITY_SELECTED_CHANNEL: function(e) {
B = e.channelId;
  },
  MESSAGE_REACTION_ADD: Q,
  MESSAGE_REACTION_ADD_MANY: function(e) {
let {
  messageId: t,
  reactions: n
} = e, i = x[t];
if (null == i || i.type !== p.Rr.MESSAGE)
  return !1;
let s = d.default.getId();
i.message = i.message.addReactionBatch(n, s);
  },
  MESSAGE_REACTION_REMOVE: Q,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
let {
  messageId: t
} = e, n = x[t];
if (null == n || n.type !== p.Rr.MESSAGE)
  return !1;
n.message = n.message.set('reactions', []);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
let {
  messageId: t,
  emoji: n
} = e, i = x[t];
if (null == i || i.type !== p.Rr.MESSAGE)
  return !1;
i.message = i.message.removeReactionsForEmoji(n);
  },
  CHANNEL_ACK: X,
  MESSAGE_ACK: X,
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feedId: t
} = e;
if (t !== C.YN.GLOBAL_FEED)
  return !1;
if (!k) {
  let [e, t] = K(A = W(A));
  V = e, F = t;
}
Z = W(Z = 0 === Z.length ? [...A] : Z), q() && j > 0 && (G = !0);
  }
});