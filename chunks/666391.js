"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("635357"),
  i = n("49111");

function r(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    trialId: o,
    trialFooterMessageOverride: u,
    onClose: d,
    analyticsObject: c,
    analyticsLocation: f,
    analyticsLocations: h,
    analyticsSubscriptionType: m,
    renderHeader: p,
    renderPurchaseConfirmation: E,
    planGroup: S,
    reviewWarningMessage: g,
    skuId: C
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await n.el("642906").then(n.bind(n, "642906")), {
      PaymentModal: a
    } = await n.el("385179").then(n.bind(n, "385179")), {
      STEPS: i
    } = await n.el("646139").then(n.bind(n, "646139"));
    return n => {
      let {
        onClose: _,
        ...I
      } = n;
      return (0, l.jsx)(e, {
        activeSubscription: r,
        stepConfigs: i,
        skuIDs: [C],
        children: (0, l.jsx)(s.GiftContextProvider, {
          children: (0, l.jsx)(a, {
            ...I,
            initialPlanId: t,
            onClose: e => {
              _(), null == d || d(e)
            },
            analyticsLocations: h,
            analyticsObject: c,
            analyticsLocation: f,
            analyticsSubscriptionType: m,
            skuId: C,
            renderHeader: p,
            renderPurchaseConfirmation: E,
            planGroup: S,
            trialId: o,
            trialFooterMessageOverride: u,
            reviewWarningMessage: g
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == d || d(!1)
    },
    onCloseRequest: i.NOOP
  })
}