"use strict";
s.r(t), s.d(t, {
  getPaymentPayoutGroups: function() {
    return n
  }
});
var a = s("872717"),
  l = s("49111");
let n = async (e, t) => {
  let s = await a.default.get({
    url: l.Endpoints.PAYMENT_PAYOUT_GROUPS(e),
    query: t
  });
  return s.body
}