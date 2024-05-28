"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("442837"),
  l = n("131388"),
  u = n("171246"),
  i = n("689011"),
  o = n("931905"),
  c = n("430824"),
  d = n("598"),
  f = n("409813"),
  _ = n("586585"),
  I = n("614277"),
  E = n("750143"),
  S = n("689938");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: P,
    selectedSku: N,
    selectedStoreListing: A,
    application: C
  } = (0, d.usePaymentContext)(), m = (0, l.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), T = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(null == P ? void 0 : P.guild_id)), p = r.useCallback(() => t(f.Step.REVIEW), [t]);
  if (null == N) return null;
  let O = (0, u.isApplicationUserSubscription)(N.flags);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.PaymentPortalBody, {
      children: m ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: p,
        onCancel: n,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: N.name
        }),
        subtitle: O ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == T ? void 0 : T.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(i.BenefitsConfirmation, {
        icon: null == A ? void 0 : A.thumbnail,
        storeListingBenefits: null == A ? void 0 : A.benefits,
        application: null != C ? C : void 0,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: N.name
        }),
        subtitle: O ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: O ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == C ? void 0 : C.name
        }) : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !m && (0, a.jsx)(I.PaymentPortalFooter, {
      children: (0, a.jsx)(_.default, {
        onBack: n,
        backText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: p,
        primaryCTA: _.CTAType.CONTINUE,
        primaryText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}