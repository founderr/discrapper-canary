"use strict";
n.r(t), n.d(t, {
  SubscriptionDetailsModal: function() {
    return m
  }
});
var i = n("735250"),
  l = n("470079"),
  r = n("269210"),
  a = n("752843"),
  s = n("368072"),
  o = n("789703"),
  u = n("889989"),
  d = n("73346"),
  c = n("591759"),
  f = n("886253"),
  S = n("680005"),
  p = n("938337");

function m(e) {
  let {
    appId: t,
    groupListingId: n,
    groupListingType: m,
    guildId: h,
    onClose: T,
    skuId: v,
    transitionState: _,
    onHeaderTitleClick: I
  } = e, g = (0, o.useGetSubscriptionListing__DO_NOT_USE)(v), x = l.useMemo(() => {
    var e;
    return (null == g ? void 0 : g.image_asset) != null && null !== (e = c.default.toURLSafe((0, d.getAssetURL)(t, g.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, null == g ? void 0 : g.image_asset]), E = l.useMemo(() => {
    var e;
    return null == g ? void 0 : null === (e = g.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.getBenefitIcon)(t, e.icon)
    }))
  }, [t, null == g ? void 0 : g.store_listing_benefits]);
  if (null == g) return null;
  let C = g.subscription_plans.length > 0 ? g.subscription_plans[0] : null;
  return null == C ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: t,
    transitionState: _,
    onHeaderTitleClick: null != I ? I : T,
    onClose: T,
    footer: (0, i.jsx)(S.SubscriptionPurchaseButton, {
      appId: t,
      groupListingId: n,
      groupListingType: m,
      guildId: h,
      skuId: v,
      subPlan: C
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: t,
      skuId: v,
      benefits: null != E ? E.map(e => (0, i.jsx)(r.SubscriptionCardBenefit, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : void 0,
      description: g.description,
      imgSrc: x,
      title: g.name,
      tag: (0, i.jsx)(a.SubscriptionTag, {
        type: m
      }),
      FallbackIcon: s.BadgeIcon
    })
  })
}