"use strict";
n.r(t), n.d(t, {
  redeemGiftCode: function() {
    return d
  },
  default: function() {
    return o
  }
});
var l = n("872717"),
  i = n("913144"),
  s = n("448993"),
  r = n("745279"),
  u = n("49111");
let a = Object.freeze({});
async function d(e) {
  let {
    code: t,
    options: n = a,
    onRedeemed: d,
    onError: o
  } = e, {
    channelId: c = null,
    paymentSource: E = null
  } = n;
  i.default.dispatch({
    type: "GIFT_CODE_REDEEM",
    code: t
  });
  try {
    let e = await l.default.post({
      url: u.Endpoints.GIFT_CODE_REDEEM(t),
      body: {
        channel_id: c,
        payment_source_id: null == E ? void 0 : E.id,
        gateway_checkout_context: await (0, r.createGatewayCheckoutContext)(E)
      },
      oldFormErrors: !0
    });
    return i.default.dispatch({
      type: "GIFT_CODE_REDEEM_SUCCESS",
      code: t,
      entitlement: e.body
    }), null == d || d(), {
      code: t,
      entitlement: e
    }
  } catch (n) {
    let e = new s.BillingError(n);
    throw i.default.dispatch({
      type: "GIFT_CODE_REDEEM_FAILURE",
      code: t,
      error: e
    }), null == o || o(e), e
  }
}
var o = {
  redeemGiftCode: d
}