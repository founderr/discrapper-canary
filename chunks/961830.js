"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return m
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return _
  },
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return E
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
  l = n("276442"),
  u = n("793541"),
  i = n("380898"),
  c = n("713316"),
  o = n("710094"),
  d = n("865921"),
  f = n("689938");
let E = {
    key: null,
    renderStep: e => (0, a.jsx)(d.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  m = {
    key: s.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.PaymentModalAddPaymentStep, {
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
  p = {
    key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, a.jsx)(i.default, {})
  },
  A = {
    key: s.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, a.jsx)(u.default, {}),
    options: {
      renderHeader: !0
    }
  },
  S = {
    key: s.Step.REVIEW,
    renderStep: e => (0, a.jsx)(o.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  },
  _ = {
    key: s.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(c.PaymentModalConfirmStep, {
      ...e
    })
  },
  N = [p, A]