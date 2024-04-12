"use strict";
n.r(t), n("47120"), n("653041");
var s, a, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("433517"),
  c = n("570140"),
  E = n("496929"),
  f = n("16084"),
  _ = n("728345"),
  T = n("812206"),
  I = n("594190"),
  m = n("594174"),
  p = n("580130"),
  N = n("55563"),
  S = n("981631");
let C = "DetectedOffPlatformPremiumPerksStore",
  A = {},
  h = {},
  g = [];

function M() {
  let e = !1;
  for (let {
      skuId: t,
      applicationId: n
    }
    of o().values(h)) {
    if (g.includes(t)) continue;
    let s = T.default.getApplication(n);
    if (null == s) {
      !T.default.isFetchingApplication(n) && !T.default.didFetchingApplicationFail(n) && _.default.fetchApplication(n);
      continue
    }
    let a = N.default.get(t);
    if (null == a) {
      !N.default.isFetching(t) && !N.default.didFetchingSkuFail(t) && f.fetchSKU(s.id, t);
      continue
    }
    p.default.applicationIdsFetching.has(s.id) || p.default.isEntitledToSku(m.default.getCurrentUser(), t, s.id, s.id) || !a.available ? null != A[t] && (delete A[t], e = !0) : (A[t] = {
      skuId: t,
      applicationId: n
    }, e = !0)
  }
  return e
}
class O extends(s = u.default.Store) {
  initialize() {
    var e;
    this.waitFor(I.default, N.default, p.default), g = null !== (e = d.Storage.get(C)) && void 0 !== e ? e : g
  }
  getDetectedOffPlatformPremiumPerks() {
    return o().values(A)
  }
}
i = "DetectedOffPlatformPremiumPerksStore", (l = "displayName") in(a = O) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new O(c.default, {
  LOGOUT: function() {
    A = {}, h = {}
  },
  SKU_FETCH_SUCCESS: M,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: M,
  ENTITLEMENT_CREATE: M,
  APPLICATION_FETCH_SUCCESS: M,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete A[t], g.includes(t)) return !1;
    g.push(t), d.Storage.set(C, g)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = !1;
    for (let {
        id: t,
        distributor: n
      }
      of I.default.getRunningGames())
      if (null != t && n !== S.Distributors.DISCORD)
        for (let {
            skuId: n,
            applicationId: s
          }
          of S.OFF_PLATFORM_PREMIUM_PERKS) {
          if (!(s !== t || g.includes(n))) null == h[n] && (!p.default.applicationIdsFetched.has(s) && !p.default.applicationIdsFetching.has(s) && null == p.default.getForSku(n) && E.fetchUserEntitlementsForApplication(s), h[n] = {
            skuId: n,
            applicationId: s
          }, e = !0)
        }
    return e && M(), e
  }
})