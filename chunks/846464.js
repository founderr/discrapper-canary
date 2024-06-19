n.d(s, {
  q: function() {
    return M
  }
});
var t = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  r = n(481060),
  C = n(140465),
  a = n(424082),
  o = n(639119),
  d = n(55610),
  _ = n(973007),
  u = n(74538),
  c = n(987209),
  p = n(598),
  x = n(409813),
  L = n(614223),
  I = n(48175),
  E = n(474936),
  h = n(689938),
  f = n(738892);

function M(e) {
  let {
    handleStepChange: s,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: l,
    activeSubscription: r,
    startedPaymentFlowWithPaymentSourcesRef: d,
    setSelectedPlanId: _,
    priceOptions: h
  } = (0, p.usePaymentContext)(), {
    isGift: f
  } = (0, c.wD)(), M = (0, o.N)(i);
  (0, a.Uh)("PremiumPaymentSKUSelectStep", null == M);
  let T = (0, C.Nx)();
  return (0, t.jsx)(N, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: s,
        newSkuId: n,
        setSelectedSkuId: t,
        handleStepChange: i,
        isGift: l,
        userTrialOffer: r,
        setSelectedPlanId: C,
        startedPaymentFlowWithPaymentSources: a
      } = e;
      t(n);
      let o = x.h8.PLAN_SELECT,
        d = (0, u.k5)(s);
      (d === E.Si.TIER_1 || d === E.Si.TIER_2) && n === E.Si.TIER_0 && !l && (o = x.h8.WHAT_YOU_LOSE);
      let _ = (0, I.T)({
          userTrialOffer: r,
          isGift: l,
          skuId: n
        }),
        c = (0, L.Kp)({
          isTrial: _,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: a
        });
      o !== x.h8.WHAT_YOU_LOSE && c && (o = x.h8.REVIEW, C((0, L.nA)(n, s))), i(o, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: r,
      newSkuId: e,
      setSelectedSkuId: l,
      handleStepChange: s,
      isGift: f,
      userTrialOffer: M,
      startedPaymentFlowWithPaymentSources: d.current,
      setSelectedPlanId: _
    }),
    onClose: n,
    isGift: f,
    inOfferExperience: T,
    priceOptions: h
  })
}

function N(e) {
  let {
    selectSku: s,
    onClose: n,
    isGift: i,
    inOfferExperience: C,
    priceOptions: a
  } = e;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(r.ModalHeader, {
      className: f.skuSelectModalHeader,
      separator: !1,
      children: [(0, t.jsx)(r.FormTitle, {
        tag: r.FormTitleTags.H4,
        children: h.Z.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, t.jsx)(r.ModalCloseButton, {
        onClick: n
      })]
    }), (0, t.jsxs)(r.ModalContent, {
      className: l()(f.skuSelectModalContent, {
        [f.modalPadding]: C
      }),
      children: [(0, t.jsx)(d.Z, {
        fromBoostCancelModal: !1,
        className: f.legacyPricingNotice
      }), (0, t.jsx)(_.Z, {
        onSelectSku: e => s((0, u.Wz)(e)),
        isGift: i,
        priceOptions: a
      })]
    })]
  })
}