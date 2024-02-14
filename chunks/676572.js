"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("446674"),
  a = r("913144");
let u = {
    premiumLikelihood: void 0,
    isFetching: !1,
    fetched: !1
  },
  i = u;
class s extends n.default.Store {
  initialize() {
    i = u
  }
  getState() {
    return i
  }
  shouldFetchPremiumLikelihood() {
    return !i.isFetching && !i.fetched
  }
}
s.displayName = "UserPremiumLikelihoodStore";
var l = new s(a.default, {
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
    i.isFetching = !0
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
    let {
      premiumLikelihood: t
    } = e;
    i.premiumLikelihood = t, i.fetched = !0, i.isFetching = !1
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
    i.isFetching = !1
  },
  LOGOUT: function() {
    i.premiumLikelihood = void 0
  }
})