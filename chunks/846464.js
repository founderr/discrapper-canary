"use strict";
s.r(t), s.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return I
  }
});
var i = s("735250");
s("470079");
var n = s("120356"),
  r = s.n(n),
  l = s("481060"),
  a = s("140465"),
  o = s("424082"),
  C = s("639119"),
  u = s("55610"),
  d = s("973007"),
  _ = s("74538"),
  p = s("987209"),
  c = s("598"),
  f = s("409813"),
  x = s("614223"),
  L = s("48175"),
  E = s("474936"),
  S = s("689938"),
  m = s("385231");

function I(e) {
  let {
    handleStepChange: t,
    handleClose: s,
    referralTrialOfferId: n
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: S
  } = (0, c.usePaymentContext)(), {
    isGift: m
  } = (0, p.useGiftContext)(), I = (0, C.usePremiumTrialOffer)(n);
  (0, o.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == I);
  let M = (0, a.useIsInPremiumOfferExperience)();
  return (0, i.jsx)(P, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: s,
        setSelectedSkuId: i,
        handleStepChange: n,
        isGift: r,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      i(s);
      let C = f.Step.PLAN_SELECT,
        u = (0, _.getPremiumSkuIdForSubscription)(t);
      (u === E.PremiumSubscriptionSKUs.TIER_1 || u === E.PremiumSubscriptionSKUs.TIER_2) && s === E.PremiumSubscriptionSKUs.TIER_0 && !r && (C = f.Step.WHAT_YOU_LOSE);
      let d = (0, L.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: r,
          skuId: s
        }),
        p = (0, x.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: r,
          selectedSkuId: s,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== f.Step.WHAT_YOU_LOSE && p && (C = f.Step.REVIEW, a((0, x.getDefaultPlanOneStepCheckout)(s, t))), n(C, {
        analyticsDataOverride: {
          sku_id: s
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: m,
      userTrialOffer: I,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: s,
    isGift: m,
    inOfferExperience: M,
    priceOptions: S
  })
}

function P(e) {
  let {
    selectSku: t,
    onClose: s,
    isGift: n,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.ModalHeader, {
      className: m.skuSelectModalHeader,
      separator: !1,
      children: [(0, i.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: S.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, i.jsx)(l.ModalCloseButton, {
        onClick: s
      })]
    }), (0, i.jsxs)(l.ModalContent, {
      className: r()(m.skuSelectModalContent, {
        [m.modalPadding]: a
      }),
      children: [(0, i.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: m.legacyPricingNotice
      }), (0, i.jsx)(d.default, {
        onSelectSku: e => t((0, _.castPremiumSubscriptionAsSkuId)(e)),
        isGift: n,
        priceOptions: o
      })]
    })]
  })
}