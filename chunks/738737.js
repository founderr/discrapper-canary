t.d(n, {
  Z: function() {
    return a
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  s = t(987209),
  r = t(981631);

function a(e) {
  let {
    initialPlanId: n,
    activeSubscription: a,
    trialId: o,
    trialFooterMessageOverride: u,
    onClose: c,
    analyticsObject: d,
    analyticsLocation: _,
    analyticsLocations: I,
    analyticsSubscriptionType: E,
    renderHeader: C,
    renderPurchaseConfirmation: m,
    planGroup: N,
    reviewWarningMessage: S,
    skuId: T
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(t.bind(t, 598)), {
      PaymentModal: l
    } = await Promise.all([t.e("49237"), t.e("99387"), t.e("15972"), t.e("6416"), t.e("32776"), t.e("23952")]).then(t.bind(t, 791785)), {
      STEPS: r
    } = await Promise.all([t.e("49237"), t.e("99387"), t.e("96427"), t.e("77298"), t.e("23357"), t.e("15972"), t.e("12013"), t.e("6416"), t.e("43906"), t.e("32776"), t.e("95900"), t.e("8016"), t.e("68136"), t.e("29625"), t.e("55632")]).then(t.bind(t, 7305));
    return t => {
      let {
        onClose: L,
        ...R
      } = t;
      return (0, i.jsx)(e, {
        activeSubscription: a,
        stepConfigs: r,
        skuIDs: [T],
        children: (0, i.jsx)(s.KB, {
          children: (0, i.jsx)(l, {
            ...R,
            initialPlanId: n,
            onClose: e => {
              L(), null == c || c(e)
            },
            analyticsLocations: I,
            analyticsObject: d,
            analyticsLocation: _,
            analyticsSubscriptionType: E,
            skuId: T,
            renderHeader: C,
            renderPurchaseConfirmation: m,
            planGroup: N,
            trialId: o,
            trialFooterMessageOverride: u,
            reviewWarningMessage: S
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == c || c(!1)
    },
    onCloseRequest: r.dG4
  })
}