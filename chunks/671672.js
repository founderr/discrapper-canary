"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  r = n.n(i),
  s = n("252438"),
  u = n("834897"),
  o = n("206230"),
  d = n("90592"),
  c = n("333955"),
  f = n("547356"),
  I = n("526887"),
  _ = n("642906"),
  S = n("85336"),
  E = n("159149"),
  T = n("650484"),
  A = n("367767"),
  P = n("425480"),
  N = n("782340");

function m(e) {
  let t, n, {
      showBenefits: i,
      application: m,
      listing: C,
      handleClose: O,
      onSubscriptionConfirmation: p
    } = e,
    {
      selectedPlan: L,
      selectedSkuId: h,
      step: R,
      updatedSubscription: M,
      readySlideId: g
    } = (0, _.usePaymentContext)();
  r(null != L, "Expected plan to selected"), r(null != h, "Expected selectedSkuId"), r(null != R, "Step should be set");
  let b = (0, u.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: U
    } = l.useContext(I.ConfettiCannonContext),
    B = () => {
      O(), null == p || p()
    },
    x = g === S.Step.CONFIRM,
    y = (0, d.isApplicationUserSubscription)(C.sku_flags),
    k = l.useMemo(() => {
      let e = 0,
        t = 0;
      for (let n of C.sku_benefits.benefits) n.ref_type === s.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === s.SKUBenefitTypes.INTANGIBLE && (t += 1);
      let n = [];
      return 0 !== e && n.push(N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
        commandCount: e
      })), 0 !== t && n.push(N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
        benefitCount: t
      })), n
    }, [C]);
  return i ? b ? t = (0, a.jsx)(f.BenefitsConfirmationLite, {
    title: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: C.name
    }),
    subtitle: k.length > 0 ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: new Intl.ListFormat(N.default.getLocale()).format(k)
    }) : null,
    onConfirm: B,
    confirmCta: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (t = (0, a.jsx)(c.BenefitsConfirmation, {
    icon: C.image_asset,
    storeListingBenefits: C.store_listing_benefits,
    skuBenefits: C.sku_benefits.benefits,
    application: m,
    title: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: C.name
    }),
    subtitle: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: y ? N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == m ? void 0 : m.name
    }) : N.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: C.name
    })
  }), n = (0, a.jsx)(E.default, {
    onPrimary: B,
    primaryCTA: E.CTAType.CONTINUE,
    primaryText: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : t = b ? (0, a.jsx)(f.PurchaseConfirmationLite, {
    tierName: C.name,
    onConfirm: B,
    subscription: M
  }) : (0, a.jsx)(c.PurchaseConfirmation, {
    tierName: C.name,
    onConfirm: B,
    subscription: M
  }), l.useEffect(() => {
    o.default.useReducedMotion && x && U(window.innerWidth / 2, window.innerHeight / 2)
  }, [U, x]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(T.PaymentPortalBody, {
      children: [(0, a.jsx)(A.default, {}), t]
    }), null != n && (0, a.jsx)(T.PaymentPortalFooter, {
      children: n
    })]
  })
}