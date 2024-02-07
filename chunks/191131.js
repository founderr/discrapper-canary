"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var u = n("812204"),
  i = n("685665"),
  a = n("635357"),
  l = n("642906"),
  s = n("85336"),
  o = n("385179"),
  c = n("262683"),
  d = n("946359"),
  f = n("724269"),
  p = n("99836"),
  P = n("217796"),
  S = n("357957"),
  h = n("671183"),
  m = n("273093"),
  x = n("880531"),
  C = n("843455");
let I = [{
  key: null,
  renderStep: e => (0, r.jsx)(P.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: s.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      let t = S.default.paymentSources;
      0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(s.Step.REVIEW, {
        trackedFromStep: s.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.default, {})
}, {
  key: s.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(d.default, {})
}, {
  key: s.Step.REVIEW,
  renderStep: e => (0, r.jsx)(p.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: s.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(h.default, {
    ...e
  })
}];

function E(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: s,
    ...c
  } = e, {
    AnalyticsLocationProvider: d,
    analyticsLocations: f
  } = (0, i.default)(n, u.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(m.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(d, {
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: I,
        applicationId: s,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: C.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(a.GiftContextProvider, {
          children: (0, r.jsx)(o.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: f,
            renderHeader: x.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}