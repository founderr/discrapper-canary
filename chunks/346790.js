"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("853872"),
  s = n("987209"),
  r = n("409813"),
  i = n("276442");
let o = {
  key: r.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, a.jsx)(d, {
    ...e
  }),
  options: {
    renderHeader: !0
  }
};

function d(e) {
  let {
    isGift: t
  } = (0, s.useGiftContext)();
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM],
      onReturn: () => {
        if (0 === Object.keys(l.default.paymentSources).length) {
          if (t) {
            e.handleStepChange(r.Step.GIFT_CUSTOMIZATION);
            return
          }
          e.handleClose()
        } else e.handleStepChange(r.Step.REVIEW, {
          trackedFromStep: r.Step.ADD_PAYMENT_STEPS
        })
      }
    })
  })
}