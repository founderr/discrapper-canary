"use strict";
s.r(t), s.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return E
  }
});
var n = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("481060"),
  a = s("140465"),
  o = s("424082"),
  C = s("639119"),
  u = s("55610"),
  d = s("973007"),
  c = s("74538"),
  p = s("987209"),
  f = s("598"),
  x = s("409813"),
  _ = s("614223"),
  m = s("48175"),
  L = s("474936"),
  S = s("689938"),
  h = s("300561");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: s,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: S
  } = (0, f.usePaymentContext)(), {
    isGift: h
  } = (0, p.useGiftContext)(), E = (0, C.usePremiumTrialOffer)(i);
  (0, o.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == E);
  let P = (0, a.useIsInPremiumOfferExperience)();
  return (0, n.jsx)(j, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: s,
        setSelectedSkuId: n,
        handleStepChange: i,
        isGift: r,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      n(s);
      let C = x.Step.PLAN_SELECT,
        u = (0, c.getPremiumSkuIdForSubscription)(t);
      (u === L.PremiumSubscriptionSKUs.TIER_1 || u === L.PremiumSubscriptionSKUs.TIER_2) && s === L.PremiumSubscriptionSKUs.TIER_0 && !r && (C = x.Step.WHAT_YOU_LOSE);
      let d = (0, m.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: r,
          skuId: s
        }),
        p = (0, _.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: r,
          selectedSkuId: s,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== x.Step.WHAT_YOU_LOSE && p && (C = x.Step.REVIEW, a((0, _.getDefaultPlanOneStepCheckout)(s, t))), i(C, {
        analyticsDataOverride: {
          sku_id: s
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: h,
      userTrialOffer: E,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: s,
    isGift: h,
    inOfferExperience: P,
    priceOptions: S
  })
}

function j(e) {
  let {
    selectSku: t,
    onClose: s,
    isGift: i,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.ModalHeader, {
      className: h.skuSelectModalHeader,
      separator: !1,
      children: [(0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: S.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, n.jsx)(l.ModalCloseButton, {
        onClick: s
      })]
    }), (0, n.jsxs)(l.ModalContent, {
      className: r()(h.skuSelectModalContent, {
        [h.modalPadding]: a
      }),
      children: [(0, n.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: h.legacyPricingNotice
      }), (0, n.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: i,
        priceOptions: o
      })]
    })]
  })
}