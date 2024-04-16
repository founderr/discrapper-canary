"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return S
  }
});
var s = n("735250");
n("470079");
var r = n("120356"),
  i = n.n(r),
  l = n("481060"),
  a = n("140465"),
  o = n("424082"),
  C = n("639119"),
  u = n("55610"),
  d = n("973007"),
  c = n("74538"),
  p = n("987209"),
  f = n("598"),
  x = n("409813"),
  _ = n("614223"),
  m = n("48175"),
  L = n("474936"),
  E = n("689938"),
  h = n("300561");

function S(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: E
  } = (0, f.usePaymentContext)(), {
    isGift: h
  } = (0, p.useGiftContext)(), S = (0, C.usePremiumTrialOffer)(r);
  (0, o.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == S);
  let P = (0, a.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(j, {
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
      let C = x.Step.PLAN_SELECT,
        u = (0, c.getPremiumSkuIdForSubscription)(t);
      (u === L.PremiumSubscriptionSKUs.TIER_1 || u === L.PremiumSubscriptionSKUs.TIER_2) && n === L.PremiumSubscriptionSKUs.TIER_0 && !i && (C = x.Step.WHAT_YOU_LOSE);
      let d = (0, m.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: i,
          skuId: n
        }),
        p = (0, _.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== x.Step.WHAT_YOU_LOSE && p && (C = x.Step.REVIEW, a((0, _.getDefaultPlanOneStepCheckout)(n, t))), r(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: h,
      userTrialOffer: S,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: h,
    inOfferExperience: P,
    priceOptions: E
  })
}

function j(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: r,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: h.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: E.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: i()(h.skuSelectModalContent, {
        [h.modalPadding]: a
      }),
      children: [(0, s.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: h.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: r,
        priceOptions: o
      })]
    })]
  })
}