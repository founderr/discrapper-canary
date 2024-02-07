"use strict";
n.r(e), n.d(e, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return d
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return p
  },
  REVIEW_STEP_CONFIG: function() {
    return v
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return T
  },
  SHARED_STEP_CONFIGS: function() {
    return _
  }
});
var r = n("37983");
n("884691");
var i = n("357957"),
  o = n("85336"),
  u = n("262683"),
  a = n("946359"),
  c = n("724269"),
  l = n("7127"),
  s = n("99836"),
  f = n("217796");
let d = {
    key: null,
    renderStep: t => (0, r.jsx)(f.OneTimePaymentPredicateStep, {
      ...t
    })
  },
  p = {
    key: o.Step.ADD_PAYMENT_STEPS,
    renderStep: t => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(u.PaymentModalAddPaymentStep, {
        ...t,
        breadcrumbSteps: [o.Step.ADD_PAYMENT_STEPS, o.Step.REVIEW, o.Step.CONFIRM],
        onReturn: () => {
          let e = i.default.paymentSources;
          0 === Object.keys(e).length ? t.handleClose() : t.handleStepChange(o.Step.REVIEW, {
            trackedFromStep: o.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  E = {
    key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(c.default, {})
  },
  S = {
    key: o.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(a.default, {})
  },
  v = {
    key: o.Step.REVIEW,
    renderStep: t => (0, r.jsx)(s.PaymentModalReviewStep, {
      ...t
    })
  },
  T = {
    key: o.Step.CONFIRM,
    renderStep: t => (0, r.jsx)(l.PaymentModalConfirmStep, {
      ...t
    })
  },
  _ = [E, S]