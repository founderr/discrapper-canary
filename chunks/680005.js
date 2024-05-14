"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return g
  },
  SubscriptionPurchaseButton: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  r = n("100527"),
  s = n("906732"),
  a = n("87484"),
  o = n("789703"),
  u = n("696906"),
  d = n("626135"),
  c = n("937615"),
  f = n("110742"),
  p = n("981631"),
  m = n("474936"),
  h = n("689938");

function S(e) {
  let {
    appId: t,
    className: n,
    groupListingId: l,
    groupListingType: r,
    guildId: s,
    onClick: a,
    skuId: d,
    subPlan: S
  } = e, g = (0, o.useGetSubscriptionListing__DO_NOT_USE)(d), {
    openModal: x
  } = (0, u.default)({
    listing: g,
    guildId: s,
    groupListingId: l,
    showBenefitsFirst: !1,
    analyticsLocation: p.AnalyticsLocations.APP_STOREFRONT
  }), _ = (0, f.useHasActiveEntitlement)(d);
  return "guild" !== r && ("user" !== r || _) ? (0, i.jsx)(T, {
    className: n,
    children: h.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: d,
    onClick: null != a ? a : x,
    className: n,
    children: h.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, c.formatRate)((0, c.formatPrice)(S.price, S.currency), m.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function g(e) {
  let {
    appId: t,
    className: n,
    onClick: l,
    sku: o
  } = e, {
    analyticsLocations: u
  } = (0, s.default)(r.default.APP_STOREFRONT), d = (0, f.useHasActiveEntitlement)(o.id), m = o.type === p.SKUTypes.DURABLE && d, {
    price: S
  } = o;
  return null == S ? null : m ? (0, i.jsx)(T, {
    className: n,
    children: h.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: o.id,
    onClick: null != l ? l : () => {
      (0, a.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: u
      })
    },
    className: n,
    children: h.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, c.formatPrice)(S.amount, S.currency)
    })
  })
}

function v(e) {
  let {
    appId: t,
    skuId: n,
    onClick: r,
    ...s
  } = e;
  return (0, i.jsx)(l.Button, {
    ...s,
    onClick: e => {
      d.default.track(p.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == r || r(e)
    }
  })
}

function T(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(l.Button, {
    disabled: !0,
    className: t,
    look: l.Button.Looks.OUTLINED,
    color: l.Button.Colors.PRIMARY,
    size: l.Button.Sizes.SMALL,
    children: n
  })
}