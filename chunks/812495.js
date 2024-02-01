"use strict";
n.r(t), n.d(t, {
  redeemGiftCode: function() {
    return o
  },
  default: function() {
    return d
  }
});
var i = n("872717"),
  s = n("913144"),
  l = n("448993"),
  r = n("745279"),
  a = n("49111");
let u = Object.freeze({});
async function o(e) {
  let {
    code: t,
    options: n = u,
    onRedeemed: o,
    onError: d
  } = e, {
    channelId: c = null,
    paymentSource: E = null
  } = n;
  s.default.dispatch({
    type: "GIFT_CODE_REDEEM",
    code: t
  });
  try {
    let e = await i.default.post({
      url: a.Endpoints.GIFT_CODE_REDEEM(t),
      body: {
        channel_id: c,
        payment_source_id: null == E ? void 0 : E.id,
        gateway_checkout_context: await (0, r.createGatewayCheckoutContext)(E)
      },
      oldFormErrors: !0
    });
    return s.default.dispatch({
      type: "GIFT_CODE_REDEEM_SUCCESS",
      code: t,
      entitlement: e.body
    }), null == o || o(), {
      code: t,
      entitlement: e
    }
  } catch (n) {
    let e = new l.BillingError(n);
    throw s.default.dispatch({
      type: "GIFT_CODE_REDEEM_FAILURE",
      code: t,
      error: e
    }), null == d || d(e), e
  }
}
var d = {
  redeemGiftCode: o
}