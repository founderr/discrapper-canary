"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("270144"),
  r = n("488915"),
  o = n("171246"),
  u = n("359610"),
  d = n("696906"),
  c = n("981631"),
  E = n("689938");

function f(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, f = (0, i.useApplication)(t), {
    listingsLoaded: _
  } = (0, i.useFetchListingsForApplication)(t, null == f ? void 0 : f.primarySkuId), T = (0, a.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), m = null != T ? (0, o.getPayableSubscriptionListing)(T) : null, {
    openModal: I,
    canOpenModal: N
  } = (0, d.default)({
    guildId: n,
    groupListingId: null == T ? void 0 : T.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE,
    skuId: null == m ? void 0 : m.id
  });
  return (0, s.jsx)(u.default, {
    size: l.Button.Sizes.MEDIUM,
    onClick: () => I(),
    disabled: !N || !_,
    children: E.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}