"use strict";
i.r(t), i.d(t, {
  ApplicationDirectoryStore: function() {
    return m
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("481060"),
  r = i("283836"),
  o = i("507608"),
  c = i("270144"),
  d = i("171246"),
  u = i("689938"),
  p = i("892768");

function m(e) {
  let {
    appId: t,
    guildId: i
  } = e, {
    subscriptionGroupListing: a
  } = (0, c.useActiveSubscriptionListingForApplication)(t, i), {
    subs: m,
    otps: _
  } = (0, r.useRefreshedStorefrontProducts)(t, i);
  return (0, l.jsxs)(l.Fragment, {
    children: [m.length > 0 && null != a && (0, l.jsxs)("div", {
      className: p.productSection,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: u.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, l.jsx)("div", {
        className: n()(p.productList, p.subList),
        children: m.map(e => (0, l.jsx)(o.SubscriptionCardContainer, {
          appId: t,
          groupListingId: a.id,
          guildId: i,
          listing: e,
          groupListingType: (0, d.isApplicationUserSubscription)(a.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), _.length > 0 && (0, l.jsxs)("div", {
      className: p.productSection,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: u.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, l.jsx)("div", {
        className: n()(p.productList, p.itemList),
        children: _.map(e => (0, l.jsx)(o.ProductCardContainer, {
          skuId: e.sku.id,
          appId: t
        }, e.id))
      })]
    })]
  })
}