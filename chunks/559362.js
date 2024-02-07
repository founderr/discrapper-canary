"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  l = n("834897"),
  a = n("90592"),
  u = n("333955"),
  o = n("547356"),
  c = n("305961"),
  d = n("642906"),
  f = n("85336"),
  I = n("159149"),
  _ = n("650484"),
  E = n("425480"),
  T = n("782340");

function S(e) {
  let {
    application: t,
    listing: n,
    handleStepChange: S,
    handleClose: N
  } = e, {
    subscriptionMetadataRequest: p
  } = (0, d.usePaymentContext)(), C = (0, l.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, a.isApplicationUserSubscription)(n.sku_flags), P = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), h = i.useCallback(() => S(f.Step.REVIEW), [S]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.PaymentPortalBody, {
      children: C ? (0, r.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: h,
        onCancel: N,
        title: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == P ? void 0 : P.name
        }),
        showOpenDiscord: !1
      }) : (0, r.jsx)(u.BenefitsConfirmation, {
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
    }), !C && (0, r.jsx)(_.PaymentPortalFooter, {
      children: (0, r.jsx)(I.default, {
        onBack: N,
        backText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: h,
        primaryCTA: I.CTAType.CONTINUE,
        primaryText: T.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}