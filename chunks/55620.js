"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return d
  },
  fetchStoreListingForSku: function() {
    return f
  },
  fetchStoreListingById: function() {
    return p
  },
  fetchStoreListingForApplication: function() {
    return I
  },
  matureAgree: function() {
    return S
  },
  matureDisagree: function() {
    return h
  },
  joinPublishedStoreListingSkuGuild: function() {
    return _
  },
  goToSKUStoreListing: function() {
    return T
  },
  goToApplicationStoreListing: function() {
    return C
  }
});
var i = n("872717"),
  l = n("913144"),
  a = n("84460");
n("299285");
var r = n("393414"),
  s = n("552712");
n("698041");
var u = n("167726"),
  o = n("271560"),
  c = n("49111");

function d(e) {
  return (0, o.httpGetWithCountryCodeQuery)({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: e
    },
    oldFormErrors: !0
  }).then(e => (l.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body
  }), e.body))
}

function f(e) {
  let t = s.default.get(e),
    n = null != t && (u.default.inTestModeForApplication(t.applicationId) || a.default.inDevModeForApplication(t.applicationId));
  return (0, o.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
    n ? l.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function p(e) {
  return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function I(e) {
  return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function S() {
  l.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function h() {
  (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
}

function _(e) {
  return i.default.post({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function T(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, o.getStoreListingLocation)(e, t);
  (0, r.transitionTo)(n, i)
}

function C(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, o.getApplicationStoreListingLocation)(e, t);
  (0, r.transitionTo)(n, i)
}