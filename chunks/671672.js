"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  s = n.n(i),
  r = n("252438"),
  u = n("834897"),
  o = n("206230"),
  c = n("90592"),
  d = n("333955"),
  f = n("547356"),
  I = n("526887"),
  _ = n("642906"),
  S = n("85336"),
  T = n("159149"),
  N = n("650484"),
  E = n("367767"),
  P = n("425480"),
  A = n("782340");

function m(e) {
  let t, n, {
      showBenefits: i,
      application: m,
      listing: C,
      handleClose: p,
      onSubscriptionConfirmation: O
    } = e,
    {
      selectedPlan: R,
      selectedSkuId: g,
      step: L,
      updatedSubscription: M,
      readySlideId: h
    } = (0, _.usePaymentContext)();
  s(null != R, "Expected plan to selected"), s(null != g, "Expected selectedSkuId"), s(null != L, "Step should be set");
  let U = (0, u.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: v
    } = l.useContext(I.ConfettiCannonContext),
    x = () => {
      p(), null == O || O()
    },
    B = h === S.Step.CONFIRM,
    y = (0, c.isApplicationUserSubscription)(C.sku_flags),
    b = l.useMemo(() => {
      let e = 0,
        t = 0;
      for (let n of C.sku_benefits.benefits) n.ref_type === r.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === r.SKUBenefitTypes.INTANGIBLE && (t += 1);
      let n = [];
      return 0 !== e && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
        commandCount: e
      })), 0 !== t && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
        benefitCount: t
      })), n
    }, [C]);
  return i ? U ? t = (0, a.jsx)(f.BenefitsConfirmationLite, {
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: C.name
    }),
    subtitle: b.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: new Intl.ListFormat(A.default.getLocale()).format(b)
    }) : null,
    onConfirm: x,
    confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (t = (0, a.jsx)(d.BenefitsConfirmation, {
    icon: C.image_asset,
    storeListingBenefits: C.store_listing_benefits,
    skuBenefits: C.sku_benefits.benefits,
    application: m,
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: C.name
    }),
    subtitle: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: y ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == m ? void 0 : m.name
    }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: C.name
    })
  }), n = (0, a.jsx)(T.default, {
    onPrimary: x,
    primaryCTA: T.CTAType.CONTINUE,
    primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : t = U ? (0, a.jsx)(f.PurchaseConfirmationLite, {
    tierName: C.name,
    onConfirm: x,
    subscription: M
  }) : (0, a.jsx)(d.PurchaseConfirmation, {
    tierName: C.name,
    onConfirm: x,
    subscription: M
  }), l.useEffect(() => {
    o.default.useReducedMotion && B && v(window.innerWidth / 2, window.innerHeight / 2)
  }, [v, B]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(N.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), t]
    }), null != n && (0, a.jsx)(N.PaymentPortalFooter, {
      children: n
    })]
  })
}