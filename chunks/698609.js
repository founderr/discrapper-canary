"use strict";
n.r(t), n.d(t, {
  useSafetyHubClassification: function() {
    return d
  },
  useActiveSafetyHubClassifications: function() {
    return f
  },
  useExpiredSafetyHubClassifications: function() {
    return E
  },
  useSafetyHubAppealSignal: function() {
    return _
  }
});
var i = n("884691"),
  a = n("446674"),
  r = n("299039"),
  l = n("781324"),
  s = n("997510"),
  u = n("646356"),
  o = n("736393");

function c() {
  let e = (0, a.useStateFromStoresArray)([u.default], () => u.default.getClassifications());
  return e.sort((e, t) => r.default.extractTimestamp(t.id) - r.default.extractTimestamp(e.id))
}

function d(e) {
  let t = (0, a.useStateFromStores)([u.default], () => u.default.getClassification(e)),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getClassificationRequestState(e)),
    r = (0, a.useStateFromStores)([u.default], () => u.default.getIsDsaEligible()),
    c = (0, s.useIsSafetyHubGuildViolationInAppAppealsEnabled)("classification_detail");
  return i.useEffect(() => {
    void 0 === t && null == n && l.getSafetyHubDataForClassification(e)
  }, [e, t, n]), {
    classification: t,
    classificationRequestState: n,
    isDsaEligible: r,
    isAppealEligible: r && null != t && null == t.appeal_status && (!(0, o.isGuildClassification)(t) || c)
  }
}

function f() {
  let e = c(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) > t)
}

function E() {
  let e = c(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) <= t)
}

function _() {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.getAppealSignal());
  return e
}