"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return j
  }
});
var s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  l = n("481060"),
  a = n("140465"),
  C = n("424082"),
  o = n("639119"),
  u = n("55610"),
  d = n("973007"),
  p = n("74538"),
  c = n("987209"),
  f = n("598"),
  x = n("409813"),
  _ = n("614223"),
  L = n("48175"),
  m = n("474936"),
  h = n("689938"),
  S = n("385231");

function j(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: h
  } = (0, f.usePaymentContext)(), {
    isGift: S
  } = (0, c.useGiftContext)(), j = (0, o.usePremiumTrialOffer)(i);
  (0, C.useAnnualDiscountExperiment)("PremiumPaymentSKUSelectStep", null == j);
  let P = (0, a.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(E, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: i,
        isGift: r,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: C
      } = e;
      s(n);
      let o = x.Step.PLAN_SELECT,
        u = (0, p.getPremiumSkuIdForSubscription)(t);
      (u === m.PremiumSubscriptionSKUs.TIER_1 || u === m.PremiumSubscriptionSKUs.TIER_2) && n === m.PremiumSubscriptionSKUs.TIER_0 && !r && (o = x.Step.WHAT_YOU_LOSE);
      let d = (0, L.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: r,
          skuId: n
        }),
        c = (0, _.inOneStepSubscriptionCheckout)({
          isTrial: d,
          isGift: r,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: C
        });
      o !== x.Step.WHAT_YOU_LOSE && c && (o = x.Step.REVIEW, a((0, _.getDefaultPlanOneStepCheckout)(n, t))), i(o, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: S,
      userTrialOffer: j,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: S,
    inOfferExperience: P,
    priceOptions: h
  })
}

function E(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: a,
    priceOptions: C
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: S.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: h.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: r()(S.skuSelectModalContent, {
        [S.modalPadding]: a
      }),
      children: [(0, s.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: S.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: e => t((0, p.castPremiumSubscriptionAsSkuId)(e)),
        isGift: i,
        priceOptions: C
      })]
    })]
  })
}