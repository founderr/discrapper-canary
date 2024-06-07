"use strict";
r.r(t), r.d(t, {
  updateClientCreatedAtOverride: function() {
    return i
  },
  updateClientPremiumTypeOverride: function() {
    return n
  }
});
var a = r("570140");
let n = (e, t) => {
    a.default.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), a.default.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: t
    })
  },
  i = e => {
    a.default.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }