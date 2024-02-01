"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("748820"),
  l = s("77078"),
  i = s("112679"),
  r = s("55689"),
  o = s("21526"),
  d = s("599110"),
  u = s("49111");

function c(e) {
  let {
    skuId: t,
    isGift: c = !1,
    giftMessage: S,
    onClose: E,
    onComplete: T,
    analyticsLocations: f,
    analyticsObject: m
  } = e, _ = !1, g = (0, n.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await s.el("894742").then(s.bind(s, "894742"));
    return s => {
      let {
        onClose: n,
        returnRef: l,
        ...i
      } = s;
      return (0, a.jsx)(e, {
        ...i,
        loadId: g,
        skuId: t,
        isGift: c,
        giftMessage: S,
        analyticsLocations: f,
        onClose: e => {
          n(), null == E || E(e)
        },
        onComplete: () => {
          _ = !0, null == T || T()
        },
        returnRef: l
      })
    }
  }, {
    onCloseCallback: () => {
      !_ && d.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: g,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: m,
        is_gift: !1,
        location_stack: f
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == E || E(_), _ && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: u.NOOP
  })
}