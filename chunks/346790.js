"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("853872"),
  n = s("987209"),
  i = s("409813"),
  r = s("276442");
let d = {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, a.jsx)(u, {
    ...e
  }),
  options: {
    renderHeader: !0
  }
};

function u(e) {
  let {
    isGift: t
  } = (0, n.useGiftContext)();
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(r.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
      onReturn: () => {
        if (0 === Object.keys(l.default.paymentSources).length) {
          if (t) {
            e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
            return
          }
          e.handleClose()
        } else e.handleStepChange(i.Step.REVIEW, {
          trackedFromStep: i.Step.ADD_PAYMENT_STEPS
        })
      }
    })
  })
}