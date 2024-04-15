"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var r = n("735250");
n("470079");
var s = n("100527"),
  a = n("906732"),
  u = n("987209"),
  l = n("598"),
  i = n("409813"),
  c = n("791785"),
  d = n("276442"),
  o = n("793541"),
  f = n("380898"),
  p = n("710094"),
  m = n("865921"),
  h = n("853872"),
  x = n("806984"),
  P = n("464797"),
  g = n("946211"),
  C = n("231338");
let E = [{
  key: null,
  renderStep: e => (0, r.jsx)(m.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(d.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      0 === Object.keys(h.default.paymentSources).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
        trackedFromStep: i.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.default, {})
}, {
  key: i.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(o.default, {})
}, {
  key: i.Step.REVIEW,
  renderStep: e => (0, r.jsx)(p.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: i.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(x.default, {
    ...e
  })
}];

function j(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: i,
    ...d
  } = e, {
    analyticsLocations: o
  } = (0, a.default)(n, s.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(P.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(a.AnalyticsLocationProvider, {
      value: o,
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: E,
        applicationId: i,
        skuIDs: [d.skuId],
        activeSubscription: null,
        purchaseType: C.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(u.GiftContextProvider, {
          children: (0, r.jsx)(c.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: o,
            renderHeader: g.renderGuildProductPurchaseHeader,
            ...d
          })
        })
      })
    })
  })
}