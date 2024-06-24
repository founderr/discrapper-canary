n.d(t, {
  q: function() {
    return P
  }
}), n(47120), n(724458);
var s, i, a, l, r = n(956067);
n(724522);
var c = n(149765),
  o = n(442837),
  d = n(433517),
  u = n(570140),
  E = n(86670),
  _ = n(261375),
  h = n(17567),
  T = n(795513),
  I = n(685736),
  C = n(266750),
  N = n(768910),
  g = n(632093),
  A = n(347994),
  m = n(591526),
  f = n(261875),
  p = n(710845),
  R = n(38618),
  M = n(218543),
  O = n(314897),
  S = n(944486),
  L = n(914010),
  v = n(449934),
  Z = n(576376),
  x = n(38217),
  D = n(864631),
  b = n(981631);
let y = new p.Z("CacheStore"),
  P = !1,
  j = !1,
  G = "initializing",
  U = 0,
  V = !1,
  H = !1,
  w = !1;

function k(e) {
  y.log("Clearing cache store"), U = Date.now(), d.K.remove(b.FsG), d.K.remove(b.ihW), d.K.remove(b.O42), G = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (j = !0)
}
async function F(e, t, n) {
  let s = performance.now();
  if (null == e || null == n) return y.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - s, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let i = await I.ZP.startupLoad(e, t, n, b.AQB);
    y.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let a = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return [performance.now() - s, a]
  }
}
async function B(e, t, n) {
  var s, i, a;
  y.verbose("loading early cache");
  let l = R.Z.getSocket();
  l.connect();
  let c = null !== (s = L.Z.getGuildId()) && void 0 !== s ? s : null,
    d = null !== (i = S.Z.getChannelId()) && void 0 !== i ? i : null,
    E = performance.now(),
    _ = M.Z.loadCachedMessages.measureAsyncWithoutNesting(() => F(e, c, d)),
    h = M.Z.fetchGuildCache.measureAsync(() => z(e, n)),
    T = M.Z.fetchGuildCache.measureAsync(() => Q(e, n)),
    I = null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => m.Z.getAsync(e, null)) : Promise.resolve([]),
    C = null == e ? Promise.resolve({}) : r.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => A.Z.getAll(e)),
    f = null == e ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => N.Z.getAll(e)),
    p = null == e ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => g.Z.getAll(e)),
    [
      [O, v], Z, x, b, P, j, G
    ] = await Promise.all([_, h, T, I, C, f, p]),
    U = performance.now() - E;
  if (y.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(O, "ms)")), null == v) return (0, D.Z)("database:history_cache_null"), y.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(v.members.map(e => [e.userId, e])),
      i = null != x.guildId && null != x.channels,
      E = x.guildId;
    return o.ZP.Emitter.batched(() => {
      r.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return u.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: Z,
          privateChannels: b,
          initialGuildChannels: null !== (e = x.channels) && void 0 !== e ? e : [],
          users: [...v.users],
          messages: null == v.channelId ? {} : {
            [v.channelId]: v.messages
          },
          guildMembers: null == v.guildId ? {} : {
            [v.guildId]: s
          },
          userSettings: P,
          userGuildSettings: G,
          readStates: j
        })
      }), r.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => l.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), y.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(c, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(b.length, "\n            channel_history:\n              guild: ").concat(v.guildId, "\n              channel: ").concat(v.channelId, "\n              messages: ").concat(v.messages.length, "\n                members: ").concat(v.members.length, "\n                users: ").concat(v.users.length, "\n            initial_guild:\n              id: ").concat(E, "\n              channels: ").concat(null === (a = x.channels) || void 0 === a ? void 0 : a.length, "\n            user_settings: ").concat(Object.keys(P).length, "\n            read_states: ").concat(j.length, "\n            user_guild_settings: ").concat(G.length, "\n      )")), y.verbose("finished dispatching CACHE_LOADED"), [!0, i && null != E ? E : null, b.length]
  }
}
let Y = !1;
async function z(e, t) {
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
  let i = null !== (s = (await C.Z.getCommittedVersions()).initial_guild_id) && void 0 !== s ? s : t.guildId;
  if (null == i || "@me" === i) return [];
  let a = await (0, E.dI)(() => h.Z.getOneAsync(e, i));
  return null != a ? [a] : []
}
async function Q(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await C.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return y.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = n;
  return {
    channels: await (0, E.dI)(() => m.Z.getAsync(e, s)),
    guildId: n
  }
}
async function W(e, t, n, s) {
  y.verbose("loading late lazy cache");
  let [i, a, l] = await M.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, E.dI)(() => null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => T.Z.okAsync(e)) : Promise.resolve(!0)), (0, E.dI)(() => null == e || Y ? Promise.resolve([]) : r.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => h.Z.getAsync(e))), (0, E.dI)(() => null != e ? r.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => _.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), o = await M.Z.fetchStaleChannels.measureAsync(() => null != e && null != l && l.stale.length > 0 ? (0, E.dI)(() => {
    var t, n;
    return t = e, n = l.stale, y.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => m.Z.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), M.Z.loadLazyCache.recordStart();
  let d = R.Z.getSocket();
  q(() => {
    let r = performance.now();
    if (!1 === i) {
      (0, D.Z)("database:not_ok"), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a || null == l || null == o) {
      (0, D.Z)("database:load_failed"), y.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != l, "\n          guild_channels: ").concat(null != o, "\n          guilds: ").concat(null != a, "\n        )")), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i && (a.length > 0 || l.all.length > 0)) {
      (0, D.Z)("database:versionless"), y.log("kv_cache was not ok (null version with values)"), u.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (H) {
      (0, D.Z)("already_connected"), y.log("Skipping lazy cache; already connected."), u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    d.addAnalytics({
      hadCacheAtStartup: !0
    });
    let E = {
      type: "CACHE_LOADED_LAZY",
      guilds: a,
      guildChannels: o,
      basicGuildChannels: l.channels,
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
              n.permissions = c.vB(n.permissions)
            }
      }
      null != e.channels && (0, x.ZP)(e.channels), null != e.privateChannels && (0, x.ZP)(e.privateChannels), null != e.guildChannels && (0, x._$)(e.guildChannels)
    })(E)), M.Z.dispatchLazyCache.measure(() => u.Z.dispatch(E)), y.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - r, "ms)")), d.addAnalytics({
      usedCacheAtStartup: !0
    });
    let _ = o.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      h = o.length,
      T = l.all.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      I = l.channels.reduce((e, t) => {
        let [n, s] = t;
        return e + s.length
      }, 0),
      C = T - I,
      N = 0 === l.stale.length ? "" : " \xb7 ".concat(l.stale.join(", "));
    y.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(i, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(a.length, "\n            basic_channels:\n              total: ").concat(T, " (").concat(l.channels.length, " guilds)\n              stale: ").concat(C, " (").concat(l.stale.length, " guilds").concat(N, ")\n              unstale: ").concat(I, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(_, " (").concat(o.length, " guilds)\n      )")), M.Z.setCacheInfo({
      guilds: a.length,
      privateChannels: s,
      basicChannels: T,
      basicChannelsStale: C,
      fullChannels: _,
      fullChannelGuilds: h
    })
  })
}

