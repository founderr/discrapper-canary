"use strict";
n.r(t), n.d(t, {
  ChannelLoader: function() {
    return Y
  }
}), n("47120"), n("51350"), n("411104");
var i, r, s, a, o = n("392711"),
  l = n.n(o),
  u = n("956067"),
  d = n("442837"),
  _ = n("570140"),
  c = n("287328"),
  E = n("86670"),
  I = n("591526"),
  T = n("458772"),
  f = n("38217"),
  S = n("710845"),
  h = n("853856"),
  A = n("131704"),
  m = n("823379"),
  N = n("709054"),
  p = n("314897"),
  O = n("430824"),
  C = n("594174"),
  R = n("981631");
let g = new S.default("ChannelStore"),
  L = {},
  v = {},
  D = {},
  M = {},
  y = null,
  P = {},
  U = {},
  b = 0,
  G = {},
  w = {},
  k = new Set,
  B = {},
  V = 0,
  x = {},
  F = 0,
  H = 0;
class Y {
  static loadAllMissingChannels() {
    let e = O.default.getGuildIds().filter(e => !k.has(e));
    return this.loadGuildIds(e)
  }
  static loadGuildFromChannelId(e) {
    var t;
    return null == e ? null : Y.loadGuildIds([null === (t = z(e)) || void 0 === t ? void 0 : t.guild_id])
  }
  static loadGuildIds(e) {
    let t = e.filter(m.isNotNullish);
    if (0 === t.length) return null;
    let n = c.default.database();
    if (null == n || !t.some(e => !k.has(e))) return null;
    let i = V;
    return (0, E.tryLoadOrResetCacheGatewayAsync)("loadChannels", async () => {
      let e = t.map(e => {
          if (k.has(e)) return null;
          if (null != B[e]) return g.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
          let t = I.default.getAsync(n, e).then(t => (g.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
            guildId: e,
            channels: t
          }));
          return B[e] = t, {
            guildId: e,
            promise: t
          }
        }).filter(m.isNotNullish),
        r = e.map(e => e.promise);
      try {
        let t = await Promise.all(r);
        if (V !== i) return g.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
        let n = t.filter(e => !k.has(e.guildId));
        await _.default.dispatch({
          type: "LOAD_CHANNELS",
          channels: n
        })
      } catch (t) {
        for (let n of (g.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete B[n.guildId];
        throw t
      }
      return null
    })
  }
}

function j(e, t, n) {
  if (null == e || "null" === e || k.has(e) || 0 === t && T.default.hasGuild(e)) return;
  let i = c.default.database();
  if (null == i) return;
  g.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let r = (0, E.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => I.default.getSync(i, e), "ensureGuildLoaded");
  if (null == r) {
    k.add(e), T.default.restored(e), g.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
    return
  }
  let [s, a] = r;
  for (let n of ((0, f.default)(s), 0 !== t && (H += 1), k.add(e), T.default.restored(e), u.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), a), s)) !Object.hasOwn(v, n.id) && J((0, A.castChannelRecord)(n));
  g.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(s.length, ", guilds_loaded: ").concat(H, ")"))
}

function W(e, t, n) {
  if (!Object.hasOwn(v, e) && !Object.hasOwn(M, e) && !Object.hasOwn(P, e) && !Object.hasOwn(w, e) && 1 === t) {
    let i = T.default.getBasicChannel(e);
    (null == i ? void 0 : i.guild_id) != null && j(i.guild_id, t, n)
  }
}

function K(e) {
  if (g.fileOnly("Deleting guild channels for ".concat(e)), null != D[e]) {
    for (let t of N.default.keys(D[e])) delete v[t];
    delete D[e]
  }
}

function z(e) {
  var t, n, i, r;
  return W(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : P[e]) && void 0 !== i ? i : w[e]) && void 0 !== r ? r : T.default.getBasicChannel(e)
}

function Z(e) {
  var t, n, i, r;
  return W(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : P[e]) && void 0 !== i ? i : w[e]) && void 0 !== r ? r : x[e]
}

function Q(e) {
  e.isPrivate() ? (delete x[e.id], X(e)) : e.isThread() ? q(e) : A.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
    J(e)
  }(e)
}

function X(e) {
  M[e.id] = e, e.type === R.ChannelTypes.DM && (U[e.getRecipientId()] = e.id), b += 1
}

