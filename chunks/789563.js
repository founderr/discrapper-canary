"use strict";
n.r(t), n.d(t, {
  registerExperiment: function() {
    return ee
  },
  default: function() {
    return er
  }
}), n("702976"), n("70102"), n("222007"), n("781738");
var i = n("627445"),
  s = n.n(i),
  r = n("917351"),
  a = n.n(r),
  o = n("210696"),
  l = n.n(o),
  u = n("95410"),
  d = n("355025"),
  c = n("271938"),
  f = n("455079"),
  _ = n("599110"),
  h = n("316805"),
  g = n("565034"),
  m = n("49111");
let E = "scientist:triggered",
  p = "exerimentOverrides",
  v = "userExperimentOverrides",
  S = "guildExperimentOverrides",
  T = !1,
  I = {},
  C = {},
  A = [],
  y = [],
  N = {},
  R = {},
  D = {},
  O = {},
  P = {},
  b = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
  L = {};

function M(e) {
  let t = L[e];
  if (void 0 !== t) return t;
  {
    let t = l.v3(e);
    return L[e] = t, t
  }
}
let U = g.TriggerDebuggingAAExperiments.map(e => M(e)),
  k = {
    title: "Unnamed Experiment",
    description: "No description provided"
  };

function w(e, t) {
  return e || U.includes(t)
}

function V(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.UserFlags.STAFF) === m.UserFlags.STAFF || null != e.personal_connection_id || !1
}

function G(e, t, n, i) {
  let s = "".concat(t.type, "|").concat(e),
    r = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
  if (t.type === g.ExperimentTypes.USER) return r && (s += "|".concat(n), i && (s += "|triggerDebugging")), s;
  if (t.type === g.ExperimentTypes.GUILD) return s += "|".concat(t.guildId), r && (s += "|".concat(n), i && (s += "|triggerDebugging")), s;
  throw Error()
}

