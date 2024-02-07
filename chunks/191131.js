"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var r = n("37983");
n("884691");
var s = n("812204"),
  u = n("685665"),
  o = n("635357"),
  l = n("642906"),
  i = n("85336"),
  a = n("385179"),
  c = n("262683"),
  d = n("946359"),
  f = n("724269"),
  p = n("99836"),
  E = n("217796"),
  _ = n("357957"),
  I = n("671183"),
  h = n("273093"),
  R = n("880531"),
  v = n("843455");
let S = [{
  key: null,
  renderStep: e => (0, r.jsx)(E.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      let t = _.default.paymentSources;
      0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
        trackedFromStep: i.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.default, {})
}, {
  key: i.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(d.default, {})
}, {
  key: i.Step.REVIEW,
  renderStep: e => (0, r.jsx)(p.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: i.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(I.default, {
    ...e
  })
}];

function x(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: i,
    ...c
  } = e, {
    AnalyticsLocationProvider: d,
    analyticsLocations: f
  } = (0, u.default)(n, s.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(h.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(d, {
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: S,
        applicationId: i,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: v.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(o.GiftContextProvider, {
          children: (0, r.jsx)(a.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: f,
            renderHeader: R.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}