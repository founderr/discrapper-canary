"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var i = n("357957"),
  a = n("635357"),
  r = n("85336"),
  l = n("262683");
let u = {
  key: r.Step.ADD_PAYMENT_STEPS,
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
  } = (0, a.useGiftContext)();
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(l.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM],
      onReturn: () => {
        let n = i.default.paymentSources;
        if (0 === Object.keys(n).length) {
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