"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("735250");
s("470079");
var i = s("481060"),
  l = s("987209"),
  a = s("981631");

function r(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    trialId: u,
    trialFooterMessageOverride: o,
    onClose: d,
    analyticsObject: c,
    analyticsLocation: f,
    analyticsLocations: _,
    analyticsSubscriptionType: I,
    renderHeader: C,
    renderPurchaseConfirmation: m,
    planGroup: E,
    reviewWarningMessage: S,
    skuId: T
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(s.bind(s, "598")), {
      PaymentModal: i
    } = await Promise.all([s.e("49237"), s.e("99387"), s.e("15972"), s.e("6416"), s.e("32776"), s.e("23952")]).then(s.bind(s, "791785")), {
      STEPS: a
    } = await Promise.all([s.e("49237"), s.e("99387"), s.e("96427"), s.e("40326"), s.e("23357"), s.e("15972"), s.e("12013"), s.e("6416"), s.e("43906"), s.e("32776"), s.e("95900"), s.e("8016"), s.e("68136"), s.e("58615"), s.e("55632")]).then(s.bind(s, "7305"));
    return s => {
      let {
        onClose: N,
        ...g
      } = s;
      return (0, n.jsx)(e, {
        activeSubscription: r,
        stepConfigs: a,
        skuIDs: [T],
        children: (0, n.jsx)(l.GiftContextProvider, {
          children: (0, n.jsx)(i, {
            ...g,
            initialPlanId: t,
            onClose: e => {
              N(), null == d || d(e)
            },
            analyticsLocations: _,
            analyticsObject: c,
            analyticsLocation: f,
            analyticsSubscriptionType: I,
            skuId: T,
            renderHeader: C,
            renderPurchaseConfirmation: m,
            planGroup: E,
            trialId: u,
            trialFooterMessageOverride: o,
            reviewWarningMessage: S
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == d || d(!1)
    },
    onCloseRequest: a.NOOP
  })
}