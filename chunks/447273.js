"use strict";
a.r(t), a.d(t, {
  acceptEULA: function() {
    return n
  },
  acceptPurchaseTerms: function() {
    return s
  }
});
var l = a("570140");

function s() {
  l.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
  })
}

function n(e) {
  l.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_EULA",
    eulaId: e
  })
}