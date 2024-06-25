n.d(t, {
  Z: function() {
    return r
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(987209),
  a = n(981631);

function r(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    trialId: o,
    trialFooterMessageOverride: c,
    onClose: u,
    analyticsObject: d,
    analyticsLocation: E,
    analyticsLocations: _,
    analyticsSubscriptionType: I,
    renderHeader: T,
    renderPurchaseConfirmation: m,
    planGroup: N,
    reviewWarningMessage: h,
    skuId: C
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, 598)), {
      PaymentModal: i
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("23952")]).then(n.bind(n, 791785)), {
      STEPS: a
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("68136"), n.e("46524"), n.e("96448")]).then(n.bind(n, 7305));
    return n => {
      let {
        onClose: S,
        ...A
      } = n;
      return (0, s.jsx)(e, {
        activeSubscription: r,
        stepConfigs: a,
        skuIDs: [C],
        children: (0, s.jsx)(l.KB, {
          children: (0, s.jsx)(i, {
            ...A,
            initialPlanId: t,
            onClose: e => {
              S(), null == u || u(e)
            },
            analyticsLocations: _,
            analyticsObject: d,
            analyticsLocation: E,
            analyticsSubscriptionType: I,
            skuId: C,
            renderHeader: T,
            renderPurchaseConfirmation: m,
            planGroup: N,
            trialId: o,
            trialFooterMessageOverride: c,
            reviewWarningMessage: h
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == u || u(!1)
    },
    onCloseRequest: a.dG4
  })
}