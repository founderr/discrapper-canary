"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  r = n("834897"),
  s = n("129408"),
  u = n("713536"),
  o = n("640820"),
  d = n("305961"),
  c = n("642906"),
  f = n("85336"),
  I = n("159149"),
  _ = n("650484"),
  S = n("101703"),
  E = n("782340");

function T(e) {
  let {
    application: t,
    listing: n,
    handleStepChange: T,
    handleClose: A
  } = e, {
    subscriptionMetadataRequest: P
  } = (0, c.usePaymentContext)(), N = (0, r.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, s.isApplicationUserSubscription)(n.sku_flags), C = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == P ? void 0 : P.guild_id)), O = l.useCallback(() => T(f.Step.REVIEW), [T]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.PaymentPortalBody, {
      children: N ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: O,
        onCancel: A,
        title: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == C ? void 0 : C.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: n.image_asset,
        storeListingBenefits: n.store_listing_benefits,
        skuBenefits: n.sku_benefits.benefits,
        application: t,
        title: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: m ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : E.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: m ? E.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: t.name
        }) : E.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !N && (0, a.jsx)(_.PaymentPortalFooter, {
      children: (0, a.jsx)(I.default, {
        onBack: A,
        backText: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: O,
        primaryCTA: I.CTAType.CONTINUE,
        primaryText: E.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}