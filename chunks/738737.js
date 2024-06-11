"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  s = n("987209"),
  r = n("981631");

function l(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    trialId: u,
    trialFooterMessageOverride: o,
    onClose: d,
    analyticsObject: c,
    analyticsLocation: f,
    analyticsLocations: E,
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
      STEPS: r
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("68136"), n.e("78373"), n.e("55632")]).then(n.bind(n, "7305"));
    return n => {
      let {
        onClose: N,
        ...R
      } = n;
      return (0, i.jsx)(e, {
        activeSubscription: l,
        stepConfigs: r,
        skuIDs: [m],
        children: (0, i.jsx)(s.GiftContextProvider, {
          children: (0, i.jsx)(a, {
            ...R,
            initialPlanId: t,
            onClose: e => {
              N(), null == d || d(e)
            },
            analyticsLocations: E,
            analyticsObject: c,
            analyticsLocation: f,
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
    onCloseRequest: r.NOOP
  })
}