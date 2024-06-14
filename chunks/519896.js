"use strict";
n.r(e), n.d(e, {
  SubscriptionDetailsModal: function() {
    return m
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("269210"),
  a = n("752843"),
  s = n("368072"),
  o = n("789703"),
  u = n("889989"),
  d = n("73346"),
  c = n("591759"),
  f = n("886253"),
  S = n("680005"),
  p = n("938337");

function m(t) {
  let {
    appId: e,
    groupListingId: n,
    groupListingType: m,
    guildId: h,
    onClose: T,
    skuId: _,
    transitionState: I,
    onHeaderTitleClick: v
  } = t, E = (0, o.useGetSubscriptionListing__DO_NOT_USE)(_), g = r.useMemo(() => {
    var t;
    return (null == E ? void 0 : E.image_asset) != null && null !== (t = c.default.toURLSafe((0, d.getAssetURL)(e, E.image_asset, 256))) && void 0 !== t ? t : void 0
  }, [e, null == E ? void 0 : E.image_asset]), x = r.useMemo(() => {
    let t = null == E ? void 0 : E.store_listing_benefits;
    if (null != t && 0 !== t.length) return t.map(t => ({
      id: t.id,
      title: t.name,
      description: t.description,
      icon: (0, u.getBenefitIcon)(e, t.icon)
    }))
  }, [e, null == E ? void 0 : E.store_listing_benefits]);
  if (null == E) return null;
  let C = E.subscription_plans.length > 0 ? E.subscription_plans[0] : null;
  return null == C ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: e,
    skuId: _,
    transitionState: I,
    onHeaderTitleClick: null != v ? v : T,
    onClose: T,
    footer: (0, i.jsx)(S.SubscriptionPurchaseButton, {
      appId: e,
      groupListingId: n,
      groupListingType: m,
      guildId: h,
      skuId: _,
      subPlan: C
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: e,
      skuId: _,
      benefits: null != x ? x.map(t => (0, i.jsx)(l.SubscriptionCardBenefit, {
        name: t.title,
        icon: t.icon,
        description: t.description
      }, t.id)) : void 0,
      description: E.description,
      imgSrc: g,
      title: E.name,
      tag: (0, i.jsx)(a.SubscriptionTag, {
        type: m
      }),
      FallbackIcon: s.BadgeIcon
    })
  })
}