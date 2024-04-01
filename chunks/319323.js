"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
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
  } = (0, i.useFetchListingsForApplication)(t, null == f ? void 0 : f.primarySkuId), T = (0, l.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), I = null != T ? (0, o.getPayableSubscriptionListing)(T) : null, {
    openModal: m,
    canOpenModal: N
  } = (0, d.default)({
    listing: I,
    guildId: n,
    groupListingId: null == T ? void 0 : T.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE
  });
  return (0, s.jsx)(u.default, {
    size: a.Button.Sizes.MEDIUM,
    onClick: () => m(),
    disabled: !N || !_,
    children: E.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}