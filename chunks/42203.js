"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
  }
}), n("222007"), n("581081"), n("70102");
var i = n("917351"),
  r = n.n(i),
  s = n("102053"),
  a = n("446674"),
  o = n("913144"),
  l = n("802493"),
  u = n("595525"),
  c = n("860255"),
  d = n("846527"),
  p = n("1544"),
  h = n("605250"),
  f = n("379881"),
  E = n("560208"),
  _ = n("233069"),
  m = n("299039"),
  S = n("271938"),
  g = n("305961"),
  T = n("697218"),
  I = n("49111");
let v = new h.default("ChannelStore"),
  C = {},
  A = {},
  R = {},
  N = {},
  y = null,
  O = {},
  D = {},
  b = 0,
  P = {},
  L = {},
  M = new Set,
  U = {},
  w = 0,
  k = 0;

function G(e, t, n) {
  if (null == e || !M.has(e) || 0 === t && d.default.hasGuild(e)) return;
  v.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let i = l.default.database(),
    r = null != i ? (0, u.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => c.default.getSync(i, e)) : null;
  if (null == r) {
    M.delete(e), d.default.restored(e), v.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
    return
  }
  let [a, o] = r;
  for (let n of ((0, p.default)(a), 0 !== t && (k += 1), M.delete(e), d.default.restored(e), s.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) !Object.hasOwn(A, n.id) && W((0, _.castChannelRecord)(n));
  v.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(k, ")"))
}

function x(e, t, n) {
  if (M.size > 0 && !Object.hasOwn(A, e) && !Object.hasOwn(N, e) && !Object.hasOwn(O, e) && !Object.hasOwn(L, e) && 1 === t) {
    let i = d.default.getBasicChannel(e);
    (null == i ? void 0 : i.guild_id) != null && G(i.guild_id, t, n)
  }
}

function F(e) {
  if (null != R[e]) {
    for (let t of m.default.keys(R[e])) delete A[t];
    delete R[e]
  }
}

function V(e) {
  var t, n, i, r;
  return x(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : O[e]) && void 0 !== i ? i : L[e]) && void 0 !== r ? r : d.default.getBasicChannel(e)
}

function B(e) {
  var t, n, i, r;
  return x(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : O[e]) && void 0 !== i ? i : L[e]) && void 0 !== r ? r : U[e]
}

function H(e) {
  e.isPrivate() ? (delete U[e.id], j(e)) : e.isThread() ? Y(e) : _.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
    W(e)
  }(e)
}

function j(e) {
  N[e.id] = e, e.type === I.ChannelTypes.DM && (D[e.getRecipientId()] = e.id), b += 1
}

function Y(e) {
  let t = A[e.parent_id];
  O[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && o.default.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function W(e) {
  var t, n;
  let {
    id: i,
    guild_id: r
  } = e;
  A[i] = e, R[r] = null !== (t = R[r]) && void 0 !== t ? t : {}, R[r][i] = e, P[r] = (null !== (n = P[r]) && void 0 !== n ? n : 0) + 1
}

function K(e) {
  if (M.add(e.id), null != e.channels)
    for (let t of (F(e.id), M.delete(e.id), d.default.restored(e.id), e.channels)) W(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && d.default.invalidate(e.id), t.deletes)) Z(A[n]);
    for (let e of t.writes) W(e)
  }
  if (null != e.threads)
    for (let t of e.threads) Y(t)
}

function z() {
  D = {}, A = {}, R = {}, P = {}, N = {}, U = {}, O = {}, M = new Set
}

function q(e) {
  for (let t of (z(), e.channels)) H((0, p.deserializeChannel)((0, _.castChannelRecord)(t)));
  M = new Set(e.guilds.map(e => e.id))
}

function Q(e) {
  if (!_.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
  let t = B(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge({
      ...e.channel.toJS(),
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    })
  }
  H(t)
}

function X(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    _.ALL_CHANNEL_TYPES.has(e.type) && H((0, _.createChannelRecordFromServer)(e))
  })
}

function Z(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in N && delete N[e.id], e.id in A && delete A[e.id], e.id in O && delete O[e.id], null != t && null != R[t] && e.id in R[t] && delete R[t][e.id], ! function(e) {
    if (null == e.guild_id || _.THREAD_CHANNEL_TYPES.has(e.type))(0, _.isPrivate)(e.type) && (b += 1);
    else {
      var t;
      P[e.guild_id] = (null !== (t = P[e.guild_id]) && void 0 !== t ? t : 0) + 1
    }
  }(e)
}

function J(e) {
  var t, n;
  let {
    channel: i
  } = e, r = null !== (n = null !== (t = A[i.id]) && void 0 !== t ? t : N[i.id]) && void 0 !== n ? n : O[i.id];
  if (null == r) return !1;
  Z(r), ! function(e) {
    if ("basicPermissions" in e || e.type !== I.ChannelTypes.DM) return;
    let t = e.getRecipientId(),
      n = D[t];
    n === e.id && delete D[t]
  }(r)
}

function $(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in O) && _.ALL_CHANNEL_TYPES.has(e.thread.type) && Y((0, _.createChannelRecordFromServer)(e.thread))
}

