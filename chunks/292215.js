"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return f
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return E
  },
  REVIEW_STEP_CONFIG: function() {
    return m
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return _
  },
  SHARED_STEP_CONFIGS: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var i = n("357957"),
  a = n("85336"),
  r = n("262683"),
  l = n("946359"),
  u = n("724269"),
  o = n("7127"),
  d = n("99836"),
  c = n("217796");
let f = {
    key: null,
    renderStep: e => (0, s.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  E = {
    key: a.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsx)(r.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
        onReturn: () => {
          let t = i.default.paymentSources;
          0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(a.Step.REVIEW, {
            trackedFromStep: a.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  p = {
    key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, s.jsx)(u.default, {})
  },
  S = {
    key: a.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, s.jsx)(l.default, {})
  },
  m = {
    key: a.Step.REVIEW,
    renderStep: e => (0, s.jsx)(d.PaymentModalReviewStep, {
      ...e
    })
  },
  _ = {
    key: a.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  I = [p, S]