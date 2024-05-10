"use strict";
n.r(t), n.d(t, {
  SubscriptionDetailsModal: function() {
    return h
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("269210"),
  s = n("752843"),
  a = n("368072"),
  o = n("481060"),
  u = n("889989"),
  d = n("73346"),
  c = n("591759"),
  f = n("680005"),
  p = n("938337"),
  m = n("689938"),
  S = n("399461");

function h(e) {
  let {
    appId: t,
    groupListingId: n,
    groupListingType: h,
    guildId: g,
    listing: v,
    onClose: x,
    transitionState: T
  } = e, C = r.useMemo(() => {
    var e;
    return null != v.image_asset && null !== (e = c.default.toURLSafe((0, d.getAssetURL)(t, v.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, v.image_asset]), I = r.useMemo(() => {
    var e;
    return null === (e = v.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.getBenefitIcon)(t, e.icon)
    }))
  }, [t, v.store_listing_benefits]), E = v.subscription_plans.length > 0 ? v.subscription_plans[0] : null;
  return null == E || null == I ? null : (0, i.jsxs)(o.ModalRoot, {
    transitionState: T,
    size: o.ModalSize.DYNAMIC,
    className: S.subDetailsModal,
    children: [(0, i.jsx)(p.TrackedCardDetails, {
      appId: t,
      skuId: v.id,
      benefits: I.map(e => (0, i.jsx)(l.SubscriptionCardBenefit, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)),
      description: v.description,
      imgSrc: C,
      title: v.name,
      tag: (0, i.jsx)(s.SubscriptionTag, {
        type: h
      }),
      onClose: x,
      FallbackIcon: a.BadgeIcon
    }), (0, i.jsxs)(o.ModalFooter, {
      className: S.footer,
      children: [(0, i.jsx)(o.Button, {
        className: S.backButton,
        onClick: x,
        look: o.ButtonLooks.BLANK,
        children: (0, i.jsx)(o.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: m.default.Messages.BACK
        })
      }), (0, i.jsx)(f.SubscriptionPurchaseButton, {
        appId: t,
        listing: v,
        groupListingId: n,
        groupListingType: h,
        guildId: g,
        subPlan: E
      })]
    })]
  })
}