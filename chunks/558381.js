"use strict";
n.r(e), n.d(e, {
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
    return _
  },
  joinPublishedStoreListingSkuGuild: function() {
    return T
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

function c(t) {
  return (0, u.httpGetWithCountryCodeQuery)({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: t
    },
    oldFormErrors: !0
  }).then(t => (r.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: t.body.map(t => ({
      ...t,
      published: !0
    }))
  }), t.body))
}

function f(t) {
  let e = s.default.get(t),
    n = null != e && (o.default.inTestModeForApplication(e.applicationId) || l.default.inDevModeForApplication(e.applicationId));
  return r.default.dispatch({
    type: "SKU_FETCH_START",
    skuId: t
  }), (0, u.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(t) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t)).then(t => {
    n ? r.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: t.body
    }) : r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
    })
  }).catch(() => {
    r.default.dispatch({
      type: "SKU_FETCH_FAIL",
      skuId: t
    })
  })
}

function S(t) {
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(t)).then(t => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
    })
  })
}

function p(t) {
  return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(t)).then(t => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
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

function T(t) {
  return i.HTTP.post({
    url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(t),
    oldFormErrors: !0
  })
}

function _(t, e) {
  let {
    pathname: n,
    ...i
  } = (0, u.getStoreListingLocation)(t, e);
  (0, a.transitionTo)(n, i)
}