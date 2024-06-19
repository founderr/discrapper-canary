t(47120);
var n = t(392711),
  i = t.n(n),
  a = t(492435),
  l = t(353926),
  r = t(987338);

function o(e) {
  for (let s of e) {
    let e = l.Z.getUserExperimentDescriptor(s);
    if (null != e) return [s, e]
  }
  return null
}
s.Z = {
  getFirstEligibleUserExperiment: o,
  isInExperimentBucket: function(e, s) {
    return l.Z.getUserExperimentBucket(e) === s
  },
  experimentDescriptorEquals: function(e, s) {
    if (null == e && null == s || e === s) return !0;
    if (null == e && null != s || null != e && null == s) return !1;
    if (null != e && null != s) {
      if (e.type !== s.type || e.bucket !== s.bucket || e.revision !== s.revision) return !1;
      if (e.type === r.xY.USER && s.type === r.xY.USER) return i().isEqual(e.context, s.context)
    }
    return !0
  },
  trackExposureToFirstEligibleUserExperiment: function(e) {
    let s = o(e);
    if (null != s) {
      let [e, t] = s;
      return (0, a.W9)(e, t), t
    }
  },
  getExperimentBucketName: function(e) {
    let s;
    return s = e === r.NZ.CONTROL ? "Control" : e === r.NZ.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e)
  }
}