s.d(t, {
  q: function() {
    return U
  }
}), s(47120), s(724458);
var n, a, i, r, l = s(956067);
s(724522);
var o = s(149765),
  c = s(442837),
  E = s(433517),
  _ = s(570140),
  u = s(86670),
  d = s(261375),
  T = s(17567),
  I = s(795513),
  R = s(685736),
  A = s(266750),
  N = s(768910),
  C = s(632093),
  g = s(347994),
  m = s(591526),
  M = s(261875),
  S = s(710845),
  p = s(38618),
  h = s(218543),
  f = s(314897),
  O = s(944486),
  x = s(914010),
  L = s(449934),
  P = s(576376),
  v = s(38217),
  Z = s(864631),
  b = s(981631);
let D = new S.Z("CacheStore"),
  U = !1,
  j = !1,
  G = "initializing",
  B = 0,
  H = !1,
  y = !1,
  k = !1;

function V(e) {
  D.log("Clearing cache store"), B = Date.now(), E.K.remove(b.FsG), E.K.remove(b.ihW), E.K.remove(b.O42), G = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (j = !0)
}
async function F(e, t, s) {
  let n = performance.now();
  if (null == e || null == s) return D.verbose("skipped loaded messages (channel: ".concat(s, ", database: ").concat(e, ").")), [performance.now() - n, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let a = await R.ZP.startupLoad(e, t, s, b.AQB);
    D.verbose("loaded ".concat(a.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(s, ")."));
    let i = {
      guildId: t,
      channelId: s,
      users: a.users,
      members: a.members,
      messages: a.messages
    };
    return [performance.now() - n, i]
  }
}
async function w(e, t, s) {
  var n, a, i;
  D.verbose("loading early cache");
  let r = p.Z.getSocket();
  r.connect();
  let o = null !== (n = x.Z.getGuildId()) && void 0 !== n ? n : null,
    E = null !== (a = O.Z.getChannelId()) && void 0 !== a ? a : null,
    u = performance.now(),
    d = h.Z.loadCachedMessages.measureAsyncWithoutNesting(() => F(e, o, E)),
    T = h.Z.fetchGuildCache.measureAsync(() => K(e, s)),
    I = h.Z.fetchGuildCache.measureAsync(() => Y(e, s)),
    R = null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => m.Z.getAsync(e, null)) : Promise.resolve([]),
    A = null == e ? Promise.resolve({}) : l.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => g.Z.getAll(e)),
    M = null == e ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => N.Z.getAll(e)),
    S = null == e ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => C.Z.getAll(e)),
    [
      [f, L], P, v, b, U, j, G
    ] = await Promise.all([d, T, I, R, A, M, S]),
    B = performance.now() - u;
  if (D.verbose("cache loaded in ".concat(B, "ms (channel_history ").concat(f, "ms)")), null == L) return (0, Z.Z)("database:history_cache_null"), D.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let n = Object.fromEntries(L.members.map(e => [e.userId, e])),
      a = null != v.guildId && null != v.channels,
      u = v.guildId;
    return c.ZP.Emitter.batched(() => {
      l.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return _.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: P,
          privateChannels: b,
          initialGuildChannels: null !== (e = v.channels) && void 0 !== e ? e : [],
          users: [...L.users],
          messages: null == L.channelId ? {} : {
            [L.channelId]: L.messages
          },
          guildMembers: null == L.guildId ? {} : {
            [L.guildId]: n
          },
          userSettings: U,
          userGuildSettings: G,
          readStates: j
        })
      }), l.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => r.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), D.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(o, "\n          selected_channel: ").concat(E, "\n          navigation_state: ").concat(JSON.stringify(s), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(b.length, "\n            channel_history:\n              guild: ").concat(L.guildId, "\n              channel: ").concat(L.channelId, "\n              messages: ").concat(L.messages.length, "\n                members: ").concat(L.members.length, "\n                users: ").concat(L.users.length, "\n            initial_guild:\n              id: ").concat(u, "\n              channels: ").concat(null === (i = v.channels) || void 0 === i ? void 0 : i.length, "\n            user_settings: ").concat(Object.keys(U).length, "\n            read_states: ").concat(j.length, "\n            user_guild_settings: ").concat(G.length, "\n      )")), D.verbose("finished dispatching CACHE_LOADED"), [!0, a && null != u ? u : null, b.length]
  }
}
let W = !1;
async function K(e, t) {
  var s, n;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      W = !0;
      break;
    case "other":
      "@me" === t.guildId && (W = !0)
  }
  if (W) return null !== (s = await (0, u.dI)(() => l.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => T.Z.getAsync(e)))) && void 0 !== s ? s : [];
  let a = null !== (n = (await A.Z.getCommittedVersions()).initial_guild_id) && void 0 !== n ? n : t.guildId;
  if (null == a || "@me" === a) return [];
  let i = await (0, u.dI)(() => T.Z.getOneAsync(e, a));
  return null != i ? [i] : []
}
async function Y(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = (await A.Z.getCommittedVersions()).initial_guild_id;
  if (null == s && "guild-channels" === t.page && (s = t.guildId), null == e || null == s) return D.verbose("skipped loading initial guild (guild: ".concat(s, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = s;
  return {
    channels: await (0, u.dI)(() => m.Z.getAsync(e, n)),
    guildId: s
  }
}
async function z(e, t, s, n) {
  D.verbose("loading late lazy cache");
  let [a, i, r] = await h.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, u.dI)(() => null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => I.Z.okAsync(e)) : Promise.resolve(!0)), (0, u.dI)(() => null == e || W ? Promise.resolve([]) : l.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => T.Z.getAsync(e))), (0, u.dI)(() => null != e ? l.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), c = await h.Z.fetchStaleChannels.measureAsync(() => null != e && null != r && r.stale.length > 0 ? (0, u.dI)(() => {
    var t, s;
    return t = e, s = r.stale, D.verbose("loading stale guild channels (count: ".concat(s.length, ", ids: ").concat(s.join(", "), ")")), Promise.all(s.map(e => m.Z.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), h.Z.loadLazyCache.recordStart();
  let E = p.Z.getSocket();
  Q(() => {
    let l = performance.now();
    if (!1 === a) {
      (0, Z.Z)("database:not_ok"), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i || null == r || null == c) {
      (0, Z.Z)("database:load_failed"), D.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != r, "\n          guild_channels: ").concat(null != c, "\n          guilds: ").concat(null != i, "\n        )")), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (i.length > 0 || r.all.length > 0)) {
      (0, Z.Z)("database:versionless"), D.log("kv_cache was not ok (null version with values)"), _.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (y) {
      (0, Z.Z)("already_connected"), D.log("Skipping lazy cache; already connected."), _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    E.addAnalytics({
      hadCacheAtStartup: !0
    });
    let u = {
      type: "CACHE_LOADED_LAZY",
      guilds: i,
      guildChannels: c,
      basicGuildChannels: r.channels,
      initialGuildId: s
    };
    h.Z.deserializeCache.measure(() => (function(e) {
      if (null != e.guilds) {
        for (let {
            roles: t
          }
          of e.guilds)
          if (null != t)
            for (let e in t) {
              let s = t[e];
              s.permissions = o.vB(s.permissions)
            }
      }
      null != e.channels && (0, v.ZP)(e.channels), null != e.privateChannels && (0, v.ZP)(e.privateChannels), null != e.guildChannels && (0, v._$)(e.guildChannels)
    })(u)), h.Z.dispatchLazyCache.measure(() => _.Z.dispatch(u)), D.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")), E.addAnalytics({
      usedCacheAtStartup: !0
    });
    let d = c.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      T = c.length,
      I = r.all.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      R = r.channels.reduce((e, t) => {
        let [s, n] = t;
        return e + n.length
      }, 0),
      A = I - R,
      N = 0 === r.stale.length ? "" : " \xb7 ".concat(r.stale.join(", "));
    D.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(s, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(i.length, "\n            basic_channels:\n              total: ").concat(I, " (").concat(r.channels.length, " guilds)\n              stale: ").concat(A, " (").concat(r.stale.length, " guilds").concat(N, ")\n              unstale: ").concat(R, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(d, " (").concat(c.length, " guilds)\n      )")), h.Z.setCacheInfo({
      guilds: i.length,
      privateChannels: n,
      basicChannels: I,
      basicChannelsStale: A,
      fullChannels: d,
      fullChannelGuilds: T
    })
  })
}

function Q(e) {
  let t = p.Z.getSocket(),
    s = !1;
  c.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        D.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      s = !0, h.Z.loadLazyCache.recordEnd(), D.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
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
  }), !s && h.Z.loadLazyCache.recordEnd()
}
class X extends(n = c.ZP.Store) {
  initialize() {
    !U && p.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !U || H
  }
  getLazyCacheStatus() {
    return U ? G : "no-cache"
  }
  get lastWriteTime() {
    return B
  }
  canWriteCaches(e) {
    return (0, L.$8)() ? j ? (D.log("Not writing cache because caches cleared"), !1) : !!e || !!k || (D.log("Not writing cache because never connected"), !1) : (D.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let s = (0, P.h)(t);
    if ("initializing" !== G) {
      (0, Z.Z)("cache:lazy_cache_not_initializing"), s(), setTimeout(() => {
        var e, t;
        return null === (t = p.Z.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = f.default.getId(),
        n = M.Z.carefullyOpenDatabase(t),
        [a, i, r] = await h.Z.loadMiniCache.measureAsync(() => w(n, t, e));
      a ? (s(), await z(n, t, i, r)) : (s(), await (Q(() => _.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      D.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, Z.Z)("cache:exception"), s(), _.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
r = "CacheStore", (i = "displayName") in(a = X) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, new X(_.Z, U ? {
  CONNECTION_OPEN: function() {
    return y = !0, k = !0, !1
  },
  LOGOUT: V,
  CONNECTION_CLOSED: function() {
    return y = !1, k = !0, !1
  },
  CACHE_LOADED: function() {
    H = !0
  },
  CACHE_LOADED_LAZY: function() {
    H = !0, G = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    G = "no-cache"
  },
  CLEAR_CACHES: V,
  WRITE_CACHES: function() {
    D.verbose("Writing cache now"), B = Date.now(), H = !0, E.K.remove(b.FsG), E.K.remove(b.O42), E.K.remove(b.ihW)
  }
} : {})