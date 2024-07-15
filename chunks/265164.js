n(47120), n(733860), n(653041), n(724458);
var i, a = n(442837),
  s = n(570140),
  r = n(353926),
  l = n(786761),
  o = n(314897),
  c = n(592125),
  d = n(375954),
  u = n(306680),
  _ = n(9156),
  E = n(626135),
  h = n(70956),
  I = n(709054),
  m = n(761080),
  g = n(584925),
  p = n(207205),
  T = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let S = [],
  C = null,
  N = [],
  A = {},
  v = {},
  Z = {},
  L = {},
  O = {},
  R = {},
  x = {},
  b = {},
  P = new Set(),
  M = 0,
  D = !1,
  y = !1,
  j = !1,
  U = null,
  G = null,
  k = 0,
  w = [],
  B = [],
  H = 0;

function V() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (N.length > 0 && (S = N, N = []), M++, e) {
let [e, t] = F(S);
w = e, B = t;
  }
  if (null != A.load_id && C !== A.load_id) {
var t;
E.default.track(T.rMx.FEED_LOADED, {
  ...A,
  unread_feed_item_ids: w.map(e => e.id),
  read_feed_item_ids: B.map(e => e.id),
  home_session_id: 'gravity'
}), C = null !== (t = A.load_id) && void 0 !== t ? t : null, A = {};
  }
  H = 0, (0, p.em)([
...w,
...B
  ], 0, m.xy);
}