function q(e) {
  let t = v[e.parent_id];
  P[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && _.default.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function J(e) {
  var t, n;
  let {
    id: i,
    guild_id: r
  } = e;
  v[i] = e, D[r] = null !== (t = D[r]) && void 0 !== t ? t : {}, D[r][i] = e, G[r] = (null !== (n = G[r]) && void 0 !== n ? n : 0) + 1
}

function $(e) {
  if (null != e.channels)
    for (let t of (g.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), K(e.id), k.add(e.id), T.default.restored(e.id), e.channels)) J(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && T.default.invalidate(e.id), t.deletes)) en(v[n]);
    for (let e of t.writes) J(e)
  }
  if (null != e.threads)
    for (let t of e.threads) q(t)
}

function ee(e) {
  if (!A.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
  let t = Z(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge({
      ...e.channel.toJS(),
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    })
  }
  Q(t)
}

function et(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    A.ALL_CHANNEL_TYPES.has(e.type) && Q((0, A.createChannelRecordFromServer)(e))
  })
}

function en(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in M && delete M[e.id], e.id in v && delete v[e.id], e.id in P && delete P[e.id], null != t && null != D[t] && e.id in D[t] && delete D[t][e.id], ! function(e) {
    if (null == e.guild_id || A.THREAD_CHANNEL_TYPES.has(e.type))(0, A.isPrivate)(e.type) && (b += 1);
    else {
      var t;
      G[e.guild_id] = (null !== (t = G[e.guild_id]) && void 0 !== t ? t : 0) + 1
    }
  }(e)
}

function ei(e) {
  var t, n;
  let {
    channel: i
  } = e, r = null !== (n = null !== (t = v[i.id]) && void 0 !== t ? t : M[i.id]) && void 0 !== n ? n : P[i.id];
  if (null == r) return !1;
  en(r), ! function(e) {
    if ("basicPermissions" in e || e.type !== R.ChannelTypes.DM) return;
    let t = e.getRecipientId();
    U[t] === e.id && delete U[t]
  }(r)
}

function er(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in P) && A.ALL_CHANNEL_TYPES.has(e.thread.type) && q((0, A.createChannelRecordFromServer)(e.thread))
}

function es(e) {
  let {
    messages: t,
    threads: n,
    channels: i
  } = e;
  for (let e of t)
    for (let t of e) ea(t.thread);
  n.forEach(ea), null == i || i.forEach(e => {
    let t = (0, A.createChannelRecordFromServer)(e),
      n = null != Z(e.id),
      i = null != x[e.id];
    t.isPrivate() && (!n || i) ? x[t.id] = t : !n && Q(t)
  })
}

function ea(e) {
  null != e && !(e.id in P) && A.ALL_CHANNEL_TYPES.has(e.type) && q((0, A.createChannelRecordFromServer)(e))
}

