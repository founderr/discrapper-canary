"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return P
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return p
  },
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return _
  },
  REVIEW_STEP_CONFIG: function() {
    return E
  },
  SHARED_STEP_CONFIGS: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var r = n("853872"),
  s = n("409813"),
  l = n("276442"),
  i = n("793541"),
  u = n("380898"),
  o = n("713316"),
  d = n("710094"),
  c = n("865921"),
  f = n("689938");
let _ = {
    key: null,
    renderStep: e => (0, a.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  P = {
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
  S = {
    key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, a.jsx)(u.default, {})
  },
  A = {
    key: s.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, a.jsx)(i.default, {}),
    options: {
      renderHeader: !0
    }
  },
  E = {
    key: s.Step.REVIEW,
    renderStep: e => (0, a.jsx)(d.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  },
  p = {
    key: s.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  C = [S, A]