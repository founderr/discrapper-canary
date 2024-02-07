"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var i = n("357957"),
  r = n("635357"),
  l = n("85336"),
  a = n("262683");
let u = {
  key: l.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(o, {
    ...e
  }),
  options: {
    renderHeader: !0
  }
};

function o(e) {
  let {
    isGift: t
  } = (0, r.useGiftContext)();
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(a.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
      onReturn: () => {
        let n = i.default.paymentSources;
        if (0 === Object.keys(n).length) {
          if (t) {
            e.handleStepChange(l.Step.GIFT_CUSTOMIZATION);
            return
          }
          e.handleClose()
        } else e.handleStepChange(l.Step.REVIEW, {
          trackedFromStep: l.Step.ADD_PAYMENT_STEPS
        })
      }
    })
  })
}