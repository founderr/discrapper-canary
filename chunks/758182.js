n.d(t, {
  q: function() {
    return B
  }
}), n(47120), n(724458);
var s, a, i, r, l = n(956067);
n(724522);
var o = n(149765),
  c = n(442837),
  d = n(433517),
  _ = n(570140),
  E = n(86670),
  u = n(261375),
  T = n(17567),
  I = n(795513),
  R = n(685736),
  C = n(266750),
  g = n(768910),
  p = n(632093),
  A = n(347994),
  N = n(591526),
  m = n(261875),
  S = n(710845),
  f = n(38618),
  M = n(218543),
  h = n(314897),
  b = n(944486),
  x = n(914010),
  O = n(449934),
  P = n(576376),
  L = n(38217),
  v = n(864631),
  Z = n(981631);
let D = new S.Z("CacheStore"),
  B = !1,
  U = !1,
  j = "initializing",
  G = 0,
  H = !1,
  y = !1,
  k = !1;

function w(e) {
  D.log("Clearing cache store"), G = Date.now(), d.K.remove(Z.FsG), d.K.remove(Z.ihW), d.K.remove(Z.O42), j = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (U = !0)
}
async function V(e, t, n) {
  let s = performance.now();
  if (null == e || null == n) return D.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - s, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let a = await R.ZP.startupLoad(e, t, n, Z.AQB);
    D.verbose("loaded ".concat(a.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
  D.verbose("loading early cache");
  let r = f.Z.getSocket();
  r.connect();
  let o = null !== (s = x.Z.getGuildId()) && void 0 !== s ? s : null,
    d = null !== (a = b.Z.getChannelId()) && void 0 !== a ? a : null,
    E = performance.now(),
    u = M.Z.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, o, d)),
    T = M.Z.fetchGuildCache.measureAsync(() => K(e, n)),
    I = M.Z.fetchGuildCache.measureAsync(() => Y(e, n)),
    R = null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => N.Z.getAsync(e, null)) : Promise.resolve([]),
    C = null == e ? Promise.resolve({}) : l.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => A.Z.getAll(e)),
    m = null == e ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.Z.getAll(e)),
    S = null == e ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => p.Z.getAll(e)),
    [
      [h, O], P, L, Z, B, U, j
    ] = await Promise.all([u, T, I, R, C, m, S]),
    G = performance.now() - E;
  if (D.verbose("cache loaded in ".concat(G, "ms (channel_history ").concat(h, "ms)")), null == O) return (0, v.Z)("database:history_cache_null"), D.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(O.members.map(e => [e.userId, e])),
      a = null != L.guildId && null != L.channels,
      E = L.guildId;
    return c.ZP.Emitter.batched(() => {
      l.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return _.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: P,
          privateChannels: Z,
          initialGuildChannels: null !== (e = L.channels) && void 0 !== e ? e : [],
          users: [...O.users],
          messages: null == O.channelId ? {} : {
            [O.channelId]: O.messages
          },
          guildMembers: null == O.guildId ? {} : {
            [O.guildId]: s
          },
          userSettings: B,
          userGuildSettings: j,
          readStates: U
        })
      }), l.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => r.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), D.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(o, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(Z.length, "\n            channel_history:\n              guild: ").concat(O.guildId, "\n              channel: ").concat(O.channelId, "\n              messages: ").concat(O.messages.length, "\n                members: ").concat(O.members.length, "\n                users: ").concat(O.users.length, "\n            initial_guild:\n              id: ").concat(E, "\n              channels: ").concat(null === (i = L.channels) || void 0 === i ? void 0 : i.length, "\n            user_settings: ").concat(Object.keys(B).length, "\n            read_states: ").concat(U.length, "\n            user_guild_settings: ").concat(j.length, "\n      )")), D.verbose("finished dispatching CACHE_LOADED"), [!0, a && null != E ? E : null, Z.length]
  }
}
let W = !1;
async function K(e, t) {
  var n, s;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      W = !0;
      break;
    case "other":
      "@me" === t.guildId && (W = !0)
  }
  if (W) return null !== (n = await (0, E.dI)(() => l.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => T.Z.getAsync(e)))) && void 0 !== n ? n : [];
  let a = null !== (s = (await C.Z.getCommittedVersions()).initial_guild_id) && void 0 !== s ? s : t.guildId;
  if (null == a || "@me" === a) return [];
  let i = await (0, E.dI)(() => T.Z.getOneAsync(e, a));
  return null != i ? [i] : []
}
async function Y(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await C.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return D.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = n;
  return {
    channels: await (0, E.dI)(() => N.Z.getAsync(e, s)),
    guildId: n
  }
}
async function z(e, t, n, s) {
  D.verbose("loading late lazy cache");
  let [a, i, r] = await M.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, E.dI)(() => null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => I.Z.okAsync(e)) : Promise.resolve(!0)), (0, E.dI)(() => null == e || W ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => T.Z.getAsync(e))), (0, E.dI)(() => null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => u.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), c = await M.Z.fetchStaleChannels.measureAsync(() => null != e && null != r && r.stale.length > 0 ? (0, E.dI)(() => {
    var t, n;
    return t = e, n = r.stale, D.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => N.Z.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), M.Z.loadLazyCache.recordStart();
  let d = f.Z.getSocket();
  Q(() => {
    let l = performance.now();
    if (!1 === a) {
      (0, v.Z)("database:not_ok"), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i || null == r || null == c) {
      (0, v.Z)("database:load_failed"), D.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != r, "\n          guild_channels: ").concat(null != c, "\n          guilds: ").concat(null != i, "\n        )")), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (i.length > 0 || r.all.length > 0)) {
      (0, v.Z)("database:versionless"), D.log("kv_cache was not ok (null version with values)"), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (y) {
      (0, v.Z)("already_connected"), D.log("Skipping lazy cache; already connected."), _.Z.dispatch({
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
      basicGuildChannels: r.channels,
      initialGuildId: n
    };
    M.Z.deserializeCache.measure(() => (function(e) {
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
      null != e.channels && (0, L.ZP)(e.channels), null != e.privateChannels && (0, L.ZP)(e.privateChannels), null != e.guildChannels && (0, L._$)(e.guildChannels)
    })(E)), M.Z.dispatchLazyCache.measure(() => _.Z.dispatch(E)), D.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")), d.addAnalytics({
      usedCacheAtStartup: !0
    });
    let u = c.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      T = c.length,
      I = r.all.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      R = r.channels.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      C = I - R,
      g = 0 === r.stale.length ? "" : " \xb7 ".concat(r.stale.join(", "));
    D.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(i.length, "\n            basic_channels:\n              total: ").concat(I, " (").concat(r.channels.length, " guilds)\n              stale: ").concat(C, " (").concat(r.stale.length, " guilds").concat(g, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(u, " (").concat(c.length, " guilds)\n      )")), M.Z.setCacheInfo({
      guilds: i.length,
      privateChannels: s,
      basicChannels: I,
      basicChannelsStale: C,
      fullChannels: u,
      fullChannelGuilds: T
    })
  })
}

