"use strict";
n.r(t), n.d(t, {
  closeModal: function() {
    return r
  },
  openModal: function() {
    return i
  }
});
var s = n("570140"),
  l = n("78839"),
  a = n("355467");
async function i(e) {
  return null == l.default.getPremiumSubscription() && await a.fetchSubscriptions(), new Promise((t, n) => {
    s.default.dispatch({
      type: "PREMIUM_REQUIRED_MODAL_OPEN",
      context: e,
      resolve: t,
      reject: n
    })
  })
}

function r(e) {
  s.default.dispatch({
    type: "PREMIUM_REQUIRED_MODAL_CLOSE",
    shouldContinue: e
  })
}