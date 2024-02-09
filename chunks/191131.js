"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var r = n("812204"),
  a = n("685665"),
  i = n("635357"),
  l = n("642906"),
  s = n("85336"),
  o = n("385179"),
  c = n("262683"),
  d = n("946359"),
  f = n("724269"),
  P = n("99836"),
  S = n("217796"),
  p = n("357957"),
  h = n("671183"),
  m = n("273093"),
  x = n("880531"),
  C = n("843455");
let v = [{
  key: null,
  renderStep: e => (0, u.jsx)(S.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: s.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, u.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      let t = p.default.paymentSources;
      0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(s.Step.REVIEW, {
        trackedFromStep: s.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, u.jsx)(f.default, {})
}, {
  key: s.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, u.jsx)(d.default, {})
}, {
  key: s.Step.REVIEW,
  renderStep: e => (0, u.jsx)(P.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: s.Step.CONFIRM,
  renderStep: e => (0, u.jsx)(h.default, {
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
  } = (0, a.default)(n, r.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, u.jsx)(m.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, u.jsx)(d, {
      children: (0, u.jsx)(l.PaymentContextProvider, {
        stepConfigs: v,
        applicationId: s,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: C.PurchaseTypes.ONE_TIME,
        children: (0, u.jsx)(i.GiftContextProvider, {
          children: (0, u.jsx)(o.PaymentModal, {
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