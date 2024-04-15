"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var r = n("120356"),
  i = n.n(r),
  l = n("481060"),
  a = n("140465"),
  o = n("639119"),
  C = n("55610"),
  u = n("973007"),
  d = n("74538"),
  c = n("987209"),
  p = n("598"),
  f = n("409813"),
  x = n("614223"),
  _ = n("48175"),
  m = n("474936"),
  L = n("689938"),
  E = n("300561");

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: u,
    priceOptions: L
  } = (0, p.usePaymentContext)(), {
    isGift: E
  } = (0, c.useGiftContext)(), h = (0, o.usePremiumTrialOffer)(r), j = (0, a.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(S, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      s(n);
      let C = f.Step.PLAN_SELECT,
        u = (0, d.getPremiumSkuIdForSubscription)(t);
      (u === m.PremiumSubscriptionSKUs.TIER_1 || u === m.PremiumSubscriptionSKUs.TIER_2) && n === m.PremiumSubscriptionSKUs.TIER_0 && !i && (C = f.Step.WHAT_YOU_LOSE);
      let c = (0, _.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: i,
          skuId: n
        }),
        p = (0, x.inOneStepSubscriptionCheckout)({
          isTrial: c,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== f.Step.WHAT_YOU_LOSE && p && (C = f.Step.REVIEW, a((0, x.getDefaultPlanOneStepCheckout)(n, t))), r(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: E,
      userTrialOffer: h,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: u
    }),
    onClose: n,
    isGift: E,
    inOfferExperience: j,
    priceOptions: L
  })
}

function S(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: r,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: E.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: L.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: i()(E.skuSelectModalContent, {
        [E.modalPadding]: a
      }),
      children: [(0, s.jsx)(C.default, {
        fromBoostCancelModal: !1,
        className: E.legacyPricingNotice
      }), (0, s.jsx)(u.default, {
        onSelectSku: e => t((0, d.castPremiumSubscriptionAsSkuId)(e)),
        isGift: r,
        priceOptions: o
      })]
    })]
  })
}