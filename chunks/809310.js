"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return w
  }
}), n("222007"), n("808653");
var a = n("102053");
n("576863");
var s = n("316693"),
  l = n("446674"),
  i = n("95410"),
  r = n("913144"),
  o = n("595525"),
  u = n("759370"),
  d = n("29328"),
  c = n("849365"),
  f = n("219788"),
  E = n("131552"),
  h = n("994746"),
  _ = n("353026"),
  C = n("860255"),
  I = n("794897"),
  S = n("723939"),
  m = n("605250"),
  p = n("619443"),
  T = n("410912"),
  g = n("271938"),
  A = n("42203"),
  N = n("305961"),
  R = n("18494"),
  v = n("162771"),
  O = n("697218"),
  L = n("287850"),
  M = n("831588"),
  P = n("718517"),
  D = n("773336"),
  y = n("969388"),
  x = n("288206"),
  b = n("1544"),
  U = n("619317"),
  G = n("49111");
let j = new m.default("CacheStore"),
  w = !1,
  k = "stable-28",
  F = !1,
  B = "initializing",
  H = 15 * P.default.Millis.MINUTE,
  V = 0,
  Y = !1,
  W = !1,
  K = !1;

function z(e) {
  j.log("Clearing cache store"), V = Date.now(), x.default.clear(), i.default.remove(G.CACHE_STORE_KEY), i.default.remove(G.CACHE_STORE_LAZY_KEY), i.default.remove(G.CACHE_STORE_CHANNELS_LAZY_KEY), S.default.replaceDisableAllDatabases("CacheStore (".concat(e, ")")), B = "no-cache"
}

function q() {
  if (!(0, M.isAuthenticated)()) {
    j.log("Not writing cache because not authenticated");
    return
  }
  if (F) {
    j.log("Not writing cache because caches cleared");
    return
  }
  if (!K) {
    j.log("Not writing cache because never connected");
    return
  }
  Q()
}

function Q() {
  j.verbose("Writing cache now"), V = Date.now();
  let e = Z(),
    t = {
      version: k,
      channels: Z(),
      guilds: function() {
        let e = N.default.getGuild(v.default.getGuildId());
        return null != e ? [e] : []
      }(),
      users: function(e) {
        let t = new Set;
        e.forEach(e => {
          e.isPrivate() && e.recipients.forEach(e => {
            let n = O.default.getUser(e);
            null != n && t.add(n)
          })
        }), L.default.getPrivateChannelIds().forEach(e => {
          let n = A.default.getChannel(e);
          (null == n ? void 0 : n.isPrivate()) && n.recipients.forEach(e => {
            let n = O.default.getUser(e);
            null != n && t.add(n)
          })
        });
        let n = O.default.getCurrentUser();
        return null != n && t.add(n), Array.from(t)
      }(e)
    };
  Y = !0, i.default.set(G.CACHE_STORE_KEY, t), i.default.remove(G.CACHE_STORE_CHANNELS_LAZY_KEY),
    function() {
      let e = Date.now().toString(),
        t = {
          version: k,
          nonce: e,
          saveableChannels: I.default.toSnapshot()
        };
      j.verbose("Writing lazy cache (nonce: ".concat(e, ")")), r.default.dispatch({
        type: "WRITE_CACHES",
        nonce: e
      }), i.default.set(G.CACHE_STORE_LAZY_KEY, t), x.default.persist(e)
    }()
}

function Z() {
  let e = A.default.getChannel(R.default.getChannelId());
  return null != e ? [e] : []
}

