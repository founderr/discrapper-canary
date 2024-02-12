"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return j
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
  _ = n("353026"),
  h = n("860255"),
  C = n("794897"),
  I = n("723939"),
  T = n("605250"),
  S = n("619443"),
  p = n("410912"),
  m = n("271938"),
  A = n("42203"),
  g = n("305961"),
  N = n("18494"),
  R = n("162771"),
  O = n("697218"),
  L = n("287850"),
  v = n("831588"),
  M = n("718517"),
  P = n("773336"),
  D = n("969388"),
  y = n("288206"),
  x = n("1544"),
  b = n("619317"),
  U = n("49111");
let G = new T.default("CacheStore"),
  j = !1,
  w = "stable-28",
  k = !1,
  F = "initializing",
  B = 15 * M.default.Millis.MINUTE,
  H = 0,
  V = !1,
  Y = !1,
  W = !1;

function K(e) {
  G.log("Clearing cache store"), H = Date.now(), y.default.clear(), i.default.remove(U.CACHE_STORE_KEY), i.default.remove(U.CACHE_STORE_LAZY_KEY), i.default.remove(U.CACHE_STORE_CHANNELS_LAZY_KEY), I.default.replaceDisableAllDatabases("CacheStore (".concat(e, ")")), F = "no-cache"
}

function z() {
  if (!(0, v.isAuthenticated)()) {
    G.log("Not writing cache because not authenticated");
    return
  }
  if (k) {
    G.log("Not writing cache because caches cleared");
    return
  }
  if (!W) {
    G.log("Not writing cache because never connected");
    return
  }
  q()
}

