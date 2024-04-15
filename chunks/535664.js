"use strict";
t.r(r), t.d(r, {
  updateClientPremiumTypeOverride: function() {
    return n
  }
});
var a = t("570140");
let n = (e, r) => {
  a.default.dispatch({
    type: "SET_PREMIUM_TYPE_OVERRIDE",
    premiumType: e
  }), a.default.dispatch({
    type: "UPDATE_CLIENT_PREMIUM_TYPE",
    user: r
  })
}