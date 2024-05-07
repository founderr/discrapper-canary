"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return U
  }
}), n("47120"), n("724458");
var a, s, l, i, r = n("956067");
n("724522");
var o = n("149765"),
  u = n("442837"),
  d = n("433517"),
  c = n("570140"),
  f = n("86670"),
  E = n("261375"),
  h = n("17567"),
  _ = n("795513"),
  C = n("685736"),
  m = n("266750"),
  S = n("768910"),
  p = n("632093"),
  I = n("347994"),
  g = n("591526"),
  T = n("261875"),
  A = n("710845"),
  N = n("38618"),
  v = n("218543"),
  R = n("314897"),
  L = n("944486"),
  O = n("914010"),
  M = n("449934"),
  P = n("576376"),
  y = n("38217"),
  x = n("864631"),
  D = n("981631");
let b = new A.default("CacheStore"),
  U = !1,
  j = !1,
  G = "initializing",
  w = 0,
  k = !1,
  F = !1,
  B = !1;

function H(e) {
  b.log("Clearing cache store"), w = Date.now(), d.Storage.remove(D.CACHE_STORE_KEY), d.Storage.remove(D.CACHE_STORE_LAZY_KEY), d.Storage.remove(D.CACHE_STORE_CHANNELS_LAZY_KEY), G = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (j = !0)
}
async function V(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return b.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await C.default.startupLoad(e, t, n, D.MAX_MESSAGES_PER_CHANNEL);
    b.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let l = {
      guildId: t,
      channelId: n,
      users: s.users,
      members: s.members,
      messages: s.messages
    };
    return [performance.now() - a, l]
  }
}
async function Y(e, t, n) {
  var a, s, l;
  b.verbose("loading early cache");
  let i = N.default.getSocket();
  i.connect();
  let o = null !== (a = O.default.getGuildId()) && void 0 !== a ? a : null,
    d = null !== (s = L.default.getChannelId()) && void 0 !== s ? s : null,
    f = performance.now(),
    E = v.default.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, o, d)),
    h = v.default.fetchGuildCache.measureAsync(() => K(e, n)),
    _ = v.default.fetchGuildCache.measureAsync(() => z(e, n)),
    C = null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.default.getAsync(e, null)) : Promise.resolve([]),
    m = null == e ? Promise.resolve({}) : r.default.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => I.default.getAll(e)),
    T = null == e ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: read_states", () => S.default.getAll(e)),
    A = null == e ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => p.default.getAll(e)),
    [
      [R, M], P, y, D, U, j, G
    ] = await Promise.all([E, h, _, C, m, T, A]),
    w = performance.now() - f;
  if (b.verbose("cache loaded in ".concat(w, "ms (channel_history ").concat(R, "ms)")), null == M) return (0, x.default)("database:history_cache_null"), b.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let a = Object.fromEntries(M.members.map(e => [e.userId, e])),
      s = null != y.guildId && null != y.channels,
      f = y.guildId;
    return u.default.Emitter.batched(() => {
      r.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return c.default.dispatch({
          type: "CACHE_LOADED",
          guilds: P,
          privateChannels: D,
          initialGuildChannels: null !== (e = y.channels) && void 0 !== e ? e : [],
          users: [...M.users],
          messages: null == M.channelId ? {} : {
            [M.channelId]: M.messages
          },
          guildMembers: null == M.guildId ? {} : {
            [M.guildId]: a
          },
          userSettings: U,
          userGuildSettings: G,
          readStates: j
        })
      }), r.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => i.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), b.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(o, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(D.length, "\n            channel_history:\n              guild: ").concat(M.guildId, "\n              channel: ").concat(M.channelId, "\n              messages: ").concat(M.messages.length, "\n                members: ").concat(M.members.length, "\n                users: ").concat(M.users.length, "\n            initial_guild:\n              id: ").concat(f, "\n              channels: ").concat(null === (l = y.channels) || void 0 === l ? void 0 : l.length, "\n            user_settings: ").concat(Object.keys(U).length, "\n            read_states: ").concat(j.length, "\n            user_guild_settings: ").concat(G.length, "\n      )")), b.verbose("finished dispatching CACHE_LOADED"), [!0, s && null != f ? f : null, D.length]
  }
}
let W = !1;
async function K(e, t) {
  var n, a;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      W = !0;
      break;
    case "other":
      "@me" === t.guildId && (W = !0)
  }
  if (W) return null !== (n = await (0, f.tryLoadAsync)(() => r.default.timeAsync("\uD83D\uDCBE", "cache: guilds", () => h.default.getAsync(e)))) && void 0 !== n ? n : [];
  let s = null !== (a = (await m.default.getCommittedVersions()).initial_guild_id) && void 0 !== a ? a : t.guildId;
  if (null == s || "@me" === s) return [];
  let l = await (0, f.tryLoadAsync)(() => h.default.getOneAsync(e, s));
  return null != l ? [l] : []
}
async function z(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await m.default.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return b.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let a = n;
  return {
    channels: await (0, f.tryLoadAsync)(() => g.default.getAsync(e, a)),
    guildId: n
  }
}
async function q(e, t, n, a) {
  b.verbose("loading late lazy cache");
  let [s, l, i] = await v.default.fetchLazyCache.measureAsync(() => Promise.all([(0, f.tryLoadAsync)(() => null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => _.default.okAsync(e)) : Promise.resolve(!0)), (0, f.tryLoadAsync)(() => null == e || W ? Promise.resolve([]) : r.default.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => h.default.getAsync(e))), (0, f.tryLoadAsync)(() => null != e ? r.default.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => E.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), u = await v.default.fetchStaleChannels.measureAsync(() => null != e && null != i && i.stale.length > 0 ? (0, f.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = i.stale, b.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => g.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), v.default.loadLazyCache.recordStart();
  let d = N.default.getSocket();
  Q(() => {
    let r = performance.now();
    if (!1 === s) {
      (0, x.default)("database:not_ok"), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == l || null == i || null == u) {
      (0, x.default)("database:load_failed"), b.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != i, "\n          guild_channels: ").concat(null != u, "\n          guilds: ").concat(null != l, "\n        )")), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == s && (l.length > 0 || i.all.length > 0)) {
      (0, x.default)("database:versionless"), b.log("kv_cache was not ok (null version with values)"), c.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (F) {
      (0, x.default)("already_connected"), b.log("Skipping lazy cache; already connected."), c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    d.addAnalytics({
      hadCacheAtStartup: !0
    });
    let f = {
      type: "CACHE_LOADED_LAZY",
      guilds: l,
      guildChannels: u,
      basicGuildChannels: i.channels,
      initialGuildId: n
    };
    v.default.deserializeCache.measure(() => (function(e) {
      if (null != e.guilds) {
        for (let {
            roles: t
          }
          of e.guilds)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              n.permissions = o.deserialize(n.permissions)
            }
      }
      null != e.channels && (0, y.default)(e.channels), null != e.privateChannels && (0, y.default)(e.privateChannels), null != e.guildChannels && (0, y.deserializeChannelEntries)(e.guildChannels)
    })(f)), v.default.dispatchLazyCache.measure(() => c.default.dispatch(f)), b.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - r, "ms)")), d.addAnalytics({
      usedCacheAtStartup: !0
    });
    let E = u.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      h = u.length,
      _ = i.all.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      C = i.channels.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      m = _ - C,
      S = 0 === i.stale.length ? "" : " \xb7 ".concat(i.stale.join(", "));
    b.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(s, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(l.length, "\n            basic_channels:\n              total: ").concat(_, " (").concat(i.channels.length, " guilds)\n              stale: ").concat(m, " (").concat(i.stale.length, " guilds").concat(S, ")\n              unstale: ").concat(C, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(E, " (").concat(u.length, " guilds)\n      )")), v.default.setCacheInfo({
      guilds: l.length,
      privateChannels: a,
      basicChannels: _,
      basicChannelsStale: m,
      fullChannels: E,
      fullChannelGuilds: h
    })
  })
}

