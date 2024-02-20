"use strict";
n.r(t), n.d(t, {
  registerExperiment: function() {
    return ei
  },
  default: function() {
    return el
  }
}), n("702976"), n("70102"), n("222007"), n("781738");
var i = n("627445"),
  r = n.n(i),
  s = n("917351"),
  a = n.n(s),
  o = n("210696"),
  l = n.n(o),
  u = n("95410"),
  c = n("355025"),
  d = n("605250"),
  p = n("271938"),
  h = n("455079"),
  f = n("599110"),
  E = n("316805"),
  _ = n("565034"),
  m = n("49111");
let S = "scientist:triggered",
  g = "exerimentOverrides",
  T = "userExperimentOverrides",
  I = "guildExperimentOverrides",
  v = new d.default("ExperimentStore"),
  C = !1,
  A = {},
  R = {},
  N = [],
  y = [],
  O = {},
  D = {},
  b = {},
  P = {},
  L = {},
  M = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
  U = {};

function w(e) {
  let t = U[e];
  if (void 0 !== t) return t;
  {
    let t = l.v3(e);
    return U[e] = t, t
  }
}
let k = _.TriggerDebuggingAAExperiments.map(e => w(e)),
  G = {
    title: "Unnamed Experiment",
    description: "No description provided"
  };

function x(e, t) {
  return e || k.includes(t)
}

function F(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.UserFlags.STAFF) === m.UserFlags.STAFF || null != e.personal_connection_id || !1
}

function V(e, t, n, i) {
  let r = "".concat(t.type, "|").concat(e),
    s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
  if (t.type === _.ExperimentTypes.USER) return s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  if (t.type === _.ExperimentTypes.GUILD) return r += "|".concat(t.guildId), s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  throw Error()
}

