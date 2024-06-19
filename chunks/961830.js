t.d(n, {
  F7: function() {
    return T
  },
  WA: function() {
    return C
  },
  s2: function() {
    return f
  },
  wo: function() {
    return x
  },
  yp: function() {
    return m
  }
});
var s = t(735250);
t(470079);
var a = t(853872),
  l = t(409813),
  i = t(276442),
  r = t(793541),
  o = t(380898),
  d = t(713316),
  c = t(710094),
  u = t(865921),
  E = t(689938);
let C = {
    key: null,
    renderStep: e => (0, s.jsx)(u.v, {
      ...e
    })
  },
  f = {
    key: l.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsx)(i.J, {
        ...e,
        breadcrumbSteps: [l.h8.ADD_PAYMENT_STEPS, l.h8.REVIEW, l.h8.CONFIRM],
        onReturn: () => {
          0 === Object.keys(a.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(l.h8.REVIEW, {
            trackedFromStep: l.h8.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  h = {
    key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, s.jsx)(o.Z, {})
  },
  p = {
    key: l.h8.AWAITING_AUTHENTICATION,
    renderStep: () => (0, s.jsx)(r.Z, {}),
    options: {
      renderHeader: !0
    }
  },
  x = {
    key: l.h8.REVIEW,
    renderStep: e => (0, s.jsx)(c.l, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW
    }
  },
  T = {
    key: l.h8.CONFIRM,
    renderStep: e => (0, s.jsx)(d.w, {
      ...e
    })
  },
  m = [h, p]