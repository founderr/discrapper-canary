"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("834897"),
  r = n("90592"),
  u = n("333955"),
  o = n("547356"),
  d = n("305961"),
  c = n("642906"),
  I = n("85336"),
  _ = n("159149"),
  f = n("650484"),
  T = n("425480"),
  S = n("782340");

function N(e) {
  let {
    application: t,
    listing: n,
    handleStepChange: N,
    handleClose: E
  } = e, {
    subscriptionMetadataRequest: P
  } = (0, c.usePaymentContext)(), A = (0, i.default)(T.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), C = (0, r.isApplicationUserSubscription)(n.sku_flags), m = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(null == P ? void 0 : P.guild_id)), O = s.useCallback(() => N(I.Step.REVIEW), [N]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f.PaymentPortalBody, {
      children: A ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: O,
        onCancel: E,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == m ? void 0 : m.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: n.image_asset,
        storeListingBenefits: n.store_listing_benefits,
        skuBenefits: n.sku_benefits.benefits,
        application: t,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: n.name
        }),
        subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: t.name
        }) : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !A && (0, a.jsx)(f.PaymentPortalFooter, {
      children: (0, a.jsx)(_.default, {
        onBack: E,
        backText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: O,
        primaryCTA: _.CTAType.CONTINUE,
        primaryText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}