t.d(n, {
  F7: function() {
    return h
  },
  WA: function() {
    return _
  },
  s2: function() {
    return T
  },
  wo: function() {
    return S
  },
  yp: function() {
    return p
  }
});
var r = t(735250);
t(470079);
var s = t(853872),
  a = t(409813),
  l = t(276442),
  i = t(793541),
  o = t(380898),
  u = t(713316),
  c = t(710094),
  d = t(865921),
  I = t(689938);
let _ = {
    key: null,
    renderStep: e => (0, r.jsx)(d.v, {
      ...e
    })
  },
  T = {
    key: a.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(l.J, {
        ...e,
        breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
        onReturn: () => {
          0 === Object.keys(s.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, {
            trackedFromStep: a.h8.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  E = {
    key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(o.Z, {})
  },
  N = {
    key: a.h8.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(i.Z, {}),
    options: {
      renderHeader: !0
    }
  },
  S = {
    key: a.h8.REVIEW,
    renderStep: e => (0, r.jsx)(c.l, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => I.Z.Messages.BILLING_STEP_REVIEW
    }
  },
  h = {
    key: a.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(u.w, {
      ...e
    })
  },
  p = [E, N]