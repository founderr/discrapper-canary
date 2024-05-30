"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return c
  },
  fetchStoreListingById: function() {
    return S
  },
  fetchStoreListingForApplication: function() {
    return p
  },
  fetchStoreListingForSku: function() {
    return f
  },
  goToSKUStoreListing: function() {
    return T
  },
  joinPublishedStoreListingSkuGuild: function() {
    return v
  },
  matureAgree: function() {
    return m
  },
  matureDisagree: function() {
    return h
  }
});
var i = n("544891"),
  r = n("570140"),
  l = n("115130");
n("812206");
var a = n("703656"),
  s = n("55563");
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
  }).then(e => (r.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body.map(e => ({
      ...e,
      published: !0
    }))
  }), e.body))
}

function f(e) {
  let t = s.default.get(e),
    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
  return (0, u.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
    n ? r.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function S(e) {
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function p(e) {
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function m() {
  r.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function h() {
  (0, a.transitionTo)(d.Routes.APPLICATION_STORE)
}

function v(e) {
  return i.HTTP.post({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function T(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, u.getStoreListingLocation)(e, t);
  (0, a.transitionTo)(n, i)
}