function ee(e) {
  let {
    messages: t,
    threads: n,
    channels: i
  } = e;
  for (let e of t)
    for (let t of e) et(t.thread);
  n.forEach(et), null == i || i.forEach(e => {
    let t = (0, _.createChannelRecordFromServer)(e),
      n = null != B(e.id),
      i = null != U[e.id];
    t.isPrivate() && (!n || i) ? U[t.id] = t : !n && H(t)
  })
}

function et(e) {
  null != e && !(e.id in O) && _.ALL_CHANNEL_TYPES.has(e.type) && Y((0, _.createChannelRecordFromServer)(e))
}

function en() {
  for (let e in L = {}, f.default.getFavoriteChannels()) {
    let t = f.default.getCategoryRecord(e);
    null != t && (L[e] = t)
  }
}
class ei extends a.default.Store {
  initialize() {
    this.waitFor(d.default, T.default, g.default, f.default), this.syncWith([f.default], en)
  }
  hasChannel(e) {
    return null != V(e)
  }
  getBasicChannel(e) {
    if (null != e) return V(e)
  }
  getChannel(e) {
    if (null != e) return B(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of g.default.getGuildIds()) G(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return {
      ...A,
      ...N
    }
  }
  getChannelIds(e) {
    var t, n;
    return (G(e, 0, "getChannelIds"), null == e) ? m.default.keys(N) : m.default.keys(null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : C)
  }
  getMutablePrivateChannels() {
    return N
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return G(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : C
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return G(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = R[e]) && void 0 !== t ? t : C
  }
  getSortedPrivateChannels() {
    return r(N).values().sort((e, t) => m.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return D[e]
  }
  getDMUserIds() {
    return Object.keys(D)
  }
  getPrivateChannelsVersion() {
    return b
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return r.values(O).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return {
      ...A,
      ...N,
      ...O
    }
  }
}
ei.displayName = "ChannelStore";
var er = new ei(o.default, {
  BACKGROUND_SYNC: function(e) {
    let {
      guilds: t
    } = e, n = R;
    A = {}, R = {}, P = {}, t.forEach(e => {
      if ("unavailable" === e.data_mode) r.forEach(n[e.id], W);
      else if ("partial" === e.data_mode) {
        var t, i;
        r.forEach(n[e.id], W);
        let s = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
        s.length > 0 && (G(e.id, 1, "handleBackgroundSync"), s.forEach(e => Z(A[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => W((0, _.createChannelRecordFromServer)(t, e.id)))
      } else F(e.id), M.delete(e.id), d.default.restored(e.id), e.channels.forEach(t => W((0, _.createChannelRecordFromServer)(t, e.id)))
    })
  },
  CACHE_LOADED_LAZY: function(e) {
    if (null != e.privateChannels)
      for (let t of e.privateChannels) H((0, _.castChannelRecord)(t));
    for (let [t, n] of e.guildChannels)
      for (let e of n) H((0, _.castChannelRecord)(e));
    e.guilds.length, M = new Set(e.guilds.map(e => e.id))
  },
  CACHE_LOADED: q,
  CHANNEL_CREATE: function(e) {
    H(e.channel)
  },
  CHANNEL_DELETE: J,
  CHANNEL_RECIPIENT_ADD: function(e) {
    let t = B(e.channelId),
      n = S.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.addRecipient(e.user.id, e.nick, n)), !0)
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let t = B(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.removeRecipient(e.user.id)), !0)
  },
  CHANNEL_UPDATES: function(e) {
    let t = e.channels.some(e => {
      let t = B(e.id);
      return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
    });
    for (let t of e.channels) H(t);
    t && Object.values(O).forEach(e => H(e))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    null != y && (N = {}, y.forEach(j)), t.forEach(j)
  },
  CONNECTION_OPEN: function(e) {
    let t = R;
    for (let n of (D = {}, A = {}, R = {}, O = {}, P = {}, U = {}, M = new Set, y = e.initialPrivateChannels, e.initialPrivateChannels.forEach(j), e.guilds)) "partial" === n.dataMode && r.forEach(t[n.id], W), K(n);
    en()
  },
  GUILD_CREATE: function(e) {
    K(e.guild)
  },
  GUILD_DELETE: function(e) {
    F(e.guild.id), M.delete(e.guild.id), d.default.invalidate(e.guild.id)
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e, n = !1, i = (0, E.getThreadsFromGuildFeedFetch)(t);
    for (let e of i) !(e.id in O) && _.ALL_CHANNEL_TYPES.has(e.type) && (Y((0, _.createChannelRecordFromServer)(e)), n = !0);
    return n
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: X,
  LOAD_MESSAGES_AROUND_SUCCESS: $,
  LOAD_MESSAGES_SUCCESS: $,
  LOAD_THREADS_SUCCESS: X,
  LOGOUT: function() {
    z()
  },
  OVERLAY_INITIALIZE: q,
  SEARCH_FINISH: ee,
  MOD_VIEW_SEARCH_FINISH: ee,
  THREAD_CREATE: Q,
  THREAD_DELETE: J,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      _.ALL_CHANNEL_TYPES.has(e.type) && H(e)
    })
  },
  THREAD_UPDATE: Q,
  VOICE_BACKGROUND_UPDATE: function(e) {
    let t = B(e.channelId);
    null != t && (t.voiceBackgroundDisplay = e.background, H(t))
  }
})