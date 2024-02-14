"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("252438"),
  u = n("834897"),
  o = n("206230"),
  d = n("90592"),
  c = n("333955"),
  I = n("547356"),
  _ = n("526887"),
  f = n("642906"),
  T = n("85336"),
  S = n("159149"),
  N = n("650484"),
  E = n("367767"),
  P = n("425480"),
  A = n("782340");

function C(e) {
  let t, n, {
      showBenefits: l,
      application: C,
      listing: m,
      handleClose: O,
      onSubscriptionConfirmation: p
    } = e,
    {
      selectedPlan: R,
      selectedSkuId: L,
      step: M,
      updatedSubscription: g,
      readySlideId: U
    } = (0, f.usePaymentContext)();
  i(null != R, "Expected plan to selected"), i(null != L, "Expected selectedSkuId"), i(null != M, "Step should be set");
  let B = (0, u.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: h
    } = s.useContext(_.ConfettiCannonContext),
    x = () => {
      O(), null == p || p()
    },
    y = U === T.Step.CONFIRM,
    b = (0, d.isApplicationUserSubscription)(m.sku_flags),
    v = s.useMemo(() => {
      let e = 0,
        t = 0;
      for (let n of m.sku_benefits.benefits) n.ref_type === r.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === r.SKUBenefitTypes.INTANGIBLE && (t += 1);
      let n = [];
      return 0 !== e && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
        commandCount: e
      })), 0 !== t && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
        benefitCount: t
      })), n
    }, [m]);
  return l ? B ? t = (0, a.jsx)(I.BenefitsConfirmationLite, {
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: m.name
    }),
    subtitle: v.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: new Intl.ListFormat(A.default.getLocale()).format(v)
    }) : null,
    onConfirm: x,
    confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (t = (0, a.jsx)(c.BenefitsConfirmation, {
    icon: m.image_asset,
    storeListingBenefits: m.store_listing_benefits,
    skuBenefits: m.sku_benefits.benefits,
    application: C,
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: m.name
    }),
    subtitle: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: b ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == C ? void 0 : C.name
    }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: m.name
    })
  }), n = (0, a.jsx)(S.default, {
    onPrimary: x,
    primaryCTA: S.CTAType.CONTINUE,
    primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : t = B ? (0, a.jsx)(I.PurchaseConfirmationLite, {
    tierName: m.name,
    onConfirm: x,
    subscription: g
  }) : (0, a.jsx)(c.PurchaseConfirmation, {
    tierName: m.name,
    onConfirm: x,
    subscription: g
  }), s.useEffect(() => {
    o.default.useReducedMotion && y && h(window.innerWidth / 2, window.innerHeight / 2)
  }, [h, y]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(N.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), t]
    }), null != n && (0, a.jsx)(N.PaymentPortalFooter, {
      children: n
    })]
  })
}