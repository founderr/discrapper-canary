"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return u
  },
  fetchStoreListingById: function() {
    return h
  },
  fetchStoreListingForApplication: function() {
    return m
  },
  fetchStoreListingForSku: function() {
    return f
  },
  goToApplicationStoreListing: function() {
    return v
  },
  goToSKUStoreListing: function() {
    return g
  },
  joinPublishedStoreListingSkuGuild: function() {
    return x
  },
  matureAgree: function() {
    return p
  },
  matureDisagree: function() {
    return S
  }
});
var i = n("544891"),
  r = n("570140"),
  s = n("115130");
n("812206");
var l = n("703656"),
  a = n("55563");
n("551428");
var o = n("695103"),
  d = n("73346"),
  c = n("981631");

function u(e) {
  return (0, d.httpGetWithCountryCodeQuery)({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
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
    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || s.default.inDevModeForApplication(t.applicationId));
  return (0, d.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
    n ? r.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function h(e) {
  return (0, d.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function m(e) {
  return (0, d.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function p() {
  r.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function S() {
  (0, l.transitionTo)(c.Routes.APPLICATION_STORE)
}

function x(e) {
  return i.HTTP.post({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function g(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, d.getStoreListingLocation)(e, t);
  (0, l.transitionTo)(n, i)
}

function v(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, d.getApplicationStoreListingLocation)(e, t);
  (0, l.transitionTo)(n, i)
}