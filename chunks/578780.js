t.r(n), t.d(n, {
  default: function() {
    return g
  }
});
var r = t(735250);
t(470079);
var s = t(100527),
  l = t(906732),
  a = t(987209),
  o = t(598),
  i = t(409813),
  c = t(791785),
  u = t(276442),
  d = t(793541),
  f = t(380898),
  h = t(710094),
  x = t(865921),
  m = t(853872),
  p = t(806984),
  j = t(464797),
  E = t(946211),
  C = t(231338);
let N = [{
  key: null,
  renderStep: e => (0, r.jsx)(x.v, {
    ...e
  })
}, {
  key: i.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(u.J, {
    ...e,
    onReturn: () => {
      0 === Object.keys(m.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, {
        trackedFromStep: i.h8.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.Z, {})
}, {
  key: i.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(d.Z, {})
}, {
  key: i.h8.REVIEW,
  renderStep: e => (0, r.jsx)(h.l, {
    ...e
  })
}, {
  key: i.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(p.Z, {
    ...e
  })
}];

function g(e) {
  let {
    guildProductContext: n,
    sourceAnalyticsLocations: t,
    applicationId: i,
    ...u
  } = e, {
    analyticsLocations: d
  } = (0, l.ZP)(t, s.Z.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(j.R, {
    ...n,
    children: (0, r.jsx)(l.Gt, {
      value: d,
      children: (0, r.jsx)(o.PaymentContextProvider, {
        stepConfigs: N,
        applicationId: i,
        skuIDs: [u.skuId],
        activeSubscription: null,
        purchaseType: C.GZ.ONE_TIME,
        children: (0, r.jsx)(a.KB, {
          children: (0, r.jsx)(c.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: d,
            renderHeader: E.L,
            ...u
          })
        })
      })
    })
  })
}