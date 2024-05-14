"use strict";
n.r(t), n.d(t, {
  SubscriptionDetailsModal: function() {
    return g
  }
});
var i = n("735250"),
  l = n("470079"),
  r = n("269210"),
  s = n("752843"),
  a = n("368072"),
  o = n("481060"),
  u = n("789703"),
  d = n("889989"),
  c = n("73346"),
  f = n("591759"),
  p = n("680005"),
  m = n("938337"),
  h = n("689938"),
  S = n("399461");

function g(e) {
  let {
    appId: t,
    groupListingId: n,
    groupListingType: g,
    guildId: v,
    onClose: T,
    skuId: x,
    transitionState: _
  } = e, I = (0, u.useGetSubscriptionListing__DO_NOT_USE)(x), C = l.useMemo(() => {
    var e;
    return (null == I ? void 0 : I.image_asset) != null && null !== (e = f.default.toURLSafe((0, c.getAssetURL)(t, I.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, null == I ? void 0 : I.image_asset]), E = l.useMemo(() => {
    var e;
    return null == I ? void 0 : null === (e = I.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, d.getBenefitIcon)(t, e.icon)
    }))
  }, [t, null == I ? void 0 : I.store_listing_benefits]);
  if (null == I) return null;
  let L = I.subscription_plans.length > 0 ? I.subscription_plans[0] : null;
  return null == L || null == E ? null : (0, i.jsxs)(o.ModalRoot, {
    transitionState: _,
    size: o.ModalSize.DYNAMIC,
    className: S.subDetailsModal,
    children: [(0, i.jsx)(m.TrackedCardDetails, {
      appId: t,
      skuId: x,
      benefits: E.map(e => (0, i.jsx)(r.SubscriptionCardBenefit, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)),
      description: I.description,
      imgSrc: C,
      title: I.name,
      tag: (0, i.jsx)(s.SubscriptionTag, {
        type: g
      }),
      onClose: T,
      FallbackIcon: a.BadgeIcon
    }), (0, i.jsxs)(o.ModalFooter, {
      className: S.footer,
      children: [(0, i.jsx)(o.Button, {
        className: S.backButton,
        onClick: T,
        look: o.ButtonLooks.BLANK,
        children: (0, i.jsx)(o.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: h.default.Messages.BACK
        })
      }), (0, i.jsx)(p.SubscriptionPurchaseButton, {
        appId: t,
        groupListingId: n,
        groupListingType: g,
        guildId: v,
        skuId: x,
        subPlan: L
      })]
    })]
  })
}