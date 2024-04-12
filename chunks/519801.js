"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  l = n("131388"),
  s = n("607070"),
  i = n("745510"),
  u = n("171246"),
  o = n("689011"),
  d = n("931905"),
  c = n("598"),
  I = n("409813"),
  _ = n("586585"),
  f = n("456251"),
  S = n("614277"),
  E = n("698708"),
  T = n("750143"),
  P = n("689938");

function N(e) {
  var t, n;
  let N, m, {
      showBenefits: A,
      handleClose: C,
      onSubscriptionConfirmation: p
    } = e,
    {
      updatedSubscription: O,
      readySlideId: R,
      selectedSku: M,
      selectedStoreListing: L,
      application: h
    } = (0, c.usePaymentContext)(),
    g = (0, l.default)(T.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: x
    } = r.useContext(i.ConfettiCannonContext),
    U = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
    B = () => {
      C(), null == p || p()
    },
    v = R === I.Step.CONFIRM,
    b = (0, u.isApplicationUserSubscription)(null !== (n = null == M ? void 0 : M.flags) && void 0 !== n ? n : 0),
    y = null != L && L.benefits.length > 0 ? P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: L.benefits.length
    }) : null;
  return A ? g ? N = (0, a.jsx)(d.BenefitsConfirmationLite, {
    title: P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: U
    }),
    subtitle: null != L && L.benefits.length > 0 ? P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: y
    }) : null,
    onConfirm: B,
    confirmCta: P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (N = null != L && null != h ? (0, a.jsx)(o.BenefitsConfirmation, {
    icon: L.thumbnail,
    storeListingBenefits: L.benefits,
    application: h,
    title: P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: U
    }),
    subtitle: P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: b ? P.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == h ? void 0 : h.name
    }) : P.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: U
    })
  }) : (0, a.jsx)(f.default, {}), m = (0, a.jsx)(_.default, {
    onPrimary: B,
    primaryCTA: _.CTAType.CONTINUE,
    primaryText: P.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : N = g ? (0, a.jsx)(d.PurchaseConfirmationLite, {
    tierName: U,
    onConfirm: B,
    subscription: O
  }) : (0, a.jsx)(o.PurchaseConfirmation, {
    tierName: U,
    onConfirm: B,
    subscription: O
  }), r.useEffect(() => {
    s.default.useReducedMotion && v && x(window.innerWidth / 2, window.innerHeight / 2)
  }, [x, v]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(S.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), N]
    }), null != m && (0, a.jsx)(S.PaymentPortalFooter, {
      children: m
    })]
  })
}