function F(e) {
  if (e.type === g.ExperimentTypes.USER) return M("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === g.ExperimentTypes.GUILD) return M("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let x = Date.now();

function B(e, t, n, i) {
  let s = I[G(e, t, n, i)];
  if (null == s) return !1;
  let r = Date.now() - s.time > 6048e5;
  return !r && s.hash === F(t)
}

function H(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: i,
    location_stack: s,
    context: r,
    fingerprint: a,
    excluded: o,
    exposureType: l
  } = e;
  if (n.override) return !1;
  let u = l === g.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    d = B(t, n, i, u);
  if (d) return !1;
  if (n.type === g.ExperimentTypes.USER) {
    let e = {
      name: t,
      revision: n.revision,
      population: n.population,
      bucket: n.bucket,
      location: i,
      location_stack: s,
      hash_result: n.hashResult,
      excluded: o,
      exposure_type: l
    };
    null != r && (e.context_guild_id = r.guildId);
    let d = u ? m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
    _.default.track(d, e, {
      flush: !0,
      fingerprint: a
    })
  } else if (n.type === g.ExperimentTypes.GUILD) {
    let e = u ? m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
    _.default.track(e, {
      name: t,
      revision: n.revision,
      bucket: n.bucket,
      guild_id: n.guildId,
      location: i,
      location_stack: s,
      hash_result: n.hashResult,
      excluded: o,
      exposure_type: l
    }, {
      flush: !0,
      fingerprint: a
    })
  }
  I[G(t, n, i, u)] = {
    time: Date.now(),
    hash: F(n)
  }, $(I)
}

function Y(e) {
  let [t, n] = e;
  return null != h.GUILD_FILTERS[t] ? (0, h.GUILD_FILTERS)[t](n) : null
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
  !b && "CONNECTION_OPEN" === e.type && V(e.user) && (b = !0), N = {}, R = {}, D = {};
  let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === c.default.getFingerprint(),
    {
      experiments: n,
      guildExperiments: i
    } = e;
  t && K(n, i), T = !0
}

function K(e, t) {
  A = e, y = null != t ? t : [], e.forEach(e => {
    let [t, n, i, s, r, a, o, l] = e;
    N[t] = {
      type: "user",
      revision: n,
      population: r,
      bucket: i,
      override: 0 === s,
      hashResult: null != a ? a : -1,
      aaMode: 1 === o,
      triggerDebuggingEnabled: w(1 === l, t)
    }
  }), null != t && t.forEach(e => {
    let [t, n, i, s, r, a, o, l, u, d] = e;
    R[t] = {
      hashKey: n,
      revision: i,
      populations: s.map(j),
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
      }(r),
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
      buckets: r,
      filters: a
    }
    of t) {
    var s = !0;
    if (null != a) {
      for (let t of a)
        if (null != t && !t(e)) {
          s = !1;
          break
        }
    }
    if (!s) continue;
    let t = r.find(e => {
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
    if ((i = null != t ? t.bucket : g.ExperimentBuckets.CONTROL) === g.ExperimentBuckets.NOT_ELIGIBLE) break;
    return i
  }
  return null
}

function q(e) {
  let t = {};
  for (let i in e) {
    var n;
    let s = e[i];
    for (let e of (t[i] = {
        ...s
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
  !b && V(n) && (b = !0), T = t.hasLoadedExperiments, I = t.trackedExposureExperiments, N = t.loadedUserExperiments, O = t.userExperimentOverrides, P = t.guildExperimentOverrides, R = q(t.loadedGuildExperiments), D = {}
}

function Q() {
  T = !0
}

function Z(e) {
  let {
    isSwitchingAccount: t
  } = e;
  u.default.remove(E), !t && (u.default.remove(p), u.default.remove(v), u.default.remove(S), O = {}, P = {}), N = {}, A = [], I = {}, T = !1
}

function J() {
  T = !1, I = {}, u.default.remove(E)
}

function $(e) {
  u.default.set(E, {
    v: 1,
    e: e
  })
}

function ee(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: i,
    description: s,
    buckets: r
  } = e;
  C = {
    ...C,
    [t]: {
      type: n,
      title: i,
      description: s,
      buckets: r
    }
  }
}

function et(e) {
  let t, n, {
      store: i,
      renderFunctions: r
    } = e,
    a = "function" == typeof i.getExperimentId ? i.getExperimentId() : null;
  if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
  let o = "function" == typeof i.getMetaData ? i.getMetaData() : k;
  Object.keys(r).forEach(e => {
    if (e === g.ExperimentTypes.NONE_LEGACY) return;
    s(null != r[e], "Unexpected missing renderFunctions"), t = e;
    let i = Object.keys(r[e]).map(e => parseInt(e));
    n = i
  }), ee({
    experimentId: a,
    experimentType: null != t ? t : g.ExperimentTypes.USER,
    title: o.title,
    description: o.description,
    buckets: null != n ? n : []
  })
}

function en(e) {
  let {
    experimentId: t,
    experimentBucket: n
  } = e, i = C[t];
  if (null == i) return !1;
  for (let e of (null == n ? (O = {
      ...O
    }, delete O[t], P = {
      ...P
    }, delete P[t]) : "user" === i.type ? O = {
      ...O,
      [t]: {
        type: i.type,
        revision: 1,
        population: 0,
        bucket: n,
        override: !0
      }
    } : P = {
      ...P,
      [t]: {
        type: i.type,
        revision: 1,
        bucket: n,
        override: !0
      }
    }, [O, P]))
    for (let t in e) null == C[t] && delete O[t];
  u.default.set(v, O), u.default.set(S, P)
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
class es extends f.default {
  initialize() {
    I = function() {
      let e = u.default.get(E);
      if (null == e || 1 !== e.v) return {};
      let t = e.e,
        n = Date.now(),
        i = !1;
      for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
      return i && $(t), t
    }(), ! function() {
      var e, t, n;
      let i = [null !== (e = u.default.get(p)) && void 0 !== e ? e : {}, null !== (t = u.default.get(v)) && void 0 !== t ? t : {}, null !== (n = u.default.get(S)) && void 0 !== n ? n : {}];
      O = {}, P = {};
      let s = !a.isEmpty(i[0]);
      for (let e of i)
        for (let t in e) {
          let n = e[t];
          null == n || n.type !== g.ExperimentTypes.USER && n.type !== g.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], s = !0) : n.type === g.ExperimentTypes.USER ? O[t] = n : P[t] = n
        }
      let r = (0, d.getBuildOverrideExperiments)();
      for (let e in r) O[e] = {
        type: g.ExperimentTypes.USER,
        revision: 1,
        population: 0,
        override: !0,
        fromCookie: !0,
        bucket: r[e]
      }, P[e] = {
        type: g.ExperimentTypes.GUILD,
        revision: 1,
        override: !0,
        fromCookie: !0,
        bucket: r[e]
      }, s = !0;
      s && (u.default.set(v, O), u.default.set(S, P))
    }()
  }
  takeSnapshot() {
    return {
      version: es.LATEST_SNAPSHOT_VERSION,
      data: {
        rawUserExperiments: A,
        rawGuildExperiments: y
      }
    }
  }
  get hasLoadedExperiments() {
    return T
  }
  hasRegisteredExperiment(e) {
    return null != C[e]
  }
  getUserExperimentDescriptor(e) {
    if (b) {
      let t = O[e];
      if (null != t) return t
    }
    let t = M(e);
    return N["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : "",
      i = P[e];
    if (b && null != i) return i;
    let s = "".concat(n, ":").concat(e);
    if (s in D) return D[s];
    let r = function e(t, n) {
      var i, s;
      let r = M(n),
        a = R["".concat(r)];
      if (null == a) return null;
      let {
        revision: o,
        aaMode: l
      } = a, u = a.overrides[t], d = a.triggerDebuggingEnabled;
      if (null != u) return u === g.ExperimentBuckets.NOT_ELIGIBLE ? null : {
        type: g.ExperimentTypes.GUILD,
        guildId: t,
        revision: o,
        bucket: u,
        override: !0,
        hashResult: -1,
        triggerDebuggingEnabled: d
      };
      let c = "".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t),
        f = M(c),
        _ = f % 1e4,
        h = null,
        m = null !== (s = a.overridesFormatted) && void 0 !== s ? s : [];
      for (let e of m)
        if (null !== (h = z(t, e, _))) return {
          type: g.ExperimentTypes.GUILD,
          guildId: t,
          revision: a.revision,
          bucket: h,
          override: !0,
          hashResult: _,
          triggerDebuggingEnabled: d
        };
      if (null == (h = z(t, a.populations, _))) return null;
      if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
        let n = e(t, a.holdoutName);
        if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && H({
            experimentId: a.holdoutName,
            descriptor: n
          }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
      }
      return {
        type: g.ExperimentTypes.GUILD,
        guildId: t,
        revision: a.revision,
        bucket: h,
        hashResult: _,
        aaMode: l,
        triggerDebuggingEnabled: d
      }
    }(n, e);
    return D[s] = r, r
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : g.ExperimentBuckets.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : g.ExperimentBuckets.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return N
  }
  getGuildExperiments() {
    return R
  }
  getLoadedUserExperiment(e) {
    return N[M(e)]
  }
  getLoadedGuildExperiment(e) {
    return R[M(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(I).filter(e => {
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
    return b ? {
      ...O,
      ...P
    } : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return b ? null !== (t = O[e]) && void 0 !== t ? t : P[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(C).forEach(e => {
        t[M("".concat(e))] = e
      }), N) {
      let i = t[n];
      null != i && (e[i] = N[n].bucket)
    }
    for (let t in D) {
      let n = D[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in R)
      for (let n of (e[t] = JSON.parse(JSON.stringify(R[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: T,
      trackedExposureExperiments: I,
      loadedUserExperiments: N,
      loadedGuildExperiments: e,
      userExperimentOverrides: O,
      guildExperimentOverrides: P
    }
  }
  hasExperimentTrackedExposure(e, t, n, i) {
    return B(e, t, n, i)
  }
  constructor() {
    super(), this.trackExposure = H, this.loadCache = () => {
      let e = this.readSnapshot(es.LATEST_SNAPSHOT_VERSION);
      null != e && ("loadedUserExperiments" in e ? (N = e.loadedUserExperiments, R = q(e.loadedGuildExperiments)) : K(e.rawUserExperiments, e.rawGuildExperiments))
    }, this.registerActionHandlers({
      LOGOUT: Z,
      LOGIN_SUCCESS: J,
      CONNECTION_OPEN: W,
      EXPERIMENTS_FETCH_SUCCESS: W,
      OVERLAY_INITIALIZE: X,
      CACHE_LOADED: this.loadCache,
      EXPERIMENTS_FETCH_FAILURE: Q,
      EXPERIMENT_REGISTER_LEGACY: et,
      EXPERIMENT_OVERRIDE_BUCKET: en,
      GUILD_CREATE: ei,
      GUILD_UPDATE: ei
    })
  }
}
es.displayName = "ExperimentStore", es.LATEST_SNAPSHOT_VERSION = 1;
var er = new es