function q() {
  G.verbose("Writing cache now"), H = Date.now();
  let e = Q(),
    t = {
      version: w,
      channels: Q(),
      guilds: function() {
        let e = g.default.getGuild(R.default.getGuildId());
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
  V = !0, i.default.set(U.CACHE_STORE_KEY, t), i.default.remove(U.CACHE_STORE_CHANNELS_LAZY_KEY),
    function() {
      let e = Date.now().toString(),
        t = {
          version: w,
          nonce: e,
          saveableChannels: C.default.toSnapshot()
        };
      G.verbose("Writing lazy cache (nonce: ".concat(e, ")")), r.default.dispatch({
        type: "WRITE_CACHES",
        nonce: e
      }), i.default.set(U.CACHE_STORE_LAZY_KEY, t), y.default.persist(e)
    }()
}

function Q() {
  let e = A.default.getChannel(N.default.getChannelId());
  return null != e ? [e] : []
}

function Z(e) {
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
  null != e.channels && (0, x.default)(e.channels), null != e.privateChannels && (0, x.default)(e.privateChannels), null != e.guildChannels && (0, x.deserializeChannelEntries)(e.guildChannels)
}
async function X(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return G.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await f.default.startupLoad(e, t, n, U.MAX_MESSAGES_PER_CHANNEL);
    G.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
async function J() {
  let e = performance.now(),
    t = await new Promise(e => i.default.asyncGet(U.CACHE_STORE_KEY, e));
  return (null == t ? void 0 : t.version) === w ? (Z(t), [performance.now() - e, t]) : (G.log("cache either did not exist, or contains an incompatible version (required: ".concat(w, ", loaded: ").concat(null == t ? void 0 : t.version, ").")), [performance.now() - e, null])
}
async function $(e, t, n) {
  var s, i, o, u, d, c;
  G.verbose("loading early cache");
  let f = S.default.getSocket();
  f.connect();
  let C = null !== (s = R.default.getGuildId()) && void 0 !== s ? s : null,
    I = null !== (i = N.default.getChannelId()) && void 0 !== i ? i : null,
    T = performance.now(),
    m = p.default.loadCachedMessages.measureAsyncWithoutNesting(() => X(e, C, I)),
    A = p.default.loadMiniCache.measureAsyncWithoutNesting(J),
    g = p.default.fetchInitialGuildCache.measureAsync(() => ee(e, f, n)),
    O = null != e && "private-channels" === n.page ? a.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.default.getAsync(e, null)) : Promise.resolve([]),
    L = null == e ? Promise.resolve({}) : a.default.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => _.default.getAll(e)),
    v = null == e ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: read_states", () => E.default.getAll(e)),
    [
      [M, P],
      [D, y], x, U, j, w
    ] = await Promise.all([A, m, g, O, L, v]),
    k = performance.now() - T;
  if (G.verbose("cache loaded in ".concat(k, "ms (legacy ").concat(M, "ms, channel_history ").concat(D, "ms)")), null == P || null == y) return null == P && null == y ? (0, b.default)("database:legacy_and_history_cache_null") : null == P ? (0, b.default)("database:legacy_cache_null") : (0, b.default)("database:history_cache_null"), G.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(y.members.map(e => [e.userId, e])),
      i = null != x.guild && null != x.channels,
      E = null !== (d = x.guild) && void 0 !== d ? d : null;
    return l.default.Emitter.batched(() => {
      a.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e, t;
        return r.default.dispatch({
          ...P,
          type: "CACHE_LOADED",
          guilds: null != E ? [...P.guilds, E] : P.guilds,
          channels: [...P.channels, ...U, ...null !== (e = x.channels) && void 0 !== e ? e : []],
          users: [...P.users, ...y.users],
          messages: null == y.channelId ? {} : {
            [y.channelId]: y.messages
          },
          guildMembers: null == y.guildId ? {} : {
            [y.guildId]: s
          },
          userSettings: j,
          readStates: (null != w ? w : []).length > 0 ? w : null !== (t = P.readStates) && void 0 !== t ? t : []
        })
      }), a.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => f.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), G.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(C, "\n          selected_channel: ").concat(I, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat("private-channels" === n.page ? U.length : "skipped", "\n            channel_history:\n              guild: ").concat(y.guildId, "\n              channel: ").concat(y.channelId, "\n              messages: ").concat(y.messages.length, "\n                members: ").concat(y.members.length, "\n                users: ").concat(y.users.length, "\n            initial_guild:\n              id: ").concat(null == E ? void 0 : E.id, "\n              channels: ").concat(null === (o = x.channels) || void 0 === o ? void 0 : o.length, "\n            user_settings: ").concat(Object.keys(j).length, "\n            read_states: ").concat(w.length, "\n          legacy:\n            guilds: ").concat(P.guilds.length, " (").concat(P.guilds.map(e => e.id).join(", "), ")\n            channels: ").concat(P.channels.length, " (").concat(P.channels.map(e => e.id).join(", "), ")\n            users: ").concat(P.users.length, "\n            read_states: ").concat(null === (u = P.readStates) || void 0 === u ? void 0 : u.length, "\n      )")), G.verbose("finished dispatching CACHE_LOADED"), [!0, i && null !== (c = null == E ? void 0 : E.id) && void 0 !== c ? c : null, U.length]
  }
}
async function ee(e, t, n) {
  let a = t.getIdentifyInitialGuildId();
  if (null == a && "guild-channels" === n.page && (a = n.guildId), null == e || null == a) return G.verbose("skipped loading initial guild (guild: ".concat(a, ", database: ").concat(e, ")")), Promise.resolve({
    guild: null,
    channels: null
  });
  let s = a,
    [l, i] = await Promise.all([(0, o.tryLoadAsync)(() => d.default.getOneAsync(e, s)), (0, o.tryLoadAsync)(() => h.default.getAsync(e, s))]);
  return {
    guild: l,
    channels: i
  }
}
async function et(e, t, n, s, l) {
  G.verbose("loading late lazy cache");
  let [f, E, _, C, I] = await p.default.fetchLazyCache.measureAsync(() => Promise.all([a.default.timeAsync("\uD83D\uDCBE", "storage: ".concat(U.CACHE_STORE_LAZY_KEY), () => i.default.asyncGetRaw(U.CACHE_STORE_LAZY_KEY)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => c.default.okAsync(e)) : Promise.resolve(!0)), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.default.getAsync(e)) : Promise.resolve([])), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => u.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  })), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.default.getAsync(e, null)) : Promise.resolve([]))])), T = await p.default.fetchStaleChannels.measureAsync(() => null != e && null != C && C.stale.length > 0 ? (0, o.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = C.stale, G.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => h.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), p.default.loadLazyCache.recordStart();
  let m = S.default.getSocket();
  en(() => {
    var a, i, o;
    let u = performance.now();
    if (!1 === E) {
      (0, b.default)("database:not_ok"), K("database: not ok"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == _ || null == C || null == T || null == I) {
      (0, b.default)("database:load_failed"), G.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != C, "\n          guild_channels: ").concat(null != T, "\n          private_channels: ").concat(null != I, "\n          guilds: ").concat(null != _, "\n        )")), K("database: load_failed"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == E && (_.length > 0 || I.length > 0 || C.all.length > 0)) {
      (0, b.default)("database:versionless"), K("database: versionless"), G.log("kv_cache was not ok (null version with values)"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (Y) {
      (0, b.default)("already_connected"), G.log("Skipping lazy cache; already connected."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == f) {
      G.log("Lazy cache was missing"), (0, b.default)("cache:lazy_cache_missing"), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    m.addAnalytics({
      hadCacheAtStartup: !0
    });
    let d = p.default.parseLazyCache.measure(() => JSON.parse(f));
    if (d.version !== w) {
      G.log("Saved cached has mismatched version. Expected ".concat(w, ", got ").concat(d.version)), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let c = d.nonce,
      h = y.default.getSavedNonce();
    if ("" !== h && c !== h) {
      (0, b.default)("nonce:lazy_cache"), G.log("ClientStateStore has mismatched nonces with cache."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    let S = {
      ...d,
      guilds: _,
      privateChannels: I,
      guildChannels: T,
      basicGuildChannels: C.channels,
      initialGuildId: n
    };
    p.default.deserializeCache.measure(() => Z(S)), p.default.dispatchLazyCache.measure(() => r.default.dispatch({
      type: "CACHE_LOADED_LAZY",
      ...S
    })), G.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - u, "ms)")), m.addAnalytics({
      usedCacheAtStartup: !0
    });
    let A = T.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      g = T.length,
      N = C.all.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      R = C.channels.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      O = N - R,
      L = 0 === C.stale.length ? "" : " \xb7 ".concat(C.stale.join(", "));
    G.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          nonce: ").concat(c, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(E, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(_.length, "\n            private_channels: ").concat("private-channels" === s.page ? "skipped" : I.length, "\n            basic_channels:\n              total: ").concat(N, " (").concat(C.channels.length, " guilds)\n              stale: ").concat(O, " (").concat(C.stale.length, " guilds").concat(L, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(A, " (").concat(T.length, " guilds)\n          legacy:\n              saveable_channels: ").concat(null === (i = S.saveableChannels) || void 0 === i ? void 0 : null === (a = i.channels) || void 0 === a ? void 0 : a.length, "\n              users: ").concat(null === (o = S.users) || void 0 === o ? void 0 : o.length, "\n      )")), p.default.setCacheInfo({
      guilds: _.length,
      privateChannels: l + I.length,
      basicChannels: N,
      basicChannelsStale: O,
      fullChannels: A,
      fullChannelGuilds: g
    })
  })
}

function en(e) {
  let t = S.default.getSocket(),
    n = !1;
  l.default.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        G.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, p.default.loadLazyCache.recordEnd(), G.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        G.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      var a;
      G.warn("Lazy cache has encountered error", e), K("error: resumeFluxAndSocket"), null === (a = S.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "LazyCache", {
        sentry: !0,
        immediate: !0
      })
    }
  }), !n && p.default.loadLazyCache.recordEnd()
}
class ea extends l.default.Store {
  initialize() {
    if (!j) {
      let e = S.default.getSocket();
      e.dispatcher.unpauseDispatchQueue()
    }
  }
  hasCache() {
    return !j || V
  }
  getLazyCacheStatus() {
    return j ? F : "no-cache"
  }
  async loadCacheAsync(e, t) {
    let n = (0, D.callOnce)(t);
    if ("initializing" !== F) {
      (0, b.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = S.default.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = m.default.getId(),
        a = I.default.carefullyOpenDatabase(t),
        [s, l, i] = await $(a, t, e);
      s ? (n(), await et(a, t, l, e, i)) : (n(), await (en(() => r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      var a;
      G.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, b.default)("cache:exception"), K("loadCacheAsync"), n(), null === (a = S.default.getSocket()) || void 0 === a || a.resetSocketOnError(e, "loadCacheAsync", {
        sentry: !0,
        immediate: !0
      })
    }
  }
  constructor(...e) {
    super(...e), this.persist = q
  }
}
ea.displayName = "CacheStore", new ea(r.default, j ? {
  CONNECTION_OPEN: function() {
    return Y = !0, W = !0, !1
  },
  LOGOUT: function() {
    K("action: LOGOUT")
  },
  CONNECTION_CLOSED: function() {
    return Y = !1, W = !0, G.verbose("Writing cache on connection closed"), z(), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = (0, P.isAndroid)() ? U.AppStates.BACKGROUND : U.AppStates.INACTIVE;
    return n === t && Y && z(), !1
  },
  CACHE_LOADED: function() {
    V = !0
  },
  CACHE_LOADED_LAZY: function() {
    V = !0, F = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    F = "no-cache"
  },
  CLEAR_CACHES: function() {
    K("action: CLEAR_CACHES"), k = !0
  },
  WINDOW_FOCUS: function(e) {
    let {
      focused: t
    } = e;
    return !t && (Date.now() - H > B ? (G.verbose("Writing cache from window unfocus"), z()) : G.verbose("Not writing cache from window unfocus")), !1
  }
} : {})