function eo() {
  for (let e in w = {}, h.default.getFavoriteChannels()) {
    let t = h.default.getCategoryRecord(e);
    null != t && (w[e] = t)
  }
}
class el extends(i = d.default.Store) {
  initialize() {
    this.waitFor(T.default, C.default, O.default, h.default), this.syncWith([h.default], eo)
  }
  hasChannel(e) {
    return null != z(e)
  }
  getBasicChannel(e) {
    if (null != e) return z(e)
  }
  getChannel(e) {
    if (null != e) return Z(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of O.default.getGuildIds()) j(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return {
      ...v,
      ...M
    }
  }
  getChannelIds(e) {
    var t, n;
    return (j(e, 0, "getChannelIds"), null == e) ? N.default.keys(M) : N.default.keys(null !== (n = null !== (t = T.default.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L)
  }
  getMutablePrivateChannels() {
    return M
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return j(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = T.default.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return j(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = D[e]) && void 0 !== t ? t : L
  }
  getSortedPrivateChannels() {
    return l()(M).values().sort((e, t) => N.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return U[e]
  }
  getMutableDMsByUserIds() {
    return U
  }
  getDMUserIds() {
    return N.default.keys(U)
  }
  getPrivateChannelsVersion() {
    return b
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = G[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return l().values(P).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return {
      ...v,
      ...M,
      ...P
    }
  }
  getDebugInfo() {
    return {
      loadedGuildIds: Array.from(k).sort(N.default.compare),
      pendingGuildLoads: Object.keys(B).sort(N.default.compare),
      guildSizes: Object.keys(D).sort(N.default.compare).map(e => "".concat(e, ": ").concat(eu(e)))
    }
  }
}

function eu(e) {
  return null == D[e] ? null : Object.keys(D[e]).length
}
a = "ChannelStore", (s = "displayName") in(r = el) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new el(_.default, {
  BACKGROUND_SYNC: function(e) {
    let {
      guilds: t
    } = e, n = D;
    v = {}, D = {}, G = {}, t.forEach(e => {
      if ("unavailable" === e.data_mode) g.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eu(e.id))), l().forEach(n[e.id], J);
      else if ("partial" === e.data_mode) {
        var t, i;
        g.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eu(e.id))), l().forEach(n[e.id], J);
        let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
        r.length > 0 && (j(e.id, 1, "handleBackgroundSync"), r.forEach(e => en(v[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => J((0, A.createChannelRecordFromServer)(t, e.id)))
      } else g.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), K(e.id), k.add(e.id), T.default.restored(e.id), e.channels.forEach(t => J((0, A.createChannelRecordFromServer)(t, e.id)))
    })
  },
  CACHE_LOADED_LAZY: function(e) {
    for (let [t, n] of e.guildChannels)
      for (let e of (g.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), k.add(t), n)) Q((0, A.castChannelRecord)(e))
  },
  CACHE_LOADED: function(e) {
    var t;
    e.guilds.length;
    let {
      privateChannels: n,
      initialGuildChannels: i
    } = e;
    for (let e of [n, i])
      for (let t of e) Q((0, f.deserializeChannel)((0, A.castChannelRecord)(t)));
    let r = null === (t = i[0]) || void 0 === t ? void 0 : t.guild_id;
    null != r && (g.fileOnly("Early cache contained full guild channels for ".concat(r)), k.add(r))
  },
  CHANNEL_CREATE: function(e) {
    Q(e.channel)
  },
  CHANNEL_DELETE: ei,
  CHANNEL_RECIPIENT_ADD: function(e) {
    let t = Z(e.channelId),
      n = p.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.addRecipient(e.user.id, e.nick, n)), !0)
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let t = Z(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.removeRecipient(e.user.id)), !0)
  },
  CHANNEL_UPDATES: function(e) {
    let t = e.channels.some(e => {
      let t = Z(e.id);
      return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
    });
    for (let t of e.channels) Q(t);
    t && Object.values(P).forEach(e => Q(e))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    null != y && (M = {}, y.forEach(X)), t.forEach(X)
  },
  CONNECTION_OPEN: function(e) {
    let t = D;
    for (let n of (U = {}, v = {}, D = {}, P = {}, G = {}, x = {}, B = {}, V = Date.now(), y = e.initialPrivateChannels, e.initialPrivateChannels.forEach(X), e.guilds)) "partial" === n.dataMode && (l().forEach(t[n.id], J), g.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eu(n.id)))), $(n);
    eo()
  },
  GUILD_CREATE: function(e) {
    $(e.guild)
  },
  GUILD_DELETE: function(e) {
    g.fileOnly("GuildDelete of ".concat(e.guild.id)), K(e.guild.id), k.delete(e.guild.id), T.default.invalidate(e.guild.id)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: et,
  LOAD_CHANNELS: function(e) {
    for (let {
        guildId: t,
        channels: n
      }
      of e.channels)
      for (let e of (g.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, f.default)(n), k.add(t), T.default.restored(t), n)) !Object.hasOwn(v, e.id) && J((0, A.castChannelRecord)(e));
    return !1
  },
  LOAD_MESSAGES_AROUND_SUCCESS: er,
  LOAD_MESSAGES_SUCCESS: er,
  LOAD_THREADS_SUCCESS: et,
  LOGOUT: function() {
    g.fileOnly("initializeClear()"), U = {}, v = {}, D = {}, G = {}, M = {}, x = {}, P = {}, k = new Set, B = {}, V = Date.now()
  },
  OVERLAY_INITIALIZE: function(e) {
    for (let t of (e.guilds.length, e.channels)) Q((0, f.deserializeChannel)((0, A.castChannelRecord)(t)))
  },
  SEARCH_FINISH: es,
  MOD_VIEW_SEARCH_FINISH: es,
  THREAD_CREATE: ee,
  THREAD_DELETE: ei,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      A.ALL_CHANNEL_TYPES.has(e.type) && Q(e)
    })
  },
  THREAD_UPDATE: ee
})