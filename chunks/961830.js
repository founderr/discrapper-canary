"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return A
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return _
  },
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return E
  },
  REVIEW_STEP_CONFIG: function() {
    return P
  },
  SHARED_STEP_CONFIGS: function() {
    return m
  }
});
var r = n("735250");
n("470079");
var a = n("853872"),
  s = n("409813"),
  u = n("276442"),
  i = n("793541"),
  l = n("380898"),
  c = n("713316"),
  o = n("710094"),
  d = n("865921"),
  f = n("689938");
let E = {
    key: null,
    renderStep: e => (0, r.jsx)(d.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  A = {
    key: s.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [s.Step.ADD_PAYMENT_STEPS, s.Step.REVIEW, s.Step.CONFIRM],
        onReturn: () => {
          0 === Object.keys(a.default.paymentSources).length ? e.handleClose() : e.handleStepChange(s.Step.REVIEW, {
            trackedFromStep: s.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  S = {
    key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(l.default, {})
  },
  C = {
    key: s.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(i.default, {}),
    options: {
      renderHeader: !0
    }
  },
  P = {
    key: s.Step.REVIEW,
    renderStep: e => (0, r.jsx)(o.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  },
  _ = {
    key: s.Step.CONFIRM,
    renderStep: e => (0, r.jsx)(c.PaymentModalConfirmStep, {
      ...e
    })
  },
  m = [S, C]