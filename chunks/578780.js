t.r(n), t.d(n, {
  default: function() {
    return j
  }
});
var r = t(735250);
t(470079);
var o = t(100527),
  a = t(906732),
  l = t(987209),
  s = t(598),
  i = t(409813),
  c = t(791785),
  u = t(276442),
  d = t(793541),
  h = t(380898),
  p = t(710094),
  v = t(865921),
  f = t(853872),
  x = t(806984),
  g = t(464797),
  m = t(946211),
  C = t(231338);
let b = [{
  key: null,
  renderStep: e => (0, r.jsx)(v.v, {
    ...e
  })
}, {
  key: i.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(u.J, {
    ...e,
    onReturn: () => {
      0 === Object.keys(f.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, {
        trackedFromStep: i.h8.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(h.Z, {})
}, {
  key: i.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(d.Z, {})
}, {
  key: i.h8.REVIEW,
  renderStep: e => (0, r.jsx)(p.l, {
    ...e
  })
}, {
  key: i.h8.CONFIRM,
  renderStep: e => (0, r.jsx)(x.Z, {
    ...e
  })
}];

function j(e) {
  let {
    guildProductContext: n,
    sourceAnalyticsLocations: t,
    applicationId: i,
    ...u
  } = e, {
    analyticsLocations: d
  } = (0, a.ZP)(t, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(g.R, {
    ...n,
    children: (0, r.jsx)(a.Gt, {
      value: d,
      children: (0, r.jsx)(s.PaymentContextProvider, {
        stepConfigs: b,
        applicationId: i,
        skuIDs: [u.skuId],
        activeSubscription: null,
        purchaseType: C.GZ.ONE_TIME,
        children: (0, r.jsx)(l.KB, {
          children: (0, r.jsx)(c.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: d,
            renderHeader: m.L,
            ...u
          })
        })
      })
    })
  })
}