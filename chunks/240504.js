var i, s = n(442837),
  l = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = 12 * n(70956).Z.Millis.HOUR,
  o = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  c = {
    hasFetchedRelevance: !1
  },
  u = o,
  d = c;
class E extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    d = c, u = o;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < r && (u = e)
  }
  get hasFetchedRelevance() {
    return d.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return u.profileThemesRelevanceExceeded
  }
  getState() {
    return u
  }
}
a(E, "displayName", "PerksRelevanceStore"), a(E, "persistKey", "PerksRelevanceStore"), t.Z = new E(l.Z, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    d.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (u.profileThemesRelevanceExceeded = t.eligible, u.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    d = c, u = o
  }
})