function q(e) {
  let t = R.Z.getSocket(),
    n = !1;
  o.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        y.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, M.Z.loadLazyCache.recordEnd(), y.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        y.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      y.warn("Lazy cache has encountered error", e), u.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !n && M.Z.loadLazyCache.recordEnd()
}
class K extends(s = o.ZP.Store) {
  initialize() {
    !P && R.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !P || V
  }
  getLazyCacheStatus() {
    return P ? G : "no-cache"
  }
  get lastWriteTime() {
    return U
  }
  canWriteCaches(e) {
    return (0, v.$8)() ? j ? (y.log("Not writing cache because caches cleared"), !1) : !!e || !!w || (y.log("Not writing cache because never connected"), !1) : (y.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let n = (0, Z.h)(t);
    if ("initializing" !== G) {
      (0, D.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = R.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = O.default.getId(),
        s = f.Z.carefullyOpenDatabase(t),
        [i, a, l] = await M.Z.loadMiniCache.measureAsync(() => B(s, t, e));
      i ? (n(), await W(s, t, a, l)) : (n(), await (q(() => u.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      y.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, D.Z)("cache:exception"), n(), u.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
l = "CacheStore", (a = "displayName") in(i = K) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, new K(u.Z, P ? {
  CONNECTION_OPEN: function() {
    return H = !0, w = !0, !1
  },
  LOGOUT: k,
  CONNECTION_CLOSED: function() {
    return H = !1, w = !0, !1
  },
  CACHE_LOADED: function() {
    V = !0
  },
  CACHE_LOADED_LAZY: function() {
    V = !0, G = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    G = "no-cache"
  },
  CLEAR_CACHES: k,
  WRITE_CACHES: function() {
    y.verbose("Writing cache now"), U = Date.now(), V = !0, d.K.remove(b.FsG), d.K.remove(b.O42), d.K.remove(b.ihW)
  }
} : {})