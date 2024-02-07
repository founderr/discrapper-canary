"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  r = n("834897"),
  s = n("90592"),
  u = n("333955"),
  o = n("547356"),
  c = n("305961"),
  d = n("642906"),
  f = n("85336"),
  I = n("159149"),
  _ = n("650484"),
  S = n("425480"),
  T = n("782340");

function P(e) {
  let {
    application: t,
    listing: n,
    handleStepChange: P,
    handleClose: E
  } = e, {
    subscriptionMetadataRequest: N
  } = (0, d.usePaymentContext)(), A = (0, r.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, s.isApplicationUserSubscription)(n.sku_flags), p = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(null == N ? void 0 : N.guild_id)), C = l.useCallback(() => P(f.Step.REVIEW), [P]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.PaymentPortalBody, {
      children: A ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: C,
        onCancel: E,
        title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == p ? void 0 : p.name
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
        onPrimary: C,
        primaryCTA: I.CTAType.CONTINUE,
        primaryText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}