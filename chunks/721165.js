"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  l = n("442837"),
  s = n("131388"),
  i = n("171246"),
  u = n("689011"),
  o = n("931905"),
  d = n("430824"),
  c = n("598"),
  I = n("409813"),
  _ = n("586585"),
  f = n("614277"),
  S = n("750143"),
  E = n("689938");

function T(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: T,
    selectedSku: P,
    selectedStoreListing: N,
    application: m
  } = (0, c.usePaymentContext)(), A = (0, s.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), C = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(null == T ? void 0 : T.guild_id)), p = r.useCallback(() => t(I.Step.REVIEW), [t]);
  if (null == P) return null;
  let O = (0, i.isApplicationUserSubscription)(P.flags);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f.PaymentPortalBody, {
      children: A ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: p,
        onCancel: n,
        title: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: P.name
        }),
        subtitle: O ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == C ? void 0 : C.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: null == N ? void 0 : N.thumbnail,
        storeListingBenefits: null == N ? void 0 : N.benefits,
        application: null != m ? m : void 0,
        title: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: P.name
        }),
        subtitle: O ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : E.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: O ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == m ? void 0 : m.name
        }) : E.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !A && (0, a.jsx)(f.PaymentPortalFooter, {
      children: (0, a.jsx)(_.default, {
        onBack: n,
        backText: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: p,
        primaryCTA: _.CTAType.CONTINUE,
        primaryText: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}