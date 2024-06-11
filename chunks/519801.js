"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("131388"),
  l = n("607070"),
  i = n("745510"),
  u = n("171246"),
  o = n("689011"),
  d = n("931905"),
  c = n("598"),
  f = n("409813"),
  _ = n("586585"),
  I = n("456251"),
  E = n("614277"),
  S = n("698708"),
  P = n("750143"),
  A = n("689938");

function C(e) {
  var t, n;
  let C, N, {
      showBenefits: T,
      handleClose: O,
      onSubscriptionConfirmation: m
    } = e,
    {
      updatedSubscription: p,
      readySlideId: R,
      selectedSku: L,
      selectedStoreListing: M,
      application: h
    } = (0, c.usePaymentContext)(),
    g = (0, s.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: y
    } = r.useContext(i.ConfettiCannonContext),
    U = null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : "",
    b = () => {
      O(), null == m || m()
    },
    D = R === f.Step.CONFIRM,
    x = (0, u.isApplicationUserSubscription)(null !== (n = null == L ? void 0 : L.flags) && void 0 !== n ? n : 0),
    B = null != M && M.benefits.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: M.benefits.length
    }) : null;
  return T ? g ? C = (0, a.jsx)(d.BenefitsConfirmationLite, {
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: U
    }),
    subtitle: null != M && M.benefits.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: B
    }) : null,
    onConfirm: b,
    confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (C = null != M && null != h ? (0, a.jsx)(o.BenefitsConfirmation, {
    icon: M.thumbnail,
    storeListingBenefits: M.benefits,
    application: h,
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: U
    }),
    subtitle: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: x ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == h ? void 0 : h.name
    }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: U
    })
  }) : (0, a.jsx)(I.default, {}), N = (0, a.jsx)(_.default, {
    onPrimary: b,
    primaryCTA: _.CTAType.CONTINUE,
    primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : C = g ? (0, a.jsx)(d.PurchaseConfirmationLite, {
    tierName: U,
    onConfirm: b,
    subscription: p
  }) : (0, a.jsx)(o.PurchaseConfirmation, {
    tierName: U,
    onConfirm: b,
    subscription: p
  }), r.useEffect(() => {
    l.default.useReducedMotion && D && y(window.innerWidth / 2, window.innerHeight / 2)
  }, [y, D]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.PaymentPortalBody, {
      children: [(0, a.jsx)(S.default, {}), C]
    }), null != N && (0, a.jsx)(E.PaymentPortalFooter, {
      children: N
    })]
  })
}