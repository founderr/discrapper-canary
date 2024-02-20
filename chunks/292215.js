"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return E
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return S
  },
  REVIEW_STEP_CONFIG: function() {
    return p
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return P
  },
  SHARED_STEP_CONFIGS: function() {
    return T
  }
});
var r = n("37983");
n("884691");
var a = n("357957"),
  u = n("85336"),
  i = n("262683"),
  l = n("946359"),
  s = n("724269"),
  o = n("7127"),
  d = n("99836"),
  c = n("217796");
let E = {
    key: null,
    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  S = {
    key: u.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [u.Step.ADD_PAYMENT_STEPS, u.Step.REVIEW, u.Step.CONFIRM],
        onReturn: () => {
          let t = a.default.paymentSources;
          0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(u.Step.REVIEW, {
            trackedFromStep: u.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  f = {
    key: u.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(s.default, {})
  },
  _ = {
    key: u.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(l.default, {})
  },
  p = {
    key: u.Step.REVIEW,
    renderStep: e => (0, r.jsx)(d.PaymentModalReviewStep, {
      ...e
    })
  },
  P = {
    key: u.Step.CONFIRM,
    renderStep: e => (0, r.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  T = [f, _]