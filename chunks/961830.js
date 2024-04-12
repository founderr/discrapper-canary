"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return f
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return x
  },
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return m
  },
  REVIEW_STEP_CONFIG: function() {
    return S
  },
  SHARED_STEP_CONFIGS: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var r = n("853872"),
  s = n("409813"),
  i = n("276442"),
  l = n("793541"),
  o = n("380898"),
  u = n("713316"),
  d = n("710094"),
  c = n("865921"),
  p = n("689938");
let m = {
    key: null,
    renderStep: e => (0, a.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  f = {
    key: s.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [s.Step.ADD_PAYMENT_STEPS, s.Step.REVIEW, s.Step.CONFIRM],
        onReturn: () => {
          0 === Object.keys(r.default.paymentSources).length ? e.handleClose() : e.handleStepChange(s.Step.REVIEW, {
            trackedFromStep: s.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  h = {
    key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, a.jsx)(o.default, {})
  },
  E = {
    key: s.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, a.jsx)(l.default, {}),
    options: {
      renderHeader: !0
    }
  },
  S = {
    key: s.Step.REVIEW,
    renderStep: e => (0, a.jsx)(d.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => p.default.Messages.BILLING_STEP_REVIEW
    }
  },
  x = {
    key: s.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(u.PaymentModalConfirmStep, {
      ...e
    })
  },
  N = [h, E]