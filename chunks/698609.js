"use strict";
a.r(e), a.d(e, {
  useSafetyHubClassification: function() {
    return c
  },
  useActiveSafetyHubClassifications: function() {
    return o
  },
  useExpiredSafetyHubClassifications: function() {
    return d
  },
  useSafetyHubAppealSignal: function() {
    return _
  }
});
var n = a("884691"),
  s = a("446674"),
  i = a("299039"),
  l = a("781324"),
  u = a("646356");

function r() {
  let t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getClassifications());
  return t.sort((t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id))
}

function c(t) {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.getClassification(t)),
    a = (0, s.useStateFromStores)([u.default], () => u.default.getClassificationRequestState(t)),
    i = (0, s.useStateFromStores)([u.default], () => u.default.getIsDsaEligible());
  return n.useEffect(() => {
    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
  }, [t, e, a]), {
    classification: e,
    classificationRequestState: a,
    isDsaEligible: i,
    isAppealEligible: i && null != e && null == e.appeal_status
  }
}

function o() {
  let t = r(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function d() {
  let t = r(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function _() {
  let t = (0, s.useStateFromStores)([u.default], () => u.default.getAppealSignal());
  return t
}