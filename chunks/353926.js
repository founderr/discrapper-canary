"use strict";
n.r(t), n.d(t, {
  registerExperiment: function() {
    return et
  }
}), n("789020"), n("411104"), n("47120"), n("757143");
var i = n("392711"),
  r = n.n(i),
  s = n("108131"),
  a = n.n(s),
  o = n("433517"),
  l = n("865427"),
  u = n("710845"),
  d = n("314897"),
  _ = n("412788"),
  c = n("626135"),
  E = n("360359"),
  I = n("987338"),
  T = n("981631");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = "scientist:triggered",
  h = "exerimentOverrides",
  A = "userExperimentOverrides",
  m = "guildExperimentOverrides",
  N = new u.default("ExperimentStore"),
  p = !1,
  O = {},
  C = {},
  R = [],
  g = [],
  L = {},
  v = {},
  D = {},
  M = {},
  y = {},
  P = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
  U = {};

function b(e) {
  let t = U[e];
  if (void 0 !== t) return t;
  {
    let t = a().v3(e);
    return U[e] = t, t
  }
}
let G = I.TriggerDebuggingAAExperiments.map(e => b(e));

function w(e, t) {
  return e || G.includes(t)
}

function k(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & T.UserFlags.STAFF) === T.UserFlags.STAFF || null != e.personal_connection_id || !1
}

function B(e, t, n, i) {
  let r = "".concat(t.type, "|").concat(e),
    s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
  if (t.type === I.ExperimentTypes.USER) return s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  if (t.type === I.ExperimentTypes.GUILD) return r += "|".concat(t.guildId), s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  throw Error()
}

