"use strict";
n(47120);
var i, r, s, o, a = n(275726),
  l = n(442837),
  u = n(570140),
  _ = n(594174),
  c = n(281494),
  d = n(981631);
let E = null,
  I = {},
  T = [],
  h = new Map,
  f = new Set,
  S = !1,
  A = new Set,
  N = new Set,
  m = {},
  O = 0,
  R = null,
  p = [],
  g = !1,
  C = 0,
  v = !1,
  L = null,
  D = () => !0;

function M(e) {
  A.add(e)
}

function P(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => y(e))
}

function y(e) {
  let t = e.type === a.u.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) return !1;
  if (!N.has(t) && !A.has(t)) {
    var n;
    n = t, A.add(n), u.Z.wait(() => (0, c.IB)(t).catch(d.VqG))
  }
}
class U extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(_.default), this.syncWith([_.default], D)
  }
  checkAndFetchReferralsRemaining() {
    null == E && !S && O < 5 && (null == R || R < Date.now()) && (0, c.C$)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), E
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), null == T ? [] : T
  }
  isFetchingReferralsRemaining() {
    return S
  }
  isFetchingRecipientEligibility(e) {
    return f.has(e)
  }
  getRecipientEligibility(e) {
    return void 0 === I[e] && !f.has(e) && (0, c.Ve)(e), I[e]
  }
  getRelevantUserTrialOffer(e) {
    return m[e]
  }
  isResolving(e) {
    return A.has(e)
  }
  getEligibleUsers() {
    return p
  }
  getFetchingEligibleUsers() {
    return g
  }
  getNextIndexOfEligibleUsers() {
    return C
  }
  getIsEligibleToSendReferrals() {
    return v
  }
  getRefreshAt() {
    return L
  }
  getRelevantReferralTrialOffers() {
    return m
  }
  getRecipientStatus() {
    return h
  }
}
o = "ReferralTrialStore", (s = "displayName") in(r = U) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new U(u.Z, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
    let {
      userTrialOfferId: t,
      recipientId: n
    } = e;
    if (!S && (0, c.C$)(), !f.has(n) && (0, c.Ve)(n), !A.has(t)) {
      var i;
      i = t, A.add(i), u.Z.wait(() => (0, c.IB)(t).catch(d.VqG))
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
    let {} = e;
    v = !1, L = null, S = !0
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
    let {
      referrals_remaining: t,
      sent_user_ids: n,
      refresh_at: i,
      recipient_status: r,
      has_eligible_friends: s
    } = e;
    v = null == i && s, S = !1, E = t, T = n, L = i, h = r
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
    let {} = e;
    v = !1, L = null, S = !1, O += 1, R = Date.now() + 1e3 * Math.pow(2, O)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
    let {
      recipientId: t
    } = e;
    f.add(t)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
    let {
      recipientId: t,
      is_eligible: n
    } = e;
    I[t] = n, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
    let {
      recipientId: t
    } = e;
    I[t] = !1, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    (0, c.C$)(), m[t.id] = t, T = [...T, t.user_id]
  },
  CREATE_REFERRALS_SUCCESS: function(e) {
    let {
      userTrialOffers: t
    } = e;
    for (let e of ((0, c.C$)(), t)) m[e.id] = e, T = [...T, e.user_id]
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t && (A.delete(t.id), N.add(t.id), m[t.id] = t)
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
    let {
      userTrialOfferId: t
    } = e;
    A.delete(t), N.add(t)
  },
  REFERRALS_FETCH_ELIGIBLE_USER_START: function() {
    g = !0
  },
  REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function(e) {
    let {
      users: t,
      nextIndex: n
    } = e;
    g = !1, p = t, C = n
  },
  REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function() {
    g = !1
  },
  LOAD_MESSAGES_SUCCESS: P,
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    y(t)
  },
  LOAD_MESSAGES_AROUND_SUCCESS: P,
  LOGOUT: function() {
    E = null, I = {}, T = [], f = new Set, S = !1, A = new Set, N = new Set, m = {}, O = 0, R = null, p = [], g = !1, C = 0, v = !1, L = null, h = new Map
  }
})