function B(e) {
  if (e.type === _.ExperimentTypes.USER) return w("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === _.ExperimentTypes.GUILD) return w("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let H = Date.now();

function j(e, t, n, i) {
  let r = A[V(e, t, n, i)];
  if (null == r) return !1;
  let s = Date.now() - r.time > 6048e5;
  return !s && r.hash === B(t)
}

function Y(e) {
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
  let u = l === _.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
    c = j(t, n, i, u);
  if (c) return !1;
  if (n.type === _.ExperimentTypes.USER) {
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
    let c = u ? m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
    f.default.track(c, e, {
      flush: !0,
      fingerprint: a
    })
  } else if (n.type === _.ExperimentTypes.GUILD) {
    let e = u ? m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
    f.default.track(e, {
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
  A[V(t, n, i, u)] = {
    time: Date.now(),
    hash: B(n)
  }, en(A)
}

function W(e) {
  let [t, n] = e;
  return null != E.GUILD_FILTERS[t] ? (0, E.GUILD_FILTERS)[t](n) : null
}

function K(e) {
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
    filters: n.map(W),
    rawFilterData: n
  }
}

function z(e) {
  !M && "CONNECTION_OPEN" === e.type && F(e.user) && (M = !0), O = {}, D = {}, b = {};
  let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === p.default.getFingerprint(),
    {
      experiments: n,
      guildExperiments: i
    } = e;
  t && q(n, i), C = !0
}

function q(e, t) {
  N = e, y = null != t ? t : [], e.forEach(e => {
    let [t, n, i, r, s, a, o, l] = e;
    O[t] = {
      type: "user",
      revision: n,
      population: s,
      bucket: i,
      override: 0 === r,
      hashResult: null != a ? a : -1,
      aaMode: 1 === o,
      triggerDebuggingEnabled: x(1 === l, t)
    }
  }), null != t && t.forEach(e => {
    let [t, n, i, r, s, a, o, l, u, c] = e;
    D[t] = {
      hashKey: n,
      revision: i,
      populations: r.map(K),
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
      overridesFormatted: (null != a ? a : []).map(e => e.map(K)),
      holdoutName: null != o ? o : null,
      holdoutBucket: null != l ? l : null,
      aaMode: 1 === u,
      triggerDebuggingEnabled: x(1 === c, t)
    }
  })
}

function Q(e, t, n) {
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
    if ((i = null != t ? t.bucket : _.ExperimentBuckets.CONTROL) === _.ExperimentBuckets.NOT_ELIGIBLE) break;
    return i
  }
  return null
}

function X(e) {
  let t = {};
  for (let i in e) {
    var n;
    let r = e[i];
    for (let e of (t[i] = {
        ...r
      }, t[i].populations)) e.filters = e.rawFilterData.map(W);
    for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
      for (let t of e) t.filters = t.rawFilterData.map(W)
  }
  return t
}

function Z(e) {
  let {
    serializedExperimentStore: t,
    user: n
  } = e;
  !M && F(n) && (M = !0), C = t.hasLoadedExperiments, A = t.trackedExposureExperiments, O = t.loadedUserExperiments, P = t.userExperimentOverrides, L = t.guildExperimentOverrides, D = X(t.loadedGuildExperiments), b = {}
}

function J() {
  C = !0
}

function $(e) {
  let {
    isSwitchingAccount: t
  } = e;
  u.default.remove(S), !t && (u.default.remove(g), u.default.remove(T), u.default.remove(I), P = {}, L = {}), O = {}, N = [], A = {}, C = !1
}

function ee() {
  C = !1, A = {}, u.default.remove(S)
}

function et() {
  try {
    u.default.set(T, P)
  } catch (e) {
    v.error("Error saving user experiment overrides, unsaved data will be lost", e), f.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    u.default.set(I, L)
  } catch (e) {
    v.error("Error saving guild experiment overrides, unsaved data will be lost", e), f.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function en(e) {
  try {
    u.default.set(S, {
      v: 1,
      e: e
    })
  } catch (e) {
    v.error("Error saving tracked exposure experiments, unsaved data will be lost", e), f.default.track(m.AnalyticEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function ei(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: i,
    description: r,
    buckets: s
  } = e;
  R = {
    ...R,
    [t]: {
      type: n,
      title: i,
      description: r,
      buckets: s
    }
  }
}

function er(e) {
  let t, n, {
      store: i,
      renderFunctions: s
    } = e,
    a = "function" == typeof i.getExperimentId ? i.getExperimentId() : null;
  if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
  let o = "function" == typeof i.getMetaData ? i.getMetaData() : G;
  Object.keys(s).forEach(e => {
    if (e === _.ExperimentTypes.NONE_LEGACY) return;
    r(null != s[e], "Unexpected missing renderFunctions"), t = e;
    let i = Object.keys(s[e]).map(e => parseInt(e));
    n = i
  }), ei({
    experimentId: a,
    experimentType: null != t ? t : _.ExperimentTypes.USER,
    title: o.title,
    description: o.description,
    buckets: null != n ? n : []
  })
}

function es(e) {
  let {
    experimentId: t,
    experimentBucket: n
  } = e, i = R[t];
  if (null == i) return !1;
  for (let e of (null == n ? (P = {
      ...P
    }, delete P[t], L = {
      ...L
    }, delete L[t]) : "user" === i.type ? P = {
      ...P,
      [t]: {
        type: i.type,
        revision: 1,
        population: 0,
        bucket: n,
        override: !0
      }
    } : L = {
      ...L,
      [t]: {
        type: i.type,
        revision: 1,
        bucket: n,
        override: !0
      }
    }, [P, L]))
    for (let t in e) null == R[t] && delete P[t];
  et()
}

function ea(e) {
  let {
    guild: t
  } = e;
  for (let e in b) {
    let [n] = e.split(":");
    t.id === n && delete b[e]
  }
}
class eo extends h.default {
  initialize() {
    A = function() {
      let e = u.default.get(S);
      if (null == e || 1 !== e.v) return {};
      let t = e.e,
        n = Date.now(),
        i = !1;
      for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
      return i && en(t), t
    }(), ! function() {
      var e, t, n;
      let i = [null !== (e = u.default.get(g)) && void 0 !== e ? e : {}, null !== (t = u.default.get(T)) && void 0 !== t ? t : {}, null !== (n = u.default.get(I)) && void 0 !== n ? n : {}];
      P = {}, L = {};
      let r = !a.isEmpty(i[0]);
      for (let e of i)
        for (let t in e) {
          let n = e[t];
          null == n || n.type !== _.ExperimentTypes.USER && n.type !== _.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], r = !0) : n.type === _.ExperimentTypes.USER ? P[t] = n : L[t] = n
        }
      let s = (0, c.getBuildOverrideExperiments)();
      for (let e in s) P[e] = {
        type: _.ExperimentTypes.USER,
        revision: 1,
        population: 0,
        override: !0,
        fromCookie: !0,
        bucket: s[e]
      }, L[e] = {
        type: _.ExperimentTypes.GUILD,
        revision: 1,
        override: !0,
        fromCookie: !0,
        bucket: s[e]
      }, r = !0;
      r && et()
    }()
  }
  takeSnapshot() {
    return {
      version: eo.LATEST_SNAPSHOT_VERSION,
      data: {
        rawUserExperiments: N,
        rawGuildExperiments: y
      }
    }
  }
  get hasLoadedExperiments() {
    return C
  }
  hasRegisteredExperiment(e) {
    return null != R[e]
  }
  getUserExperimentDescriptor(e) {
    if (M) {
      let t = P[e];
      if (null != t) return t
    }
    let t = w(e);
    return O["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : m.EMPTY_STRING_GUILD_ID,
      i = L[e];
    if (M && null != i) return i;
    let r = "".concat(n, ":").concat(e);
    if (r in b) return b[r];
    let s = function e(t, n) {
      var i, r;
      let s = w(n),
        a = D["".concat(s)];
      if (null == a) return null;
      let {
        revision: o,
        aaMode: l
      } = a, u = a.overrides[t], c = a.triggerDebuggingEnabled;
      if (null != u) return u === _.ExperimentBuckets.NOT_ELIGIBLE ? null : {
        type: _.ExperimentTypes.GUILD,
        guildId: t,
        revision: o,
        bucket: u,
        override: !0,
        hashResult: -1,
        triggerDebuggingEnabled: c
      };
      let d = "".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t),
        p = w(d),
        h = p % 1e4,
        f = null,
        E = null !== (r = a.overridesFormatted) && void 0 !== r ? r : [];
      for (let e of E)
        if (null !== (f = Q(t, e, h))) return {
          type: _.ExperimentTypes.GUILD,
          guildId: t,
          revision: a.revision,
          bucket: f,
          override: !0,
          hashResult: h,
          triggerDebuggingEnabled: c
        };
      if (null == (f = Q(t, a.populations, h))) return null;
      if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
        let n = e(t, a.holdoutName);
        if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && Y({
            experimentId: a.holdoutName,
            descriptor: n
          }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
      }
      return {
        type: _.ExperimentTypes.GUILD,
        guildId: t,
        revision: a.revision,
        bucket: f,
        hashResult: h,
        aaMode: l,
        triggerDebuggingEnabled: c
      }
    }(n, e);
    return b[r] = s, s
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : _.ExperimentBuckets.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : _.ExperimentBuckets.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return O
  }
  getGuildExperiments() {
    return D
  }
  getLoadedUserExperiment(e) {
    return O[w(e)]
  }
  getLoadedGuildExperiment(e) {
    return D[w(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(A).filter(e => {
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
    return R
  }
  getAllExperimentOverrideDescriptors() {
    return M ? {
      ...P,
      ...L
    } : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return M ? null !== (t = P[e]) && void 0 !== t ? t : L[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(R).forEach(e => {
        t[w("".concat(e))] = e
      }), O) {
      let i = t[n];
      null != i && (e[i] = O[n].bucket)
    }
    for (let t in b) {
      let n = b[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in D)
      for (let n of (e[t] = JSON.parse(JSON.stringify(D[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: C,
      trackedExposureExperiments: A,
      loadedUserExperiments: O,
      loadedGuildExperiments: e,
      userExperimentOverrides: P,
      guildExperimentOverrides: L
    }
  }
  hasExperimentTrackedExposure(e, t, n, i) {
    return j(e, t, n, i)
  }
  constructor() {
    super(), this.trackExposure = Y, this.loadCache = () => {
      let e = this.readSnapshot(eo.LATEST_SNAPSHOT_VERSION);
      null != e && ("loadedUserExperiments" in e ? (O = e.loadedUserExperiments, D = X(e.loadedGuildExperiments)) : q(e.rawUserExperiments, e.rawGuildExperiments))
    }, this.registerActionHandlers({
      LOGOUT: $,
      LOGIN_SUCCESS: ee,
      CONNECTION_OPEN: z,
      EXPERIMENTS_FETCH_SUCCESS: z,
      OVERLAY_INITIALIZE: Z,
      CACHE_LOADED: this.loadCache,
      EXPERIMENTS_FETCH_FAILURE: J,
      EXPERIMENT_REGISTER_LEGACY: er,
      EXPERIMENT_OVERRIDE_BUCKET: es,
      GUILD_CREATE: ea,
      GUILD_UPDATE: ea
    })
  }
}
eo.displayName = "ExperimentStore", eo.LATEST_SNAPSHOT_VERSION = 1;
var el = new eo