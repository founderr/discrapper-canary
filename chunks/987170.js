"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  r = n("180205"),
  s = n("314897"),
  a = n("492435"),
  o = n("353926"),
  l = n("980944"),
  u = n("987338");

function d(e, t, n) {
  return "guild" === e ? o.default.getGuildExperimentDescriptor(t, n.guildId) : o.default.getUserExperimentDescriptor(t)
}

function _(e, t, n, i) {
  var r, s;
  return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (s = null === (r = n.get(t)) || void 0 === r ? void 0 : r.config) && void 0 !== s ? s : e.defaultConfig
}

function c(e) {
  var t, n;
  (0, l.validateOneExperiment)(e.id, e.label, e.commonTriggerPoint);
  let c = new Map;
  c.set(u.ExperimentBuckets.NOT_ELIGIBLE, {
    description: "Not Eligible",
    config: e.defaultConfig
  }), c.set(u.ExperimentBuckets.CONTROL, {
    description: "Control Bucket",
    config: e.defaultConfig
  }), e.treatments.forEach(e => {
    c.set(e.id, {
      description: "Treatment ".concat(e.id, ": ").concat(e.label),
      config: e.config
    })
  });
  let E = (t = e.kind, n = {
    id: e.id,
    title: e.label,
    commonTriggerPoint: e.commonTriggerPoint,
    description: [...c.values()].map(e => e.description),
    buckets: [...c.keys()]
  }, "guild" === t ? (0, a.registerGuildExperiment)(n) : (0, a.registerUserExperiment)(n));

  function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t.exposureType = n ? u.ExposureTypes.AUTO_FALLBACK : u.ExposureTypes.AUTO, t.excluded = !1, null == i) {
      T(e, t);
      return
    }
    f(e, t, i)
  }

  function T(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        excluded: !1,
        exposureType: u.ExposureTypes.MANUAL
      },
      i = d(e.kind, E.id, t);
    null != i && f(t, n, i)
  }

  function f(e, t, n) {
    if (null != n) {
      var i, r, o, l, d;
      let _ = u.ExposureTypes.MANUAL;
      (0, a.trackExposureToExperiment)(E.id, n, {
        location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
        analyticsLocations: null !== (r = null == t ? void 0 : t.analyticsLocations) && void 0 !== r ? r : [],
        fingerprint: null !== (l = null !== (o = null == t ? void 0 : t.fingerprint) && void 0 !== o ? o : s.default.getFingerprint()) && void 0 !== l ? l : void 0,
        excluded: (null == t ? void 0 : t.excluded) || !1,
        exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : _
      })
    }
  }

  function S(t, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = null != i.disable && i.disable,
      s = d(e.kind, e.id, t),
      a = null == s || r ? u.ExperimentBuckets.NOT_ELIGIBLE : s.bucket,
      l = null == s ? -1 : s.revision;

    function E() {
      let i = d(e.kind, e.id, t),
        s = null == i || r ? u.ExperimentBuckets.NOT_ELIGIBLE : i.bucket,
        o = null == i ? -1 : i.revision;
      (s !== a || l !== o) && (n(_(e, s, c, i), s, o), a = s, l = o)
    }
    return n(_(e, a, c, s), a, l), o.default.addReactChangeListener(E), () => {
      o.default.removeReactChangeListener(E)
    }
  }
  return {
    useExperiment: function(t) {
      var n, s, a;
      let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        l = null !== (n = o.disable) && void 0 !== n && n,
        E = !1 !== o.autoTrackExposure,
        T = d(e.kind, e.id, t),
        f = null == o.trackExposureOptions ? void 0 : (0, r.default)(null !== (s = o.trackExposureOptions) && void 0 !== s ? s : {}),
        h = null !== (a = null == T ? void 0 : T.triggerDebuggingEnabled) && void 0 !== a && a,
        [
          [A, m, N], p
        ] = (0, i.useState)(() => {
          let t = null == T || l ? u.ExperimentBuckets.NOT_ELIGIBLE : T.bucket;
          return [_(e, t, c, T), t, null == T ? -1 : T.revision]
        }),
        O = (0, r.default)(t);
      return (0, i.useEffect)(() => {
        if (!l && (!!E || !!h)) I(O, f, !1 === E)
      }, [l, E, O, f, m, N, h]), (0, i.useEffect)(() => S(O, (e, t, n) => {
        p(i => i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n])
      }, {
        disable: l
      }), [l, O]), A
    },
    subscribe: S,
    trackExposure: T,
    getCurrentConfig: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        i = d(e.kind, e.id, t);
      if (null == i || n.disable) return _(e, u.ExperimentBuckets.NOT_ELIGIBLE, c, i);
      if (!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) {
        let e = !1 === n.autoTrackExposure;
        I(t, n.trackExposureOptions, e, i)
      }
      return _(e, i.bucket, c, i)
    },
    definition: e,
    isAAMode: function(t) {
      let n = d(e.kind, e.id, t);
      return !!(null == n ? void 0 : n.aaMode)
    }
  }
}