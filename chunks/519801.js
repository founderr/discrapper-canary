"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("131388"),
  l = n("607070"),
  u = n("745510"),
  i = n("171246"),
  o = n("689011"),
  c = n("931905"),
  d = n("598"),
  f = n("409813"),
  _ = n("586585"),
  I = n("456251"),
  E = n("614277"),
  S = n("698708"),
  P = n("750143"),
  N = n("689938");

function A(e) {
  var t, n;
  let A, C, {
      showBenefits: m,
      handleClose: T,
      onSubscriptionConfirmation: p
    } = e,
    {
      updatedSubscription: O,
      readySlideId: R,
      selectedSku: M,
      selectedStoreListing: L,
      application: h
    } = (0, d.usePaymentContext)(),
    g = (0, s.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: y
    } = r.useContext(u.ConfettiCannonContext),
    b = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
    U = () => {
      T(), null == p || p()
    },
    x = R === f.Step.CONFIRM,
    D = (0, i.isApplicationUserSubscription)(null !== (n = null == M ? void 0 : M.flags) && void 0 !== n ? n : 0),
    v = null != L && L.benefits.length > 0 ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: L.benefits.length
    }) : null;
  return m ? g ? A = (0, a.jsx)(c.BenefitsConfirmationLite, {
    title: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: b
    }),
    subtitle: null != L && L.benefits.length > 0 ? N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: v
    }) : null,
    onConfirm: U,
    confirmCta: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (A = null != L && null != h ? (0, a.jsx)(o.BenefitsConfirmation, {
    icon: L.thumbnail,
    storeListingBenefits: L.benefits,
    application: h,
    title: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: b
    }),
    subtitle: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: D ? N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == h ? void 0 : h.name
    }) : N.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: b
    })
  }) : (0, a.jsx)(I.default, {}), C = (0, a.jsx)(_.default, {
    onPrimary: U,
    primaryCTA: _.CTAType.CONTINUE,
    primaryText: N.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : A = g ? (0, a.jsx)(c.PurchaseConfirmationLite, {
    tierName: b,
    onConfirm: U,
    subscription: O
  }) : (0, a.jsx)(o.PurchaseConfirmation, {
    tierName: b,
    onConfirm: U,
    subscription: O
  }), r.useEffect(() => {
    l.default.useReducedMotion && x && y(window.innerWidth / 2, window.innerHeight / 2)
  }, [y, x]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.PaymentPortalBody, {
      children: [(0, a.jsx)(S.default, {}), A]
    }), null != C && (0, a.jsx)(E.PaymentPortalFooter, {
      children: C
    })]
  })
}