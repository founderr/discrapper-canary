"use strict";
n.r(t), n.d(t, {
  authenticatedUserFilter: function() {
    return A
  },
  default: function() {
    return y
  }
}), n("424973"), n("222007");
var i = n("446674"),
  r = n("913144"),
  s = n("605250"),
  a = n("797647"),
  o = n("388290"),
  l = n("271938"),
  u = n("745279"),
  c = n("49111");
let d = null,
  p = null,
  h = null,
  f = null,
  E = null,
  _ = !1,
  m = !1,
  S = null,
  g = !1,
  T = new s.default("SubscriptionStore");

function I(e) {
  let {
    activeSubscriptions: t,
    record: n
  } = e, i = t.findIndex(e => e.id === n.id);
  if (-1 === i) return [n, ...t];
  {
    let e = [...t];
    return C(n) && n.status !== c.SubscriptionStatusTypes.ENDED ? e[i] = n : e.splice(i, 1), e
  }
}

function v() {
  d = null, p = null, h = null, f = null, E = null, _ = !1, m = !1, S = null, g = !1
}

function C(e) {
  return e.status !== c.SubscriptionStatusTypes.UNPAID
}

function A(e) {
  let t = l.default.getId();
  return e.userId === t
}

function R(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = n ? p : d;
  if (null == i) return null;
  for (let n in i) {
    let r = i[n];
    if (!A(r)) {
      if (!m) {
        let e = l.default.getId();
        T.log("user id mismatch between logged in user and SubscriptionStore user"), (0, u.captureBillingMessage)("user id mismatch between logged in user and SubscriptionStore user", {
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
class N extends i.default.Store {
  hasFetchedSubscriptions() {
    return null != d
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return _
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return g
  }
  getPremiumSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return R(c.SubscriptionTypes.PREMIUM, e => !(0, a.isNoneSubscription)(e.planId), e)
  }
  getPremiumTypeSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return R(c.SubscriptionTypes.PREMIUM, void 0, e)
  }
  getSubscriptions() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? p : d
  }
  getSubscriptionById(e) {
    var t;
    return null !== (t = null == d ? void 0 : d[e]) && void 0 !== t ? t : void 0
  }
  getActiveGuildSubscriptions() {
    return f
  }
  getActiveApplicationSubscriptions() {
    return E
  }
  getSubscriptionForPlanIds(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      i = new Set(e),
      r = n ? p : d;
    return null == r ? null : null !== (t = Object.values(r).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
  }
  getMostRecentPremiumTypeSubscription() {
    return h
  }
  getPreviousPremiumTypeSubscription() {
    return S
  }
}
N.displayName = "SubscriptionStore";
var y = new N(r.default, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscriptions: t
    } = e, n = {}, i = {}, r = [], s = [], a = l.default.getId();
    t.forEach(e => {
      if (e.user_id !== a && !m) {
        T.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: a,
            subscriptionId: e.id,
            subscriptionUserId: e.user_id
          }
        }), m = !0;
        return
      }
      let t = o.SubscriptionRecord.createFromServer(e);
      n[t.id] = t, C(t) && (i[t.id] = t, t.type === c.SubscriptionTypes.GUILD && t.status !== c.SubscriptionStatusTypes.ENDED && r.push(t), t.type === c.SubscriptionTypes.APPLICATION && t.status !== c.SubscriptionStatusTypes.ENDED && s.push(t))
    }), d = n, p = i, f = r, E = s
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
    let {
      subscription: t
    } = e, n = o.SubscriptionRecord.createFromServer(t);
    d = {
      ...d,
      [n.id]: n
    }, C(n) && (p = {
      ...p,
      [n.id]: n
    }), null != f && n.type === c.SubscriptionTypes.GUILD && (f = I({
      activeSubscriptions: f,
      record: n
    })), null != E && n.type === c.SubscriptionTypes.APPLICATION && (f = I({
      activeSubscriptions: E,
      record: n
    }))
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (_ = !0, null != t) {
      let e = l.default.getId();
      if (t.user_id !== e && !m) {
        T.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), _ = !1, m = !0;
        return
      }
      let n = o.SubscriptionRecord.createFromServer(t);
      h = n
    }
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (g = !0, null != t) {
      let e = l.default.getId();
      if (t.user_id !== e && !m) {
        T.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), g = !1, m = !0;
        return
      }
      let n = o.SubscriptionRecord.createFromServer(t);
      S = n
    }
  },
  BILLING_SUBSCRIPTION_RESET: v,
  LOGOUT: v
})