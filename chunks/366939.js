"use strict";
n.r(t), n.d(t, {
  changePaymentSource: function() {
    return d
  },
  changeSubscriptionCurrency: function() {
    return _
  },
  clearError: function() {
    return c
  },
  resubscribe: function() {
    return E
  },
  resume: function() {
    return S
  },
  subscribe: function() {
    return s
  }
});
var r = n("512722"),
  u = n.n(r),
  i = n("570140"),
  l = n("74538"),
  a = n("355467"),
  o = n("981631");
async function s(e) {
  let {
    planId: t,
    currency: n,
    paymentSource: r,
    trialId: u,
    code: l,
    metadata: o,
    referralCode: s,
    loadId: E
  } = e;
  i.default.dispatch({
    type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
  });
  try {
    let e = await a.createSubscription({
      items: [{
        planId: t,
        quantity: 1
      }],
      paymentSource: r,
      trialId: u,
      code: l,
      currency: n,
      metadata: o,
      referralCode: s,
      loadId: E
    });
    return null != e.subscription && i.default.dispatch({
      type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
      subscription: e.subscription
    }), e
  } catch (e) {
    throw i.default.dispatch({
      type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
      error: e
    }), e
  }
}
async function E(e, t, n, r, s, E) {
  try {
    let S = (0, l.getPremiumPlanItem)(e);
    u()(S, "Expected existing premium plan");
    let _ = (0, l.getItemsWithUpsertedPremiumPlanId)(e, S.planId);
    await a.updateSubscription(e, {
      status: o.SubscriptionStatusTypes.ACTIVE,
      paymentSource: r,
      items: _,
      currency: n
    }, t, s, E), i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function S(e, t, n) {
  try {
    await a.updateSubscription(e, {
      status: o.SubscriptionStatusTypes.ACTIVE
    }, t, n)
  } catch (e) {
    throw e
  }
}
async function _(e, t, n, r) {
  try {
    await a.changeSubscriptionCurrency(e, t, n, r), i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}
async function d(e, t, n, r, u) {
  try {
    await a.changePaymentSource(e, t, n, r, u), i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "PREMIUM_PAYMENT_UPDATE_FAIL",
      error: e
    }), e
  }
}

function c() {
  i.default.dispatch({
    type: "PREMIUM_PAYMENT_ERROR_CLEAR"
  })
}