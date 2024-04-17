"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
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
  E = n("474936"),
  S = n("689938"),
  L = n("300561");

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: S
  } = (0, f.usePaymentContext)(), {
    isGift: L
  } = (0, p.useGiftContext)(), h = (0, C.usePremiumTrialOffer)(i);
  (0, o.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == h);
  let P = (0, a.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(j, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: i,
        isGift: r,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      s(n);
      let C = x.Step.PLAN_SELECT,
        u = (0, c.getPremiumSkuIdForSubscription)(t);
      (u === E.PremiumSubscriptionSKUs.TIER_1 || u === E.PremiumSubscriptionSKUs.TIER_2) && n === E.PremiumSubscriptionSKUs.TIER_0 && !r && (C = x.Step.WHAT_YOU_LOSE);
      let d = (0, m.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: r,
          skuId: n
        }),
        p = (0, _.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: r,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      C !== x.Step.WHAT_YOU_LOSE && p && (C = x.Step.REVIEW, a((0, _.getDefaultPlanOneStepCheckout)(n, t))), i(C, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: L,
      userTrialOffer: h,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: L,
    inOfferExperience: P,
    priceOptions: S
  })
}

function j(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: L.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: S.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: r()(L.skuSelectModalContent, {
        [L.modalPadding]: a
      }),
      children: [(0, s.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: L.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: i,
        priceOptions: o
      })]
    })]
  })
}