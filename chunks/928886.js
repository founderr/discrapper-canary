"use strict";
n.r(t), n.d(t, {
  PaymentModalHeader: function() {
    return R
  }
});
var u = n("735250"),
  i = n("470079"),
  l = n("512722"),
  s = n.n(l),
  a = n("481060"),
  r = n("479446"),
  o = n("646476"),
  c = n("104494"),
  d = n("639119"),
  _ = n("981632"),
  f = n("798769"),
  S = n("689011"),
  p = n("669079"),
  E = n("987209"),
  P = n("598"),
  T = n("409813"),
  m = n("981631"),
  M = n("474936"),
  I = n("231338"),
  A = n("336498");

function R(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: l,
    handleClose: R
  } = e, {
    selectedSkuId: v,
    step: C,
    selectedPlan: h,
    purchaseState: O,
    purchaseType: U,
    selectedSku: N
  } = (0, P.usePaymentContext)(), {
    isGift: L,
    selectedGiftStyle: y,
    giftRecipient: k
  } = (0, E.useGiftContext)(), g = L && (0, p.shouldShowCustomGiftExperience)(k) && C === T.Step.CONFIRM && null != y && (null == N ? void 0 : N.productLine) !== m.SKUProductLines.COLLECTIBLES, b = null != n && null != C, x = C !== T.Step.SKU_SELECT && null != v, D = (0, d.usePremiumTrialOffer)(l), Y = !L && null != D && null != v && (0, M.SubscriptionTrials)[D.trial_id].skus.includes(v), H = (0, c.usePremiumDiscountOffer)(), G = null == H ? void 0 : null === (t = H.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => M.SubscriptionPlanInfo[e].skuId === v), K = !L && null != H && null != v && G, {
    enabled: j
  } = o.default.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: !1
  }), w = (0, o.useIsSeasonalGiftingActive)(), F = j && w;
  return i.useMemo(() => {
    if (null == C) return;
    let e = null;
    if (g) e = (0, u.jsxs)("div", {
      className: A.container,
      children: [(0, u.jsx)(_.default, {
        defaultAnimationState: r.AnimationState.LOOP,
        giftStyle: y,
        className: A.seasonalGiftBoxHeaderIcon
      }), (0, u.jsx)(a.ModalCloseButton, {
        onClick: R,
        className: A.closeButton
      })]
    });
    else if (b) e = n(null != h ? h : null, R, C);
    else if (U === I.PurchaseTypes.ONE_TIME) e = (0, u.jsx)(S.PurchaseHeader, {
      step: C,
      onClose: R
    });
    else if (x) s()(v in M.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(v)), e = (0, u.jsx)(f.default, {
      currentStep: null != C ? C : void 0,
      purchaseState: O,
      premiumType: M.PremiumSubscriptionSKUToPremiumType[v],
      onClose: R,
      showTrialBadge: Y,
      showDiscountBadge: K,
      isGift: L,
      giftRecipient: k,
      useWinterTheme: F
    });
    return e
  }, [y, R, O, n, h, v, C, Y, K, g, x, b, U, L, k, F])
}