"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  },
  openBurstReactionsUpsellModal: function() {
    return m
  }
});
var a = i("37983");
i("884691");
var n = i("77078"),
  l = i("79112"),
  o = i("154889"),
  s = i("917247"),
  r = i("789946"),
  u = i("646718"),
  d = i("49111"),
  c = i("782340"),
  h = i("618080"),
  p = i("277064");

function T(e) {
  var t, i;
  let {
    onClose: n,
    analyticsSource: T,
    ...m
  } = e, f = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
    onClick: () => {
      l.default.open(d.UserSettingsSections.PREMIUM), n()
    }
  }), E = (0, s.usePremiumTrialOffer)(), R = (0, o.usePremiumDiscountOffer)();
  return (0, a.jsx)(r.default, {
    artURL: p,
    artContainerClassName: h.artContainer,
    modalClassName: h.modalContainer,
    bodyClassName: h.bodyContainer,
    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
    body: f,
    glowUp: f,
    analyticsSource: T,
    analyticsLocation: {
      page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.AnalyticsObjects.BUTTON_CTA
    },
    onClose: n,
    subscribeButtonText: null != E || null != R ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
    subscriptionTier: null !== (i = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
    backButtonText: c.default.Messages.NO_THANKS,
    ...m
  })
}

function m(e) {
  let {
    analytics: t
  } = e;
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await i.el("85589").then(i.bind(i, "85589"));
    return i => (0, a.jsx)(e, {
      analyticsSource: t,
      ...i
    })
  })
}