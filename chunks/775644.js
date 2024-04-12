"use strict";
i.r(t), i.d(t, {
  redeemGiftCode: function() {
    return o
  }
});
var s = i("544891"),
  n = i("570140"),
  l = i("881052"),
  a = i("122289"),
  r = i("981631");
let d = Object.freeze({});
async function o(e) {
  let {
    code: t,
    options: i = d,
    onRedeemed: o,
    onError: u
  } = e, {
    channelId: c = null,
    paymentSource: E = null
  } = i;
  n.default.dispatch({
    type: "GIFT_CODE_REDEEM",
    code: t
  });
  try {
    let e = await s.HTTP.post({
      url: r.Endpoints.GIFT_CODE_REDEEM(t),
      body: {
        channel_id: c,
        payment_source_id: null == E ? void 0 : E.id,
        gateway_checkout_context: await (0, a.createGatewayCheckoutContext)(E)
      },
      oldFormErrors: !0
    });
    return n.default.dispatch({
      type: "GIFT_CODE_REDEEM_SUCCESS",
      code: t,
      entitlement: e.body
    }), null == o || o(), {
      code: t,
      entitlement: e
    }
  } catch (i) {
    let e = new l.BillingError(i);
    throw n.default.dispatch({
      type: "GIFT_CODE_REDEEM_FAILURE",
      code: t,
      error: e
    }), null == u || u(e), e
  }
}
t.default = {
  redeemGiftCode: o
}