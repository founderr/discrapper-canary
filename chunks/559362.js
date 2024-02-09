"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  s = n("834897"),
  r = n("90592"),
  u = n("333955"),
  o = n("547356"),
  c = n("305961"),
  d = n("642906"),
  f = n("85336"),
  I = n("159149"),
  _ = n("650484"),
  S = n("425480"),
  T = n("782340");

function N(e) {
  let {
    application: t,
    listing: n,
    handleStepChange: N,
    handleClose: E
  } = e, {
    subscriptionMetadataRequest: P
  } = (0, d.usePaymentContext)(), A = (0, s.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, r.isApplicationUserSubscription)(n.sku_flags), C = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(null == P ? void 0 : P.guild_id)), p = l.useCallback(() => N(f.Step.REVIEW), [N]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.PaymentPortalBody, {
      children: A ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: p,
        onCancel: E,
        title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == C ? void 0 : C.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: n.image_asset,
        storeListingBenefits: n.store_listing_benefits,
        skuBenefits: n.sku_benefits.benefits,
        application: t,
        title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: t.name
        }) : T.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !A && (0, a.jsx)(_.PaymentPortalFooter, {
      children: (0, a.jsx)(I.default, {
        onBack: E,
        backText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: p,
        primaryCTA: I.CTAType.CONTINUE,
        primaryText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}