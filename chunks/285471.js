"use strict";
r.r(t), r.d(t, {
  updateClientPremiumTypeOverride: function() {
    return n
  }
});
var a = r("913144");
let n = (e, t) => {
  a.default.dispatch({
    type: "SET_PREMIUM_TYPE_OVERRIDE",
    premiumType: e
  }), a.default.dispatch({
    type: "UPDATE_CLIENT_PREMIUM_TYPE",
    user: t
  })
}