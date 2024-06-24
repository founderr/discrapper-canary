r.r(n), r.d(n, {
  default: function() {
    return j
  }
});
var t = r(735250);
r(470079);
var o = r(100527),
  a = r(906732),
  i = r(987209),
  l = r(598),
  s = r(409813),
  c = r(791785),
  u = r(276442),
  d = r(793541),
  h = r(380898),
  p = r(710094),
  f = r(865921),
  v = r(853872),
  x = r(806984),
  m = r(464797),
  g = r(946211),
  C = r(231338);
let b = [{
  key: null,
  renderStep: e => (0, t.jsx)(f.v, {
    ...e
  })
}, {
  key: s.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, t.jsx)(u.J, {
    ...e,
    onReturn: () => {
      0 === Object.keys(v.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(s.h8.REVIEW, {
        trackedFromStep: s.h8.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: s.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, t.jsx)(h.Z, {})
}, {
  key: s.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, t.jsx)(d.Z, {})
}, {
  key: s.h8.REVIEW,
  renderStep: e => (0, t.jsx)(p.l, {
    ...e
  })
}, {
  key: s.h8.CONFIRM,
  renderStep: e => (0, t.jsx)(x.Z, {
    ...e
  })
}];

function j(e) {
  let {
    guildProductContext: n,
    sourceAnalyticsLocations: r,
    applicationId: s,
    ...u
  } = e, {
    analyticsLocations: d
  } = (0, a.ZP)(r, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, t.jsx)(m.R, {
    ...n,
    children: (0, t.jsx)(a.Gt, {
      value: d,
      children: (0, t.jsx)(l.PaymentContextProvider, {
        stepConfigs: b,
        applicationId: s,
        skuIDs: [u.skuId],
        activeSubscription: null,
        purchaseType: C.GZ.ONE_TIME,
        children: (0, t.jsx)(i.KB, {
          children: (0, t.jsx)(c.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: d,
            renderHeader: g.L,
            ...u
          })
        })
      })
    })
  })
}