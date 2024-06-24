n.d(t, {
  F7: function() {
    return A
  },
  WA: function() {
    return h
  },
  s2: function() {
    return p
  },
  wo: function() {
    return _
  },
  yp: function() {
    return O
  }
});
var r = n(735250);
n(470079);
var a = n(853872),
  s = n(409813),
  l = n(276442),
  i = n(793541),
  o = n(380898),
  u = n(713316),
  c = n(710094),
  d = n(865921),
  E = n(689938);
let h = {
    key: null,
    renderStep: e => (0, r.jsx)(d.v, {
      ...e
    })
  },
  p = {
    key: s.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(r.Fragment, {
      children: (0, r.jsx)(l.J, {
        ...e,
        breadcrumbSteps: [s.h8.ADD_PAYMENT_STEPS, s.h8.REVIEW, s.h8.CONFIRM],
        onReturn: () => {
          0 === Object.keys(a.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(s.h8.REVIEW, {
            trackedFromStep: s.h8.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  f = {
    key: s.h8.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, r.jsx)(o.Z, {})
  },
  C = {
    key: s.h8.AWAITING_AUTHENTICATION,
    renderStep: () => (0, r.jsx)(i.Z, {}),
    options: {
      renderHeader: !0
    }
  },
  _ = {
    key: s.h8.REVIEW,
    renderStep: e => (0, r.jsx)(c.l, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW
    }
  },
  A = {
    key: s.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(u.w, {
      ...e
    })
  },
  O = [f, C]