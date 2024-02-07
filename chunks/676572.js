"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("446674"),
  r = n("913144");
let l = {
    premiumLikelihood: void 0,
    isFetching: !1,
    fetched: !1
  },
  s = l;
class a extends i.default.Store {
  initialize() {
    s = l
  }
  getState() {
    return s
  }
  shouldFetchPremiumLikelihood() {
    return !s.isFetching && !s.fetched
  }
}
a.displayName = "UserPremiumLikelihoodStore";
var o = new a(r.default, {
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
    s.isFetching = !0
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
    let {
      premiumLikelihood: t
    } = e;
    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
    s.isFetching = !1
  },
  LOGOUT: function() {
    s.premiumLikelihood = void 0
  }
})