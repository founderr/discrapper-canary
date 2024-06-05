"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  i = n("987209"),
  l = n("981631");

function r(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    trialId: u,
    trialFooterMessageOverride: o,
    onClose: d,
    analyticsObject: c,
    analyticsLocation: E,
    analyticsLocations: f,
    analyticsSubscriptionType: _,
    renderHeader: T,
    renderPurchaseConfirmation: I,
    planGroup: S,
    reviewWarningMessage: C,
    skuId: m
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, "598")), {
      PaymentModal: a
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("23952")]).then(n.bind(n, "791785")), {
      STEPS: l
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("68136"), n.e("78373"), n.e("3305")]).then(n.bind(n, "7305"));
    return n => {
      let {
        onClose: N,
        ...R
      } = n;
      return (0, s.jsx)(e, {
        activeSubscription: r,
        stepConfigs: l,
        skuIDs: [m],
        children: (0, s.jsx)(i.GiftContextProvider, {
          children: (0, s.jsx)(a, {
            ...R,
            initialPlanId: t,
            onClose: e => {
              N(), null == d || d(e)
            },
            analyticsLocations: f,
            analyticsObject: c,
            analyticsLocation: E,
            analyticsSubscriptionType: _,
            skuId: m,
            renderHeader: T,
            renderPurchaseConfirmation: I,
            planGroup: S,
            trialId: u,
            trialFooterMessageOverride: o,
            reviewWarningMessage: C
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == d || d(!1)
    },
    onCloseRequest: l.NOOP
  })
}