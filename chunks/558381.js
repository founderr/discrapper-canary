"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return u
  },
  fetchStoreListingById: function() {
    return m
  },
  fetchStoreListingForApplication: function() {
    return p
  },
  fetchStoreListingForSku: function() {
    return f
  },
  goToApplicationStoreListing: function() {
    return g
  },
  goToSKUStoreListing: function() {
    return x
  },
  joinPublishedStoreListingSkuGuild: function() {
    return v
  },
  matureAgree: function() {
    return h
  },
  matureDisagree: function() {
    return S
  }
});
var i = n("544891"),
  r = n("570140"),
  l = n("115130");
n("812206");
var s = n("703656"),
  a = n("55563");
n("551428");
var o = n("695103"),
  c = n("73346"),
  d = n("981631");

function u(e) {
  return (0, c.httpGetWithCountryCodeQuery)({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: e
    },
    oldFormErrors: !0
  }).then(e => (r.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body
  }), e.body))
}

function f(e) {
  let t = a.default.get(e),
    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
  return (0, c.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
    n ? r.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function m(e) {
  return (0, c.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function p(e) {
  return (0, c.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function h() {
  r.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function S() {
  (0, s.transitionTo)(d.Routes.APPLICATION_STORE)
}

function v(e) {
  return i.HTTP.post({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function x(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, c.getStoreListingLocation)(e, t);
  (0, s.transitionTo)(n, i)
}

function g(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, c.getApplicationStoreListingLocation)(e, t);
  (0, s.transitionTo)(n, i)
}