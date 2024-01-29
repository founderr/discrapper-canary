"use strict";
n.r(t), n.d(t, {
  fetchReferralsRemaining: function() {
    return o
  },
  checkRecipientEligibility: function() {
    return u
  },
  createReferralTrial: function() {
    return d
  },
  resolveReferralTrialOffer: function() {
    return c
  }
});
var i = n("872717"),
  l = n("913144"),
  r = n("819689"),
  s = n("18494"),
  a = n("49111");
let o = () => (l.default.dispatch({
    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
  }), i.default.get({
    url: a.Endpoints.GET_REFERRALS_REMAINING,
    oldFormErrors: !0
  }).then(e => {
    l.default.dispatch({
      type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
      referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
      sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
    })
  }, () => {
    l.default.dispatch({
      type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
    })
  })),
  u = e => (l.default.dispatch({
    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
    recipientId: e
  }), i.default.post({
    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
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
async function d(e) {
  try {
    var t;
    let n = await i.default.post({
        url: a.Endpoints.CREATE_REFERRAL(e),
        oldFormErrors: !0
      }),
      r = null !== (t = n.body) && void 0 !== t ? t : null;
    return l.default.dispatch({
      type: "BILLING_CREATE_REFERRAL_SUCCESS",
      userTrialOffer: r
    }), {
      userTrialOffer: r
    }
  } catch (e) {
    if (l.default.dispatch({
        type: "BILLING_CREATE_REFERRAL_FAIL"
      }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
      let t = s.default.getCurrentlySelectedChannelId();
      null != t && r.default.sendClydeError(t, e.body.code)
    }
  }
}
async function c(e) {
  try {
    var t;
    let n = await i.default.get({
        url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
        oldFormErrors: !0
      }),
      r = null !== (t = n.body) && void 0 !== t ? t : null;
    return l.default.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
      userTrialOffer: r
    }), {
      userTrialOffer: r
    }
  } catch (t) {
    l.default.dispatch({
      type: "BILLING_REFERRAL_RESOLVE_FAIL",
      userTrialOfferId: e
    })
  }
}