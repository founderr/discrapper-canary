"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var r = n("735250");
n("470079");
var s = n("100527"),
  u = n("906732"),
  a = n("987209"),
  l = n("598"),
  i = n("409813"),
  o = n("791785"),
  c = n("276442"),
  d = n("793541"),
  f = n("380898"),
  m = n("710094"),
  p = n("865921"),
  P = n("853872"),
  h = n("806984"),
  x = n("464797"),
  C = n("946211"),
  E = n("231338");
let g = [{
  key: null,
  renderStep: e => (0, r.jsx)(p.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      0 === Object.keys(P.default.paymentSources).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
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
  renderStep: e => (0, r.jsx)(m.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: i.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(h.default, {
    ...e
  })
}];

function j(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: i,
    ...c
  } = e, {
    analyticsLocations: d
  } = (0, u.default)(n, s.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(x.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(u.AnalyticsLocationProvider, {
      value: d,
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: g,
        applicationId: i,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: E.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(a.GiftContextProvider, {
          children: (0, r.jsx)(o.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: d,
            renderHeader: C.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}