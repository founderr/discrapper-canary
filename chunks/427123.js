n(47120), n(653041);
var s, i, l, a, r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(433517),
  d = n(570140),
  E = n(496929),
  _ = n(16084),
  I = n(728345),
  T = n(812206),
  N = n(594190),
  m = n(594174),
  h = n(580130),
  C = n(55563),
  S = n(981631);
let A = "DetectedOffPlatformPremiumPerksStore",
  p = {},
  g = {},
  f = [];

function O() {
  let e = !1;
  for (let {
      skuId: t,
      applicationId: n
    }
    of o().values(g)) {
    if (f.includes(t)) continue;
    let s = T.Z.getApplication(n);
    if (null == s) {
      !T.Z.isFetchingApplication(n) && !T.Z.didFetchingApplicationFail(n) && I.Z.fetchApplication(n);
      continue
    }
    let i = C.Z.get(t);
    if (null == i) {
      !C.Z.isFetching(t) && !C.Z.didFetchingSkuFail(t) && _.$N(s.id, t);
      continue
    }
    h.Z.applicationIdsFetching.has(s.id) || h.Z.isEntitledToSku(m.default.getCurrentUser(), t, s.id, s.id) || !i.available ? null != p[t] && (delete p[t], e = !0) : (p[t] = {
      skuId: t,
      applicationId: n
    }, e = !0)
  }
  return e
}
class R extends(s = c.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(N.ZP, C.Z, h.Z), f = null !== (e = u.K.get(A)) && void 0 !== e ? e : f
  }
  getDetectedOffPlatformPremiumPerks() {
    return o().values(p)
  }
}
a = "DetectedOffPlatformPremiumPerksStore", (l = "displayName") in(i = R) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new R(d.Z, {
  LOGOUT: function() {
    p = {}, g = {}
  },
  SKU_FETCH_SUCCESS: O,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
  ENTITLEMENT_CREATE: O,
  APPLICATION_FETCH_SUCCESS: O,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete p[t], f.includes(t)) return !1;
    f.push(t), u.K.set(A, f)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = !1;
    for (let {
        id: t,
        distributor: n
      }
      of N.ZP.getRunningGames())
      if (null != t && n !== S.GQo.DISCORD)
        for (let {
            skuId: n,
            applicationId: s
          }
          of S.Lg6) {
          if (!(s !== t || f.includes(n))) null == g[n] && (!h.Z.applicationIdsFetched.has(s) && !h.Z.applicationIdsFetching.has(s) && null == h.Z.getForSku(n) && E.yD(s), g[n] = {
            skuId: n,
            applicationId: s
          }, e = !0)
        }
    return e && O(), e
  }
})