function V(e) {
  if (e.type === I.ExperimentTypes.USER) return b("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === I.ExperimentTypes.GUILD) return b("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let x = Date.now();

function F(e, t, n, i) {
  let r = O[B(e, t, n, i)];
  return !(null == r || Date.now() - r.time > 6048e5) && r.hash === V(t)
}

function H(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: i,
    location_stack: r,
    context: s,
    fingerprint: a,
    excluded: o,
    exposureType: l
  } = e;
  if (n.override) return !1;
  let u = l === I.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
  if (F(t, n, i, u)) return !1;
  if (n.type === I.ExperimentTypes.USER) {
    let e = {
      name: t,
      revision: n.revision,
      population: n.population,
      bucket: n.bucket,
      location: i,
      location_stack: r,
      hash_result: n.hashResult,
      excluded: o,
      exposure_type: l
    };
    null != s && (e.context_guild_id = s.guildId);
    let d = u ? T.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : T.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
    c.default.track(d, e, {
      flush: !0,
      fingerprint: a
    })
  } else if (n.type === I.ExperimentTypes.GUILD) {
    let e = u ? T.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : T.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
    c.default.track(e, {
      name: t,
      revision: n.revision,
      bucket: n.bucket,
      guild_id: n.guildId,
      location: i,
      location_stack: r,
      hash_result: n.hashResult,
      excluded: o,
      exposure_type: l
    }, {
      flush: !0,
      fingerprint: a
    })
  }
  O[B(t, n, i, u)] = {
    time: Date.now(),
    hash: V(n)
  }, ee(O)
}

function Y(e) {
  let [t, n] = e;
  return null != E.GUILD_FILTERS[t] ? (0, E.GUILD_FILTERS)[t](n) : null
}

function j(e) {
  let [t, n] = e;
  return {
    buckets: t.map(e => {
      let [t, n] = e;
      return {
        bucket: t,
        positions: n.map(e => {
          let {
            s: t,
            e: n
          } = e;
          return {
            start: t,
            end: n
          }
        })
      }
    }),
    filters: n.map(Y),
    rawFilterData: n
  }
}

function W(e) {
  !P && "CONNECTION_OPEN" === e.type && k(e.user) && (P = !0), L = {}, v = {}, D = {};
  let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
    {
      experiments: n,
      guildExperiments: i
    } = e;
  t && K(n, i), p = !0
}

function K(e, t) {
  R = e, g = null != t ? t : [], e.forEach(e => {
    let [t, n, i, r, s, a, o, l] = e;
    L[t] = {
      type: "user",
      revision: n,
      population: s,
      bucket: i,
      override: 0 === r,
      hashResult: null != a ? a : -1,
      aaMode: 1 === o,
      triggerDebuggingEnabled: w(1 === l, t)
    }
  }), null != t && t.forEach(e => {
    let [t, n, i, r, s, a, o, l, u, d] = e;
    v[t] = {
      hashKey: n,
      revision: i,
      populations: r.map(j),
      overrides: function(e) {
        let t = {};
        if (null == e) return t;
        for (let {
            b: n,
            k: i
          }
          of e)
          for (let e of i) t[e] = n;
        return t
      }(s),
      overridesFormatted: (null != a ? a : []).map(e => e.map(j)),
      holdoutName: null != o ? o : null,
      holdoutBucket: null != l ? l : null,
      aaMode: 1 === u,
      triggerDebuggingEnabled: w(1 === d, t)
    }
  })
}

function z(e, t, n) {
  let i = null;
  for (let {
      buckets: s,
      filters: a
    }
    of t) {
    var r = !0;
    if (null != a) {
      for (let t of a)
        if (null != t && !t(e)) {
          r = !1;
          break
        }
    }
    if (!r) continue;
    let t = s.find(e => {
      let {
        positions: t
      } = e;
      return t.some(e => {
        let {
          start: t,
          end: i
        } = e;
        return n >= t && n < i
      })
    });
    if ((i = null != t ? t.bucket : I.ExperimentBuckets.CONTROL) === I.ExperimentBuckets.NOT_ELIGIBLE) break;
    return i
  }
  return null
}

function Z(e) {
  let t = {};
  for (let i in e) {
    var n;
    let r = e[i];
    for (let e of (t[i] = {
        ...r
      }, t[i].populations)) e.filters = e.rawFilterData.map(Y);
    for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
      for (let t of e) t.filters = t.rawFilterData.map(Y)
  }
  return t
}

function X(e) {
  let {
    serializedExperimentStore: t,
    user: n
  } = e;
  !P && k(n) && (P = !0), p = t.hasLoadedExperiments, O = t.trackedExposureExperiments, L = t.loadedUserExperiments, M = t.userExperimentOverrides, y = t.guildExperimentOverrides, v = Z(t.loadedGuildExperiments), D = {}
}

function Q() {
  p = !0
}

function q(e) {
  let {
    isSwitchingAccount: t
  } = e;
  o.Storage.remove(S), !t && (o.Storage.remove(h), o.Storage.remove(A), o.Storage.remove(m), M = {}, y = {}), L = {}, R = [], O = {}, p = !1
}

function J() {
  p = !1, O = {}, o.Storage.remove(S)
}

function $() {
  try {
    o.Storage.set(A, M)
  } catch (e) {
    N.error("Error saving user experiment overrides, unsaved data will be lost", e), c.default.track(T.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    o.Storage.set(m, y)
  } catch (e) {
    N.error("Error saving guild experiment overrides, unsaved data will be lost", e), c.default.track(T.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function ee(e) {
  try {
    o.Storage.set(S, {
      v: 1,
      e: e
    })
  } catch (e) {
    N.error("Error saving tracked exposure experiments, unsaved data will be lost", e), c.default.track(T.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function et(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: i,
    description: r,
    buckets: s,
    commonTriggerPoint: a
  } = e;
  C[t] = {
    type: n,
    title: i,
    description: r,
    buckets: s,
    commonTriggerPoint: a
  }
}

function en(e) {
  var t;
  let {
    experimentId: n,
    experimentBucket: i,
    experimentType: r,
    skipCleanup: s
  } = e, a = null != r ? r : null === (t = C[n]) || void 0 === t ? void 0 : t.type;
  if (null == a) return !1;
  if (null == i ? (M = {
      ...M
    }, delete M[n], y = {
      ...y
    }, delete y[n]) : "user" === a ? M = {
      ...M,
      [n]: {
        type: a,
        revision: 1,
        population: 0,
        bucket: i,
        override: !0
      }
    } : y = {
      ...y,
      [n]: {
        type: a,
        revision: 1,
        bucket: i,
        override: !0
      }
    }, !s)
    for (let e of [M, y])
      for (let t in e) null == C[t] && delete M[t];
  $()
}

function ei(e) {
  let {
    guild: t
  } = e;
  for (let e in D) {
    let [n] = e.split(":");
    t.id === n && delete D[e]
  }
}
class er extends _.default {
  initialize() {
    O = function() {
      let e = o.Storage.get(S);
      if (null == e || 1 !== e.v) return {};
      let t = e.e,
        n = Date.now(),
        i = !1;
      for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
      return i && ee(t), t
    }(), ! function() {
      var e, t, n;
      let i = [null !== (e = o.Storage.get(h)) && void 0 !== e ? e : {}, null !== (t = o.Storage.get(A)) && void 0 !== t ? t : {}, null !== (n = o.Storage.get(m)) && void 0 !== n ? n : {}];
      M = {}, y = {};
      let s = !r().isEmpty(i[0]);
      for (let e of i)
        for (let t in e) {
          let n = e[t];
          null == n || n.type !== I.ExperimentTypes.USER && n.type !== I.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], s = !0) : n.type === I.ExperimentTypes.USER ? M[t] = n : y[t] = n
        }
      let a = (0, l.getBuildOverrideExperiments)();
      for (let e in a) M[e] = {
        type: I.ExperimentTypes.USER,
        revision: 1,
        population: 0,
        override: !0,
        fromCookie: !0,
        bucket: a[e]
      }, y[e] = {
        type: I.ExperimentTypes.GUILD,
        revision: 1,
        override: !0,
        fromCookie: !0,
        bucket: a[e]
      }, s = !0;
      s && $()
    }()
  }
  loadCache() {
    let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
    null != e && ("loadedUserExperiments" in e ? (L = e.loadedUserExperiments, v = Z(e.loadedGuildExperiments)) : K(e.rawUserExperiments, e.rawGuildExperiments))
  }
  takeSnapshot() {
    return {
      version: er.LATEST_SNAPSHOT_VERSION,
      data: {
        rawUserExperiments: R,
        rawGuildExperiments: g
      }
    }
  }
  get hasLoadedExperiments() {
    return p
  }
  hasRegisteredExperiment(e) {
    return null != C[e]
  }
  getUserExperimentDescriptor(e) {
    if (P) {
      let t = M[e];
      if (null != t) return t
    }
    let t = b(e);
    return L["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : T.EMPTY_STRING_SNOWFLAKE_ID,
      i = y[e];
    if (P && null != i) return i;
    let r = "".concat(n, ":").concat(e);
    if (r in D) return D[r];
    let s = function e(t, n) {
      var i, r;
      let s = b(n),
        a = v["".concat(s)];
      if (null == a) return null;
      let {
        revision: o,
        aaMode: l
      } = a, u = a.overrides[t], d = a.triggerDebuggingEnabled;
      if (null != u) return u === I.ExperimentBuckets.NOT_ELIGIBLE ? null : {
        type: I.ExperimentTypes.GUILD,
        guildId: t,
        revision: o,
        bucket: u,
        override: !0,
        hashResult: -1,
        triggerDebuggingEnabled: d
      };
      let _ = b("".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t)) % 1e4,
        c = null;
      for (let e of null !== (r = a.overridesFormatted) && void 0 !== r ? r : [])
        if (null !== (c = z(t, e, _))) return {
          type: I.ExperimentTypes.GUILD,
          guildId: t,
          revision: a.revision,
          bucket: c,
          override: !0,
          hashResult: _,
          triggerDebuggingEnabled: d
        };
      if (null == (c = z(t, a.populations, _))) return null;
      if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
        let n = e(t, a.holdoutName);
        if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && H({
            experimentId: a.holdoutName,
            descriptor: n
          }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
      }
      return {
        type: I.ExperimentTypes.GUILD,
        guildId: t,
        revision: a.revision,
        bucket: c,
        hashResult: _,
        aaMode: l,
        triggerDebuggingEnabled: d
      }
    }(n, e);
    return D[r] = s, s
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : I.ExperimentBuckets.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : I.ExperimentBuckets.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return L
  }
  getGuildExperiments() {
    return v
  }
  getLoadedUserExperiment(e) {
    return L[b(e)]
  }
  getLoadedGuildExperiment(e) {
    return v[b(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(O).filter(e => {
      let [t] = e;
      return t.startsWith(n)
    }).map(e => {
      let [t, {
        time: i
      }] = e;
      return [t.replace(n, ""), i]
    })
  }
  getRegisteredExperiments() {
    return C
  }
  getAllExperimentOverrideDescriptors() {
    return P ? {
      ...M,
      ...y
    } : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return P ? null !== (t = M[e]) && void 0 !== t ? t : y[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(C).forEach(e => {
        t[b("".concat(e))] = e
      }), L) {
      let i = t[n];
      null != i && (e[i] = L[n].bucket)
    }
    for (let t in D) {
      let n = D[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in v)
      for (let n of (e[t] = JSON.parse(JSON.stringify(v[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: p,
      trackedExposureExperiments: O,
      loadedUserExperiments: L,
      loadedGuildExperiments: e,
      userExperimentOverrides: M,
      guildExperimentOverrides: y
    }
  }
  hasExperimentTrackedExposure(e, t, n, i) {
    return F(e, t, n, i)
  }
  constructor() {
    super({
      LOGOUT: q,
      LOGIN_SUCCESS: J,
      CONNECTION_OPEN: W,
      EXPERIMENTS_FETCH_SUCCESS: W,
      OVERLAY_INITIALIZE: X,
      CACHE_LOADED: () => this.loadCache(),
      EXPERIMENTS_FETCH_FAILURE: Q,
      EXPERIMENT_OVERRIDE_BUCKET: en,
      GUILD_CREATE: ei,
      GUILD_UPDATE: ei
    }), f(this, "trackExposure", H)
  }
}
f(er, "displayName", "ExperimentStore"), f(er, "LATEST_SNAPSHOT_VERSION", 1), t.default = new er