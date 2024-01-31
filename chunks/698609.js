"use strict";
a.r(e), a.d(e, {
  useSafetyHubClassification: function() {
    return o
  },
  useActiveSafetyHubClassifications: function() {
    return c
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
  r = a("646356");

function u() {
  let t = (0, s.useStateFromStoresArray)([r.default], () => r.default.getClassifications());
  return t.sort((t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id))
}

function o(t) {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getClassification(t)),
    a = (0, s.useStateFromStores)([r.default], () => r.default.getClassificationRequestState(t)),
    i = (0, s.useStateFromStores)([r.default], () => r.default.getIsDsaEligible());
  return n.useEffect(() => {
    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
  }, [t, e, a]), {
    classification: e,
    classificationRequestState: a,
    isDsaEligible: i,
    isAppealEligible: i && null != e && null == e.appeal_status
  }
}

function c() {
  let t = u(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function d() {
  let t = u(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function _() {
  let t = (0, s.useStateFromStores)([r.default], () => r.default.getAppealSignal());
  return t
}