"use strict";
n.r(e), n.d(e, {
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
    return T
  },
  joinPublishedStoreListingSkuGuild: function() {
    return h
  },
  goToSKUStoreListing: function() {
    return _
  },
  goToApplicationStoreListing: function() {
    return E
  }
});
var i = n("872717"),
  l = n("913144"),
  a = n("84460");
n("299285");
var r = n("393414"),
  u = n("552712");
n("698041");
var s = n("167726"),
  o = n("271560"),
  c = n("49111");

function d(t) {
  return (0, o.httpGetWithCountryCodeQuery)({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: t
    },
    oldFormErrors: !0
  }).then(t => (l.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: t.body
  }), t.body))
}

function f(t) {
  let e = u.default.get(t),
    n = null != e && (s.default.inTestModeForApplication(e.applicationId) || a.default.inDevModeForApplication(e.applicationId));
  return (0, o.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(t) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t)).then(t => {
    n ? l.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: t.body
    }) : l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
    })
  })
}

function p(t) {
  return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(t)).then(t => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
    })
  })
}

function I(t) {
  return (0, o.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(t)).then(t => {
    l.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: t.body
    })
  })
}

function S() {
  l.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function T() {
  (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
}

function h(t) {
  return i.default.post({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(t),
    oldFormErrors: !0
  })
}

function _(t, e) {
  let {
    pathname: n,
    ...i
  } = (0, o.getStoreListingLocation)(t, e);
  (0, r.transitionTo)(n, i)
}

function E(t, e) {
  let {
    pathname: n,
    ...i
  } = (0, o.getApplicationStoreListingLocation)(t, e);
  (0, r.transitionTo)(n, i)
}