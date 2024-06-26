"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(959546),
  d = n(283595),
  E = n(780570),
  I = n(55563);
let T = {},
  h = {},
  f = {},
  S = {},
  N = !1,
  A = !1,
  m = new Set,
  O = new Set,
  p = {};

function R(e) {
  T[e.id] = c.Z.createFromServer(e), null == f[e.sku_id] && (f[e.sku_id] = new Set), null == S[e.application_id] && (S[e.application_id] = new Set), null != e.subscription_id && (null == p[e.subscription_id] && (p[e.subscription_id] = new Set), p[e.subscription_id].add(e.id)), S[e.application_id].add(e.id), f[e.sku_id].add(e.id)
}

function g(e) {
  h[e.id] = c.Z.createFromServer(e)
}

function C(e) {
  return R(e.entitlement)
}
class v extends(i = u.yh) {
  initialize() {
    this.syncWith([d.Z], () => !0)
  }
  get(e) {
    return T[e]
  }
  getGiftable() {
    return l().values(h)
  }
  getForApplication(e) {
    let t = S[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  getForSku(e) {
    let t = f[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  get fetchingAllEntitlements() {
    return N
  }
  get fetchedAllEntitlements() {
    return A
  }
  get applicationIdsFetching() {
    return m
  }
  get applicationIdsFetched() {
    return O
  }
  isFetchingForApplication(e) {
    return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e)
  }
  isFetchedForApplication(e) {
    return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e)
  }
  getForSubscription(e) {
    let t = p[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  isEntitledToSku(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      r = f[t];
    if (null != r)
      for (let t of r) {
        let n = T[t];
        if (null != n && n.isValid(e, I.Z, i)) return !0
      }
    if (O.has(n)) return !1;
    let s = null != i ? d.Z.getLibraryApplication(n, i) : d.Z.getActiveLibraryApplication(n);
    return !!(null != s && s.sku.id === t && (0, E.Je)(s)) || null
  }
  hasFetchedForApplicationIds(e) {
    return e.every(e => O.has(e))
  }
}
o = "EntitlementStore", (s = "displayName") in(r = v) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new v(_.Z, {
  ENTITLEMENT_FETCH_APPLICATION_START: function(e) {
    let {
      applicationId: t
    } = e;
    m.add(t)
  },
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(e) {
    let {
      applicationId: t,
      entitlements: n
    } = e;
    for (let e of (m.delete(t), O.add(t), n)) !0 !== e.consumed && R(e)
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    h = {}, t.forEach(g)
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    for (let e of t) R(e)
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t)
      if (null != e.entitlements)
        for (let t of e.entitlements) R(t)
  },
  ENTITLEMENT_CREATE: C,
  ENTITLEMENT_UPDATE: C,
  ENTITLEMENT_DELETE: function(e) {
    return function(e) {
      delete T[e.id];
      let t = S[e.application_id];
      null != t && t.delete(e.id);
      let n = f[e.sku_id];
      if (null != n && n.delete(e.id), null != e.subscription_id) {
        let t = p[e.subscription_id];
        null != t && t.delete(e.id)
      }
    }(e.entitlement)
  },
  LOGOUT: function() {
    T = {}, f = {}, S = {}, N = !1, A = !1, m = new Set, O = new Set
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function() {
    N = !0
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    for (let e of (A = !0, N = !1, t)) R(e)
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
    A = !1, N = !1
  }
})