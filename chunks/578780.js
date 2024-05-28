"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
});
var n = r("735250");
r("470079");
var a = r("100527"),
  s = r("906732"),
  l = r("987209"),
  u = r("598"),
  i = r("409813"),
  c = r("791785"),
  d = r("276442"),
  o = r("793541"),
  f = r("380898"),
  m = r("710094"),
  p = r("865921"),
  N = r("853872"),
  E = r("806984"),
  g = r("464797"),
  h = r("946211"),
  P = r("231338");
let x = [{
  key: null,
  renderStep: e => (0, n.jsx)(p.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, n.jsx)(d.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      0 === Object.keys(N.default.paymentSources).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
        trackedFromStep: i.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(f.default, {})
}, {
  key: i.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(o.default, {})
}, {
  key: i.Step.REVIEW,
  renderStep: e => (0, n.jsx)(m.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: i.Step.CONFIRM,
  renderStep: e => (0, n.jsx)(E.default, {
    ...e
  })
}];

function C(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: r,
    applicationId: i,
    ...d
  } = e, {
    analyticsLocations: o
  } = (0, s.default)(r, a.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, n.jsx)(g.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, n.jsx)(s.AnalyticsLocationProvider, {
      value: o,
      children: (0, n.jsx)(u.PaymentContextProvider, {
        stepConfigs: x,
        applicationId: i,
        skuIDs: [d.skuId],
        activeSubscription: null,
        purchaseType: P.PurchaseTypes.ONE_TIME,
        children: (0, n.jsx)(l.GiftContextProvider, {
          children: (0, n.jsx)(c.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: o,
            renderHeader: h.renderGuildProductPurchaseHeader,
            ...d
          })
        })
      })
    })
  })
}