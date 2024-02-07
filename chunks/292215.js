"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return E
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return S
  },
  REVIEW_STEP_CONFIG: function() {
    return _
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return P
  },
  SHARED_STEP_CONFIGS: function() {
    return I
  }
});
var r = n("37983");
n("884691");
var u = n("357957"),
  a = n("85336"),
  i = n("262683"),
  l = n("946359"),
  s = n("724269"),
  o = n("7127"),
  c = n("99836"),
  d = n("217796");
let E = {
    key: null,
    renderStep: e => (0, r.jsx)(d.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  S = {
    key: a.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
        onReturn: () => {
          let t = u.default.paymentSources;
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
  f = {
    key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(s.default, {})
  },
  p = {
    key: a.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(l.default, {})
  },
  _ = {
    key: a.Step.REVIEW,
    renderStep: e => (0, r.jsx)(c.PaymentModalReviewStep, {
      ...e
    })
  },
  P = {
    key: a.Step.CONFIRM,
    renderStep: e => (0, r.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  I = [f, p]