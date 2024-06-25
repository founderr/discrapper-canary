"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(180205),
  s = n(314897),
  o = n(492435),
  a = n(353926),
  l = n(980944),
  u = n(987338);

function _(e, t, n) {
  return "guild" === e ? a.Z.getGuildExperimentDescriptor(t, n.guildId) : a.Z.getUserExperimentDescriptor(t)
}

function c(e, t, n, i) {
  var r, s;
  return (null == i ? void 0 : i.aaMode) ? e.defaultConfig : null !== (s = null === (r = n.get(t)) || void 0 === r ? void 0 : r.config) && void 0 !== s ? s : e.defaultConfig
}

function d(e) {
  var t, n;
  (0, l.K)(e.id, e.label, e.commonTriggerPoint);
  let d = new Map;
  d.set(u.NZ.NOT_ELIGIBLE, {
    description: "Not Eligible",
    config: e.defaultConfig
  }), d.set(u.NZ.CONTROL, {
    description: "Control Bucket",
    config: e.defaultConfig
  }), e.treatments.forEach(e => {
    d.set(e.id, {
      description: "Treatment ".concat(e.id, ": ").concat(e.label),
      config: e.config
    })
  });
  let E = (t = e.kind, n = {
    id: e.id,
    title: e.label,
    commonTriggerPoint: e.commonTriggerPoint,
    description: [...d.values()].map(e => e.description),
    buckets: [...d.keys()]
  }, "guild" === t ? (0, o.gK)(n) : (0, o.Xz)(n));

  function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t.exposureType = n ? u.a0.AUTO_FALLBACK : u.a0.AUTO, t.excluded = !1, null == i) {
      T(e, t);
      return
    }
    h(e, t, i)
  }

  function T(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        excluded: !1,
        exposureType: u.a0.MANUAL
      },
      i = _(e.kind, E.id, t);
    null != i && h(t, n, i)
  }

  function h(e, t, n) {
    if (null != n) {
      var i, r, a, l, _;
      let c = u.a0.MANUAL;
      (0, o.W9)(E.id, n, {
        location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
        analyticsLocations: null !== (r = null == t ? void 0 : t.analyticsLocations) && void 0 !== r ? r : [],
        fingerprint: null !== (l = null !== (a = null == t ? void 0 : t.fingerprint) && void 0 !== a ? a : s.default.getFingerprint()) && void 0 !== l ? l : void 0,
        excluded: (null == t ? void 0 : t.excluded) || !1,
        exposureType: null !== (_ = null == t ? void 0 : t.exposureType) && void 0 !== _ ? _ : c
      })
    }
  }

  function f(t, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = null != i.disable && i.disable,
      s = _(e.kind, e.id, t),
      o = null == s || r ? u.NZ.NOT_ELIGIBLE : s.bucket,
      l = null == s ? -1 : s.revision;

    function E() {
      let i = _(e.kind, e.id, t),
        s = null == i || r ? u.NZ.NOT_ELIGIBLE : i.bucket,
        a = null == i ? -1 : i.revision;
      (s !== o || l !== a) && (n(c(e, s, d, i), s, a), o = s, l = a)
    }
    return n(c(e, o, d, s), o, l), a.Z.addReactChangeListener(E), () => {
      a.Z.removeReactChangeListener(E)
    }
  }
  return {
    useExperiment: function(t) {
      var n, s, o;
      let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        l = null !== (n = a.disable) && void 0 !== n && n,
        E = !1 !== a.autoTrackExposure,
        T = _(e.kind, e.id, t),
        h = null == a.trackExposureOptions ? void 0 : (0, r.Z)(null !== (s = a.trackExposureOptions) && void 0 !== s ? s : {}),
        S = null !== (o = null == T ? void 0 : T.triggerDebuggingEnabled) && void 0 !== o && o,
        [
          [A, N, m], O
        ] = (0, i.useState)(() => {
          let t = null == T || l ? u.NZ.NOT_ELIGIBLE : T.bucket;
          return [c(e, t, d, T), t, null == T ? -1 : T.revision]
        }),
        p = (0, r.Z)(t);
      return (0, i.useEffect)(() => {
        if (!l && (!!E || !!S)) I(p, h, !1 === E)
      }, [l, E, p, h, N, m, S]), (0, i.useEffect)(() => f(p, (e, t, n) => {
        O(i => i[0] === e && i[1] === t && i[2] === n ? i : [e, t, n])
      }, {
        disable: l
      }), [l, p]), A
    },
    subscribe: f,
    trackExposure: T,
    getCurrentConfig: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        i = _(e.kind, e.id, t);
      if (null == i || n.disable) return c(e, u.NZ.NOT_ELIGIBLE, d, i);
      if (!1 !== n.autoTrackExposure || i.triggerDebuggingEnabled) {
        let e = !1 === n.autoTrackExposure;
        I(t, n.trackExposureOptions, e, i)
      }
      return c(e, i.bucket, d, i)
    },
    definition: e,
    isAAMode: function(t) {
      let n = _(e.kind, e.id, t);
      return !!(null == n ? void 0 : n.aaMode)
    }
  }
}