function Q(e) {
  let t = f.Z.getSocket(),
    n = !1;
  c.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, M.Z.loadLazyCache.recordEnd(), D.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      D.warn("Lazy cache has encountered error", e), _.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !n && M.Z.loadLazyCache.recordEnd()
}
class J extends(s = c.ZP.Store) {
  initialize() {
    !B && f.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !B || H
  }
  getLazyCacheStatus() {
    return B ? j : "no-cache"
  }
  get lastWriteTime() {
    return G
  }
  canWriteCaches(e) {
    return (0, O.$8)() ? U ? (D.log("Not writing cache because caches cleared"), !1) : !!e || !!k || (D.log("Not writing cache because never connected"), !1) : (D.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.h)(t);
    if ("initializing" !== j) {
      (0, v.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = f.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = h.default.getId(),
        s = m.Z.carefullyOpenDatabase(t),
        [a, i, r] = await M.Z.loadMiniCache.measureAsync(() => F(s, t, e));
      a ? (n(), await z(s, t, i, r)) : (n(), await (Q(() => _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      D.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, v.Z)("cache:exception"), n(), _.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
r = "CacheStore", (i = "displayName") in(a = J) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, new J(_.Z, B ? {
  CONNECTION_OPEN: function() {
    return y = !0, k = !0, !1
  },
  LOGOUT: w,
  CONNECTION_CLOSED: function() {
    return y = !1, k = !0, !1
  },
  CACHE_LOADED: function() {
    H = !0
  },
  CACHE_LOADED_LAZY: function() {
    H = !0, j = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    j = "no-cache"
  },
  CLEAR_CACHES: w,
  WRITE_CACHES: function() {
    D.verbose("Writing cache now"), G = Date.now(), H = !0, d.K.remove(Z.FsG), d.K.remove(Z.O42), d.K.remove(Z.ihW)
  }
} : {})