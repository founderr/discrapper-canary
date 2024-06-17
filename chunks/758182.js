"use strict";
s.r(t), s.d(t, {
  ENABLE_CACHE_STORE: function() {
    return U
  }
}), s("47120"), s("724458");
var n, a, l, i, r = s("956067");
s("724522");
var o = s("149765"),
  u = s("442837"),
  d = s("433517"),
  c = s("570140"),
  E = s("86670"),
  f = s("261375"),
  _ = s("17567"),
  h = s("795513"),
  m = s("685736"),
  C = s("266750"),
  T = s("768910"),
  g = s("632093"),
  p = s("347994"),
  A = s("591526"),
  N = s("261875"),
  S = s("710845"),
  I = s("38618"),
  x = s("218543"),
  R = s("314897"),
  v = s("944486"),
  M = s("914010"),
  O = s("449934"),
  L = s("576376"),
  y = s("38217"),
  b = s("864631"),
  D = s("981631");
let j = new S.default("CacheStore"),
  U = !1,
  P = !1,
  B = "initializing",
  G = 0,
  V = !1,
  H = !1,
  F = !1;

function k(e) {
  j.log("Clearing cache store"), G = Date.now(), d.Storage.remove(D.CACHE_STORE_KEY), d.Storage.remove(D.CACHE_STORE_LAZY_KEY), d.Storage.remove(D.CACHE_STORE_CHANNELS_LAZY_KEY), B = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (P = !0)
}
async function w(e, t, s) {
  let n = performance.now();
  if (null == e || null == s) return j.verbose("skipped loaded messages (channel: ".concat(s, ", database: ").concat(e, ").")), [performance.now() - n, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let a = await m.default.startupLoad(e, t, s, D.MAX_MESSAGES_PER_CHANNEL);
    j.verbose("loaded ".concat(a.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(s, ")."));
    let l = {
      guildId: t,
      channelId: s,
      users: a.users,
      members: a.members,
      messages: a.messages
    };
    return [performance.now() - n, l]
  }
}
async function Q(e, t, s) {
  var n, a, l;
  j.verbose("loading early cache");
  let i = I.default.getSocket();
  i.connect();
  let o = null !== (n = M.default.getGuildId()) && void 0 !== n ? n : null,
    d = null !== (a = v.default.getChannelId()) && void 0 !== a ? a : null,
    E = performance.now(),
    f = x.default.loadCachedMessages.measureAsyncWithoutNesting(() => w(e, o, d)),
    _ = x.default.fetchGuildCache.measureAsync(() => q(e, s)),
    h = x.default.fetchGuildCache.measureAsync(() => W(e, s)),
    m = null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => A.default.getAsync(e, null)) : Promise.resolve([]),
    C = null == e ? Promise.resolve({}) : r.default.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => p.default.getAll(e)),
    N = null == e ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: read_states", () => T.default.getAll(e)),
    S = null == e ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => g.default.getAll(e)),
    [
      [R, O], L, y, D, U, P, B
    ] = await Promise.all([f, _, h, m, C, N, S]),
    G = performance.now() - E;
  if (j.verbose("cache loaded in ".concat(G, "ms (channel_history ").concat(R, "ms)")), null == O) return (0, b.default)("database:history_cache_null"), j.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let n = Object.fromEntries(O.members.map(e => [e.userId, e])),
      a = null != y.guildId && null != y.channels,
      E = y.guildId;
    return u.default.Emitter.batched(() => {
      r.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return c.default.dispatch({
          type: "CACHE_LOADED",
          guilds: L,
          privateChannels: D,
          initialGuildChannels: null !== (e = y.channels) && void 0 !== e ? e : [],
          users: [...O.users],
          messages: null == O.channelId ? {} : {
            [O.channelId]: O.messages
          },
          guildMembers: null == O.guildId ? {} : {
            [O.guildId]: n
          },
          userSettings: U,
          userGuildSettings: B,
          readStates: P
        })
      }), r.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => i.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), j.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(o, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(s), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(D.length, "\n            channel_history:\n              guild: ").concat(O.guildId, "\n              channel: ").concat(O.channelId, "\n              messages: ").concat(O.messages.length, "\n                members: ").concat(O.members.length, "\n                users: ").concat(O.users.length, "\n            initial_guild:\n              id: ").concat(E, "\n              channels: ").concat(null === (l = y.channels) || void 0 === l ? void 0 : l.length, "\n            user_settings: ").concat(Object.keys(U).length, "\n            read_states: ").concat(P.length, "\n            user_guild_settings: ").concat(B.length, "\n      )")), j.verbose("finished dispatching CACHE_LOADED"), [!0, a && null != E ? E : null, D.length]
  }
}
let Y = !1;
async function q(e, t) {
  var s, n;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      Y = !0;
      break;
    case "other":
      "@me" === t.guildId && (Y = !0)
  }
  if (Y) return null !== (s = await (0, E.tryLoadAsync)(() => r.default.timeAsync("\uD83D\uDCBE", "cache: guilds", () => _.default.getAsync(e)))) && void 0 !== s ? s : [];
  let a = null !== (n = (await C.default.getCommittedVersions()).initial_guild_id) && void 0 !== n ? n : t.guildId;
  if (null == a || "@me" === a) return [];
  let l = await (0, E.tryLoadAsync)(() => _.default.getOneAsync(e, a));
  return null != l ? [l] : []
}
async function W(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = (await C.default.getCommittedVersions()).initial_guild_id;
  if (null == s && "guild-channels" === t.page && (s = t.guildId), null == e || null == s) return j.verbose("skipped loading initial guild (guild: ".concat(s, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = s;
  return {
    channels: await (0, E.tryLoadAsync)(() => A.default.getAsync(e, n)),
    guildId: s
  }
}
async function z(e, t, s, n) {
  j.verbose("loading late lazy cache");
  let [a, l, i] = await x.default.fetchLazyCache.measureAsync(() => Promise.all([(0, E.tryLoadAsync)(() => null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => h.default.okAsync(e)) : Promise.resolve(!0)), (0, E.tryLoadAsync)(() => null == e || Y ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => _.default.getAsync(e))), (0, E.tryLoadAsync)(() => null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => f.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), u = await x.default.fetchStaleChannels.measureAsync(() => null != e && null != i && i.stale.length > 0 ? (0, E.tryLoadAsync)(() => {
    var t, s;
    return t = e, s = i.stale, j.verbose("loading stale guild channels (count: ".concat(s.length, ", ids: ").concat(s.join(", "), ")")), Promise.all(s.map(e => A.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), x.default.loadLazyCache.recordStart();
  let d = I.default.getSocket();
  Z(() => {
    let r = performance.now();
    if (!1 === a) {
      (0, b.default)("database:not_ok"), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == l || null == i || null == u) {
      (0, b.default)("database:load_failed"), j.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != i, "\n          guild_channels: ").concat(null != u, "\n          guilds: ").concat(null != l, "\n        )")), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (l.length > 0 || i.all.length > 0)) {
      (0, b.default)("database:versionless"), j.log("kv_cache was not ok (null version with values)"), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (H) {
      (0, b.default)("already_connected"), j.log("Skipping lazy cache; already connected."), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    d.addAnalytics({
      hadCacheAtStartup: !0
    });
    let E = {
      type: "CACHE_LOADED_LAZY",
      guilds: l,
      guildChannels: u,
      basicGuildChannels: i.channels,
      initialGuildId: s
    };
    x.default.deserializeCache.measure(() => (function(e) {
      if (null != e.guilds) {
        for (let {
            roles: t
          }
          of e.guilds)
          if (null != t)
            for (let e in t) {
              let s = t[e];
              s.permissions = o.deserialize(s.permissions)
            }
      }
      null != e.channels && (0, y.default)(e.channels), null != e.privateChannels && (0, y.default)(e.privateChannels), null != e.guildChannels && (0, y.deserializeChannelEntries)(e.guildChannels)
    })(E)), x.default.dispatchLazyCache.measure(() => c.default.dispatch(E)), j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - r, "ms)")), d.addAnalytics({
      usedCacheAtStartup: !0
    });
    let f = u.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      _ = u.length,
      h = i.all.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      m = i.channels.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      C = h - m,
      T = 0 === i.stale.length ? "" : " \xb7 ".concat(i.stale.join(", "));
    j.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(s, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(l.length, "\n            basic_channels:\n              total: ").concat(h, " (").concat(i.channels.length, " guilds)\n              stale: ").concat(C, " (").concat(i.stale.length, " guilds").concat(T, ")\n              unstale: ").concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(f, " (").concat(u.length, " guilds)\n      )")), x.default.setCacheInfo({
      guilds: l.length,
      privateChannels: n,
      basicChannels: h,
      basicChannelsStale: C,
      fullChannels: f,
      fullChannelGuilds: _
    })
  })
}

function Z(e) {
  let t = I.default.getSocket(),
    s = !1;
  u.default.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      s = !0, x.default.loadLazyCache.recordEnd(), j.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      j.warn("Lazy cache has encountered error", e), c.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !s && x.default.loadLazyCache.recordEnd()
}
class K extends(n = u.default.Store) {
  initialize() {
    !U && I.default.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !U || V
  }
  getLazyCacheStatus() {
    return U ? B : "no-cache"
  }
  get lastWriteTime() {
    return G
  }
  canWriteCaches(e) {
    return (0, O.isAuthenticated)() ? P ? (j.log("Not writing cache because caches cleared"), !1) : !!e || !!F || (j.log("Not writing cache because never connected"), !1) : (j.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let s = (0, L.callOnce)(t);
    if ("initializing" !== B) {
      (0, b.default)("cache:lazy_cache_not_initializing"), s(), setTimeout(() => {
        var e, t;
        return null === (t = I.default.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = R.default.getId(),
        n = N.default.carefullyOpenDatabase(t),
        [a, l, i] = await x.default.loadMiniCache.measureAsync(() => Q(n, t, e));
      a ? (s(), await z(n, t, l, i)) : (s(), await (Z(() => c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      j.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, b.default)("cache:exception"), s(), c.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
i = "CacheStore", (l = "displayName") in(a = K) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, new K(c.default, U ? {
  CONNECTION_OPEN: function() {
    return H = !0, F = !0, !1
  },
  LOGOUT: k,
  CONNECTION_CLOSED: function() {
    return H = !1, F = !0, !1
  },
  CACHE_LOADED: function() {
    V = !0
  },
  CACHE_LOADED_LAZY: function() {
    V = !0, B = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    B = "no-cache"
  },
  CLEAR_CACHES: k,
  WRITE_CACHES: function() {
    j.verbose("Writing cache now"), G = Date.now(), V = !0, d.Storage.remove(D.CACHE_STORE_KEY), d.Storage.remove(D.CACHE_STORE_CHANNELS_LAZY_KEY), d.Storage.remove(D.CACHE_STORE_LAZY_KEY)
  }
} : {})