"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
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
  E = n("99836"),
  p = n("217796"),
  _ = n("357957"),
  I = n("671183"),
  h = n("273093"),
  v = n("880531"),
  R = n("843455");
let x = [{
  key: null,
  renderStep: e => (0, r.jsx)(p.OneTimePaymentPredicateStep, {
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
  renderStep: e => (0, r.jsx)(E.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: i.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(I.default, {
    ...e
  })
}];

function S(e) {
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
        stepConfigs: x,
        applicationId: i,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: R.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(o.GiftContextProvider, {
          children: (0, r.jsx)(a.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: f,
            renderHeader: v.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}