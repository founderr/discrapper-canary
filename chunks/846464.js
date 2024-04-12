"use strict";
s.r(t), s.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return S
  }
});
var n = s("735250");
s("470079");
var r = s("803997"),
  i = s.n(r),
  l = s("481060"),
  a = s("140465"),
  o = s("639119"),
  C = s("55610"),
  u = s("973007"),
  d = s("74538"),
  c = s("987209"),
  p = s("598"),
  f = s("409813"),
  x = s("614223"),
  _ = s("48175"),
  m = s("474936"),
  L = s("689938"),
  h = s("300561");

function S(e) {
  let {
    handleStepChange: t,
    handleClose: s,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: u,
    priceOptions: L
  } = (0, p.usePaymentContext)(), {
    isGift: h
  } = (0, c.useGiftContext)(), S = (0, o.usePremiumTrialOffer)(r), E = (0, a.useIsInPremiumOfferExperience)();
  return (0, n.jsx)(j, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: s,
        setSelectedSkuId: n,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      n(s);
      let C = f.Step.PLAN_SELECT,
        u = (0, d.getPremiumSkuIdForSubscription)(t);
      (u === m.PremiumSubscriptionSKUs.TIER_1 || u === m.PremiumSubscriptionSKUs.TIER_2) && s === m.PremiumSubscriptionSKUs.TIER_0 && !i && (C = f.Step.WHAT_YOU_LOSE);
      let c = (0, _.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: i,
          skuId: s
        }),
        p = (0, x.inOneStepSubscriptionCheckout)({
          isTrial: c,
          isGift: i,
          selectedSkuId: s,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== f.Step.WHAT_YOU_LOSE && p && (C = f.Step.REVIEW, a((0, x.getDefaultPlanOneStepCheckout)(s, t))), r(C, {
        analyticsDataOverride: {
          sku_id: s
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: h,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: u
    }),
    onClose: s,
    isGift: h,
    inOfferExperience: E,
    priceOptions: L
  })
}

function j(e) {
  let {
    selectSku: t,
    onClose: s,
    isGift: r,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.ModalHeader, {
      className: h.skuSelectModalHeader,
      separator: !1,
      children: [(0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: L.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, n.jsx)(l.ModalCloseButton, {
        onClick: s
      })]
    }), (0, n.jsxs)(l.ModalContent, {
      className: i()(h.skuSelectModalContent, {
        [h.modalPadding]: a
      }),
      children: [(0, n.jsx)(C.default, {
        fromBoostCancelModal: !1,
        className: h.legacyPricingNotice
      }), (0, n.jsx)(u.default, {
        onSelectSku: e => t((0, d.castPremiumSubscriptionAsSkuId)(e)),
        isGift: r,
        priceOptions: o
      })]
    })]
  })
}