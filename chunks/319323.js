"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("393586"),
  i = n("481060"),
  r = n("270144"),
  o = n("488915"),
  u = n("171246"),
  d = n("696906"),
  c = n("981631"),
  f = n("689938"),
  E = n("786838");

function _(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, _ = (0, r.useApplication)(t), {
    listingsLoaded: T
  } = (0, r.useFetchListingsForApplication)(t, null == _ ? void 0 : _.primarySkuId), m = (0, a.useStateFromStores)([o.default], () => o.default.getSubscriptionGroupListingForApplication(t), [t]), I = null != m ? (0, u.getPayableSubscriptionListing)(m) : null, {
    openModal: N,
    canOpenModal: p
  } = (0, d.default)({
    guildId: n,
    groupListingId: null == m ? void 0 : m.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE,
    skuId: null == I ? void 0 : I.id
  });
  return (0, s.jsx)(i.Button, {
    color: i.Button.Colors.BRAND,
    size: i.Button.Sizes.SMALL,
    onClick: () => N(),
    disabled: !p || !T,
    children: (0, s.jsxs)("div", {
      className: E.button,
      children: [(0, s.jsx)(l.ShopIcon, {
        color: "white",
        height: 16,
        width: 16
      }), f.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA]
    })
  })
}