"use strict";
s.r(t), s.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return I
  }
});
var n = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  i = s("481060"),
  a = s("140465"),
  o = s("424082"),
  u = s("639119"),
  C = s("55610"),
  d = s("973007"),
  c = s("74538"),
  p = s("987209"),
  _ = s("598"),
  f = s("409813"),
  E = s("614223"),
  x = s("48175"),
  L = s("474936"),
  m = s("689938"),
  S = s("385231");

function I(e) {
  let {
    handleStepChange: t,
    handleClose: s,
    referralTrialOfferId: l
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: i,
    startedPaymentFlowWithPaymentSourcesRef: C,
    setSelectedPlanId: d,
    priceOptions: m
  } = (0, _.usePaymentContext)(), {
    isGift: S
  } = (0, p.useGiftContext)(), I = (0, u.usePremiumTrialOffer)(l);
  (0, o.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == I);
  let P = (0, a.useIsInPremiumOfferExperience)();
  return (0, n.jsx)(h, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: s,
        setSelectedSkuId: n,
        handleStepChange: l,
        isGift: r,
        userTrialOffer: i,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      n(s);
      let u = f.Step.PLAN_SELECT,
        C = (0, c.getPremiumSkuIdForSubscription)(t);
      (C === L.PremiumSubscriptionSKUs.TIER_1 || C === L.PremiumSubscriptionSKUs.TIER_2) && s === L.PremiumSubscriptionSKUs.TIER_0 && !r && (u = f.Step.WHAT_YOU_LOSE);
      let d = (0, x.isInTrialRedemption)({
          userTrialOffer: i,
          isGift: r,
          skuId: s
        }),
        p = (0, E.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: r,
          selectedSkuId: s,
          startedPaymentFlowWithPaymentSources: o
        });
      u !== f.Step.WHAT_YOU_LOSE && p && (u = f.Step.REVIEW, a((0, E.getDefaultPlanOneStepCheckout)(s, t))), l(u, {
        analyticsDataOverride: {
          sku_id: s
        }
      })
    })({
      activeSubscription: i,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: S,
      userTrialOffer: I,
      startedPaymentFlowWithPaymentSources: C.current,
      setSelectedPlanId: d
    }),
    onClose: s,
    isGift: S,
    inOfferExperience: P,
    priceOptions: m
  })
}

function h(e) {
  let {
    selectSku: t,
    onClose: s,
    isGift: l,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.ModalHeader, {
      className: S.skuSelectModalHeader,
      separator: !1,
      children: [(0, n.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H4,
        children: m.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, n.jsx)(i.ModalCloseButton, {
        onClick: s
      })]
    }), (0, n.jsxs)(i.ModalContent, {
      className: r()(S.skuSelectModalContent, {
        [S.modalPadding]: a
      }),
      children: [(0, n.jsx)(C.default, {
        fromBoostCancelModal: !1,
        className: S.legacyPricingNotice
      }), (0, n.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: l,
        priceOptions: o
      })]
    })]
  })
}