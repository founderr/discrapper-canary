"use strict";
a.r(e), a.d(e, {
  useSafetyHubClassification: function() {
    return c
  },
  useActiveSafetyHubClassifications: function() {
    return d
  },
  useExpiredSafetyHubClassifications: function() {
    return _
  },
  useSafetyHubAppealSignal: function() {
    return S
  }
});
var n = a("884691"),
  i = a("446674"),
  s = a("299039"),
  l = a("781324"),
  r = a("647149"),
  u = a("646356");

function o() {
  let t = (0, i.useStateFromStoresArray)([u.default], () => u.default.getClassifications());
  return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
}

function c(t) {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getClassification(t)),
    a = (0, i.useStateFromStores)([u.default], () => u.default.getClassificationRequestState(t)),
    s = (0, i.useStateFromStores)([u.default], () => u.default.getIsDsaEligible()),
    o = (0, r.useIsInappAppealIngestionEnabled)();
  return n.useEffect(() => {
    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
  }, [t, e, a]), {
    classification: e,
    classificationRequestState: a,
    isDsaEligible: s,
    isAppealEligible: o && s && null != e && null == e.appeal_status
  }
}

function d() {
  let t = o(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function _() {
  let t = o(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function S() {
  let t = (0, i.useStateFromStores)([u.default], () => u.default.getAppealSignal());
  return t
}