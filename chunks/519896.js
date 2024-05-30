"use strict";
n.r(t), n.d(t, {
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

function m(e) {
  let {
    appId: t,
    groupListingId: n,
    groupListingType: m,
    guildId: h,
    onClose: v,
    skuId: T,
    transitionState: I
  } = e, _ = (0, o.useGetSubscriptionListing__DO_NOT_USE)(T), g = r.useMemo(() => {
    var e;
    return (null == _ ? void 0 : _.image_asset) != null && null !== (e = c.default.toURLSafe((0, d.getAssetURL)(t, _.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, null == _ ? void 0 : _.image_asset]), x = r.useMemo(() => {
    var e;
    return null == _ ? void 0 : null === (e = _.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.getBenefitIcon)(t, e.icon)
    }))
  }, [t, null == _ ? void 0 : _.store_listing_benefits]);
  if (null == _) return null;
  let E = _.subscription_plans.length > 0 ? _.subscription_plans[0] : null;
  return null == E ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: t,
    transitionState: I,
    onHeaderTitleClick: v,
    onClose: v,
    footer: (0, i.jsx)(S.SubscriptionPurchaseButton, {
      appId: t,
      groupListingId: n,
      groupListingType: m,
      guildId: h,
      skuId: T,
      subPlan: E
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: t,
      skuId: T,
      benefits: null != x ? x.map(e => (0, i.jsx)(l.SubscriptionCardBenefit, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : void 0,
      description: _.description,
      imgSrc: g,
      title: _.name,
      tag: (0, i.jsx)(a.SubscriptionTag, {
        type: m
      }),
      FallbackIcon: s.BadgeIcon
    })
  })
}