function Q(e) {
  let t = N.default.getSocket(),
    n = !1;
  u.default.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        b.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, v.default.loadLazyCache.recordEnd(), b.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        b.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      b.warn("Lazy cache has encountered error", e), c.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !n && v.default.loadLazyCache.recordEnd()
}
class Z extends(a = u.default.Store) {
  initialize() {
    !U && N.default.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !U || k
  }
  getLazyCacheStatus() {
    return U ? G : "no-cache"
  }
  get lastWriteTime() {
    return w
  }
  canWriteCaches(e) {
    return (0, M.isAuthenticated)() ? j ? (b.log("Not writing cache because caches cleared"), !1) : !!e || !!B || (b.log("Not writing cache because never connected"), !1) : (b.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.callOnce)(t);
    if ("initializing" !== G) {
      (0, x.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = N.default.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = R.default.getId(),
        a = T.default.carefullyOpenDatabase(t),
        [s, l, i] = await v.default.loadMiniCache.measureAsync(() => Y(a, t, e));
      s ? (n(), await q(a, t, l, i)) : (n(), await (Q(() => c.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      b.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, x.default)("cache:exception"), n(), c.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
i = "CacheStore", (l = "displayName") in(s = Z) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, new Z(c.default, U ? {
  CONNECTION_OPEN: function() {
    return F = !0, B = !0, !1
  },
  LOGOUT: H,
  CONNECTION_CLOSED: function() {
    return F = !1, B = !0, !1
  },
  CACHE_LOADED: function() {
    k = !0
  },
  CACHE_LOADED_LAZY: function() {
    k = !0, G = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    G = "no-cache"
  },
  CLEAR_CACHES: H,
  WRITE_CACHES: function() {
    b.verbose("Writing cache now"), w = Date.now(), k = !0, d.Storage.remove(D.CACHE_STORE_KEY), d.Storage.remove(D.CACHE_STORE_CHANNELS_LAZY_KEY), d.Storage.remove(D.CACHE_STORE_LAZY_KEY)
  }
} : {})