function X(e) {
  if (null != e.guilds) {
    for (let {
        roles: t
      }
      of e.guilds)
      if (null != t)
        for (let e in t) {
          let n = t[e];
          n.permissions = s.default.deserialize(n.permissions)
        }
  }
  null != e.channels && (0, b.default)(e.channels), null != e.privateChannels && (0, b.default)(e.privateChannels), null != e.guildChannels && (0, b.deserializeChannelEntries)(e.guildChannels)
}
async function J(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return j.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await f.default.startupLoad(e, t, n, G.MAX_MESSAGES_PER_CHANNEL);
    j.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
async function $() {
  let e = performance.now(),
    t = await new Promise(e => i.default.asyncGet(G.CACHE_STORE_KEY, e));
  return (null == t ? void 0 : t.version) === k ? (X(t), [performance.now() - e, t]) : (j.log("cache either did not exist, or contains an incompatible version (required: ".concat(k, ", loaded: ").concat(null == t ? void 0 : t.version, ").")), [performance.now() - e, null])
}
async function ee(e, t, n) {
  var s, i, o, u, d, c;
  j.verbose("loading early cache");
  let f = p.default.getSocket();
  f.connect();
  let I = null !== (s = v.default.getGuildId()) && void 0 !== s ? s : null,
    S = null !== (i = R.default.getChannelId()) && void 0 !== i ? i : null,
    m = performance.now(),
    g = T.default.loadCachedMessages.measureAsyncWithoutNesting(() => J(e, I, S)),
    A = T.default.loadMiniCache.measureAsyncWithoutNesting($),
    N = T.default.fetchInitialGuildCache.measureAsync(() => et(e, f, n)),
    O = null != e && "private-channels" === n.page ? a.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => C.default.getAsync(e, null)) : Promise.resolve([]),
    L = null == e ? Promise.resolve({}) : a.default.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => _.default.getAll(e)),
    M = null == e ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: read_states", () => E.default.getAll(e)),
    P = null == e ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => h.default.getAll(e)),
    [
      [D, y],
      [x, b], G, w, k, F, B
    ] = await Promise.all([A, g, N, O, L, M, P]),
    H = performance.now() - m;
  if (j.verbose("cache loaded in ".concat(H, "ms (legacy ").concat(D, "ms, channel_history ").concat(x, "ms)")), null == y || null == b) return null == y && null == b ? (0, U.default)("database:legacy_and_history_cache_null") : null == y ? (0, U.default)("database:legacy_cache_null") : (0, U.default)("database:history_cache_null"), j.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(b.members.map(e => [e.userId, e])),
      i = null != G.guild && null != G.channels,
      E = null !== (d = G.guild) && void 0 !== d ? d : null;
    return l.default.Emitter.batched(() => {
      a.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e, t;
        return r.default.dispatch({
          ...y,
          type: "CACHE_LOADED",
          guilds: null != E ? [...y.guilds, E] : y.guilds,
          channels: [...y.channels, ...w, ...null !== (e = G.channels) && void 0 !== e ? e : []],
          users: [...y.users, ...b.users],
          messages: null == b.channelId ? {} : {
            [b.channelId]: b.messages
          },
          guildMembers: null == b.guildId ? {} : {
            [b.guildId]: s
          },
          userSettings: k,
          userGuildSettings: B,
          readStates: (null != F ? F : []).length > 0 ? F : null !== (t = y.readStates) && void 0 !== t ? t : []
        })
      }), a.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => f.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), j.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(I, "\n          selected_channel: ").concat(S, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat("private-channels" === n.page ? w.length : "skipped", "\n            channel_history:\n              guild: ").concat(b.guildId, "\n              channel: ").concat(b.channelId, "\n              messages: ").concat(b.messages.length, "\n                members: ").concat(b.members.length, "\n                users: ").concat(b.users.length, "\n            initial_guild:\n              id: ").concat(null == E ? void 0 : E.id, "\n              channels: ").concat(null === (o = G.channels) || void 0 === o ? void 0 : o.length, "\n            user_settings: ").concat(Object.keys(k).length, "\n            read_states: ").concat(F.length, "\n            user_guild_settings: ").concat(B.length, "\n          legacy:\n            guilds: ").concat(y.guilds.length, " (").concat(y.guilds.map(e => e.id).join(", "), ")\n            channels: ").concat(y.channels.length, " (").concat(y.channels.map(e => e.id).join(", "), ")\n            users: ").concat(y.users.length, "\n            read_states: ").concat(null === (u = y.readStates) || void 0 === u ? void 0 : u.length, "\n      )")), j.verbose("finished dispatching CACHE_LOADED"), [!0, i && null !== (c = null == E ? void 0 : E.id) && void 0 !== c ? c : null, w.length]
  }
}
async function et(e, t, n) {
  let a = t.getIdentifyInitialGuildId();
  if (null == a && "guild-channels" === n.page && (a = n.guildId), null == e || null == a) return j.verbose("skipped loading initial guild (guild: ".concat(a, ", database: ").concat(e, ")")), Promise.resolve({
    guild: null,
    channels: null
  });
  let s = a,
    [l, i] = await Promise.all([(0, o.tryLoadAsync)(() => d.default.getOneAsync(e, s)), (0, o.tryLoadAsync)(() => C.default.getAsync(e, s))]);
  return {
    guild: l,
    channels: i
  }
}
async function en(e, t, n, s, l) {
  j.verbose("loading late lazy cache");
  let [f, E, h, _, I] = await T.default.fetchLazyCache.measureAsync(() => Promise.all([a.default.timeAsync("\uD83D\uDCBE", "storage: ".concat(G.CACHE_STORE_LAZY_KEY), () => i.default.asyncGetRaw(G.CACHE_STORE_LAZY_KEY)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => c.default.okAsync(e)) : Promise.resolve(!0)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.default.getAsync(e)) : Promise.resolve([])), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => u.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  })), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => C.default.getAsync(e, null)) : Promise.resolve([]))])), S = await T.default.fetchStaleChannels.measureAsync(() => null != e && null != _ && _.stale.length > 0 ? (0, o.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = _.stale, j.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => C.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), T.default.loadLazyCache.recordStart();
  let m = p.default.getSocket();
  ea(() => {
    var a, i, o;
    let u = performance.now();
    if (!1 === E) {
      (0, U.default)("database:not_ok"), z("database: not ok"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == h || null == _ || null == S || null == I) {
      (0, U.default)("database:load_failed"), j.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != _, "\n          guild_channels: ").concat(null != S, "\n          private_channels: ").concat(null != I, "\n          guilds: ").concat(null != h, "\n        )")), z("database: load_failed"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == E && (h.length > 0 || I.length > 0 || _.all.length > 0)) {
      (0, U.default)("database:versionless"), z("database: versionless"), j.log("kv_cache was not ok (null version with values)"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (W) {
      (0, U.default)("already_connected"), j.log("Skipping lazy cache; already connected."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == f) {
      j.log("Lazy cache was missing"), (0, U.default)("cache:lazy_cache_missing"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    m.addAnalytics({
      hadCacheAtStartup: !0
    });
    let d = T.default.parseLazyCache.measure(() => JSON.parse(f));
    if (d.version !== k) {
      j.log("Saved cached has mismatched version. Expected ".concat(k, ", got ").concat(d.version)), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let c = d.nonce,
      C = x.default.getSavedNonce();
    if ("" !== C && c !== C) {
      (0, U.default)("nonce:lazy_cache"), j.log("ClientStateStore has mismatched nonces with cache."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let p = {
      ...d,
      guilds: h,
      privateChannels: I,
      guildChannels: S,
      basicGuildChannels: _.channels,
      initialGuildId: n
    };
    T.default.deserializeCache.measure(() => X(p)), T.default.dispatchLazyCache.measure(() => r.default.dispatch({
      type: "CACHE_LOADED_LAZY",
      ...p
    })), j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - u, "ms)")), m.addAnalytics({
      usedCacheAtStartup: !0
    });
    let g = S.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      A = S.length,
      N = _.all.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      R = _.channels.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      v = N - R,
      O = 0 === _.stale.length ? "" : " \xb7 ".concat(_.stale.join(", "));
    j.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          nonce: ").concat(c, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(E, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(h.length, "\n            private_channels: ").concat("private-channels" === s.page ? "skipped" : I.length, "\n            basic_channels:\n              total: ").concat(N, " (").concat(_.channels.length, " guilds)\n              stale: ").concat(v, " (").concat(_.stale.length, " guilds").concat(O, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(g, " (").concat(S.length, " guilds)\n          legacy:\n              saveable_channels: ").concat(null === (i = p.saveableChannels) || void 0 === i ? void 0 : null === (a = i.channels) || void 0 === a ? void 0 : a.length, "\n              users: ").concat(null === (o = p.users) || void 0 === o ? void 0 : o.length, "\n      )")), T.default.setCacheInfo({
      guilds: h.length,
      privateChannels: l + I.length,
      basicChannels: N,
      basicChannelsStale: v,
      fullChannels: g,
      fullChannelGuilds: A
    })
  })
}

function ea(e) {
  let t = p.default.getSocket(),
    n = !1;
  l.default.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, T.default.loadLazyCache.recordEnd(), j.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      var a;
      j.warn("Lazy cache has encountered error", e), z("error: resumeFluxAndSocket"), null === (a = p.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "LazyCache", {
        sentry: !0,
        immediate: !0
      })
    }
  }), !n && T.default.loadLazyCache.recordEnd()
}
class es extends l.default.Store {
  initialize() {
    if (!w) {
      let e = p.default.getSocket();
      e.dispatcher.unpauseDispatchQueue()
    }
  }
  hasCache() {
    return !w || Y
  }
  getLazyCacheStatus() {
    return w ? B : "no-cache"
  }
  async loadCacheAsync(e, t) {
    let n = (0, y.callOnce)(t);
    if ("initializing" !== B) {
      (0, U.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = p.default.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = g.default.getId(),
        a = S.default.carefullyOpenDatabase(t),
        [s, l, i] = await ee(a, t, e);
      s ? (n(), await en(a, t, l, e, i)) : (n(), await (ea(() => r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      var a;
      j.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, U.default)("cache:exception"), z("loadCacheAsync"), n(), null === (a = p.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "loadCacheAsync", {
        sentry: !0,
        immediate: !0
      })
    }
  }
  constructor(...e) {
    super(...e), this.persist = Q
  }
}
es.displayName = "CacheStore", new es(r.default, w ? {
  CONNECTION_OPEN: function() {
    return W = !0, K = !0, !1
  },
  LOGOUT: function() {
    z("action: LOGOUT")
  },
  CONNECTION_CLOSED: function() {
    return W = !1, K = !0, j.verbose("Writing cache on connection closed"), q(), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = (0, D.isAndroid)() ? G.AppStates.BACKGROUND : G.AppStates.INACTIVE;
    return n === t && W && q(), !1
  },
  CACHE_LOADED: function() {
    Y = !0
  },
  CACHE_LOADED_LAZY: function() {
    Y = !0, B = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    B = "no-cache"
  },
  CLEAR_CACHES: function() {
    z("action: CLEAR_CACHES"), F = !0
  },
  WINDOW_FOCUS: function(e) {
    let {
      focused: t
    } = e;
    return !t && (Date.now() - V > H ? (j.verbose("Writing cache from window unfocus"), q()) : j.verbose("Not writing cache from window unfocus")), !1
  }
} : {})