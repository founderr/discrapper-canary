"use strict";
n.r(t), n.d(t, {
  fetchUserEntitlementsForApplication: function() {
    return o
  },
  fetchUserEntitlements: function() {
    return l
  },
  fetchGiftableEntitlements: function() {
    return s
  }
});
var u = n("872717"),
  r = n("913144"),
  a = n("271560"),
  i = n("49111");

function o(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return r.default.wait(() => {
    r.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_START",
      applicationId: e
    })
  }), u.default.get({
    url: i.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
    oldFormErrors: !0,
    query: {
      exclude_consumed: t
    }
  }).then(t => (r.default.dispatch({
    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
    applicationId: e,
    entitlements: t.body
  }), t.body)).catch(() => {
    r.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
      applicationId: e
    })
  })
}
async function l(e) {
  let {
    withSku: t = !1,
    withApplication: n = !1,
    entitlementType: a
  } = e;
  r.default.dispatch({
    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
  });
  try {
    let e = await u.default.get({
      url: i.Endpoints.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: t,
        with_application: n,
        entitlement_type: a
      }
    });
    r.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    r.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
    })
  }
}
async function s() {
  r.default.dispatch({
    type: "ENTITLEMENTS_GIFTABLE_FETCH"
  });
  try {
    let e = await (0, a.httpGetWithCountryCodeQuery)({
      url: i.Endpoints.ENTITLEMENTS_GIFTABLE
    });
    r.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    r.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
    })
  }
}