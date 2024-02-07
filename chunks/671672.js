"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("424973");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  l = n.n(s),
  a = n("252438"),
  u = n("834897"),
  o = n("206230"),
  c = n("90592"),
  d = n("333955"),
  f = n("547356"),
  I = n("526887"),
  _ = n("642906"),
  E = n("85336"),
  T = n("159149"),
  S = n("650484"),
  N = n("367767"),
  p = n("425480"),
  C = n("782340");

function m(e) {
  let t, n, {
      showBenefits: s,
      application: m,
      listing: P,
      handleClose: h,
      onSubscriptionConfirmation: R
    } = e,
    {
      selectedPlan: L,
      selectedSkuId: M,
      step: v,
      updatedSubscription: A,
      readySlideId: g
    } = (0, _.usePaymentContext)();
  l(null != L, "Expected plan to selected"), l(null != M, "Expected selectedSkuId"), l(null != v, "Step should be set");
  let O = (0, u.default)(p.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: U
    } = i.useContext(I.ConfettiCannonContext),
    x = () => {
      h(), null == R || R()
    },
    D = g === E.Step.CONFIRM,
    y = (0, c.isApplicationUserSubscription)(P.sku_flags),
    G = i.useMemo(() => {
      let e = 0,
        t = 0;
      for (let n of P.sku_benefits.benefits) n.ref_type === a.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === a.SKUBenefitTypes.INTANGIBLE && (t += 1);
      let n = [];
      return 0 !== e && n.push(C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
        commandCount: e
      })), 0 !== t && n.push(C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
        benefitCount: t
      })), n
    }, [P]);
  return s ? O ? t = (0, r.jsx)(f.BenefitsConfirmationLite, {
    title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: P.name
    }),
    subtitle: G.length > 0 ? C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: new Intl.ListFormat(C.default.getLocale()).format(G)
    }) : null,
    onConfirm: x,
    confirmCta: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (t = (0, r.jsx)(d.BenefitsConfirmation, {
    icon: P.image_asset,
    storeListingBenefits: P.store_listing_benefits,
    skuBenefits: P.sku_benefits.benefits,
    application: m,
    title: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: P.name
    }),
    subtitle: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: y ? C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == m ? void 0 : m.name
    }) : C.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: P.name
    })
  }), n = (0, r.jsx)(T.default, {
    onPrimary: x,
    primaryCTA: T.CTAType.CONTINUE,
    primaryText: C.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : t = O ? (0, r.jsx)(f.PurchaseConfirmationLite, {
    tierName: P.name,
    onConfirm: x,
    subscription: A
  }) : (0, r.jsx)(d.PurchaseConfirmation, {
    tierName: P.name,
    onConfirm: x,
    subscription: A
  }), i.useEffect(() => {
    o.default.useReducedMotion && D && U(window.innerWidth / 2, window.innerHeight / 2)
  }, [U, D]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(S.PaymentPortalBody, {
      children: [(0, r.jsx)(N.default, {}), t]
    }), null != n && (0, r.jsx)(S.PaymentPortalFooter, {
      children: n
    })]
  })
}