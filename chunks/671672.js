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
  c = n("90592"),
  d = n("333955"),
  f = n("547356"),
  I = n("526887"),
  _ = n("642906"),
  S = n("85336"),
  T = n("159149"),
  P = n("650484"),
  E = n("367767"),
  N = n("425480"),
  A = n("782340");

function m(e) {
  let t, n, {
      showBenefits: i,
      application: m,
      listing: p,
      handleClose: C,
      onSubscriptionConfirmation: O
    } = e,
    {
      selectedPlan: R,
      selectedSkuId: g,
      step: M,
      updatedSubscription: L,
      readySlideId: h
    } = (0, _.usePaymentContext)();
  r(null != R, "Expected plan to selected"), r(null != g, "Expected selectedSkuId"), r(null != M, "Step should be set");
  let U = (0, u.default)(N.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: v
    } = l.useContext(I.ConfettiCannonContext),
    x = () => {
      C(), null == O || O()
    },
    B = h === S.Step.CONFIRM,
    y = (0, c.isApplicationUserSubscription)(p.sku_flags),
    b = l.useMemo(() => {
      let e = 0,
        t = 0;
      for (let n of p.sku_benefits.benefits) n.ref_type === s.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === s.SKUBenefitTypes.INTANGIBLE && (t += 1);
      let n = [];
      return 0 !== e && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
        commandCount: e
      })), 0 !== t && n.push(A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
        benefitCount: t
      })), n
    }, [p]);
  return i ? U ? t = (0, a.jsx)(f.BenefitsConfirmationLite, {
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: p.name
    }),
    subtitle: b.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: new Intl.ListFormat(A.default.getLocale()).format(b)
    }) : null,
    onConfirm: x,
    confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (t = (0, a.jsx)(d.BenefitsConfirmation, {
    icon: p.image_asset,
    storeListingBenefits: p.store_listing_benefits,
    skuBenefits: p.sku_benefits.benefits,
    application: m,
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: p.name
    }),
    subtitle: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: y ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == m ? void 0 : m.name
    }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: p.name
    })
  }), n = (0, a.jsx)(T.default, {
    onPrimary: x,
    primaryCTA: T.CTAType.CONTINUE,
    primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : t = U ? (0, a.jsx)(f.PurchaseConfirmationLite, {
    tierName: p.name,
    onConfirm: x,
    subscription: L
  }) : (0, a.jsx)(d.PurchaseConfirmation, {
    tierName: p.name,
    onConfirm: x,
    subscription: L
  }), l.useEffect(() => {
    o.default.useReducedMotion && B && v(window.innerWidth / 2, window.innerHeight / 2)
  }, [v, B]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(P.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), t]
    }), null != n && (0, a.jsx)(P.PaymentPortalFooter, {
      children: n
    })]
  })
}