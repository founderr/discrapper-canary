"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("637612"),
  r = n("446674"),
  l = n("913144"),
  s = n("697218"),
  a = n("179935"),
  o = n("49111");
let u = null,
  d = {},
  c = [],
  f = new Set,
  E = !1,
  h = new Set,
  _ = new Set,
  C = {},
  p = 0,
  S = null,
  I = () => !0;

function R(e) {
  h.add(e)
}

function m(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => v(e))
}

function v(e) {
  let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
  if (null == t) return !1;
  if (!_.has(t) && !h.has(t)) {
    var n;
    n = t, h.add(n), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
  }
}
class g extends r.default.Store {
  initialize() {
    this.waitFor(s.default), this.syncWith([s.default], I)
  }
  checkAndFetchReferralsRemaining() {
    null == u && !E && p < 5 && (null == S || S < Date.now()) && (0, a.fetchReferralsRemaining)()
  }
  getReferralsRemaining() {
    return this.checkAndFetchReferralsRemaining(), u
  }
  getSentUserIds() {
    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
  }
  isFetchingReferralsRemaining() {
    return E
  }
  isFetchingRecipientEligibility(e) {
    return f.has(e)
  }
  getRecipientEligibility(e) {
    return void 0 === d[e] && !f.has(e) && (0, a.checkRecipientEligibility)(e), d[e]
  }
  getRelevantUserTrialOffer(e) {
    return C[e]
  }
  isResolving(e) {
    return h.has(e)
  }
}
g.displayName = "ReferralTrialStore";
var T = new g(l.default, {
  BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
    let {
      userTrialOfferId: t,
      recipientId: n
    } = e;
    if (!E && (0, a.fetchReferralsRemaining)(), !f.has(n) && (0, a.checkRecipientEligibility)(n), !h.has(t)) {
      var i;
      i = t, h.add(i), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
    }
  },
  BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
    let {} = e;
    E = !0
  },
  BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
    let {
      referrals_remaining: t,
      sent_user_ids: n
    } = e;
    E = !1, u = t, c = n
  },
  BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
    let {} = e;
    E = !1, p += 1, S = Date.now() + 1e3 * Math.pow(2, p)
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
    d[t] = n, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
    let {
      recipientId: t
    } = e;
    d[t] = !1, f.delete(t)
  },
  BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    (0, a.fetchReferralsRemaining)(), C[t.id] = t, c = [...c, t.user_id]
  },
  BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t && (h.delete(t.id), _.add(t.id), C[t.id] = t)
  },
  BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
    let {
      userTrialOfferId: t
    } = e;
    h.delete(t), _.add(t)
  },
  LOAD_MESSAGES_SUCCESS: m,
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    v(t)
  },
  LOAD_MESSAGES_AROUND_SUCCESS: m,
  LOGOUT: function() {
    u = null, d = {}, c = [], f = new Set, E = !1, h = new Set, _ = new Set, C = {}, p = 0, S = null
  }
})