"use strict";
n.r(t), n.d(t, {
  CreateReferralStatus: function() {
    return r
  },
  ReferralOfferStatus: function() {
    return i
  },
  checkRecipientEligibility: function() {
    return h
  },
  createReferralTrial: function() {
    return m
  },
  createReferralTrials: function() {
    return A
  },
  fetchReferralEligibleUsers: function() {
    return f
  },
  fetchReferralsRemaining: function() {
    return S
  },
  resolveReferralTrialOffer: function() {
    return N
  }
}), n("47120"), n("653041");
var i, r, s, a, o = n("544891"),
  l = n("570140"),
  u = n("904245"),
  d = n("598077"),
  _ = n("944486"),
  c = n("960048"),
  E = n("981631");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {}))[s.REDEEMED = 1] = "REDEEMED", s[s.PENDING = 2] = "PENDING", (a = r || (r = {}))[a.SUCCESS = 1] = "SUCCESS", a[a.FAIL = 2] = "FAIL";
let T = new class e {
  set(e, t) {
    this.cache.set(e, t)
  }
  get(e) {
    return this._checkExpiration(), this.cache.get(e)
  }
  has(e) {
    return this._checkExpiration(), this.cache.has(e)
  }
  _checkExpiration() {
    this.expiration < Date.now() && this.cache.clear()
  }
  constructor() {
    I(this, "cache", void 0), I(this, "expiration", void 0), this.cache = new Map, this.expiration = Date.now() + 6e5
  }
};
async function f(e, t) {
  let n = JSON.stringify({
    index: e,
    searchQuery: t
  });
  if (T.has(n)) return T.get(n);
  let {
    users: i,
    next_index: r
  } = (await o.HTTP.post({
    url: E.Endpoints.GET_REFERRAL_ELIGIBLE_USERS,
    body: {
      index: e,
      limit: 10,
      search_query: t
    },
    oldFormErrors: !0
  })).body, s = {
    users: i.map(e => new d.default(e)),
    nextIndex: r
  };
  return T.set(n, s), s
}
let S = () => (l.default.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
  }), o.HTTP.get({
    url: E.Endpoints.GET_REFERRALS_REMAINING,
    oldFormErrors: !0
  }).then(e => {
    var t, n;
    let i = new Map;
    if (null != e.body && null != e.body.recipient_status)
      for (let t in e.body.recipient_status) {
        let n = e.body.recipient_status[t];
        i.set(t, n)
      }
    l.default.dispatch({
      type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
      referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
      sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
      refresh_at: null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== n ? n : null,
      recipient_status: i,
      has_eligible_friends: e.body.has_eligible_friends
    })
  }, () => {
    l.default.dispatch({
      type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
    })
  })),
  h = e => (l.default.dispatch({
    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
    recipientId: e
  }), o.HTTP.post({
    url: E.Endpoints.CREATE_REFERRAL_PREVIEW(e),
    oldFormErrors: !0
  }).then(t => {
    l.default.dispatch({
      type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
      recipientId: e,
      is_eligible: null != t.body && t.body.is_eligible
    })
  }, () => {
    l.default.dispatch({
      type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
      recipientId: e
    })
  }));
async function A(e) {
  let t = [],
    n = new Map;
  for (let r of e) try {
    var i;
    let e = await o.HTTP.post({
        url: E.Endpoints.CREATE_REFERRAL(r),
        oldFormErrors: !0
      }),
      s = null !== (i = e.body) && void 0 !== i ? i : null;
    null != s && t.push(s), n.set(r, 1)
  } catch (e) {
    c.default.captureException(e), n.set(r, 2)
  }
  return l.default.dispatch({
    type: "CREATE_REFERRALS_SUCCESS",
    userTrialOffers: t
  }), n
}
async function m(e) {
  try {
    var t;
    let n = await o.HTTP.post({
        url: E.Endpoints.CREATE_REFERRAL(e),
        oldFormErrors: !0
      }),
      i = null !== (t = n.body) && void 0 !== t ? t : null;
    return l.default.dispatch({
      type: "BILLING_CREATE_REFERRAL_SUCCESS",
      userTrialOffer: i
    }), {
      userTrialOffer: i
    }
  } catch (e) {
    if (l.default.dispatch({
        type: "BILLING_CREATE_REFERRAL_FAIL"
      }), e.body.code === E.AbortCodes.INVALID_MESSAGE_SEND_USER) {
      let t = _.default.getCurrentlySelectedChannelId();
      null != t && u.default.sendClydeError(t, e.body.code)
    }
  }
}
async function N(e) {
  try {
    var t;
    let n = await o.HTTP.get({
        url: E.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
        oldFormErrors: !0
      }),
      i = null !== (t = n.body) && void 0 !== t ? t : null;
    return l.default.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
      userTrialOffer: i
    }), {
      userTrialOffer: i
    }
  } catch (t) {
    l.default.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_FAIL",
      userTrialOfferId: e
    })
  }
}