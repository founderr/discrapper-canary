"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var r = n("37983");
n("884691");
var u = n("812204"),
  s = n("685665"),
  i = n("635357"),
  l = n("642906"),
  o = n("85336"),
  a = n("385179"),
  c = n("262683"),
  d = n("946359"),
  f = n("724269"),
  p = n("99836"),
  h = n("217796"),
  S = n("357957"),
  v = n("671183"),
  E = n("273093"),
  m = n("880531"),
  x = n("843455");
let I = [{
  key: null,
  renderStep: e => (0, r.jsx)(h.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: o.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      let t = S.default.paymentSources;
      0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(o.Step.REVIEW, {
        trackedFromStep: o.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.default, {})
}, {
  key: o.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(d.default, {})
}, {
  key: o.Step.REVIEW,
  renderStep: e => (0, r.jsx)(p.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: o.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(v.default, {
    ...e
  })
}];

function C(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: o,
    ...c
  } = e, {
    AnalyticsLocationProvider: d,
    analyticsLocations: f
  } = (0, s.default)(n, u.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(E.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(d, {
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: I,
        applicationId: o,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: x.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(i.GiftContextProvider, {
          children: (0, r.jsx)(a.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: f,
            renderHeader: m.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}