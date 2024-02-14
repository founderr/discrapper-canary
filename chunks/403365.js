"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return T
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  i = n("182650"),
  u = n("917247"),
  o = n("279171"),
  d = n("49735"),
  c = n("719923"),
  _ = n("635357"),
  I = n("642906"),
  E = n("85336"),
  f = n("176108"),
  S = n("254350"),
  P = n("646718"),
  m = n("782340"),
  p = n("63069");

function T(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: a,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: d
  } = (0, I.usePaymentContext)(), {
    isGift: m
  } = (0, _.useGiftContext)(), p = (0, u.usePremiumTrialOffer)(r), T = (0, i.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(N, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: r,
        isGift: l,
        userTrialOffer: a,
        setSelectedPlanId: i,
        startedPaymentFlowWithPaymentSources: u
      } = e;
      s(n);
      let o = E.Step.PLAN_SELECT,
        d = (0, c.getPremiumSkuIdForSubscription)(t);
      (d === P.PremiumSubscriptionSKUs.TIER_1 || d === P.PremiumSubscriptionSKUs.TIER_2) && n === P.PremiumSubscriptionSKUs.TIER_0 && !l && (o = E.Step.WHAT_YOU_LOSE);
      let _ = (0, S.isInTrialRedemption)({
          userTrialOffer: a,
          isGift: l,
          skuId: n
        }),
        I = (0, f.inOneStepSubscriptionCheckout)({
          isTrial: _,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: u
        });
      if (o !== E.Step.WHAT_YOU_LOSE && I) {
        o = E.Step.REVIEW;
        let e = (0, f.getDefaultPlanOneStepCheckout)(n, t);
        i(e)
      }
      r(o, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: a,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: t,
      isGift: m,
      userTrialOffer: p,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: m,
    inOfferExperience: T
  })
}

function N(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: r,
    inOfferExperience: i
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(a.ModalHeader, {
      className: p.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H4,
        children: m.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(a.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(a.ModalContent, {
      className: l(p.skuSelectModalContent, {
        [p.modalPadding]: i
      }),
      children: [(0, s.jsx)(o.default, {
        fromBoostCancelModal: !1,
        className: p.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: t,
        isGift: r
      })]
    })]
  })
}