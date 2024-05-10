"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return h
  },
  SubscriptionPurchaseButton: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  l = n("100527"),
  s = n("906732"),
  a = n("87484"),
  o = n("696906"),
  u = n("626135"),
  d = n("937615"),
  c = n("110742"),
  f = n("981631"),
  p = n("474936"),
  m = n("689938");

function S(e) {
  let {
    appId: t,
    className: n,
    groupListingId: r,
    groupListingType: l,
    guildId: s,
    listing: a,
    onClick: u,
    subPlan: S
  } = e, {
    openModal: h
  } = (0, o.default)({
    listing: a,
    guildId: s,
    groupListingId: r,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT
  }), x = (0, c.useHasActiveEntitlement)(a.id);
  return "guild" !== l && ("user" !== l || x) ? (0, i.jsx)(v, {
    className: n,
    children: m.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(g, {
    appId: t,
    skuId: a.id,
    onClick: null != u ? u : h,
    className: n,
    children: m.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, d.formatRate)((0, d.formatPrice)(S.price, S.currency), p.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function h(e) {
  let {
    appId: t,
    className: n,
    onClick: r,
    sku: o
  } = e, {
    analyticsLocations: u
  } = (0, s.default)(l.default.APP_STOREFRONT), p = (0, c.useHasActiveEntitlement)(o.id), S = o.type === f.SKUTypes.DURABLE && p, {
    price: h
  } = o;
  return null == h ? null : S ? (0, i.jsx)(v, {
    className: n,
    children: m.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(g, {
    appId: t,
    skuId: o.id,
    onClick: null != r ? r : () => {
      (0, a.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: u
      })
    },
    className: n,
    children: m.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, d.formatPrice)(h.amount, h.currency)
    })
  })
}

function g(e) {
  let {
    appId: t,
    skuId: n,
    onClick: l,
    ...s
  } = e;
  return (0, i.jsx)(r.Button, {
    ...s,
    onClick: e => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == l || l(e)
    }
  })
}

function v(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(r.Button, {
    disabled: !0,
    className: t,
    look: r.Button.Looks.OUTLINED,
    color: r.Button.Colors.PRIMARY,
    size: r.Button.Sizes.SMALL,
    children: n
  })
}