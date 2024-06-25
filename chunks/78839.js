"use strict";
n.d(t, {
  sE: function() {
    return L
  }
}), n(653041), n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(710845),
  _ = n(301766),
  c = n(255078),
  d = n(314897),
  E = n(122289),
  I = n(981631);
let T = null,
  h = null,
  f = null,
  S = null,
  A = null,
  N = !1,
  m = !1,
  O = null,
  p = !1,
  R = new u.Z("SubscriptionStore");

function g(e) {
  let {
    activeSubscriptions: t,
    record: n
  } = e, i = t.findIndex(e => e.id === n.id);
  if (-1 === i) return [n, ...t];
  {
    let e = [...t];
    return v(n) && n.status !== I.O0b.ENDED ? e[i] = n : e.splice(i, 1), e
  }
}

function C() {
  T = null, h = null, f = null, S = null, A = null, N = !1, m = !1, O = null, p = !1
}

function v(e) {
  return e.status !== I.O0b.UNPAID
}

function L(e) {
  let t = d.default.getId();
  return e.userId === t
}

function D(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = n ? h : T;
  if (null == i) return null;
  for (let n in i) {
    let r = i[n];
    if (!L(r)) {
      if (!m) {
        let e = d.default.getId();
        R.log("user id mismatch between logged in user and SubscriptionStore user"), (0, E.g9)("user id mismatch between logged in user and SubscriptionStore user", {
          extra: {
            authUserId: e,
            subscriptionId: r.id,
            subscriptionUserId: r.userId
          }
        }), m = !0
      }
      break
    }
    if (r.type === e && (null == t || t(r))) return r
  }
  return null
}
class M extends(i = a.ZP.Store) {
  hasFetchedSubscriptions() {
    return null != T
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return N
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return p
  }
  getPremiumSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return D(I.NYc.PREMIUM, e => !(0, _.Q0)(e.planId), e)
  }
  getPremiumTypeSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return D(I.NYc.PREMIUM, void 0, e)
  }
  getSubscriptions() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? h : T
  }
  getSubscriptionById(e) {
    var t;
    return null !== (t = null == T ? void 0 : T[e]) && void 0 !== t ? t : void 0
  }
  getActiveGuildSubscriptions() {
    return S
  }
  getActiveApplicationSubscriptions() {
    return A
  }
  getSubscriptionForPlanIds(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      i = new Set(e),
      r = n ? h : T;
    return null == r ? null : null !== (t = Object.values(r).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
  }
  getMostRecentPremiumTypeSubscription() {
    return f
  }
  getPreviousPremiumTypeSubscription() {
    return O
  }
}
o = "SubscriptionStore", (s = "displayName") in(r = M) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.ZP = new M(l.Z, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscriptions: t
    } = e, n = {}, i = {}, r = [], s = [], o = d.default.getId();
    t.forEach(e => {
      if (e.user_id !== o && !m) {
        R.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: o,
            subscriptionId: e.id,
            subscriptionUserId: e.user_id
          }
        }), m = !0;
        return
      }
      let t = c.Q.createFromServer(e);
      n[t.id] = t, v(t) && (i[t.id] = t, t.type === I.NYc.GUILD && t.status !== I.O0b.ENDED && r.push(t), t.type === I.NYc.APPLICATION && t.status !== I.O0b.ENDED && s.push(t))
    }), T = n, h = i, S = r, A = s
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
    let {
      subscription: t
    } = e, n = c.Q.createFromServer(t);
    T = {
      ...T,
      [n.id]: n
    }, v(n) && (h = {
      ...h,
      [n.id]: n
    }), null != S && n.type === I.NYc.GUILD && (S = g({
      activeSubscriptions: S,
      record: n
    })), null != A && n.type === I.NYc.APPLICATION && (S = g({
      activeSubscriptions: A,
      record: n
    }))
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (N = !0, null != t) {
      let e = d.default.getId();
      if (t.user_id !== e && !m) {
        R.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), N = !1, m = !0;
        return
      }
      f = c.Q.createFromServer(t)
    }
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (p = !0, null != t) {
      let e = d.default.getId();
      if (t.user_id !== e && !m) {
        R.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), p = !1, m = !0;
        return
      }
      O = c.Q.createFromServer(t)
    }
  },
  BILLING_SUBSCRIPTION_RESET: C,
  LOGOUT: C
})