function F(e) {
  let t = [],
n = [],
i = [];
  return e.forEach(e => {
let a = null != g.Z.getReadTimestamp(e.id);
e.type === m.Rr.MESSAGE ? a = a || !(0, p.$U)(e.data.channel_id, e.data.message_id) : e.type === m.Rr.SUMMARY && (a = a || !(0, p.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === m.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
  }), [
[
  ...i,
  ...n
],
t.sort((e, t) => g.Z.compare(e.id, t.id))
  ];
}

function Y() {
  let e = 0,
t = new Set(S.map(e => e.id));
  return N.forEach(n => {
if (!(e >= m.Lb))
  !t.has(n.id) && e++;
  }), e >= m.Lb;
}

function W(e) {
  let {
type: t,
messageId: n,
userId: i,
emoji: a,
reactionType: s
  } = e, r = L[n];
  if (null == r || r.type !== m.Rr.MESSAGE)
return !1;
  let l = o.default.getId() === i;
  'MESSAGE_REACTION_ADD' === t ? r.message = r.message.addReaction(a, l, e.colors, s) : r.message = r.message.removeReaction(a, l, s);
}

function z(e) {
  let {
channelId: t
  } = e, n = [], i = [];
  if (w.forEach((e, a) => {
  a > H && (e.type === m.Rr.MESSAGE || e.type === m.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
}), 0 === n.length)
return !1;
  w = i.sort((e, t) => g.Z.compare(e.id, t.id)), B = [
...B,
...n
  ];
}
class K extends(i = a.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(d.Z, c.Z, u.ZP, r.Z, _.ZP, o.default, g.Z), null != e) {
  var t, n, i;
  S = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], v = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, e.dehydratedItems.forEach(e => {
    Z[e.id] = e;
  }), k = null !== (i = e.numOpens) && void 0 !== i ? i : 0;
}
  }
  getVersion() {
return M;
  }
  getDehydratedItems() {
return S;
  }
  getNewDehydratedItems() {
return N;
  }
  getDehydratedItem(e) {
var t;
return null !== (t = Z[e]) && void 0 !== t ? t : null;
  }
  getHydratedItem(e) {
var t;
return null !== (t = L[e]) && void 0 !== t ? t : null;
  }
  getMessage(e) {
let t = L[e];
return null == t || t.type !== m.Rr.MESSAGE ? null : t.message;
  }
  getHydratedItems() {
return L;
  }
  getUnreadDisplayItems() {
return w;
  }
  getReadDisplayItems() {
return B;
  }
  getNextIndexToHydrate() {
return H;
  }
  getMissingItems() {
return O;
  }
  getCustomChannelScore(e, t) {
var n;
return null == x[e] ? 0 : null !== (n = x[e][t]) && void 0 !== n ? n : 0;
  }
  getCustomChannelScores(e) {
var t;
return null !== (t = x[e]) && void 0 !== t ? t : {};
  }
  getCustomGuildScore(e) {
var t;
return null !== (t = R[e]) && void 0 !== t ? t : 0;
  }
  getNumLocallyAddedItems() {
return Object.keys(v).length;
  }
  hasNewContent() {
return y;
  }
  getSelectedSummary(e) {
return null == U || U.channelId !== e ? null : U;
  }
  isGravitySelectedChannel(e) {
return null != G && G === e;
  }
  getLoadId() {
return C;
  }
  hasOpenedEnoughTimes() {
return 5 === k;
  }
  getState() {
return {
  dehydratedItems: S,
  locallyAddedItems: v,
  numOpens: k
};
  }
}
f(K, 'displayName', 'GravityStore'), f(K, 'persistKey', 'GravityStore'), t.Z = new K(s.Z, {
  POST_CONNECTION_OPEN: function() {
if (S.length > 0) {
  let [e, t] = F(S);
  w = e, B = t, H = 0, (0, p.em)([
    ...w,
    ...B
  ], 0, m.xy);
}
  },
  LOGOUT: function() {
return !1;
  },
  MESSAGE_CREATE: function(e) {
var t, n;
let {
  message: i,
  guildId: a,
  channelId: s
} = e;
if (!(0, p.rK)('GravityStore-handleMessageCreate') || null == a || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === o.default.getId() || (null !== (n = R[a]) && void 0 !== n ? n : 0) < 0)
  return !1;
let r = c.Z.getChannel(s);
if (null == r || r.type !== T.d4z.GUILD_ANNOUNCEMENT || _.ZP.isChannelMuted(a, s) || a in R && R[a] < 0 || s in x[a] && x[a][s] < 0)
  return !1;
let u = d.Z.getMessage(i.channel_id, i.id);
null == u && (u = (0, l.e5)(i));
let E = u.mentionEveryone;
if (i.id in Z)
  return !1;
let h = {
  type: m.Rr.MESSAGE,
  id: i.id,
  score: Date.now(),
  data: {
    channel_id: i.channel_id,
    guild_id: a,
    message_id: i.id,
    channel_type: T.d4z.GUILD_ANNOUNCEMENT,
    has_mention: E
  }
};
E && (null == b[s] && (b[s] = 0), b[s]++, P.add(a)), null == (N = 0 === N.length ? [...S] : [...N]).find(e => e.id === i.id) && (N.unshift(h), v[i.id] = h), Y() && M > 0 && (y = !0), Z[i.id] = h, L[i.id] = {
  ...h,
  message: u
};
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
let {
  items: t,
  loadId: n,
  startTime: i
} = e;
N = t.filter(e => m.zd.has(e.type)), ! function() {
  let e = new Set();
  N.forEach(t => {
    e.add(t.id);
  }), Object.values(v).forEach(t => {
    e.has(t.id) || I.default.age(t.id) > h.Z.Millis.DAY || t.type === m.Rr.MESSAGE && _.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete v[t.id] : !e.has(t.id) && (N.unshift(t), e.add(t.id));
  }), N.forEach(e => {
    Z[e.id] = e;
  });
}(), A = {
  load_id: n,
  load_time_millis: Date.now() - i,
  feed_item_ids: N.map(e => e.id)
};
let a = Y();
if (0 === M)
  a && !j && (y = !0, D = !0), V();
else if (y = a, a) {
  let [e, t] = F(N);
  (0, p.em)([
    ...e,
    ...t
  ], 0, m.xy);
}
  },
  LOAD_GRAVITY_HYDRATED: function(e) {
let {
  messageItems: t,
  summaryItems: n,
  activityItems: i,
  requestMessageItems: a,
  requestSummaryItems: s,
  requestActivityItems: r,
  startingIndex: o,
  endingIndex: c
} = e;
L = {
  ...L
};
let u = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
  _ = n.reduce((e, t) => (e[t.id] = t, e), {}),
  E = i.reduce((e, t) => (e[t.id] = t, e), {});
a.forEach(e => {
  let t = u[e.message_id];
  if (null == t) {
    O[e.message_id] = !0;
    return;
  }
  let n = Z[e.message_id];
  if (null == n) {
    O[e.message_id] = !0;
    return;
  }
  null != d.Z.getMessage(t.channel_id, t.message.id) ? L[t.message.id] = {
    ...n,
    message: d.Z.getMessage(t.channel_id, t.message.id)
  } : L[t.message.id] = {
    ...n,
    message: (0, l.e5)(t.message)
  };
}), s.forEach(e => {
  let t = _[e.summary_id];
  if (null == t) {
    O[e.summary_id] = !0;
    return;
  }
  let n = Z[e.summary_id];
  if (null == n || n.type !== m.Rr.SUMMARY || t.messages.length < 3) {
    O[e.summary_id] = !0;
    return;
  }
  L[t.id] = {
    ...n,
    summary: (0, p.wV)(t, n.data.guild_id)
  };
}), r.forEach(e => {
  let t = E[e.outbox_content_id];
  if (null == t) {
    O[e.outbox_content_id] = !0;
    return;
  }
  let n = Z[e.outbox_content_id];
  if (null == n) {
    O[e.outbox_content_id] = !0;
    return;
  }
  L[t.id] = {
    ...n,
    activity: t
  };
}), o === H && (H = c);
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
let {
  scores: t
} = e;
for (let e of t)
  for (let t of (R[e.guild_id] = e.guild_score, Object.keys(e.custom_channel_scores)))
    null == x[e.guild_id] && (x[e.guild_id] = {}), x[e.guild_id][t] = e.custom_channel_scores[t];
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
let {
  channelScores: t,
  guildId: n,
  guildScore: i
} = e;
null != i && (R[n] = i, i < 0 && (S = S.filter(e => e.type === m.Rr.MESSAGE && e.data.guild_id !== n), w = w.filter(e => e.type === m.Rr.MESSAGE && e.data.guild_id !== n), B = B.filter(e => e.type === m.Rr.MESSAGE && e.data.guild_id !== n), N = N.filter(e => e.type === m.Rr.MESSAGE && e.data.guild_id !== n))), null == t || t.forEach(e => {
  let {
    channelId: t,
    score: i
  } = e;
  null == x[n] && (x[n] = {}), x[n][t] = i;
});
  },
  RELOAD_GRAVITY: function() {
if (0 === N.length)
  return !1;
V(), y = !1;
  },
  GRAVITY_TAB_OPENED: function() {
j = !0, D && (D = !1, y = !1), k < 5 && k++;
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
k = 6;
  },
  SET_GRAVITY_SELECTED_SUMMARY: function(e) {
if (null == e.summaryId) {
  U = null;
  return;
}
let t = L[e.summaryId];
if (null == t || t.type !== m.Rr.SUMMARY) {
  U = null;
  return;
}
U = t.summary;
  },
  SET_GRAVITY_SELECTED_CHANNEL: function(e) {
G = e.channelId;
  },
  MESSAGE_REACTION_ADD: W,
  MESSAGE_REACTION_ADD_MANY: function(e) {
let {
  messageId: t,
  reactions: n
} = e, i = L[t];
if (null == i || i.type !== m.Rr.MESSAGE)
  return !1;
let a = o.default.getId();
i.message = i.message.addReactionBatch(n, a);
  },
  MESSAGE_REACTION_REMOVE: W,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
let {
  messageId: t
} = e, n = L[t];
if (null == n || n.type !== m.Rr.MESSAGE)
  return !1;
n.message = n.message.set('reactions', []);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
let {
  messageId: t,
  emoji: n
} = e, i = L[t];
if (null == i || i.type !== m.Rr.MESSAGE)
  return !1;
i.message = i.message.removeReactionsForEmoji(n);
  },
  CHANNEL_ACK: z,
  MESSAGE_ACK: z
});