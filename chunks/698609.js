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
  s = a("446674"),
  i = a("299039"),
  l = a("781324"),
  r = a("647149"),
  u = a("646356");

function o() {
  let t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getClassifications());
  return t.sort((t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id))
}

function c(t) {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getClassification(t)),
    a = (0, s.useStateFromStores)([u.default], () => u.default.getClassificationRequestState(t)),
    i = (0, s.useStateFromStores)([u.default], () => u.default.getIsDsaEligible()),
    o = (0, r.useIsInappAppealIngestionEnabled)();
  return n.useEffect(() => {
    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
  }, [t, e, a]), {
    classification: e,
    classificationRequestState: a,
    isDsaEligible: i,
    isAppealEligible: o && i && null != e && null == e.appeal_status
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
  let t = (0, s.useStateFromStores)([u.default], () => u.default.getAppealSignal());
  return t
}