"use strict";
r.r(t), r.d(t, {
  fetchUserEntitlementsForApplication: function() {
    return s
  },
  fetchUserEntitlements: function() {
    return l
  },
  fetchGiftableEntitlements: function() {
    return o
  }
});
var n = r("872717"),
  a = r("913144"),
  u = r("271560"),
  i = r("49111");

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return a.default.wait(() => {
    a.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_START",
      applicationId: e
    })
  }), n.default.get({
    url: i.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
    oldFormErrors: !0,
    query: {
      exclude_consumed: t
    }
  }).then(t => (a.default.dispatch({
    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
    applicationId: e,
    entitlements: t.body
  }), t.body)).catch(() => {
    a.default.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
      applicationId: e
    })
  })
}
async function l(e) {
  let {
    withSku: t = !1,
    withApplication: r = !1,
    entitlementType: u
  } = e;
  a.default.dispatch({
    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
  });
  try {
    let e = await n.default.get({
      url: i.Endpoints.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: t,
        with_application: r,
        entitlement_type: u
      }
    });
    a.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    a.default.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
    })
  }
}
async function o() {
  a.default.dispatch({
    type: "ENTITLEMENTS_GIFTABLE_FETCH"
  });
  try {
    let e = await (0, u.httpGetWithCountryCodeQuery)({
      url: i.Endpoints.ENTITLEMENTS_GIFTABLE
    });
    a.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    a.default.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
    })
  }
}