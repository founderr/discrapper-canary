n.d(t, {
  q: function() {
    return P
  }
}), n(47120), n(724458);
var s, a, i, l, r = n(956067);
n(724522);
var o = n(149765),
  c = n(442837),
  d = n(433517),
  u = n(570140),
  E = n(86670),
  _ = n(261375),
  h = n(17567),
  m = n(795513),
  T = n(685736),
  C = n(266750),
  g = n(768910),
  p = n(632093),
  N = n(347994),
  I = n(591526),
  A = n(261875),
  f = n(710845),
  x = n(38618),
  S = n(218543),
  v = n(314897),
  R = n(944486),
  M = n(914010),
  O = n(449934),
  L = n(576376),
  Z = n(38217),
  j = n(864631),
  y = n(981631);
let b = new f.Z("CacheStore"),
  P = !1,
  D = !1,
  U = "initializing",
  G = 0,
  B = !1,
  V = !1,
  H = !1;

function w(e) {
  b.log("Clearing cache store"), G = Date.now(), d.K.remove(y.FsG), d.K.remove(y.ihW), d.K.remove(y.O42), U = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (D = !0)
}
async function k(e, t, n) {
  let s = performance.now();
  if (null == e || null == n) return b.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - s, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let a = await T.ZP.startupLoad(e, t, n, y.AQB);
    b.verbose("loaded ".concat(a.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let i = {
      guildId: t,
      channelId: n,
      users: a.users,
      members: a.members,
      messages: a.messages
    };
    return [performance.now() - s, i]
  }
}
async function F(e, t, n) {
  var s, a, i;
  b.verbose("loading early cache");
  let l = x.Z.getSocket();
  l.connect();
  let o = null !== (s = M.Z.getGuildId()) && void 0 !== s ? s : null,
    d = null !== (a = R.Z.getChannelId()) && void 0 !== a ? a : null,
    E = performance.now(),
    _ = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => k(e, o, d)),
    h = S.Z.fetchGuildCache.measureAsync(() => Q(e, n)),
    m = S.Z.fetchGuildCache.measureAsync(() => z(e, n)),
    T = null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => I.Z.getAsync(e, null)) : Promise.resolve([]),
    C = null == e ? Promise.resolve({}) : r.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => N.Z.getAll(e)),
    A = null == e ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.Z.getAll(e)),
    f = null == e ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => p.Z.getAll(e)),
    [
      [v, O], L, Z, y, P, D, U
    ] = await Promise.all([_, h, m, T, C, A, f]),
    G = performance.now() - E;
  if (b.verbose("cache loaded in ".concat(G, "ms (channel_history ").concat(v, "ms)")), null == O) return (0, j.Z)("database:history_cache_null"), b.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(O.members.map(e => [e.userId, e])),
      a = null != Z.guildId && null != Z.channels,
      E = Z.guildId;
    return c.ZP.Emitter.batched(() => {
      r.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return u.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: L,
          privateChannels: y,
          initialGuildChannels: null !== (e = Z.channels) && void 0 !== e ? e : [],
          users: [...O.users],
          messages: null == O.channelId ? {} : {
            [O.channelId]: O.messages
          },
          guildMembers: null == O.guildId ? {} : {
            [O.guildId]: s
          },
          userSettings: P,
          userGuildSettings: U,
          readStates: D
        })
      }), r.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => l.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), b.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(o, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(y.length, "\n            channel_history:\n              guild: ").concat(O.guildId, "\n              channel: ").concat(O.channelId, "\n              messages: ").concat(O.messages.length, "\n                members: ").concat(O.members.length, "\n                users: ").concat(O.users.length, "\n            initial_guild:\n              id: ").concat(E, "\n              channels: ").concat(null === (i = Z.channels) || void 0 === i ? void 0 : i.length, "\n            user_settings: ").concat(Object.keys(P).length, "\n            read_states: ").concat(D.length, "\n            user_guild_settings: ").concat(U.length, "\n      )")), b.verbose("finished dispatching CACHE_LOADED"), [!0, a && null != E ? E : null, y.length]
  }
}
let Y = !1;
async function Q(e, t) {
  var n, s;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      Y = !0;
      break;
    case "other":
      "@me" === t.guildId && (Y = !0)
  }
  if (Y) return null !== (n = await (0, E.dI)(() => r.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => h.Z.getAsync(e)))) && void 0 !== n ? n : [];
  let a = null !== (s = (await C.Z.getCommittedVersions()).initial_guild_id) && void 0 !== s ? s : t.guildId;
  if (null == a || "@me" === a) return [];
  let i = await (0, E.dI)(() => h.Z.getOneAsync(e, a));
  return null != i ? [i] : []
}
async function z(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await C.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return b.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = n;
  return {
    channels: await (0, E.dI)(() => I.Z.getAsync(e, s)),
    guildId: n
  }
}
async function q(e, t, n, s) {
  b.verbose("loading late lazy cache");
  let [a, i, l] = await S.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, E.dI)(() => null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => m.Z.okAsync(e)) : Promise.resolve(!0)), (0, E.dI)(() => null == e || Y ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => h.Z.getAsync(e))), (0, E.dI)(() => null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => _.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), c = await S.Z.fetchStaleChannels.measureAsync(() => null != e && null != l && l.stale.length > 0 ? (0, E.dI)(() => {
    var t, n;
    return t = e, n = l.stale, b.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => I.Z.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), S.Z.loadLazyCache.recordStart();
  let d = x.Z.getSocket();
  W(() => {
    let r = performance.now();
    if (!1 === a) {
      (0, j.Z)("database:not_ok"), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i || null == l || null == c) {
      (0, j.Z)("database:load_failed"), b.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != l, "\n          guild_channels: ").concat(null != c, "\n          guilds: ").concat(null != i, "\n        )")), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (i.length > 0 || l.all.length > 0)) {
      (0, j.Z)("database:versionless"), b.log("kv_cache was not ok (null version with values)"), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (V) {
      (0, j.Z)("already_connected"), b.log("Skipping lazy cache; already connected."), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    d.addAnalytics({
      hadCacheAtStartup: !0
    });
    let E = {
      type: "CACHE_LOADED_LAZY",
      guilds: i,
      guildChannels: c,
      basicGuildChannels: l.channels,
      initialGuildId: n
    };
    S.Z.deserializeCache.measure(() => (function(e) {
      if (null != e.guilds) {
        for (let {
            roles: t
          }
          of e.guilds)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              n.permissions = o.vB(n.permissions)
            }
      }
      null != e.channels && (0, Z.ZP)(e.channels), null != e.privateChannels && (0, Z.ZP)(e.privateChannels), null != e.guildChannels && (0, Z._$)(e.guildChannels)
    })(E)), S.Z.dispatchLazyCache.measure(() => u.Z.dispatch(E)), b.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - r, "ms)")), d.addAnalytics({
      usedCacheAtStartup: !0
    });
    let _ = c.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      h = c.length,
      m = l.all.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      T = l.channels.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      C = m - T,
      g = 0 === l.stale.length ? "" : " \xb7 ".concat(l.stale.join(", "));
    b.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(i.length, "\n            basic_channels:\n              total: ").concat(m, " (").concat(l.channels.length, " guilds)\n              stale: ").concat(C, " (").concat(l.stale.length, " guilds").concat(g, ")\n              unstale: ").concat(T, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(_, " (").concat(c.length, " guilds)\n      )")), S.Z.setCacheInfo({
      guilds: i.length,
      privateChannels: s,
      basicChannels: m,
      basicChannelsStale: C,
      fullChannels: _,
      fullChannelGuilds: h
    })
  })
}

