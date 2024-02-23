"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("446674"),
  s = n("913144");
let i = {
    premiumLikelihood: void 0,
    isFetching: !1,
    fetched: !1
  },
  a = i;
class l extends r.default.Store {
  initialize() {
    a = i
  }
  getState() {
    return a
  }
  shouldFetchPremiumLikelihood() {
    return !a.isFetching && !a.fetched
  }
}
l.displayName = "UserPremiumLikelihoodStore";
var o = new l(s.default, {
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