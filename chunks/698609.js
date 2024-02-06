"use strict";
n.r(t), n.d(t, {
  useSafetyHubClassification: function() {
    return u
  },
  useActiveSafetyHubClassifications: function() {
    return c
  },
  useExpiredSafetyHubClassifications: function() {
    return d
  },
  useSafetyHubAppealSignal: function() {
    return f
  }
});
var i = n("884691"),
  l = n("446674"),
  r = n("299039"),
  a = n("781324"),
  o = n("646356");

function s() {
  let e = (0, l.useStateFromStoresArray)([o.default], () => o.default.getClassifications());
  return e.sort((e, t) => r.default.extractTimestamp(t.id) - r.default.extractTimestamp(e.id))
}

function u(e) {
  let t = (0, l.useStateFromStores)([o.default], () => o.default.getClassification(e)),
    n = (0, l.useStateFromStores)([o.default], () => o.default.getClassificationRequestState(e)),
    r = (0, l.useStateFromStores)([o.default], () => o.default.getIsDsaEligible());
  return i.useEffect(() => {
    void 0 === t && null == n && a.getSafetyHubDataForClassification(e)
  }, [e, t, n]), {
    classification: t,
    classificationRequestState: n,
    isDsaEligible: r,
    isAppealEligible: r && null != t && null == t.appeal_status
  }
}

function c() {
  let e = s(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) > t)
}

function d() {
  let e = s(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) <= t)
}

function f() {
  let e = (0, l.useStateFromStores)([o.default], () => o.default.getAppealSignal());
  return e
}