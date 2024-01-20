"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("446674"),
  l = n("913144");
let r = {
    premiumLikelihood: void 0,
    isFetching: !1,
    fetched: !1
  },
  a = r;
class s extends i.default.Store {
  initialize() {
    a = r
  }
  getState() {
    return a
  }
  shouldFetchPremiumLikelihood() {
    return !a.isFetching && !a.fetched
  }
}
s.displayName = "UserPremiumLikelihoodStore";
var o = new s(l.default, {
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
    a.isFetching = !0
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
    let {
      premiumLikelihood: t
    } = e;
    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
    a.isFetching = !1
  },
  LOGOUT: function() {
    a.premiumLikelihood = void 0
  }
})