function W(e) {
  let t = x.Z.getSocket(),
    n = !1;
  c.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        b.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, S.Z.loadLazyCache.recordEnd(), b.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        b.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      b.warn("Lazy cache has encountered error", e), u.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !n && S.Z.loadLazyCache.recordEnd()
}
class K extends(s = c.ZP.Store) {
  initialize() {
    !P && x.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !P || B
  }
  getLazyCacheStatus() {
    return P ? U : "no-cache"
  }
  get lastWriteTime() {
    return G
  }
  canWriteCaches(e) {
    return (0, O.$8)() ? D ? (b.log("Not writing cache because caches cleared"), !1) : !!e || !!H || (b.log("Not writing cache because never connected"), !1) : (b.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let n = (0, L.h)(t);
    if ("initializing" !== U) {
      (0, j.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = x.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = v.default.getId(),
        s = A.Z.carefullyOpenDatabase(t),
        [a, i, l] = await S.Z.loadMiniCache.measureAsync(() => F(s, t, e));
      a ? (n(), await q(s, t, i, l)) : (n(), await (W(() => u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      b.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, j.Z)("cache:exception"), n(), u.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
l = "CacheStore", (i = "displayName") in(a = K) ? Object.defineProperty(a, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = l, new K(u.Z, P ? {
  CONNECTION_OPEN: function() {
    return V = !0, H = !0, !1
  },
  LOGOUT: w,
  CONNECTION_CLOSED: function() {
    return V = !1, H = !0, !1
  },
  CACHE_LOADED: function() {
    B = !0
  },
  CACHE_LOADED_LAZY: function() {
    B = !0, U = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    U = "no-cache"
  },
  CLEAR_CACHES: w,
  WRITE_CACHES: function() {
    b.verbose("Writing cache now"), G = Date.now(), B = !0, d.K.remove(y.FsG), d.K.remove(y.O42), d.K.remove(y.ihW)
  }
} : {})