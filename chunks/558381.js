"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return c
  },
  fetchStoreListingById: function() {
    return p
  },
  fetchStoreListingForApplication: function() {
    return m
  },
  fetchStoreListingForSku: function() {
    return f
  },
  goToApplicationStoreListing: function() {
    return T
  },
  goToSKUStoreListing: function() {
    return v
  },
  joinPublishedStoreListingSkuGuild: function() {
    return g
  },
  matureAgree: function() {
    return h
  },
  matureDisagree: function() {
    return S
  }
});
var i = n("544891"),
  l = n("570140"),
  r = n("115130");
n("812206");
var s = n("703656"),
  a = n("55563");
n("551428");
var o = n("695103"),
  u = n("73346"),
  d = n("981631");

function c(e) {
  return (0, u.httpGetWithCountryCodeQuery)({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: e
    },
    oldFormErrors: !0
  }).then(e => (l.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body.map(e => ({
      ...e,
      published: !0
    }))
  }), e.body))
}

function f(e) {
  let t = a.default.get(e),
    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || r.default.inDevModeForApplication(t.applicationId));
  return (0, u.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
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
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function m(e) {
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function h() {
  l.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function S() {
  (0, s.transitionTo)(d.Routes.APPLICATION_STORE)
}

function g(e) {
  return i.HTTP.post({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function v(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, u.getStoreListingLocation)(e, t);
  (0, s.transitionTo)(n, i)
}

function T(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, u.getApplicationStoreListingLocation)(e, t);
  (0, s.transitionTo)(n, i)
}